module.exports = {
    screen: {
        code: 'SCR',
        parser: function(value) {
            // see if we have parts to the screen def
            var parts = (value || '').split('x');
            
            // if we have suitable parts
            if (parts.length > 1) {
                value = {
                    width: parseInt(parts[0], 10), 
                    height: parseInt(parts[1], 10)
                };
            } // if
            
            return value;
        }
    },
    
    canvas:    'CVS',
    flexbox:   'FBX',
    csstransitions: 'CST'
};