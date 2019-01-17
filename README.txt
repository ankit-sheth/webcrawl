How to use :

-- Unzip the folder

-- do first
   npm install 
   in root folder

-- start the application with root folder, node index.js, 
    -- it starts the server at 3000 port

-- in postman use the api service as localhost:3000/api/crawl

-- can run test with npm test

-- also not shown but caprture non- wipro urls in one variable 

-- if required to change url, then do changes in config/config.js

===========

Code structure :

-- try to apply proper structure (MVC)
   --  so, can easily modify and enhance

-- apply one unit test

-- application (code) flow :
   index.js >> routes >> services >> bo >> (dao not rightn now, if rquired for database) 
                                  >> use lib or business logic in bo
                                  >> use helpers where ever required for common functionality
                                  >> logger - applied but not in file, in console.log only

=============

What will be done :

--  can apply logger in proper manner
--  can also apply more proper unit test cases
--  can apply more proper comments
--  also need to apply timeout for request module
--  can also put on docker 