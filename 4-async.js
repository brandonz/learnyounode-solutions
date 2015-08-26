(function(){

	var fs = require('fs');
	var file = process.argv[2];
	var callback = function(err, data){
		if(err)
			return
		console.log(data.split('\n').length - 1);
	};
	fs.readFile(file, 'utf8', callback);

})();