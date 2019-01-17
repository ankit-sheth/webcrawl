function ResponseHandler () {}

ResponseHandler.prototype.successHandler = (res, statusCode, data, message)=>{
	if (typeof message === "undefined") {
		message = null;
	}

	if (typeof data === "undefined") {
		data = null;
    }
    
    console.log("===data====", data);
	
	let responseObject = {
		statusCode:statusCode,
		success:true,
		data:data,
		requestId: res.requestId,
		message : message
    };
       
	res.status(statusCode).send(responseObject);

};

ResponseHandler.prototype.errorHandler = (res, error)=>{

	if (error && typeof error === "object" && error.statusCode ) {		
		error.success = false;
		
		if (error.errorCode) {
			let responseObject = {
				statusCode:error.statusCode,
				message:error.errorCode,
				success:false,
				requestID:res.requestId
			};

			res.status(error.statusCode).send(responseObject);
		} else {
			let responseObject = {
				statusCode:error.statusCode,
				message: error.message || "SERVER_ERROR",
				success:false,
				requestID:res.requestId
			};
			res.status(error.statusCode).send(responseObject);
		}		
	} else {
		let responseObject = {
			statusCode:500,
			message:"INTERNAL_SERVER_ERROR",
			success:false,
			requestID:res.requestId
		};
		res.status(500).send(responseObject);
	}
    
};

module.exports = ResponseHandler;

