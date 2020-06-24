# anchorate

> Scroll to anchor links.

Scroll to anchor links with client-side routes e.g. with [history]'s `listen`, [React Router]'s `onUpdate`, or [Gatsby]'s `onRouteChange`.
Register a listener to call this and when `window.location.hash` isn't empty,
it'll [scrollIntoView] first matching element by `id` or `name` per [spec].

Originally based on: https://github.com/reactjs/react-router/issues/394#issuecomment-220221604

See docs at https://andersdjohnson.com/code/anchorate/.
