# connect-devcaps

This is a [devcaps](/devcaps/devcaps) reference implementation designed to be compatible with [Connect](http://senchalabs.github.com/connect) and [Express](http://expressjs.org/).

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

## Roadmap

- Rather than pass the full devcaps information around in the cookie, store devcaps profiles on the server side and just pass around PROF:n in the cookie. 

