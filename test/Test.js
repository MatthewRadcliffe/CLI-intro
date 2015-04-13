//import semver from 'semver';
import VersionBumper from "../src/Version-Bump.js";
let vb = new VersionBumper();
let semver = require('semver')
let assert = require("assert")

describe('Version Bump Tests', function(){
    let oldVersion = '1.3.7-beta.2';
    describe('Pre-release Tests', function() {
        
        describe('Pre bump Tests', function() {
            let prepatch = vb.Bump(oldVersion, 'pre');
            it('Valid pre bump tests', function() {
                assert.equal('1.3.7-beta.3', semver.valid(prepatch));
                assert.equal(true, semver.gt(prepatch, oldVersion));
            })
            it('Invalid pre bump tests', function() {
                try {
                    vb.Bump(oldVersion, 'pre', 'alpha');   
                } catch (err) {
                    assert.equal(err.message, "Older Version");
                }
            })
        })
        
        describe('Pre-patch Tests', function() {
            let prepatch = vb.Bump(oldVersion, 'prepatch', 'delta');
            it('Valid pre-patch tests', function() {
                assert.equal('1.3.8-delta.0', semver.valid(prepatch));
                assert.equal(true, semver.gt(prepatch, oldVersion));
            })
            it('Invalid pre-patch tests', function() {
                try {
                    vb.Bump(oldVersion, 'prepatch', 'alpha');   
                } catch (err) {
                    assert.equal(err.message, "Older Version");
                }
            })
        })
        
        describe('Pre-minor Tests', function() {
            let preminor = vb.Bump(oldVersion, 'preminor', 'delta');
            it('Valid pre-minor tests', function() {
                assert.equal('1.4.0-delta.0', semver.valid(preminor));
                assert.equal(true, semver.gt(preminor, oldVersion));
            })
            it('Invalid pre-minor tests', function() {
                try {
                    vb.Bump(oldVersion, 'preminor', 'alpha');   
                } catch (err) {
                    assert.equal(err.message, "Older Version");
                }
            })
        })
        
        describe('Pre-major Tests', function() {
            let premajor = vb.Bump(oldVersion, 'premajor', 'delta');
            it('Valid premajor delta', function() {
                assert.equal('2.0.0-delta.0', semver.valid(premajor));
                assert.equal(true, semver.gt(premajor, oldVersion));
            })
            it('Invalid pre-major tests', function() {
                try {
                    vb.Bump(oldVersion, 'premajor', 'alpha');   
                } catch (err) {
                    assert.equal(err.message, "Older Version");
                }
            })
        })
    })
    
    describe('Patch Bump Tests', function() {
        let patch = vb.Bump(oldVersion, 'patch');
        it('Valid patch tests', function() {
            assert.equal('1.3.7', semver.valid(patch));
            assert.equal(true, semver.gt(patch, oldVersion));
        })
        it('Invalid patch bump tests', function() {
                
        })
    })
    
    describe('Minor Bump Tests', function() {
        let minor = vb.Bump(oldVersion, 'minor');
        it('Valid minor bump tests', function() {
            assert.equal('1.4.0', semver.valid(minor));
            assert.equal(true, semver.gt(minor, oldVersion));
        })
        it('Invalid minor bump tests', function() {
                
        })
    })
    
    describe('Major Bump Tests', function() {
        let major = vb.Bump(oldVersion, 'major');
        it('Valid major bump tests', function() {
            assert.equal('2.0.0', semver.valid(major));
            assert.equal(true, semver.gt(major, oldVersion));
        })
        it('Invalid major bump tests', function() {
                
        })
    })
    
    describe('Error Tests', function() {
      it('Invalid version', function() {
          try {
              vb.Bump('a.b.c', 'major');
          } catch(err) {
              assert.equal(err.message, 'Invalid Version: null');
          }
      })
      it('Invalid type', function() {
          try {
              vb.Bump(oldVersion, 'preprepatch', 'omega');
          } catch(err) {
              assert.equal(err.message, 'Invalid Version: null');
          }
      })
    })
})
    