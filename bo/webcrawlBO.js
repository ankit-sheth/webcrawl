const LoggerHelper = require("../helpers/loggerHelper");
const _ = require("lodash");
const CrawlService = require("../lib/crawlService");
const constant = require("../helpers/constant");

function WebcrawlBO() { }

WebcrawlBO.prototype.getParsedData = (crawlUrl, requestId) => {

    new LoggerHelper().log("debug", requestId, constant.INSIDE_BO);
	return new Promise(async (resolve, reject) => {
		try {
            let result = await new CrawlService().fetchData(crawlUrl, requestId);
            
			resolve(result);
		} catch (error) {
            new LoggerHelper().log("error", requestId, constant.INSIDE_CATCH_BLOCK, error);
            
			reject(error);
		}
	});
};

module.exports = WebcrawlBO;