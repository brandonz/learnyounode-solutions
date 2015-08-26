
var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback){
	var ext = '.' + ext;
	fs.readdir(dir, function(err, files){
		if(err)
			callback(err, null);
		else {
			list = [];
			files.forEach(function(file){
				if(path.extname(file) == ext)
					list.push(file)
			});
			callback(null, list);
		}
	});
}