/**
 * Originally based on:
 * https://github.com/reactjs/react-router/issues/394#issuecomment-220221604
 */

var CSSescape = require('css.escape')

exports.hash = function hash (h, options) {
  options = options || {}
  var cb = options.callback || function () {}
  // There's no hash to scroll to, so "success", we did it.
  if (!h) return void cb(false)
  var scroller = options.scroller || exports.scroller
  // Push onto callback queue so it runs after the DOM is updated,
  // this is required when navigating from a different page so that
  // the element is rendered on the page before trying to getElementById.
  setTimeout(function () {
    var els = exports.elements(h)
    if (!els) return void cb(true)
    if (scroller(els.id)) return void cb(false)
    cb(!scroller(els.name))
  }, 0)
}

exports.scroller = function scroller (el) {
  if (!el) return false
  el.scrollIntoView()
  return true
}

exports.elements = function elements (h) {
  var sels = exports.selectors(h)
  if (!sels) return
  return {
    id: document.getElementById(sels.id),
    name: document.querySelector(sels.name)
  }
}

exports.selectors = function selectors (h) {
  if (!h) return
  h = h.replace(/^#/, '')
  if (!h) return
  return {
    id: h,
    name: '[name="' + CSSescape(h) + '"]'
  }
}

exports.anchorate = function anchorate (options) {
  exports.hash(window.location.hash, options)
}
