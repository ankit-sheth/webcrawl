// Import the dependencies for testing
process.env.NODE_ENV = 'test';  // set forcefully the env as test

const mocha = require('mocha');
const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon')
const { mockRequest, mockResponse } = require('mock-req-res')
const ResponseHandler = require('../helpers/responseHandler');

// Configure chai
chai.use(chaiHttp);
chai.should();

let testService = require("../services/webcrawlService");
let testLibService = require("../lib/crawlService");
let testServiceObj = "";
let testId = "";

before("start test case", function() {
    console.log("called before...");    
    console.log("start time for all test(s)::", new Date());
});

beforeEach('Setting up the userList', function(){
    console.log('beforeEach');
    let testDate = new Date("Y-m-d-H-i-s");
    this.testId = "test-"+testDate;
        
    console.log("start test===", new Date());
});

afterEach("each test completed...", function() {
    console.log('beforeEach');
    console.log("end test===", new Date());
});

after("after all test completed", function() {
    console.log("called before...");
    console.log("end time all test(s) completed::", new Date());
});

describe("CheckConnection", () => {
    describe("GET /", () => {
        // Test to get all students record
        it('check test working or not', function(){
            assert.equal(1, [1,2,3].indexOf(2));
        });     
    });

    describe("GET /crawl", () => {

        const res = mockResponse();
        const req = mockRequest();
    
        req.requestId = this.testId;
    
        testServiceObj = new testService();    
    
        let dateTime = new Date("Y-m-d_H-i-s");
        req.requestId = "test-".dateTime;
        
        // Test to get all students record
        it('check get values - success', function() {
            let testLibServiceObj = new testLibService();
            
            let dummyData = {"message": "NO_DATA_FOUND"};
            sinon.stub(testLibService.prototype, 'fetchData').returns([{"test":"test.com"}]);
    
            let response = testServiceObj.crawl(req, res);
            response.then(function(data) {
                console.log(data);
                assert.equal(data.length, 1);
            });
        });

        

     
    });
});