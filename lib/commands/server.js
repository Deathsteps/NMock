var http = require('http');

function getParams (url) {
	var data = url.split(/[\/\?]/);
	if(data.length < 3) return;

	var queries = data[3].split('&');
	var query = {};
	queries.forEach(function (item) {
		item = item.split('=');
		query[item[0]] = item[1];
	});

	return {
		api	 : data[1],
		query: data[3].length ? query : null
	}
}

function getMock (params) {
	var config = require('../../data/'+params.api);

	if(!params.query)
		return config.response.normal;

	var mock, match;
	var query = Object.keys(config.request.data);
	for(var k in config.request.mock){
		mock = config.request.mock[k];
		if(!mock) return;
		match = true;
		for (var i = mock.length - 1; i >= 0; i--) {
			if(mock[i] != params.query[query[i]]){
				match = false;
				break;
			}
		};
		if(match)
			return config.response[k];
	}

	return config.response.normal;
}

var ERROR_DATA = { success: false, data: null, info: 'Mock数据失败！' };

function createServer () {
	http.createServer(function (req, res) {
		// Currently, Ignore the post request
		var params = getParams(req.url);
		var mock   = params ? getMock(params) : ERROR_DATA;
		res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
		res.end('window.NMock_DATA = ' + JSON.stringify(mock));
	}).listen(9090);

	console.log('Server Is Created!');
}

module.exports = function () {
	createServer();
}
