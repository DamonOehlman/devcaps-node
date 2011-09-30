var fs = require('fs'),
    path = require('path'),
    utils = require('connect').utils,
    definitions = require('./definitions'),
    reverseDefLookup = reverseLookup(definitions),
    reHandshake = /^HS\:/i,
    reReset = /(?:\?|\&)reset(?:\&|$)/i,
    reCheckDelim = /[\s\,]/,
    reBeforeScriptClose = /(?=\<\/script\>)/i,
    reCap = /(.{3})(.*)/,
    PARAM_DEVCAPS = 'devcaps',
    detectorPage;
    
function buildOpts(checks) {
    var opts = [];
    
    checks.split(reCheckDelim).forEach(function(check) {
        var def = definitions[check].code || definitions[check];
        
        if (typeof def == 'string') {
            opts.push(def + ': Modernizr.' + check);
        } // if
    });
    
    return '{' + opts.join(', ') + '}';
} // buildOpts

function getAllChecks() {
    var output = [];
    for (var key in definitions) {
        output.push(key);
    } // for
    
    return output.join(' ');
} // getAllChecks
    
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
            
            callback(null, data.replace(reBeforeScriptClose, scriptData));
        });
    });
} // loadDetector

function makeCookie(textCaps) {
    // TODO: make a caps profile that will make operations a bit faster
    return utils.serializeCookie('DEVCAPS', textCaps || '');
} // makeCookie

function parseCaps(textCaps) {
    // split the caps on the underscore
    var items = (textCaps || '').split('_'),
        caps = {}, ii, match, cap, valueParser;
    
    // iterate through the items and generate the output object
    for (ii = 0; ii < items.length; ii++) {
        match = reCap.exec(items[ii]);
        if (match) {
            // look for the definition of the cap
            cap = reverseDefLookup[match[1]];
            if (cap) {
                valueParser = definitions[cap].parser;
                
                caps[cap] = valueParser ? valueParser(match[2]) : match[2] == '1';
            } // if
        } // if
    } // for
    
    return caps;
} // parseCaps

function reverseLookup(items) {
    var reverse = {};
    
    for (var key in items) {
        var item = items[key],
            itemKey = item.code || item;
        
        if (typeof itemKey == 'string') {
            reverse[itemKey] = key;
        } // if
    } // for
    
    return reverse;
} // reverseLookup

exports.checkFor = function(checks) {
    // if checks haven't been definied, then get all the keys from the definitions
    checks = checks || getAllChecks();
    
    function renderDetector(cookie, req, res, next) {
        res.setHeader('Content-Type', 'text/html');
        res.end(detectorPage.replace('//= opts', buildOpts(checks)));
    } // renderDetector
    
    // return the request handler
    return function(req, res, next) {
        // if we have cookies support, then attempt devcaps detection
        if (req.cookies) {
            // check for the devcaps cookie
            var capsCookie = req.cookies[PARAM_DEVCAPS];

            // console.log(req.cookies);
                
            // if we received a reset, then clear the caps cookie and clear the value
            if (reReset.test(req.url)) {
                capsCookie = null;
                res.setHeader('Set-Cookie', makeCookie());
            } // if
            // if the cookie is not defined, but we have a body then get the value from there
            else if (req.body && req.body[PARAM_DEVCAPS]) {
                capsCookie = req.body[PARAM_DEVCAPS];
                
                // console.log('FORM: ' + capsCookie);
                res.setHeader('Set-Cookie', makeCookie(capsCookie));
            } // if

            // console.log('COOKIE:' + capsCookie);
            
            // if we don't have a devcaps cookie, run the detection routine
            if (! capsCookie) {
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
                req.devcaps = parseCaps(capsCookie);
                next();
            } // if..else
        }
        else {
            next();
        } // if..else
    };
}; // 