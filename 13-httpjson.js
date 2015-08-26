(function(){
	
	var http = require('http');
	var url = require('url');
	var port = process.argv[2];

	var parsetime = '/api/parsetime';
	var unixtime = '/api/unixtime';

	var server = http.createServer(function(req, res){
		var parsedUrl = url.parse(req.url, true);

		if (parsedUrl.pathname == parsetime) {
			var time = new Date(parsedUrl.query.iso);
			var value = {
				hour: time.getHours(),
				minute: time.getMinutes(),
				second: time.getSeconds()
			};
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(JSON.stringify(value));
		}
		else if (parsedUrl.pathname == unixtime) {
			var time = new Date(parsedUrl.query.iso);
			var value = {
				unixtime: time.getTime()
			};
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(JSON.stringify(value));
		}
		else {
			res.writeHead(404);
			res.end();
		}
	});
	server.listen(port);

})();