webrtc-adapter
==============

Commonjs adapter.js browser compatibility shim for webRTC

About
-----
WebRTC Adapter provides a more standards-compliant version of
browser RTC objects for use in browser projects using WebRTC.

It is meant for [requireJS](requirejs.org) or [browserify](browserify.org)'ed
projects, which use a node-style ```require``` syntax, while still running in
a chrome or firefox (at the moment) browser.

In particular, the interface exported by this module attempts to closely mirror
the standard documented by the [w3c](http://www.w3.org/TR/webrtc/). In practice,
both the Chrome and Firefox implementations diverge from this standard. Previously,
examples have been commonly built around [adapter.js](https://github.com/GoogleChrome/webrtc/blob/master/samples/web/js/adapter.js),
a shim that attempts to sandardize many of these differences between browsers.
However, this adapter lives canonically deep within a samples directory, and is not
well suited towards inclusion as a dependency within a larger projects.

This implementation is different in 3 regards.

1. The underlying implemenation is discovered via the existance of prefixed properties,
rather than explicit probing of the ```navigator``` object. This allows the code to run
in firefox extensions while the original adapter could not.
2. This implementation uses node style exports, rather than attempting to export a fixed
global object.
3. This implementation is released un an Apache 2.0, rather than BSD license.

Usage
----


```javascript
var MyPeerConnection = require('webrtc-adapter').RTCPeerConnection;
...
```
