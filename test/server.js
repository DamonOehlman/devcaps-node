var connect = require('connect'),
    app = connect.createServer(),
    devcaps = require('../lib/devcaps');
    
app.use(connect.cookieParser());
app.use(connect.bodyParser());
app.use(devcaps());

app.use(function(req, res, next) {
    res.end(JSON.stringify(req.devcaps));
});

app.listen(3000);