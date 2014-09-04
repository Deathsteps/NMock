var fs = require('fs');
var path = require('path');
var util = require('util');

var Handlebars = require('handlebars');

var DATA_PATH = __dirname.replace('lib\\commands', 'data');
var DESC_PATH = __dirname.replace('lib\\commands', 'desc');

function clone (obj) {
    if (typeof obj !== 'object' || obj == null) {
        return obj;
    }
    var re = {};
    if (obj.constructor === Array) {
        re = [];
    }
    for ( var i in obj) {
        re[i] = clone(obj[i]);
    }
    return re;
}

function create (api) {
	var data = require('../../data/'+api);
	var copy = clone(data);
	for(var k in copy.response){
		copy.response[k] = JSON.stringify(copy.response[k], null, 4);
	}
	
	var tmplPath = path.join(DESC_PATH, 'tmpl.html');
	fs.readFile(tmplPath, 'utf-8', function (err, html) {
		if (err) throw err;

		html = Handlebars.compile(html)(copy);

		var targetFile = path.join(DESC_PATH, api + '.html');
		fs.writeFile(targetFile, html, function () {
			console.log('Succeed To Create Document!');
		});
	});
}

module.exports = function () {
	
	var files = fs.readdirSync(DATA_PATH);
	files.forEach(function (filename) {
		var api = path.basename(filename, '.js');
		create(api);
	});

}