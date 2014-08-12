# node-oembed-io

A Node.js wrapper for [oEmbed.io](http://oembed.io).


## Installation

To start playing with the library in your project, run

    npm install node-oembed-io --save


## Usage

```js
var oembed = require('node-oembed-io');

var url = 'https://www.youtube.com/watch?v=cR_GVBdZF_M';

oembed.get(url, function (err, code, body) {
  console.log(body);
});
```


## Contributing and Testing

Contributing bug fixes and features is very welcome! If you want to contribute to the project, you'll need to create and run tests for anything you add that needs it. Mocha is used for unit-testing, so add your relevant tests to the `test` folder.

Start by installing the project dependencies by running

    npm install && npm install -g mocha gulp

Now you can finally run the tests.

    gulp test


## License

The MIT License (MIT)
Copyright (c) 2014 Brandon Brown
