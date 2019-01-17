const serverConfig = require("../config/config.js").serverConfig;
const webcrawlService = require("../services/webcrawlService");

module.exports = function (app) {
    app.get(serverConfig.baseURL + "crawl", new webcrawlService().crawl);
};
