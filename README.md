# anchorate

> Scroll to anchor links.

Scroll to anchor links with client-side routes e.g. with [history]'s `listen`, [React Router]'s `onUpdate`, or [Gatsby]'s `onRouteChange`.
Register a listener to call this and when `window.location.hash` isn't empty,
it'll [scrollIntoView] first matching element by `id` or `name` per [spec].

Originally based on: https://github.com/reactjs/react-router/issues/394#issuecomment-220221604

See docs at https://andersdjohnson.github.io/anchorate/.

## Used By

* [Formidable Labs Spectacle Docs](https://formidable.com/open-source/spectacle/)
* [Formidable Labs Victory Docs](https://formidable.com/open-source/victory/)
* [Formidable Labs Renature Docs](https://formidable.com/open-source/renature/)
* [Full Stack Open 2019](https://fullstackopen.com/)
* [Kyma](https://kyma-project.io/)
* [LessWrong](https://www.lesswrong.com/)

[react router]: https://github.com/reactjs/react-router
[history]: https://github.com/ReactJSTraining/history
[gatsby]: https://github.com/gatsbyjs/gatsby
[scrollIntoView]: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
[spec]: https://www.w3.org/TR/html4/struct/links.html#h-12.1.3
