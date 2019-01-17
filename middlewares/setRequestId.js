const guid = require("guid");

const LoggerHelper = require("../helpers/loggerHelper");

module.exports.setRequestId = async (req, res, next) => {
	new LoggerHelper().log("info", null, "to set request id");

	let requestId = guid.create().value;
	res.requestId = requestId;

	next();
};	