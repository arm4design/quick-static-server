# quick-static-server
Express.js based node server for quick static deployments

[![npm:](https://img.shields.io/npm/v/quick-static-server.svg)](https://www.npmjs.com/arm4design/quick-static-server)
[![github:](https://img.shields.io/github/release/arm4design/quick-static-server.svg)](https://github.com/arm4design/quick-static-server)
[![github:](https://img.shields.io/github/issues/arm4design/quick-static-server.svg)](https://github.com/arm4design/quick-static-server/issues)
[![Build Status](https://img.shields.io/travis/arm4design/quick-static-server.svg)](https://travis-ci.org/arm4design/quick-static-server)

### Install
````javascript
npm install quick-static-server
````

### Usage
````javascript
npm start
````
##### Options
Edit options.json to set the deployment. Avaliable options are:
- **publicPath** {String} [optional] - defaults to **__dirname/www** - It should point to the path where your static code is placed
- **serverOptions** {Object} [optional] - defaults to **{}** - Accepts these [options](http://expressjs.com/en/4x/api.html#express.static)
- **port** {String} [optional] - defaults to **9000** - The port to deploy the server

### Tests
It uses [mocha](https://github.com/mochajs/mocha) and [chai](https://github.com/chaijs/chai)
````javascript
npm test
````

### License
[MIT](https://github.com/arm4design/quick-static-server/blob/master/LICENSE)
