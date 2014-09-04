var repl = require('repl');

var iconv = require('iconv-lite');
iconv.extendNodeEncodings();

var command = require('./command');

command.reg('request' , require('./commands/request'));
command.reg('server'  , require('./commands/server'));
command.reg('document', require('./commands/document'));

function eval(cmd, context, filename, callback) {
	command.excute(cmd);
}

repl.start({
	prompt: "TMock Server > ",
	input: process.stdin,
	output: process.stdout,
	eval: eval
});
