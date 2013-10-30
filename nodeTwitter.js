var express = require('express')

var app = express.createServer()



app.listen(8000);

var tweets = []
app.get('/', function(res, req){
	res.end('Welcome to Node Twitter!');
})

app.post('/send', express.bodyParser(), function(res, req){
	if(req.body && req.body.tweet){
		tweets.push(req.body.tweet);
		res.send({status:"ok", message:"Tweet received"});
	}else {
		//没有tweet?
		res.end({status:"nok", message:"No Tweet received"});
	}
})

app.get('/tweets', function(res, req){
	res.end(tweets)
})