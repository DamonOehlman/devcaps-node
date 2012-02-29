var connect = require('connect'),
    app = connect.createServer(),
    devcaps = require('../lib/devcaps');
    
// initialise the cookie parser and body parser as they are required for devcaps to work
app.use(connect.cookieParser());
app.use(connect.bodyParser());

// initialise devcaps detection for all checks
app.use(devcaps.checkFor());

app.use(function(req, res, next) {
    var capsData = JSON.stringify(req.devcaps);
    
    res.end('<html><h2>Device Caps (Server Generated HTML)</h2><p>' + capsData + '</p><h2>Actions</h2><p><a href="/random">test</a>&nbsp;<a href="/?reset">reset</a></p></html>');
});

app.listen(process.env.NODE_ENV === 'production' ? 80 : 3000);