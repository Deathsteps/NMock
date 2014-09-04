var http = require('http');
var util = require('util');

function parseJSON (str) {
	return (new Function(" return " + str.replace(/\t|\n|\r/g,'')))();
}

module.exports = function () {
	var args = [].slice.call(arguments);
	var api = args.shift();
	var config = require('../../data/'+api);

	var params = Object.keys(config.request.data);
	var mock = config.request.mock[args[0] || 'normal'];

	var query = [];
	for (var i = params.length - 1; i >= 0; i--) {
		query.push(params[i] + '=' + mock[i]);
	};

	//var url1 = 'http://taocan.ctrip.com/FH/Ajax/AjaxGetProductList.aspx?FromCity=2&DestinationCity=%E4%B8%89%E4%BA%9A&AreaType=1&CheckList=49049|1781445|18203|1848571&DestinationCityID=61';
	var address = query.length ? 
		(config.url +  '?' + query.join('&')) : 
		config.url;
	http.get(address, function(res) {
		var data = '';
		res.setEncoding('gb2312');
		res.on('data', function (chunk) {
			data += chunk;
		})
		res.on('end', function () {
			data = parseJSON(data);
			console.log(util.inspect(data, { colors: true }));
		});
	}).on('error', function(e) {
		console.log("Got error: " + e.message);
	});
}
