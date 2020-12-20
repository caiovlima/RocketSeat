const Raven = require('raven');
const sentryConfig = require('../../config/sentry.js');

const ravenClient = Raven.config(sentryConfig.sentryDSN).install();

module.exports = ravenClient;