var connect = require('connect'),
    app = connect.createServer(),
    devcaps = require('../lib/devcaps');
    
// initialise the cookie parser and body parser as they are required for devcaps to work
app.use(connect.cookieParser());
app.use(connect.bodyParser());

// initialise devcaps detection for all checks
app.use(devcaps.checkFor());

app.use(function(req, res, next) {
    var screen = req.devcaps.screen;
    
    // NOTE: we don't normally code like this :)
    // though it is delightfully old school...
    res.end(
        '<html>' + 
        '<head>' +
        '<title>DevCaps Demo</title>' + 
        '<meta name="handheldfriendly"/> ' + 
        '<meta name="viewport" content="width=' + screen.width + '; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;"/>' + 
        '<style type="text/css">' + 
        'body { font-family: Helvetica, Arial; margin: 0px; } ' + 
        '#testy { background: #333; color: white; position: absolute; top: 10px; left: 10px; width: ' + (screen.width - 20) + 'px; height: ' + (screen.height - 20) + 'px; } ' +
        '#testy > * { margin: 10px; } ' + 
        'pre { font-size: 1.3em; } ' +
        '</style>' + 
        '</head>' + 
        '<body>' + 
        '<div id="testy">' +
        '<h2>Device Caps (Server Generated HTML)</h2>' + 
        '<p>You are running ' + screen.width + 'px * ' + screen.height + 'px </p>' + 
        '<pre>' + JSON.stringify(req.devcaps, null, 2) + '</pre>' + 
        '</div>' + 
        '</body>' +
        '</html>'
    );
});

app.listen(process.env.NODE_ENV === 'production' ? 80 : 3000);