var http = require('http');

var opts={
	host:"www.baidu.com",
	port:80,
	path:'/',
	method:'GET'
};

// var req = http.request(opts, function(res) {
// 	console.log(res);
// 	res.on('data', function(data) {
// 		console.log(data);
// 	});
// });

var req = http.get(opts, function(res) {
	console.log(res);
	// res.Encoding = 'utf8';
	res.setEncoding('utf8');
	res.on('data', function(data) {
		console.log(data.toString());
	});
});

// req.end();