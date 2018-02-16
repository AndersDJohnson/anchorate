# anchorate

> Scroll to anchor links.

Scroll to anchor links with client-side routes e.g. with [history]'s `listen`, [React Router]'s `onUpdate`, or [Gatsby]'s `onRouteChange`.
Register a listener to call this and when `window.location.hash` isn't empty,
it'll [scrollIntoView] first matching element by `id` or `name` per [spec].

Originally based on: https://github.com/reactjs/react-router/issues/394#issuecomment-220221604

## Install
```
npm install --save anchorate
```

## Use

### [history]
```js
import { anchorate } from 'anchorate'
import { createHistory } from 'history'
 
const history = createHistory()

history.listen(() => {
  anchorate()
})
```

### [React Router]
```js
import { anchorate } from 'anchorate'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

function onUpdate () {
  anchorate()
}

// ...

render((
  <Router
    onUpdate={onUpdate}
    history={browserHistory}
  />
), document.getElementById('app'))
```

### [Gatsby]
In `gastby-browser.js`:
```js
import { anchorate } from 'anchorate'

exports.onRouteChange = () => {
  anchorate()
}
```

### Customize the scrolling behavior
You can provide your own scrolling behavior by passing in a `scroller` function
in an options object. It is expected that you return true if the scroll was
successful.
```js
anchorate({ 
  scroller: function (element) {
    if (!element) return false
    element.scrollIntoView({ behavior: 'smooth' })
    return true
  }
})
```

### Getting results
You can provide a completion callback function in the options object to be
informed when the operation has complete and if there were any errors.
An error will be returned if the element referred to in the hash was not
found.
```js
anchorate({ 
  callback: function (error) {
    if (error) {
      // Do something
    }
  }
})
```

[react router]: https://github.com/reactjs/react-router
[history]: https://github.com/ReactJSTraining/history
[gatsby]: https://github.com/gatsbyjs/gatsby
[scrollIntoView]: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
[spec]: https://www.w3.org/TR/html4/struct/links.html#h-12.1.3
