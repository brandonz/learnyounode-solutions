(function(){

	var ls = require('./6-modular.js');
	var dir = process.argv[2];
	var ext = process.argv[3];

	var callback = function(err, files){
		if(err)
			return
		for(var i = 0; i < files.length; i++){
			console.log(files[i]);
		}
	};

	ls(dir, ext, callback);

})();