(function(){

	var http = require('http');
	var url = process.argv[2];

	var callback = function(response){
		response.setEncoding();

		response.on('data', function(data){
			console.log(data);
		});
	};

	http.get(url, callback);

})();