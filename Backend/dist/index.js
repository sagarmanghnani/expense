'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// and create our instances
var app = (0, _express2.default)();
var router = _express2.default.Router();
var test = _express2.default.Router();

var API_PORT = process.env.API_PORT || 3000;
// now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());
app.use((0, _morgan2.default)('dev'));

router.get('/', function (req, res) {
    res.json({ message: 'Hello, World!' });
});

test.get('/', function (req, res) {
    res.json({ message: "test" });
});

app.use('/api/maxim', router);
app.use('/api/maxim', test);

app.listen(API_PORT, function () {
    console.log('listening on port ' + API_PORT);
});