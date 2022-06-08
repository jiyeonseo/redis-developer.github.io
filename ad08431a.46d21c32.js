(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{288:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(393)),o=(n(394),["components"]),s={id:"index-lesson_1",title:"Spring and Redis: Up and Running",sidebar_label:"Up and Running",slug:"/develop/java/redis-and-spring-course/lesson_1",authors:["bsb"]},l={unversionedId:"develop/java/spring/redis-and-spring-course/lesson_1/index-lesson_1",id:"develop/java/spring/redis-and-spring-course/lesson_1/index-lesson_1",isDocsHomePage:!1,title:"Spring and Redis: Up and Running",description:"Objectives",source:"@site/docs/develop/java/spring/redis-and-spring-course/lesson_1/index-lesson_1.mdx",slug:"/develop/java/redis-and-spring-course/lesson_1",permalink:"/develop/java/redis-and-spring-course/lesson_1",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/java/spring/redis-and-spring-course/lesson_1/index-lesson_1.mdx",version:"current",lastUpdatedAt:1646402901,sidebar_label:"Up and Running",sidebar:"docs",previous:{title:"Getting Started with Spring Data Redis",permalink:"/develop/java/redis-and-spring-course"},next:{title:"Introducing Spring Data Redis",permalink:"/develop/java/redis-and-spring-course/lesson_2"}},c=[{value:"Objectives",id:"objectives",children:[]},{value:"Agenda",id:"agenda",children:[]},{value:"Creating a skeleton spring boot application from scratch!",id:"creating-a-skeleton-spring-boot-application-from-scratch",children:[]},{value:"Adding redismod docker compose Git submodule",id:"adding-redismod-docker-compose-git-submodule",children:[]},{value:"Adding redi2read-data git submodule",id:"adding-redi2read-data-git-submodule",children:[]},{value:"Quick start for those in a hurry",id:"quick-start-for-those-in-a-hurry",children:[]},{value:"Starting and testing Redis",id:"starting-and-testing-redis",children:[]},{value:"Using the Redis CLI",id:"using-the-redis-cli",children:[]},{value:"Testing our Redis instance",id:"testing-our-redis-instance",children:[]},{value:"Getting familiar with Redis Commands",id:"getting-familiar-with-redis-commands",children:[]},{value:"External Resources",id:"external-resources",children:[]}],d={toc:c};function p(e){var t=e.components,n=Object(i.a)(e,o);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"objectives"},"Objectives"),Object(r.b)("p",null,"Create the skeleton for the course\u2019s Spring Boot application, configuring all dependencies and launching a suitably configured Redis instance for the course."),Object(r.b)("h3",{id:"agenda"},"Agenda"),Object(r.b)("p",null,"In this lesson, you will learn:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"How to create and configure your Spring Boot application to use Redis"),Object(r.b)("li",{parentName:"ul"},"How to add a docker-compose file as a Git submodule to your application to configure and run Redis"),Object(r.b)("li",{parentName:"ul"},"How to add a Git submodule with the application\u2019s sample raw data"),Object(r.b)("li",{parentName:"ul"},"How to launch a Redis instance suitable for the course")),Object(r.b)("p",null,"If you get stuck:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The progress made in this lesson is available on the redi2read github repository at ",Object(r.b)("a",{parentName:"li",href:"https://github.com/redis-developer/redi2read/tree/course/milestone-1"},"https://github.com/redis-developer/redi2read/tree/course/milestone-1"))),Object(r.b)("h3",{id:"creating-a-skeleton-spring-boot-application-from-scratch"},"Creating a skeleton spring boot application from scratch!"),Object(r.b)("p",null,"If you want to start with a fully configured Spring Boot application and wish to skip the \u201cfrom scratch\u201d part,\nskip to the section \u201cQuick Start For Those In a Hurry.\u201d"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"In your browser, launch the ",Object(r.b)("a",{parentName:"li",href:"https://start.spring.io"},"Spring Initilizr")),Object(r.b)("li",{parentName:"ol"},"Fill out the form using the following settings:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Project: Maven Project"),Object(r.b)("li",{parentName:"ul"},"Language: Java"),Object(r.b)("li",{parentName:"ul"},"Spring Boot: 2.4.4"),Object(r.b)("li",{parentName:"ul"},"Project Metadata:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Group: ",Object(r.b)("inlineCode",{parentName:"li"},"com.redislabs.edu")),Object(r.b)("li",{parentName:"ul"},"Artifact: ",Object(r.b)("inlineCode",{parentName:"li"},"redi2read")),Object(r.b)("li",{parentName:"ul"},"Name: ",Object(r.b)("inlineCode",{parentName:"li"},"redi2read")),Object(r.b)("li",{parentName:"ul"},"Description: Bookstore Web Services Powered by Redis"),Object(r.b)("li",{parentName:"ul"},"Package Name: ",Object(r.b)("inlineCode",{parentName:"li"},"com.redislabs.edu.redi2read")),Object(r.b)("li",{parentName:"ul"},"Packaging: JAR"),Object(r.b)("li",{parentName:"ul"},"Java: 11"))),Object(r.b)("li",{parentName:"ul"},"Dependencies:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Spring Web"),Object(r.b)("li",{parentName:"ul"},"String Data Redis (Access + Driver)"),Object(r.b)("li",{parentName:"ul"},"Spring Security"),Object(r.b)("li",{parentName:"ul"},"Lombok"),Object(r.b)("li",{parentName:"ul"},"Spring Boot DevTools")))),Object(r.b)("p",null,"Alternatively, you can use the following URL: ",Object(r.b)("a",{parentName:"p",href:"http://bit.ly/spring-initlz-redi2read"},"http://bit.ly/spring-initlz-redi2read")," to launch the Spring Initilizr fully configured for the project.\nClick on GENERATE and Initializr will generate the zip file for the project and prompt you to download it to your local machine.\nUnzip the downloaded file (named ",Object(r.b)("inlineCode",{parentName:"p"},"redi2read.zip"),") in a suitable directory. For example on a Mac:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"cd ~/my-directory\nunzip ~/Downloads/redi2read.zip\n")),Object(r.b)("h3",{id:"adding-redismod-docker-compose-git-submodule"},"Adding redismod docker compose Git submodule"),Object(r.b)("p",null,"Now that you have downloaded and unzipped the generated Spring Initializr application, change directories to the app directory (./redi2read) and inspect the contents."),Object(r.b)("p",null,"You should have a full Maven-based Spring Boot application. Since we are going to be adding submodules, let\u2019s put the application in git:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'echo "# redi2read" >> README.md\ngit init\ngit commit --allow-empty -m "git: initial empty commit"\ngit add README.md\ngit commit -m "feat: spring boot + redis initializr app"\ngit branch -M main\n')),Object(r.b)("p",null,"In the previous code block we initialized a git repo in our redi2read application directory.\nAdding an empty git commit facilitates future Git rebase operations."),Object(r.b)("p",null,"Now that we have a basic Spring application, we need to configure a Redis instance for our application.\nWe've created a docker-compose file in a git repository that you can add as a submodule to your application."),Object(r.b)("p",null,"Git submodules, if you haven't encountered them, are a way to nest a git repo within another git repo.\nRead the ",Object(r.b)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Git-Tools-Submodules"},"Git documentation on submodules")," to learn more."),Object(r.b)("p",null,"You\u2019ll find this file in the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/redis-developer/redismod-docker-compose"},"redismod-docker-compose repo"),",\nhosted under the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/redis-developer/"},"redis-developer")," organization in Github.\nThe Repo contains a ",Object(r.b)("a",{parentName:"p",href:"https://docs.docker.com/compose"},"Docker Compose")," file configured to use the Redis \u201credismod\u201d image, which is a Docker image\nthat includes Redis built with select modules. In particular, we will use the ",Object(r.b)("a",{parentName:"p",href:"https://redisjson.io"},"RedisJSON"),", ",Object(r.b)("a",{parentName:"p",href:"https://redisearch.io"},"RediSearch"),",\nand ",Object(r.b)("a",{parentName:"p",href:"https://redisgraph.io"},"RedisGraph")," modules while building this application."),Object(r.b)("p",null,"Modules included in the container:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"RediSearch"),": a full-featured search engine"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"RedisGraph"),": a graph database"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"RedisTimeSeries"),": a time-series database"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"RedisAI"),": a tensor and deep learning model server"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"RedisJSON"),": a native JSON data type"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"RedisBloom"),": native Bloom and Cuckoo Filter data types"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"RedisGears"),": a dynamic execution framework")),Object(r.b)("p",null,"To add the submodule, we use the git submodule command at the root of the project:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"git submodule add git@github.com:redis-developer/redismod-docker-compose.git docker\n")),Object(r.b)("p",null,"The command adds the contents of the passed repository under the folder named \u201cdocker,\u201d which the command will create.\nAt this point you can commit the changes made to the repository."),Object(r.b)("h3",{id:"adding-redi2read-data-git-submodule"},"Adding redi2read-data git submodule"),Object(r.b)("p",null,"The sample data for the application is also provided as a separate Git repo that we will add to our main repository: ",Object(r.b)("inlineCode",{parentName:"p"},"redi2read-data"),".\nThe raw data for our application consists of a collection of JSON documents, representing books and users."),Object(r.b)("h4",{id:"books"},"Books"),Object(r.b)("p",null,"The collection of JSON documents for book data comes from ",Object(r.b)("a",{parentName:"p",href:"https://books.googleapis.com."},"https://books.googleapis.com."),"\nEach file is labelled with the keyword/category used to construct it\nand an incrementing integer (some categories have more books than others) resulting in JSON such as:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'{\n  "pageCount":304,\n  "thumbnail":"http:\\/\\/books.google.com\\/books\\/content?id=prtSDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",\n  "price":42.99,\n  "subtitle":null,\n  "description":"Drowning in unnecessary complexity, unmanaged state, and tangles of spaghetti code? In the best tradition of Lisp, Clojure gets out of your way so you can focus on expressing simple solutions to hard problems.",\n  "language":"en",\n  "currency":"USD",\n  "id":"1680505726",\n  "title":"Programming Clojure",\n  "infoLink":"https:\\/\\/play.google.com\\/store\\/books\\/details?id=prtSDwAAQBAJ&source=gbs_api",\n  "authors":[\n    "Alex Miller",\n    "Stuart Halloway",\n    "Aaron Bedra"\n  ]\n}\n')),Object(r.b)("p",null,"We have an ID (the book ISBN), title, subtitle, description, page count, price, currency, language, thumbnail URL, a link to more information (the \u201cinfoLink\u201d field), and an array of authors."),Object(r.b)("h4",{id:"users"},"Users"),Object(r.b)("p",null,"The user data was randomly created using ",Object(r.b)("a",{parentName:"p",href:"https://randomuser.me"},"https://randomuser.me"),", which generated JSON like:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "password": "9yNvIO4GLBdboI",\n  "name": "Georgia Spencer",\n  "id": -5035019007718357598,\n  "email": "georgia.spencer@example.com"\n}\n')),Object(r.b)("p",null,"To add the submodule use the following command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"git submodule add git@github.com:redis-developer/redi2read-data.git src/main/resources/data\n")),Object(r.b)("p",null,"This submodule will load under the folder ",Object(r.b)("inlineCode",{parentName:"p"},"src/main/resource/data")," within the application folder to facilitate the loading of the data from the classpath. At this point you can commit your work so far to the git repo."),Object(r.b)("h3",{id:"quick-start-for-those-in-a-hurry"},"Quick start for those in a hurry"),Object(r.b)("p",null,"To skip past all the steps outlined above (e.g., initializing a Spring app, adding submodules for data, etc.), simply clone the application with the ",Object(r.b)("inlineCode",{parentName:"p"},"--recurse-submodules")," option, and check out the branch named ",Object(r.b)("inlineCode",{parentName:"p"},"course/milestone-1")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"git clone --branch course/milestone-1 git@github.com:redis-developer/redi2read.git --recurse-submodule\n")),Object(r.b)("h3",{id:"starting-and-testing-redis"},"Starting and testing Redis"),Object(r.b)("p",null,"Let's open a terminal window and change directories to the ",Object(r.b)("inlineCode",{parentName:"p"},"/docker")," directory under our project\u2019s repository.\nTo start our Docker Redis image, we\u2019ll use the docker-compose command as follows:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")),Object(r.b)("p",null,"You should see output similar to this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'Creating network "redi2read_default" with the default driver\nCreating redi2read_redis_1 ... done\nAttaching to redi2read_redis_1\nredis_1  | 1:C 01 Apr 2021 05:19:27.593 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo\nredis_1  | 1:C 01 Apr 2021 05:19:27.593 # Redis version=6.0.1, bits=64, commit=00000000, modified=0, pid=1, just started\nredis_1  | 1:C 01 Apr 2021 05:19:27.593 # Configuration loaded\nredis_1  | 1:M 01 Apr 2021 05:19:27.600 * Running mode=standalone, port=6379.\n...\n')),Object(r.b)("h3",{id:"using-the-redis-cli"},"Using the Redis CLI"),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"https://redis.io/topics/rediscli"},"redis-cli")," is the Redis command line interface, a simple program that allows you to send commands to Redis, and read the replies sent by the server, directly from the terminal."),Object(r.b)("h4",{id:"launching-redis-cli-in-the-container"},"Launching Redis CLI in the container"),Object(r.b)("p",null,"Find the container name using ",Object(r.b)("inlineCode",{parentName:"p"},"docker container ls"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'$ docker container ls\nCONTAINER ID   IMAGE                COMMAND                  CREATED          STATUS         PORTS                    NAMES\n0f99ea35b9c1   redislabs/redismod   "redis-server --load\u2026"   57 minutes ago   Up 7 minutes   0.0.0.0:6379->6379/tcp   docker_redis_1\n')),Object(r.b)("p",null,"With the name ",Object(r.b)("inlineCode",{parentName:"p"},"docker_redis_1")," we can run bash in the container and then start the redis-cli:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ docker exec -it docker_redis_1 bash\nroot@0f99ea35b9c1:/data# redis-cli\n127.0.0.1:6379>\n")),Object(r.b)("h4",{id:"launching-redis-cli-locally"},"Launching Redis CLI Locally"),Object(r.b)("p",null,"If you already have the Redis CLI installed locally, you can launch it by simply entering:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ redis-cli\n127.0.0.1:6379>\n")),Object(r.b)("h3",{id:"testing-our-redis-instance"},"Testing our Redis instance"),Object(r.b)("p",null,"The most basic of commands, PING is used to \u201cping\u201d the server. If we get a response back, we know that the Redis server is alive and kicking:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> PING\nPONG\n127.0.0.1:6379> PING Marco!\n"Marco!"\n127.0.0.1:6379>\n')),Object(r.b)("h4",{id:"checking-for-the-installed-redis-modules"},"Checking for the installed Redis modules"),Object(r.b)("p",null,"Since we have a customized Redis instance which includes several Redis modules, we can check for which modules have been installed:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> MODULE LIST\n1) 1) "name"\n   2) "search"\n   3) "ver"\n   4) (integer) 20006\n2) 1) "name"\n   2) "graph"\n   3) "ver"\n   4) (integer) 20215\n3) 1) "name"\n   2) "ReJSON"\n   3) "ver"\n   4) (integer) 10007\n4) 1) "name"\n   2) "bf"\n   3) "ver"\n   4) (integer) 20205\n5) 1) "name"\n   2) "timeseries"\n   3) "ver"\n   4) (integer) 10408\n6) 1) "name"\n   2) "ai"\n   3) "ver"\n   4) (integer) 10002\n7) 1) "name"\n   2) "rg"\n   3) "ver"\n   4) (integer) 10006\n')),Object(r.b)("h3",{id:"getting-familiar-with-redis-commands"},"Getting familiar with Redis Commands"),Object(r.b)("p",null,"Keys are unique identifiers, whose value can be any one of the data types that Redis supports.  These data types range from simple Strings, to Lists, Sets, and even Streams.  Each data type has its own set of behaviors and commands associated with it."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> SET myname "Brian"\nOK\n127.0.0.1:6379> GET myname\n"Brian"\n127.0.0.1:6379> TYPE myname\nstring\n')),Object(r.b)("p",null,"Keys in a Redis database are distributed in a flat keyspace. Redis does not enforce a schema or naming policy for keys.\nThis provides great flexibility, with the organization of the keyspace being the responsibility of the developer.\nWe'll look at ways of managing this later in the course.\nRedis is famous for being an extremely fast database.\nThis speed comes from the fact that it stores and serves all data from RAM rather than disk.\nRedis is durable, so your data will be persisted but all reads will be from a copy of the data held in RAM.\nThis makes Redis an excellent choice for applications that require real time data access."),Object(r.b)("h3",{id:"external-resources"},"External Resources"),Object(r.b)("p",null,"Here's some resources that we think will be useful to you as you discover Redis:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://redis.io/"},"redis.io")," - the official website of open source Redis."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://redis.com/redis-enterprise-cloud/overview/"},"Redis Enterprise Cloud")," - a fully managed cloud service from Redis with a free plan for getting started."),Object(r.b)("li",{parentName:"ul"},"The official ",Object(r.b)("a",{parentName:"li",href:"https://hub.docker.com/_/redis/"},"Redis Docker image"),"."),Object(r.b)("li",{parentName:"ul"},"For a comprehensive introduction to Redis, we recommend taking a look at the ",Object(r.b)("a",{parentName:"li",href:"https://university.redis.com/courses/ru101/"},"RU101: Introduction to Redis Data Structures")," course at Redis University. In this free online course, you\u2019ll learn about the data structures in Redis, and you\u2019ll see how to practically apply them in the real world.")))}p.isMDXComponent=!0},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||r;return n?i.a.createElement(m,s(s({ref:t},c),{},{components:n})):i.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},394:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n(20),i=n(401);function r(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,o=r.forcePrependBaseUrl,s=void 0!==o&&o,l=r.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(s)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+d:d}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},401:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))}}]);