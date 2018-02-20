/* eslint-env jest */

import anchorate from '.'

test('fails when scroller returns true', done => {
  const scroller = jest.fn().mockReturnValue(true)

  document.body.innerHTML =
    '<div>' +
    '  <span id="username" />' +
    '  <button id="button" />' +
    '</div>'

  const $button = document.getElementById('button')

  const callback = err => {
    if (err) return void done(err)
    try {
      expect(scroller).toHaveBeenCalledWith($button)
      done()
    } catch (err) {
      done(err)
    }
  }

  anchorate.hash('button', {
    scroller,
    callback
  })
})

test('fails when scroller returns false', done => {
  const scroller = jest.fn().mockReturnValue(false)

  document.body.innerHTML =
    '<div>' +
    '  <span id="username" />' +
    '  <button id="button" />' +
    '</div>'

  const callback = err => {
    try {
      expect(err).toBeDefined()
      done()
    } catch (err) {
      done(err)
    }
  }

  anchorate.hash('button', {
    scroller,
    callback
  })
})
