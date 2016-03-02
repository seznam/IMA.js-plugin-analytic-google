'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.$registerImaPlugin = exports.defaultDependencies = exports.GoogleAnalytic = undefined;

var _imaPluginAnalytic = require('ima-plugin-analytic');

var _imaPluginScriptLoader = require('ima-plugin-script-loader');

var _GoogleAnalytic = require('./GoogleAnalytic.js');

var _GoogleAnalytic2 = _interopRequireDefault(_GoogleAnalytic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultDependencies = [_imaPluginScriptLoader.ScriptLoaderPlugin, '$Window', '$Dispatcher', _imaPluginAnalytic.Events, '$Settings.Module.Analytic.Google'];

var $registerImaPlugin = ns => {
	ns.namespace('ima.plugin.analytic');

	ns.ima.plugin.analytic.GoogleAnalytic = _GoogleAnalytic2.default;
};

exports.GoogleAnalytic = _GoogleAnalytic2.default;
exports.defaultDependencies = defaultDependencies;
exports.$registerImaPlugin = $registerImaPlugin;