var request = require('request');
var qs      = require('querystring');

var endpoint = 'http://oembed.io/';

// exports.get = function (url, params, callback) {
exports.get = function (url, callback) {
  // if (typeof params === 'undefined') {
  //   params = '';
  //   callback = params;
  // }

  request(
    // endpoint + 'api?url=' + encodeURIComponent(url) + qs.stringify(params),
    endpoint + 'api?url=' + encodeURIComponent(url),
    function (err, res, body) {
      if (err || res.statusCode !== 200) {
        callback(err);
      }

      callback(null, res.statusCode, JSON.parse(body));
    }
  );
};

exports.providers = function (callback) {
  request(
    endpoint + 'providers',
    function (err, res, body) {
      if (err || res.statusCode !== 200) {
        callback(err);
      }

      callback(null, res.statusCode, JSON.parse(body));
    }
  );
};
