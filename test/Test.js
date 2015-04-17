import semver from 'Semver';
import assert from 'assert';
import Bump from "../src/Version-Bump.js";
import Parse from "../src/Parser.js";

//let vb = new VersionBumper();
//let semver = require('semver')
//let assert = require("assert")

describe('Version Bump Tests', function(){
    let oldVersion = '1.3.7-beta.2';
    describe('Pre-release Tests', function() {
        describe('Pre bump Tests', function() {
            let prepatch = Bump(oldVersion, 'pre');
            it('Valid pre bump tests', function() {
                assert.equal('1.3.7-beta.3', semver.valid(prepatch));
                assert.equal(true, semver.gt(prepatch, oldVersion));
            })
            it('Invalid pre bump tests', function() {
                assert.throws(() => {Bump(oldVersion, 'pre', 'alpha')}, Error, 'Bumped to an older version');
            })
        })
        
        describe('Pre-patch Tests', function() {
            let prepatch = Bump(oldVersion, 'prepatch', 'delta');
            it('Valid pre-patch tests', function() {
                assert.equal('1.3.8-delta.0', semver.valid(prepatch));
                assert.equal(true, semver.gt(prepatch, oldVersion));
            })
            it('Invalid pre-patch tests', function() {
                assert.throws(() => {Bump(oldVersion, 'prepatch', 'alpha')}, Error, 'Bumped to an older version');
            })
        })
        
        describe('Pre-minor Tests', function() {
            let preminor = Bump(oldVersion, 'preminor', 'delta');
            it('Valid pre-minor tests', function() {
                assert.equal('1.4.0-delta.0', semver.valid(preminor));
                assert.equal(true, semver.gt(preminor, oldVersion));
            })
            it('Invalid pre-minor tests', function() {
                assert.throws(() => {Bump(oldVersion, 'preminor', 'alpha')}, Error, 'Bumped to an older version');
            })
        })
        
        describe('Pre-major Tests', function() {
            let premajor = Bump(oldVersion, 'premajor', 'delta');
            it('Valid premajor delta', function() {
                assert.equal('2.0.0-delta.0', semver.valid(premajor));
                assert.equal(true, semver.gt(premajor, oldVersion));
            })
            it('Invalid pre-major tests', function() {
                assert.throws(() => {Bump(oldVersion, 'premajor', 'alpha')}, Error, 'Bumped to an older version');
            })
        })
    })
    
    describe('Patch Bump Tests', function() {
        let patch = Bump(oldVersion, 'patch');
        it('Valid patch tests', function() {
            assert.equal('1.3.7', semver.valid(patch));
            assert.equal(true, semver.gt(patch, oldVersion));
        })
        it('Invalid patch bump tests', function() {
                
        })
    })
        
    describe('Minor Bump Tests', function() {
        let minor = Bump(oldVersion, 'minor');
        it('Valid minor bump tests', function() {
            assert.equal('1.4.0', semver.valid(minor));
            assert.equal(true, semver.gt(minor, oldVersion));
        })
        it('Invalid minor bump tests', function() {
                
        })
    })
    
    describe('Major Bump Tests', function() {
        let major = Bump(oldVersion, 'major');
        it('Valid major bump tests', function() {
            assert.equal('2.0.0', semver.valid(major));
            assert.equal(true, semver.gt(major, oldVersion));
        })
        it('Invalid major bump tests', function() {
                
        })
    })
    
    describe('Error Tests', function() {
      it('Invalid version', function() {
          assert.throws(() => {Bump('a.b.c', 'major')}, Error, 'Did not throw invalid version');
      })
      it('Invalid type', function() {
          assert.throws(() => {Bump(oldVersion, 'preprepatch', 'omega')}, Error, 'Did not throw invalid version');
      })
    })
})

describe('Commander Tests', function(){
    describe('Argument parsing', function() {
        it('Test release bump with dry-run command', function() {
//            let args = [];
//            Parse(args);
        })
        it('Test prerelease bump with dry-run command', function() {
            
        })
    })
})
    