
// Load Module Dependencies
let express = require("express");
let app = require("express")();
let cors = require("cors");
let bodyParser = require("body-parser");
let helmet = require('helmet');
let compression = require('compression');


// Config, Routes and Models
let config = require("./config/config.js");
let routes = require("./routes");

// Middleware
let middlewareSetRequestId = require("./middlewares/setRequestId");

// Add Headers to all Request
app.all("/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,OPTIONS");
    //res.header("Access-Control-Allow-Header", "Cache-Control,Prama,Origin,app_id,Authorization,Content-Type,X-Requested-With,XSRF-TOKEN,querycriteria,x-access-token,sessionId,requestId");
    res.removeHeader("X-Powered-By");
    next();
});

// Middleware
// Helmet secure your Express apps by setting various HTTP headers
app.use(helmet());

// compress all responses - must keep after helmet
app.use(compression({threshold: "1kb"})); // threshhold the min. data size for compression

// Cross-origin resource sharing
app.use(cors());    // to enable cors, in case of called from third party urls

// Parse incoming request bodies
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json()); // for json parsing

// Set the request id for each request - for uniform of logs through one request
app.use(middlewareSetRequestId.setRequestId);

routes.registerRoutes(app); //register all routes, in case of more

// Start Application.
app.listen(config.serverConfig.port, function () {
    console.log("Server is running on port: ", config.serverConfig.port);
});

process.on("exit", (code) => {
    console.log(`About to exit with code: ${code}`);
});