(function(){
	
	var net = require('net');
	var port = process.argv[2];
	var server = net.createServer(function(socket){
		var date = new Date();
		var data = date.getFullYear() + '-'
			+ zeroFill(date.getMonth() + 1) + "-"
    		+ zeroFill(date.getDate()) + " "
    		+ zeroFill(date.getHours()) + ":"
    		+ zeroFill(date.getMinutes()) + "\n";

		socket.end(data);
	});
	server.listen(port);

	function zeroFill(number) {
		return number < 10 ? '0' + number : number;
	}

})();