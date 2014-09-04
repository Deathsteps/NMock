var AppLog = require('./log').init('TMock');

var rCommand = /\(([\w\s]+)\n\)/
module.exports = {

	_mode: '',
	_cmds: {},

	_parse: function (cmd) {
		var matches = cmd.match(rCommand);
		if(!matches){
			AppLog.error('Wrong Command');
			return;
		}
		return matches[1].split(' ');
	},

	excute: function (cmd) {
		var args = this._parse(cmd);
		if(!args) return;
 		cmd = args.shift();

		if(cmd in this._cmds){
			this._cmds[cmd].apply({}, args);
		}else{
			AppLog.error('Command ' + cmd + ' Not Found!');
		}
	},

	/**
	 * register a command to the mock tool
	 * @param  {string} cmdName command name
	 * @param  {function} func  command body
	 * @return {undefined}
	 */
	reg: function (cmdName, func) {
		this._cmds[cmdName] = func;
	}
}