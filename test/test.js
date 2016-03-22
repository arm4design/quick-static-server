var assert = require('chai').assert;

describe('quick-static-server deployment', function(){
    it('server is deployed', function(){
        var itRan = false;
        try {
            var server = require('../index.js');
            itRan = true;
        } catch(e) {}
        
        assert.strictEqual(itRan, true, 'server thrown an error while deployment');
    });
});
