var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if(cluster.isMaster){
	//创建工作进程
	for (var i = 0; i < numCPUs; i++) {
		cluster.fork();		
	}
	cluster.on('death', function(worker){
		console.log('worker '+worker.pid+' died');
	});

}else {
	//工作进程创建http服务器
	http.Server(function(res, req) {
		res.writeHead(200);
		res.end("Hello World\n");
	}).listen(8000);
}