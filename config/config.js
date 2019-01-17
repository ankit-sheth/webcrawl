/* @File for loading the config from env */
'use strict'

// let envVars = process.env; - in case need to put in enviroment the secret values 

// set the config with env values
const config = {
    "crawlUrl": "https://wiprodigital.com",    
    "serverConfig": {
		"port": 3000,		
		"baseURL": "/api/"
	},
    "logConfig": {
		"logFile": "./logs/logs",
		"logLevel": "debug"		// hierarchy level debug, info, error - can change as required as per environment
	}
}

module.exports = config;