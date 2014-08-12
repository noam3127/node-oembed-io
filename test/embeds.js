var oembed    = require("../oembed-io");
var should    = require('chai').should();
var expect    = require('chai').expect;

describe('oEmbed.io functions test', function() {

  describe('#oembed.get() with no args', function() {
    it('should return a json object', function(done) {
      oembed.get('https://www.youtube.com/watch?v=cR_GVBdZF_M', function(err, code, body) {
        expect(code).to.be.equal(200);
        expect(body).to.be.an('object');
        // console.dir(code);
        // console.dir(body);iter
        done();
      });
    });
  });

  // describe('#oembed.get() with args', function() {
  //   it('should return a json object', function(done) {
  //     oembed.get('https://www.youtube.com/watch?v=cR_GVBdZF_M', args, function(err, code, body) {
  //       // expect(body.type).to.be.equal('user.list');
  //       // expect(body.users).to.be.an('object');
  //       console.dir(code);
  //       console.dir(body);
  //       done();
  //     });
  //   });
  // });

  describe('#oembed.providers()', function() {
    it('should return an array', function(done) {
      oembed.providers(function(err, code, body) {
        expect(code).to.be.equal(200);
        expect(body).to.be.an('array');
        // console.dir(code);
        // console.dir(body);
        done();
      });
    });
  });

});
