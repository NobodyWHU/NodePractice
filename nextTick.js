// var http = require('http')
// var s = http.createServer(function(req, res) {
// 	res.writeHead(200, {});
// 	res.end('foo');
// 	console.log('http response');
// 	process.nextTick(function(){
// 		console.log('tick');
// 	});
// });
// s.listen(8000);

process.on('uncaughtException', function(e) {
	console.log(e);
});

process.nextTick(function(){
	console.log('tick');
});

process.nextTick(function() {
	Mistake();
	console.log('tock');
});

process.nextTick(function() {
	console.log('tick tock');
});

console.log('end of 1st loop.');