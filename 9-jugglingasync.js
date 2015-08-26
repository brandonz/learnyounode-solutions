(function(){
	
	var http = require('http');
	var bl = require('bl');
	var urls = [3];
	urls[0] = process.argv[2];
	urls[1] = process.argv[3];
	urls[2] = process.argv[4];

	var count = 0;
	var results = [3];

	for(var i = 0; i < urls.length; i++){
		get(i);
	}

	function get(i) {
		http.get(urls[i], function(response){
			response.pipe(bl(function(err, data){
				if (err)
					return;
				results[i] = data.toString();
				count++;
				if(count == 3) {
					console.log(results[0])
					console.log(results[1]);
					console.log(results[2])
				}
			}));
		});
	}

})();