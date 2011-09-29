var fs = require('fs'),
    path = require('path'),
    utils = require('connect').utils,
    b64 = require('b64'),
    reHandshake = /^HS\:/i,
    reReset = /(?:\?|\&)reset(?:\&|$)/i,
    reCap = /(.{3})(.*)/,
    PARAM_DEVCAPS = 'devcaps',
    detectorPage;
    
function loadDetector(callback) {
    var assetsPath = path.resolve(__dirname, '../assets');
    
    fs.readFile(path.join(assetsPath, 'detector.html'), 'utf8', function(err, data) {
        if (err) {
            callback(err);
            return;
        } // if
        
        fs.readFile(path.join(assetsPath, 'detector.js'), function(err, scriptData) {
            if (err) {
                callback(err);
                return;
            }
            
            callback(null, data.replace('//= detector', scriptData));
        });
    });
}

module.exports = function(opts) {
    // initialise the options
    opts = opts || {};
    opts.checks = 'DSW,DSH';
    
    function decodeCookie(cookie) {
        var valid = cookie && (! reHandshake.test(cookie)),
            parts = valid ? cookie.split('_') : [],
            caps,
            match;
            
        // if valid, then process the cookie
        if (valid) {
            caps = {};

            for (var ii = 0, count = parts.length; ii < count; ii++) {
                match = reCap.exec(parts[ii]);
                
                // if we have a match, then add to the capabilities
                if (match) {
                    caps[match[1]] = parseInt(match[2], 10) || match[2];
                } // if
            } // for
        } // if
        
        return caps;
    } // decodeCookie
    
    function renderDetector(cookie, req, res, next) {
        res.setHeader('Content-Type', 'text/html');
        res.end(detectorPage.replace('//= opts', 'var devcapOpts = \'' + opts.checks + '\';'));
    } // renderDetector
    
    // return the request handler
    return function(req, res, next) {
        console.log(req.cookies);
        
        // if we have cookies support, then attempt devcaps detection
        if (req.cookies) {
            // check for the devcaps cookie
            var capsCookie = req.cookies[PARAM_DEVCAPS],
                devcaps;
                
            // if the cookie is not defined, but we have a body then get the value from there
            if (req.body && req.body[PARAM_DEVCAPS]) {
                capsCookie = req.body[PARAM_DEVCAPS];
                
                // encode the value
                // console.log(b64.encode(capsCookie + capsCookie + capsCookie));
                
                // update the cookie
                res.setHeader('Set-Cookie', utils.serializeCookie(PARAM_DEVCAPS, capsCookie));
            } // if
            
            // extract the dev caps
            devcaps = (! reReset.test(req.url)) ? decodeCookie(capsCookie) : null;

            // if we don't have a devcaps cookie, run the detection routine
            if (! devcaps) {
                if (! detectorPage) {
                    loadDetector(function(err, data) {
                        if (! err) {
                            detectorPage = data;
                            renderDetector(capsCookie, req, res, next);
                        }
                        else {
                            next();
                        }
                    });
                }
                else {
                    renderDetector(capsCookie, req, res, next);
                } // if..else
            }
            // otherwise, push the capabilities to the request and then go next
            else {
                req.devcaps = devcaps;
                next();
            } // if..else
        }
        else {
            next();
        } // if..else
    };
}; // 