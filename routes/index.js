const fs = require("fs");
const routeFolder = __dirname;

function registerRoutes(app){
	const routeFiles = fs.readdirSync(routeFolder);
	routeFiles.forEach(function(routeFile){
		if(routeFile.endsWith("Routes.js")){			
			require("./"+routeFile)(app);
		}
	});
}

module.exports.registerRoutes = registerRoutes;