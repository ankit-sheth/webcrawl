const cheerio = require('cheerio');
const request = require('request'); 
const LoggerHelper = require("../helpers/loggerHelper");
const crawlServerUrl = require("../config/config").crawlUrl;


const CrawlService = function() {};

CrawlService.prototype.fetchData = async function (crawlUrl, requestId) {
    console.log('Processing...', crawlUrl);
    return new Promise(function (resolve, reject) {
        request(crawlUrl, async function(err, resp, body) {
            if (err)
                throw err;
            
            let processedUrls = await processData(body, requestId);    
            
            resolve(processedUrls)
        });
    }).catch(function(err) {
        new LoggerHelper().log("debug", requestId, err);
        return err;
    });
};


processData = async function(body, requestId) {

   return new Promise(function(resolve, reject) {
        $ = cheerio.load(body);

        let matchedUrls = [];
        let unMatchedUrls = [];
        
        links = $('a'); //jquery get all hyperlinks
        $(links).each(function(i, link) {
            let urlText = $(link).text();
            let urlHref = $(link).attr('href');
            let cleanText = urlText.trim().replace(/[\n\r]+/g, "").replace(/\s{2,}/g,' ');
            
            //console.log(urlText, urlHref)
            let obj = {"text":cleanText, "href":urlHref};
            if (urlHref.startsWith(crawlServerUrl)) {                
                matchedUrls.push(obj);
            } else {
                unMatchedUrls.push(obj);
            }                       
        });  
        
        resolve(matchedUrls);
   }).catch(function (err) {
        new LoggerHelper().log("debug", requestId, err);    
        return err;
   });

}

module.exports = CrawlService;