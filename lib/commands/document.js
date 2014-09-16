var fs = require('fs');
var path = require('path');
var util = require('util');

var Handlebars = require('handlebars');

var AppLog = require('../log').init('TMock');

var DATA_PATH  = __dirname.replace('lib\\commands', 'data');
var DESC_PATH  = __dirname.replace('lib\\commands', 'desc');
var TMPL_FILE  = '__tmpl.html';
var INDEX_FILE = 'index.html';

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

function getData (api) {
	var data = require('../../data/'+api);
	var copy = clone(data);
	for(var k in copy.response){
		copy.response[k] = JSON.stringify(copy.response[k], null, 4);
	}
	return copy;
}
//
function fileData (api) {
	var infos = api.split('/');
	var length= infos.length;
	var filePath = '';
	if(length>1){
		for (var i = length - 2; i >= 0; i--) {
			filePath += '../';
		};
	}
	return {
		name: infos[length - 1],
		path: filePath,
		dir: length > 1 ? (infos.slice(0, length - 1).join('/') + '/') : ''
	}
}

function makeDirectory (dir) {
	if(!dir) return;
	var dir = path.join(DESC_PATH, dir);
	if(fs.existsSync(dir)) return;
	fs.mkdirSync(dir);
}

function createDocuemnt (apis, fnTmpl) {
	apis.forEach(function (api) {
		api = api.replace('.js', '');

		var fileInfo = fileData(api);
		makeDirectory(fileInfo.dir);
		
		var data = { file: fileInfo, api: getData(api) };
		var html = fnTmpl(data);

		var targetFile = path.join(DESC_PATH, api + '.html');
		fs.writeFile(targetFile, html, function () {
			AppLog.log(api + ' page is created.');
		});
	});
}
// read the files in dataPath recursively
function getAPIList (dataPath, dir) {
	var ret = [];
	dir = dir || '';

	var files = fs.readdirSync(dataPath);
	files.forEach(function (file) {
		file = dir + file;
		if(path.extname(file) == '') { // sub directory
			var apis = getAPIList( path.join(dataPath, file), file + '/' );
			Array.prototype.push.apply(ret, apis);
		}else{
			ret.push(file);
		}
	});
	return ret;
}

module.exports = function () {
	var apis = getAPIList(DATA_PATH);
	if(!apis) return;

	var tmplPath = path.join(DESC_PATH, TMPL_FILE);
	fs.readFile(tmplPath, 'utf-8', function (err, html) {
		if (err) {
			AppLog.error('An error occurred when reading __tmpl.html');
			AppLog.error(err);
			return;
		}
		createDocuemnt(apis, Handlebars.compile(html));
	});
}