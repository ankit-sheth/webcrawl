/* @File : to write the emailTemplate master all services */
var HTTPStatus = require("http-status");

const WebcrawlBO = require("../bo/webcrawlBO");
const ResponseHandler = require("../helpers/responseHandler");
const LoggerHelper = require("../helpers/loggerHelper");
const constant = require("../helpers/constant");

const crawlServerUrl = require("../config/config").crawlUrl;

// =================================WebcrawlService======================================
 
function WebcrawlService() { }

/**
 * @api {get} /api/crawl - crawl/parse and get web data- matched with base url
 * @apiName crawl
 * @apiSampleRequest /api/crawl
 * @Output: parsed/crawl data - mached hrefs with text
 */
WebcrawlService.prototype.crawl = async (req, res) => {
    
	new LoggerHelper().log("debug", res.requestId, constant.START_OF_EXECUTION);
	try {
        // for get all emailTemplate        
		let result = await new WebcrawlBO().getParsedData(crawlServerUrl, res.requestId);
        
		// success response  with pagination
		new LoggerHelper().log("debug", res.requestId, constant.BFORE_CALLING_SUCCESS_HANDELER, result);
		new ResponseHandler().successHandler(res, HTTPStatus.OK, result);
	} catch (error) {
		// error response
		new LoggerHelper().log("error", res.requestId, constant.INSIDE_CATCH_BLOCK, error);
		new ResponseHandler().errorHandler(res, error);
	}
};


module.exports = WebcrawlService;