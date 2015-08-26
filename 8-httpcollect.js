(function(){

	var http = require('http');
	var url = process.argv[2];

	var callback = function(response){
		var result = '';
		response.setEncoding();

		response.on('data', function(data){
			result += data;
		});

		response.on('end', function(){
			console.log(result.length);
			console.log(result);
		});

	};

	http.get(url, callback);

})();