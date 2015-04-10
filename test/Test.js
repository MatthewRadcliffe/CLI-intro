import VersionBumper from "../src/Version-Bump.js";
var vb = new VersionBumper();

var assert = require("assert")
describe('Version Bump Tests', function(){ 
    it('Pre update tests', function() {
        assert.equal("1.0.2-beta.0", vb.Bump('1.0.1', 'pre minor', 'beta');    
        assert.equal("1.0.2-beta.0", vb.Bump('1.0.2-beta.0', 'pre minor', 'beta');   
    })
    it('Patch update tests', function() {
        assert.equal("1.2.3", vb.Bump('1.2.2', 'patch'));  
    })
    it('Minor update tests', function() {
        assert.equal("1.2.0", vb.Bump('1.1.6', 'minor'));  
    })
    it('Major update tests', function() {
        assert.equal("2.0.0", vb.Bump('1.0.0', 'major'));
    })
})
    