//const logger = require("../lib/logger"); // winston logger
//const stackTrace = require("stack-trace"); // to get filename, line 
//const path = require("path");

function LoggerHelper(){}

function formatMessage(requestId, fileName, method, line, message, data) {
	
	requestId = (!requestId) ? null : requestId;
	message = (!message) ? null : message;
	data = (!data) ? null : data;

	let token = "requestID=" + requestId + ", fileName=" + fileName + ", method=" + method + ", line=" + line + ", message=" + message + ", data= " + data;

	return token;
}

LoggerHelper.prototype.log = (level, requestId, message, data) => {
    
    // here we can use stack_trace module, to get the related file, function and line number from where it is called
    // then log it in file based on logLevel - i.e. debug, error, warning..etc.
    let finalLogStr = "requestID=" + requestId + ", message=" + message + ", data= " + data;
    console.log(finalLogStr);
};
	

module.exports = LoggerHelper;