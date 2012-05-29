//= lib/modernizr.custom.js

DETECTOR = function(opts) {
    // initialise options
    opts = opts || {};
    
    var frmDetector = document.getElementById('detector'),
        elDevCaps = document.getElementById('devcaps'),
        tests = {
            'SCR': (screen || window).width + 'x' + (screen || window).height
        },
        key,
        test,
        output = [],
        reReset = /(?:\?|\&)reset(?=\&|$)/i;
        
    // iterate through the target tests
    for (key in opts) {
        var keyVal = opts[key];
        
        if (typeof keyVal == 'undefined') {
            test = tests[key];

            if (typeof test == 'function') {

            }
            else if (typeof test != 'undefined') {
                keyVal = test;
            } // if..else
        } // if
        
        if (typeof keyVal != 'undefined') {
            output.push(key + (keyVal === true ? 1 : keyVal));
        } // if
    }  // for
    
    // update the device capabilities
    elDevCaps.value = output.join('_');
    frmDetector.action = document.location.href.replace(reReset, '');
    frmDetector.submit();
};