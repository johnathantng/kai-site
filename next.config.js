const withCSS = require('@zeit/next-css'),
	withSASS = require('@zeit/next-sass');

module.exports = withCSS(withSASS());
