var net = require('net')

var chatServer = net.createServer(),
	clientList = []

chatServer.on('connection', function(client){
	client.name = client.remoteAddress+':'+client.remotePort
	client.write('Hi '+client.name+'!\n');

	clientList.push(client);

	client.on('data', function(data){
		// for(var i=0;i<clientList.length;i+=1){
		// 	//把数据发给所有客户端
		// 	clientList[i].write(data)
		// }
		broadcast(data, client)
	})

	client.on('end', function(){
		clientList.splice(clientList.indexOf(client), 1)
	})

	client.on('error', function(e){
		console.log(e);
	})
})

function broadcast(message, client){
	var cleanup = []
	for(var i=0;i<clientList.length;i+=1){
		if(client !== clientList[i]){

			if(clientList[i].writeable){
				clientList[i].write(client.name+"says "+message)
			}else {
				cleanup.push(clientList[i])
				clientList[i].destroy()
			}

			// clientList[i].write(client.name+'says '+message)
		}
	}
	for(i=0;i<cleanup.length;i+=1){
		clientList.splice(clientList.indexOf(cleanup[i]), 1);
	}
}

chatServer.listen(9000);