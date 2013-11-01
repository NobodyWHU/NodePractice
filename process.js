process.on('uncaughtException', function(err) {
	console.log('Caught exception: '+ err);
});

setTimeout(function() {
	console.log('This will still run.');
}, 500);

//故意抛出异常，并且不捕获它
noneExitFunc();
console.log('This will not run.');