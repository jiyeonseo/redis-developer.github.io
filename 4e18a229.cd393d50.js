(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),s=(n(0),n(393)),r=["components"],i={id:"index-storingjson-nodejs",title:"How to store and retrieve JSON documents using Node.js",sidebar_label:"Storing and retrieving JSON documents using Node.js",slug:"/howtos/redisjson/storing-json-using-nodejs",authors:["ajeet","simon"]},c={unversionedId:"howtos/redisjson/storing-json-using-nodejs/index-storingjson-nodejs",id:"howtos/redisjson/storing-json-using-nodejs/index-storingjson-nodejs",isDocsHomePage:!1,title:"How to store and retrieve JSON documents using Node.js",description:"Imagine that you're building a social network application where users can \"check in\" at different locations and give them a star rating, say from 0 for an awful experience through 5 to report that they had the best time ever there! When designing your application, you determined that there's a need to manage data about three main entities:",source:"@site/docs/howtos/redisjson/storing-json-using-nodejs/index-storingjson-nodejs.mdx",slug:"/howtos/redisjson/storing-json-using-nodejs",permalink:"/howtos/redisjson/storing-json-using-nodejs",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisjson/storing-json-using-nodejs/index-storingjson-nodejs.mdx",version:"current",lastUpdatedAt:1637928141,sidebar_label:"Storing and retrieving JSON documents using Node.js",sidebar:"docs",previous:{title:"How to build a Shopping cart app using NodeJS and RedisJSON",permalink:"/howtos/redisjson/shoppingcart"},next:{title:"RedisTimeSeries Tutorial",permalink:"/howtos/redistimeseries/"}},l=[{value:"Users",id:"users",children:[]},{value:"Locations",id:"locations",children:[]},{value:"Checkins",id:"checkins",children:[]},{value:"Application Architecture",id:"application-architecture",children:[{value:"Step 1. Cloning the repository",id:"step-1-cloning-the-repository",children:[]},{value:"Step 2. Running Redis container",id:"step-2-running-redis-container",children:[]},{value:"Step 3. Load the Sample Data into Redis",id:"step-3-load-the-sample-data-into-redis",children:[]},{value:"Step 4. Start and Configure RedisInsight",id:"step-4-start-and-configure-redisinsight",children:[]},{value:"Step 5.  Start the Application",id:"step-5--start-the-application",children:[]},{value:"Step 6. Stopping redis-cli, the Redis Container and the Application",id:"step-6-stopping-redis-cli-the-redis-container-and-the-application",children:[]},{value:"Step 7. Final exercise",id:"step-7-final-exercise",children:[]}]},{value:"External Resources",id:"external-resources",children:[]}],d={toc:l};function u(e){var t=e.components,i=Object(o.a)(e,r);return Object(s.b)("wrapper",Object(a.a)({},d,i,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Imagine that you're building a social network application where users can \"check in\" at different locations and give them a star rating, say from 0 for an awful experience through 5 to report that they had the best time ever there! When designing your application, you determined that there's a need to manage data about three main entities:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Users"),Object(s.b)("li",{parentName:"ul"},"Locations"),Object(s.b)("li",{parentName:"ul"},"Checkins")),Object(s.b)("p",null,"Let's look at what we're storing about each of these entities.  As we're using Redis as our only data store, we'll also consider how they map to Redis data types..."),Object(s.b)("h2",{id:"users"},"Users"),Object(s.b)("p",null,"We'll represent each user as a flat map of name/value pairs with no nested objects.  As we'll see later on, this maps nicely to a Redis Hash.  Here's a JSON representation of the schema we'll use to represent each user:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 99,\n  "firstName": "Isabella",\n  "lastName": "Pedersen",\n  "email": "isabella.pedersen@example.com",\n  "password": "xxxxxx1",\n  "numCheckins": 8073,\n  "lastCheckin": 1544372326893,\n  "lastSeenAt": 138\n}\n')),Object(s.b)("p",null,"We've given each user an ID and we're storing basic information about them.  Also, we\u2019ll encrypt their password using bcrypt when we load the sample data into Redis."),Object(s.b)("p",null,"For each user, we'll keep track of the total number of checkins that they've submitted to the system, and the timestamp and location ID of their most recent checkin so that we know where and when they last used the system."),Object(s.b)("h2",{id:"locations"},"Locations"),Object(s.b)("p",null,"For each location that users can check in at, we're going to maintain two types of data.  The first of these is also a flat map of name/value pairs, containing summary information about the location:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 138,\n  "name": "Stacey\'s Country Bakehouse",\n  "category": "restaurant",\n  "location": "-122.195447,37.774636",\n  "numCheckins": 170,\n  "numStars": 724,\n  "averageStars": 4\n}\n')),Object(s.b)("p",null,"We've given each location an ID and a category\u2014we'll use the category to search for locations by type later on.  The \"location\" field stores the coordinates in longitude, latitude format\u2026 this is the opposite from the usual latitude, longitude format. We'll see how to use this to perform geospatial searches later when we look at the RediSearch module."),Object(s.b)("p",null,"For each location, we're also storing the total number of checkins that have been recorded there by all of our users, the total number of stars that those checkins gave the location, and an average star rating per checkin for the location."),Object(s.b)("p",null,"The second type of data that we want to maintain for each location is what we'll call \"location details\".  These take the form of more structured JSON documents with nested objects and arrays.  Here's an example for location 138, Stacey's Country Bakehouse:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 138,\n  "hours": [\n    { "day": "Monday", "hours": "8-7" },\n    { "day": "Tuesday", "hours": "9-7" },\n    { "day": "Wednesday", "hours": "6-8" },\n    { "day": "Thursday", "hours": "6-6" },\n    { "day": "Friday", "hours": "9-5" },\n    { "day": "Saturday", "hours": "8-9" },\n    { "day": "Sunday", "hours": "7-7" }\n  ],\n  "socials": [\n    { "instagram": "staceyscountrybakehouse",\n      "facebook": "staceyscountrybakehouse",\n      "twitter": "staceyscountrybakehouse"\n    }\n  ],\n  "website": "www.staceyscountrybakehouse.com",\n  "description": "Lorem ipsum....",\n  "phone": "(316) 157-8620"\n}\n')),Object(s.b)("p",null,"We want to build an API that allows us to retrieve all or some of these extra details, and keep the overall structure of the document intact.  For that, we'll need the RedisJSON module as we'll see later."),Object(s.b)("h2",{id:"checkins"},"Checkins"),Object(s.b)("p",null,"Checkins differ from users and locations in that they're not entities that we need to store forever. In our application, checkins consist of a user ID, a location ID, a star rating and a timestamp - we'll use these values to update attributes of our users and locations."),Object(s.b)("p",null,"Each checkin can be thought of as a flat map of name/value pairs, for example:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "userId": 789,\n  "locationId": 171,\n  "starRating": 5\n}\n')),Object(s.b)("p",null,'Here, we see that user 789 visited location 171 ("Hair by Parvinder") and was really impressed with the service.'),Object(s.b)("p",null,"We need a way to store checkins for long enough to process them, but not forever.  We also need to associate a timestamp with each one, as we'll need that when we process the data.  "),Object(s.b)("p",null,"Redis provides a Stream data type that's perfect for this - with Redis Streams, we can store maps of name/value pairs and have the Redis server timestamp them for us.  Streams are also perfect for the sort of asynchronous processing we want to do with this data.  When a user posts a new checkin to our API we want to store that data and respond to the user that we've received it as quickly as possible.  Later we can have one or more other parts of the system do further processing with it.  Such processing might include updating the total number of checkins and last seen at fields for a user, or calculating a new average star rating for a location."),Object(s.b)("h2",{id:"application-architecture"},"Application Architecture"),Object(s.b)("p",null,"We decided to use Node.js with the Express framework and ioredis client to build the application.  Rather than have a monolithic codebase, the application has been split out into four components or services. These are:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Authentication Service"),": Listens on an HTTP port and handles user authentication using Redis as a shared session store that other services can access."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Checkin Receiver"),": Listens on an HTTP port and receives checkins as HTTP POST requests from our users.  Each checkin is placed in a Redis Stream for later processing."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Checkin Processor"),": Monitors the checkin Stream in Redis, updating user and location information as it processes each checkin."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"API Server"),": Implements the bulk of the application's API endpoints, including those to retrieve information about users and locations from Redis.")),Object(s.b)("p",null,"These components fit together like so:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"Application Architecture",src:n(796).default})),Object(s.b)("p",null,"There's also a data loader component, which we'll use to load some initial sample data into the system."),Object(s.b)("h3",{id:"step-1-cloning-the-repository"},"Step 1. Cloning the repository"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"}," git clone https://github.com/redislabs-training/node-js-crash-course.git\n cd node-js-crash-course\n npm install\n")),Object(s.b)("h3",{id:"step-2-running-redis-container"},"Step 2. Running Redis container"),Object(s.b)("p",null,"From the node-js-crash-course directory, start Redis using ",Object(s.b)("inlineCode",{parentName:"p"},"docker-compose"),":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},' $ docker-compose up -d\n Creating network "node-js-crash-course_default" with the default driver\n Creating rediscrashcourse ... done\n $ docker ps\n')),Object(s.b)("p",null,'The output from the docker ps command should show one container running, using the "redislabs/redismod" image.  This container runs Redis 6 with the RediSearch, RedisJSON and RedisBloom modules.'),Object(s.b)("h3",{id:"step-3-load-the-sample-data-into-redis"},"Step 3. Load the Sample Data into Redis"),Object(s.b)("p",null,"Load the course example data using the provided data loader. This is a Node.js application:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},'$ npm run load all\n> node src/utils/dataloader.js -- "all"\n\nLoading user data...\nUser data loaded with 0 errors.\nLoading location data...\nLocation data loaded with 0 errors.\nLoading location details...\nLocation detail data loaded with 0 errors.\nLoading checkin stream entries...\nLoaded 5000 checkin stream entries.\nCreating consumer group...\nConsumer group created.\nDropping any existing indexes, creating new indexes...\nCreated indexes.\nDeleting any previous bloom filter, creating new bloom filter...\nCreated bloom filter.\n')),Object(s.b)("p",null,"In another terminal window, run the redis-cli executable that's in the Docker container. Then, enter the Redis commands shown at the redis-cli prompt to verify that data loaded successfully:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},'$ docker exec -it rediscrashcourse redis-cli\n127.0.0.1:6379> hgetall ncc:locations:106\n 1) "id"\n 2) "106"\n 3) "name"\n 4) "Viva Bubble Tea"\n 5) "category"\n 6) "cafe"\n 7) "location"\n 8) "-122.268645,37.764288"\n 9) "numCheckins"\n10) "886"\n11) "numStars"\n12) "1073"\n13) "averageStars"\n14) "1"\n127.0.0.1:6379> hgetall ncc:users:12\n 1) "id"\n 2) "12"\n 3) "firstName"\n 4) "Franziska"\n 5) "lastName"\n 6) "Sieben"\n 7) "email"\n 8) "franziska.sieben@example.com"\n 9) "password"\n10) "$2b$05$uV38PUcdFD3Gm6ElMlBkE.lzZutqWVE6R6ro48GsEjcmnioaZZ55C"\n11) "numCheckins"\n12) "8945"\n13) "lastCheckin"\n14) "1490641385511"\n15) "lastSeenAt"\n16) "22"\n127.0.0.1:6379> xlen ncc:checkins\n(integer) 5000\n')),Object(s.b)("h3",{id:"step-4-start-and-configure-redisinsight"},"Step 4. Start and Configure RedisInsight"),Object(s.b)("p",null,"If you're using RedisInsight, start it up and it should open in your browser automatically.  If not, point your browser at http://localhost:8001.  "),Object(s.b)("p",null,'If this is your first time using RedisInsight click "I already have a database".'),Object(s.b)("p",null,'If you already have other Redis databases configured in RedisInsight, click "Add Redis Database".'),Object(s.b)("p",null,'Now, click "Connect to a Redis Database Using hostname and port".  Configure the database details as shown below, then click "Add Redis Database".'),Object(s.b)("p",null,Object(s.b)("img",{alt:"Configuring RedisInsight",src:n(797).default})),Object(s.b)("p",null,"You should now be able to browse your Redis instance.  If you need more guidance on how to connect to Redis from RedisInsight, check out Justin's video below but be sure to use 127.0.0.1 as the host, 6379 as the port and leave the username and password fields blank when configuring your database."),Object(s.b)("div",{class:"text--center"},Object(s.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/LSiLuNPeq9Y?start=359",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(s.b)("h3",{id:"step-5--start-the-application"},"Step 5.  Start the Application"),Object(s.b)("p",null,"Now it's time to start the API Server component of the application and make sure it connects to Redis.  This component listens on port 8081."),Object(s.b)("p",null,"If port 8081 is in use on your system, edit this section of the ",Object(s.b)("inlineCode",{parentName:"p"},"config.json")," file and pick another available port:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'"application": {\n  "port": 8081\n},\n')),Object(s.b)("p",null,"Start the server like this:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"$ npm run dev\n\n> ./node_modules/nodemon/bin/nodemon.js\n\n[nodemon] 2.0.7\n[nodemon] to restart at any time, enter `rs`\n[nodemon] watching path(s): *.*\n[nodemon] watching extensions: js,mjs,json\n[nodemon] starting `node src/server.js`\nWarning: Environment variable WEATHER_API_KEY is not set!\ninfo: Application listening on port 8081.\n")),Object(s.b)("p",null,"This starts the application using nodemon, which monitors for changes in the source code and will restart the server when a change is detected.  This will be useful in the next module where you'll be making some code changes. "),Object(s.b)("p",null,"Ignore the warning about ",Object(s.b)("inlineCode",{parentName:"p"},"WEATHER_API_KEY")," \u2014 we'll address this in a later exercise when we look at using Redis as a cache."),Object(s.b)("p",null,"To verify that the server is running correctly and connected to Redis, point your browser at:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"http://localhost:8081/api/location/200\n")),Object(s.b)("p",null,"You should see the summary information for location 200, Katia's Kitchen:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "200",\n  "name": "Katia\'s Kitchen",\n  "category": "restaurant",\n  "location": "-122.2349598,37.7356811",\n  "numCheckins": "359",\n  "numStars": "1021",\n  "averageStars": "3"\n}\n')),Object(s.b)("p",null,"Great! Now you're up and running.  Let's move on to the next module and see how we're using Redis Hashes in the application.  You'll also get to write some code!"),Object(s.b)("h3",{id:"step-6-stopping-redis-cli-the-redis-container-and-the-application"},"Step 6. Stopping redis-cli, the Redis Container and the Application"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Don't do this now, as we\u2019ve only just started!"),"  However, when you do want to shut everything down, here's how to do it..."),Object(s.b)("p",null,"To stop running redis-cli, simply enter the quit command at the redis-cli prompt:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"127.0.0.1:6379> quit\n$\n")),Object(s.b)("p",null,"To stop the Redis Server, make sure you are in the ",Object(s.b)("inlineCode",{parentName:"p"},"node-js-crash-course")," folder that you checked the application repo out to, then:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose down\nStopping rediscrashcourse ... done\nRemoving rediscrashcourse ... done\nRemoving network node-js-crash-course_default\n")),Object(s.b)("p",null,'Redis persists data to the "redisdata" folder.  If you want to remove this, just delete it:'),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"$ rm -rf redisdata\n")),Object(s.b)("p",null,"To stop each of the application's components, press Ctrl+C in the terminal window that the component is running in.  For example, to stop the API server:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"$ npm run dev\n\n> ./node_modules/nodemon/bin/nodemon.js\n\n[nodemon] 2.0.7\n[nodemon] to restart at any time, enter `rs`\n[nodemon] watching path(s): *.*\n[nodemon] watching extensions: js,mjs,json\n[nodemon] starting `node src/server.js`\ninfo: Application listening on port 8081.\n^C\nnode-js-crash-course $\n")),Object(s.b)("p",null,"We used Redis' built-in Hash data type to represent our user and location entities.  Hashes are great for this, but they are limited in that they can only contain flat name/value pairs.  For our locations, we want to store extra details in a more structured way."),Object(s.b)("p",null,"Here's an example of the additional data we want to store about a location:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 121,\n  "hours": [\n    { "day": "Monday", "hours": "6-7" },\n    { "day": "Tuesday", "hours": "6-7" },\n    { "day": "Wednesday", "hours": "7-8" },\n    { "day": "Thursday", "hours": "6-9" },\n    { "day": "Friday", "hours": "8-5" },\n    { "day": "Saturday", "hours": "9-6" },\n    { "day": "Sunday", "hours": "6-4" }\n  ],\n  "socials": [\n    {\n      "instagram": "theginclub",\n      "facebook": "theginclub",\n      "twitter": "theginclub"\n    }\n  ],\n  "website": "www.theginclub.com",\n  "description": "Lorem ipsum...",\n  "phone": "(318) 251-0608"\n}\n')),Object(s.b)("p",null,"We could store this data as serialized JSON in a Redis String, but then our application would have to retrieve and parse the entire document every time it wanted to read some of the data.  And we'd have to do the same to update it too.  Furthermore, with this approach, update operations aren't atomic and a second client could update the JSON stored at a given key while we're making changes to it in our application code.  Then, when we serialize our version of the JSON back into the Redis String, the other client's changes would be lost."),Object(s.b)("p",null,"RedisJSON adds a new JSON data type to Redis, and a query syntax for selecting and updating individual elements in a JSON document atomically on the Redis server.  This makes our application code simpler, more efficient, and much more reliable."),Object(s.b)("h3",{id:"step-7-final-exercise"},"Step 7. Final exercise"),Object(s.b)("p",null,"In this exercise, you'll complete the code for an API route that gets just the object representing a location's opening hours for a given day.  Open the file ",Object(s.b)("inlineCode",{parentName:"p"},"src/routes/location_routes.js"),", and find the route for ",Object(s.b)("inlineCode",{parentName:"p"},"/location/:locationId/hours/:day"),".  The starter code looks like this:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"// EXERCISE: Get opening hours for a given day.\nrouter.get(\n  '/location/:locationId/hours/:day',\n  [\n    param('locationId').isInt({ min: 1 }),\n    param('day').isInt({ min: 0, max: 6 }),\n    apiErrorReporter,\n  ],\n  async (req, res) => {\n    /* eslint-disable no-unused-vars */\n    const { locationId, day } = req.params;\n    /* eslint-enable */\n    const locationDetailsKey = redis.getKeyName('locationdetails', locationId);\n\n    // TODO: Get the opening hours for a given day from\n    // the JSON stored at the key held in locationDetailsKey.\n    // You will need to provide the correct JSON path to the hours\n    // array and return the element held in the position specified by\n    // the day variable.  Make sure RedisJSON returns only the day\n    // requested!\n    const jsonPath = 'TODO';\n\n    /* eslint-enable no-unused-vars */\n    const hoursForDay = JSON.parse(await redisClient.call('JSON.GET', locationDetailsKey, jsonPath));\n    /* eslint-disable */\n\n    // If null response, return empty object.\n    res.status(200).json(hoursForDay || {});\n  },\n);\n")),Object(s.b)("p",null,'You\'ll need to update the code to provide the correct JSON path, replacing the "TODO" value with a JSON path expression.'),Object(s.b)("p",null,"Looking at the JSON stored at key ",Object(s.b)("inlineCode",{parentName:"p"},"ncc:locationdetails:121"),", we see that the opening hours are stored as an array of objects in a field named ",Object(s.b)("inlineCode",{parentName:"p"},"hours"),", where day 0 is Monday and day 6 is Sunday:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"Location Details in RedisInsight",src:n(798).default})),Object(s.b)("p",null,"So you'll need a JSON path query that gets the right element from the ",Object(s.b)("inlineCode",{parentName:"p"},"hours")," array depending on the value stored in the variable ",Object(s.b)("inlineCode",{parentName:"p"},"day"),"."),Object(s.b)("p",null,"If you're using redis-cli, you can look at the structure of the JSON document with the following command:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"json.get ncc:locationdetails:121 .\n")),Object(s.b)("p",null,"Make sure your query returns only the day requested, so that you don't have to write Node.js code to filter the value returned from Redis.  Use the ",Object(s.b)("a",{parentName:"p",href:"https://oss.redis.com/redisjson/path/"},"RedisJSON path syntax page")," to help you formulate the right query."),Object(s.b)("p",null,"To test your code, start the server with:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"$ npm run dev\n")),Object(s.b)("p",null,"Recall that this will allow you to edit the code and try your changes without restarting the server."),Object(s.b)("p",null,"If you have the correct JSON path in your code, visiting ",Object(s.b)("inlineCode",{parentName:"p"},"http://localhost:80801/api/location/121/hours/2")," should return:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "day": "Wednesday",\n  "hours": "7-8"\n}\n')),Object(s.b)("h2",{id:"external-resources"},"External Resources"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/redislabs-training/node-js-crash-course"},"Sample Social Network GitHub Repository")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://redisjson.io/"},"RedisJSON")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/howtos/redisjson/storing-complex-json-document"},"How to store and retrieve nested JSON document")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/howtos/redisjson/using-nodejs"},"Importing JSON data into Redis using NodeJS")),Object(s.b)("li",{parentName:"ul"},"Learn more about ",Object(s.b)("a",{parentName:"li",href:"https://oss.redis.com/redisjson/"},"RedisJSON")," in the Quickstart tutorial."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://university.redis.com/courses/ru204/"},"RU204: Storing, Querying and Indexing JSON at Speed")," - a course at Redis University")))}u.isMDXComponent=!0},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,b=u["".concat(r,".").concat(p)]||u[p]||h[p]||s;return n?o.a.createElement(b,i(i({ref:t},l),{},{components:n})):o.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var l=2;l<s;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},796:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/application_architecture-7bfd33ebc105774a28d159b65ed2b05d.png"},797:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/configure_insight-0cf35a63ac79c52866b244b16d2864f0.png"},798:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/locationdetails_redis_json-41f31f97850de2e1f8623a79e4f2c1b2.png"}}]);