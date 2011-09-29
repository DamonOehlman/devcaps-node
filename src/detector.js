//= lib/modernizr.custom

// github://tdd/cookies-js-helper/src/cookies

(function() {
    var frmDetector = document.getElementById('detector'),
        elDevCaps = document.getElementById('devcaps'),
        tests = {
            'DSW': (screen || window).width,
            'DSH': (screen || window).height
        },
        mappings = {
            canvas: 'CVS',
            flexbox: 'FBX',
            csstransforms: 'T2D',
            csstransforms3d: 'T3D',
            localstorage: 'LST'
        },
        key,
        test,
        output = [],
        opts = typeof devcapOpts != 'undefined' ? devcapOpts.split(',') : [],
        reReset = /(?:\?|\&)reset(?=\&|$)/i;
        
    // iterate through the modernizr mappings and if defined, add to the tests as a 1
    for (key in mappings) {
        if (Modernizr[key]) {
            tests[mappings[key]] = 1;
        } // if
    } // for
    
    // iterate through the target tests
    for (var ii = 0; ii < opts.length; ii++) {
        key = opts[ii];
        test = tests[key];
        
        if (typeof test == 'function') {
            
        }
        else {
            output.push(key + test);
        } // if..else
    }  // for
    
    // update the device capabilities
    elDevCaps.value = output.join('_');
    frmDetector.action = document.location.href.replace(reReset, '');
    frmDetector.submit();
})();