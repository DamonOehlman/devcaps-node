# connect-devcaps

__NOTE:__ This repository has been deprecated, and has been replaced by the main [devcaps](/DamonOehlman/devcaps) repository which now contains an implementation for Node.

This is a [devcaps](/DamonOehlman/devcaps) reference implementation designed to be compatible with [Connect](http://senchalabs.github.com/connect) and [Express](http://expressjs.org/).

For information on the general devcaps process, see the [devcaps repo](/devcaps/devcaps).

## Getting Started

Firstly, install from npm:

```
npm install connect-devcaps
```

Once you have `connect-devcaps` available in your express / connect project, you can add it as middleware:

```js
var connect = require('connect'),
    app = connect.createServer(),
    devcaps = require('connect-devcaps');
   
// initialise the cookie parser and body parser as they are required for devcaps to work
app.use(connect.cookieParser());
app.use(connect.bodyParser());

// initialise devcaps detection for all checks
app.use(devcaps.checkFor());

// other initialization here

// listen on port 3000
app.listen(3000);
```

By default, the devcaps module will listen for all checks that have been [defined](/devcaps/connect-devcaps/blob/master/lib/definitions.js) but can be configured just to detect and communicate the availability of certain features.  This is generally a good habit to get into as it will keep both the detection page and the `DEVCAPS` cookie data light.

For instance, to install devcaps just checking for screen data and the flexbox information, invoke as per below:

```js
app.use(devcaps.checkFor('screen flexbox'));
```
## Accessing devcaps data

Once the devcaps middleware has been installed, a `devcaps` object will be patched into the request object:

```js
app.use(function(req, res, next) {
    if (req.devcaps.screen.width > 480) {
        // render desktop template
    }
    else {
        // render mobile page
    }
});
```

## Roadmap

- Rather than pass the full devcaps information around in the cookie, store devcaps profiles on the server side and just pass around PROF:n in the cookie. 

