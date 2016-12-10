/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
/*eslint global-require: "error"*/
/*eslint-env node*/

import express from 'express';
let app = express();

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

let product = require('./data/product.json');
let links = require('./data/links.json');

app.get('/', function (req, res) {
	res.json(product);
});
app.get('/links', function (req, res) {
	res.json(links);
});

app.listen(3000, function () {
	console.warn('Example app listening on port 3000 forwarded to 80 in live environment!');
});
