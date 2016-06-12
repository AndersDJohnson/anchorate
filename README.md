# anchorate

> Scroll to anchor links.

Scroll to anchor links with client-side routes e.g. with [history]'s `listen` or [React Router]'s `onUpdate`.
Register a listener to call this and when `window.location.hash` isn't empty,
it'll [scrollIntoView] first matching element by `id` or `name` per [spec].

```
import { anchorate } from 'anchorate'
import { createHistory } from 'history'
 
const history = createHistory()

history.listen(anchorate)
```

[react router]: https://github.com/reactjs/react-router
[history]: https://github.com/ReactJSTraining/history
[scrollIntoView]: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
[spec]: https://www.w3.org/TR/html4/struct/links.html#h-12.1.3
