/*
log-globals
by Sindre Sorhus
MIT License
*/
(function () {
	'use strict';

	function arrayDiff(a, b) {
		return a.filter(function (el) {
			return b.indexOf(el) === -1;
		});
	}

	function getIframe() {
		var el = document.createElement('iframe');
		el.style.display = 'none';
		document.body.appendChild(el);
		var win = el.contentWindow;
		document.body.removeChild(el);
		return win;
	}

	function getGlobals() {
		var whitelist = ['alert'];
		var winProps = Object.getOwnPropertyNames(window);
		var iframeProps = Object.getOwnPropertyNames(getIframe());
		return arrayDiff(arrayDiff(winProps, iframeProps), whitelist);
	}

	console.log('Globals', getGlobals());
})();
