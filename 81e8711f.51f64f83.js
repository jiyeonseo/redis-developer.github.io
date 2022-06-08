(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{231:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var i=a(3),n=a(7),r=(a(0),a(393)),s=["components"],o={id:"index-redisearch",title:"Full-text search using Redis Stack",sidebar_label:"RediSearch Tutorial",slug:"/howtos/redisearch",authors:["ajeet"]},d={unversionedId:"howtos/redisearch/index-redisearch",id:"howtos/redisearch/index-redisearch",isDocsHomePage:!1,title:"Full-text search using Redis Stack",description:"RediSearch is a powerful text search and secondary indexing engine, built on top of Redis as a Redis module. Written in C, RediSearch is extremely fast compared to other open-source search engines. It implements multiple data types and commands that fundamentally change what you can do with Redis. RediSearch supports capabilities for search and filtering such as geo-spatial queries, retrieving only IDs (instead of whole documents), and custom document scoring. Aggregations can combine map, filter, and reduce/group-by operations in custom pipelines that run across millions of elements in an instant.",source:"@site/docs/howtos/redisearch/index-redisearch.mdx",slug:"/howtos/redisearch",permalink:"/howtos/redisearch",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisearch/index-redisearch.mdx",version:"current",lastUpdatedAt:1648472625,sidebar_label:"RediSearch Tutorial",sidebar:"docs",previous:{title:"HowTos & Tutorials",permalink:"/howtos"},next:{title:"RedisJSON Tutorial",permalink:"/howtos/redisjson/"}},c=[{value:"Step 1. Create a free Cloud account",id:"step-1-create-a-free-cloud-account",children:[]},{value:"Step 2. Create Your database",id:"step-2-create-your-database",children:[]},{value:"Step 3.  Verify the database details",id:"step-3--verify-the-database-details",children:[]},{value:"Step 4. Using RedisInsight",id:"step-4-using-redisinsight",children:[]},{value:"Step 5. Add Redis database",id:"step-5-add-redis-database",children:[]},{value:"Step 6. Enter Redis Enterprise Cloud details",id:"step-6-enter-redis-enterprise-cloud-details",children:[]},{value:"Step 7. Verify the database under RedisInsight dashboard",id:"step-7-verify-the-database-under-redisinsight-dashboard",children:[]},{value:"Step 8. Getting Started with Redisearch",id:"step-8-getting-started-with-redisearch",children:[]},{value:"Next Step",id:"next-step",children:[]}],l={toc:c};function u(e){var t=e.components,o=Object(n.a)(e,s);return Object(r.b)("wrapper",Object(i.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"RediSearch is a powerful text search and secondary indexing engine, built on top of Redis as a Redis module. Written in C, RediSearch is extremely fast compared to other open-source search engines. It implements multiple data types and commands that fundamentally change what you can do with Redis. RediSearch supports capabilities for search and filtering such as geo-spatial queries, retrieving only IDs (instead of whole documents), and custom document scoring. Aggregations can combine map, filter, and reduce/group-by operations in custom pipelines that run across millions of elements in an instant. "),Object(r.b)("p",null,"RediSearch also supports auto-completion with fuzzy prefix matching, and atomic real-time insertion of new documents to a search index. With the latest RediSearch 2.0 release, it\u2019s now easier than ever to create a secondary index on top of your existing data. You can just add RediSearch to your existing Redis database, create an index, and start querying it, without having to migrate your data or use new commands for adding data to the index. This drastically lowers the learning curve for new RediSearch users and lets you create indexes on your existing Redis databases\u2014without even having to restart them."),Object(r.b)("h3",{id:"step-1-create-a-free-cloud-account"},"Step 1. Create a free Cloud account"),Object(r.b)("p",null,"Create your free ",Object(r.b)("a",{href:"https://redis.com/try-free/",target:"_blank",rel:"noopener"},"Redis Enterprise Cloud account"),". Once you click on \u201cGet Started\u201d, you will receive an email with a link to activate your account and complete your signup process."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"TIP")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"For a limited time, use ",Object(r.b)("strong",{parentName:"p"},"TIGER200")," to get ",Object(r.b)("strong",{parentName:"p"},"$200")," credits on Redis Enterprise Cloud and try all the advanced capabilities!"),Object(r.b)("p",{parentName:"div"},"\ud83c\udf89 ",Object(r.b)("a",{parentName:"p",href:"https://redis.com/try-free"},"Click here to sign up")))),Object(r.b)("h3",{id:"step-2-create-your-database"},"Step 2. Create Your database"),Object(r.b)("p",null,'Choose your preferred cloud vendor. Select the region and then click "Let\'s start free" to create your free database automatically.'),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"TIP")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},'If you want to create a custom database with your preferred name and type of Redis,\nclick "Create a custom database" option shown in the image.'))),Object(r.b)("p",null,Object(r.b)("img",{alt:"create database ",src:a(929).default})),Object(r.b)("h3",{id:"step-3--verify-the-database-details"},"Step 3.  Verify the database details"),Object(r.b)("p",null,'You will be provided with Public endpoint URL and "Redis Stack" as the type of database with the list of modules that comes by default.'),Object(r.b)("p",null,Object(r.b)("img",{alt:"verify database",src:a(930).default})),Object(r.b)("h3",{id:"step-4-using-redisinsight"},"Step 4. Using RedisInsight"),Object(r.b)("p",null,"RedisInsight is a visual tool that lets you do both GUI- and CLI-based interactions with your Redis database, and so much more when developing your Redis based application. It is a fully-featured pure Desktop GUI client that provides capabilities to design, develop and optimize your Redis application. It works with any cloud provider as long as you run it on a host with network access to your cloud-based Redis server. It makes it easy to discover cloud databases and configure connection details with a single click. It allows you to automatically add Redis Enterprise Software and Redis Enterprise Cloud databases."),Object(r.b)("p",null,'Assuming that you already have RedisInsight v2 installed on your MacOS, you can browse through the Applications and click "RedisInsight-v2" to bring up the Redis Desktop GUI tool.'),Object(r.b)("h3",{id:"step-5-add-redis-database"},"Step 5. Add Redis database"),Object(r.b)("p",null,Object(r.b)("img",{alt:"access redisinsight",src:a(931).default})),Object(r.b)("h3",{id:"step-6-enter-redis-enterprise-cloud-details"},"Step 6. Enter Redis Enterprise Cloud details"),Object(r.b)("p",null,"Add the Redis Enterprise cloud database endpoint, port and password."),Object(r.b)("p",null,Object(r.b)("img",{alt:"access redisinsight",src:a(932).default})),Object(r.b)("h3",{id:"step-7-verify-the-database-under-redisinsight-dashboard"},"Step 7. Verify the database under RedisInsight dashboard"),Object(r.b)("p",null,Object(r.b)("img",{alt:"database details",src:a(933).default})),Object(r.b)("h3",{id:"step-8-getting-started-with-redisearch"},"Step 8. Getting Started with Redisearch"),Object(r.b)("p",null,"To begin, let\u2019s create a basic dataset based on movies information, which we will use to show how to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Insert data"),Object(r.b)("li",{parentName:"ul"},"Create an index"),Object(r.b)("li",{parentName:"ul"},"Query data")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Redisearch",src:a(934).default})),Object(r.b)("h4",{id:"insert-data-into-redisearch"},"Insert data into RediSearch"),Object(r.b)("p",null,"We are now ready to insert some data. This example uses movies data stored as Redis Hashes, so let\u2019s insert a couple of movies:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'HSET movies:11002 title "Star Wars: Episode V - The Empire Strikes Back" plot "Luke Skywalker begins Jedi training with Yoda." release_year 1980 genre "Action" rating 8.7 votes 1127635\n\n(integer) 6 \n\n> HSET movies:11003 title "The Godfather" plot "The aging patriarch of an organized crime dynasty transfers control of his empire to his son." release_year 1972 genre "Drama" rating 9.2 votes 1563839 \n\n(integer) 6\n')),Object(r.b)("p",null,"Your Redis Enterprise Cloud database now contains two Hashes. It is simple to retrieve information using the HMGET command, if you know the key of the movies (movies:11002):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'> HMGET movies:11002 title rating\n\n1) "Star Wars: Episode V - The Empire Strikes Back"\n2) "8.7"\n')),Object(r.b)("h4",{id:"create-an-index-in-redisearch"},"Create an index in RediSearch"),Object(r.b)("p",null,"To be able to query the hashes on the field for title, say, or genre, you must first create an index. To create an index, you must define a schema to list the fields and their types that are indexed, and that you can use in your queries."),Object(r.b)("p",null,"Use the FT.CREATE command to create an index, as shown here:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'> FT.CREATE idx:movies ON hash PREFIX 1 "movies:" SCHEMA title TEXT SORTABLE release_year NUMERIC SORTABLE rating NUMERIC SORTABLE genre TAG SORTABLE\n\nOK\n')),Object(r.b)("p",null,"In the command above, we:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create an index named idx:movies"),Object(r.b)("li",{parentName:"ul"},"Used a schema made up of four fields:\ntitle\nrelease_year\nrating\ngenre")),Object(r.b)("p",null,"Before running queries on our new index, though, let\u2019s take a closer look at the elements of the FT.CREATE command:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"idx:movies: the name of the index, which you will use when doing queries"),Object(r.b)("li",{parentName:"ul"},"ON hash: the type of structure to be indexed. (Note that RediSearch 2.0 supports only the Hash structure, but this parameter will allow RediSearch to index other structures in the future.)"),Object(r.b)("li",{parentName:"ul"},"PREFIX 1 \u201cmovies:\u201d: the prefix of the keys that should be indexed. This is a list, so since we want to index only movies:* keys the number is 1. If you want to index movies and TV shows with the same fields, you could use: PREFIX 2 \u201cmovies:\u201d \u201ctv_show:\u201d"),Object(r.b)("li",{parentName:"ul"},"SCHEMA \u2026: defines the schema, the fields, and their type to index. As you can see in the command, we are using TEXT, NUMERIC, and TAG, as well as SORTABLE parameters.")),Object(r.b)("p",null,"The RediSearch 2.0 engine will scan the database using the PREFIX values, and update the index based on the schema definition. This makes it easy to add an index to an existing application that uses Hashes, there\u2019s no need to change your code."),Object(r.b)("h4",{id:"search-the-movies-in-the-redisearch-index"},"Search the movies in the RediSearch index"),Object(r.b)("p",null,"You can now use the FT.SEARCH to search your database, for example, to search all movies sorted by release year:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'>  FT.SEARCH idx:movies * SORTBY release_year ASC RETURN 2 title release_year\n1) (integer) 2\n2) "movies:1003"\n3) 1) "release_year"\n   2) "1972"\n   3) "title"\n   4) "The Godfather"\n4) "movies:1002"\n5) 1) "release_year"\n   2) "1980"\n   3) "title"\n   4) "Star Wars: Episode V - The Empire Strikes Back"\n')),Object(r.b)("p",null,"You can also search \u201caction\u201d movies that contain \u201cstar\u201d in the index (in our sample index, the term \u201cstar\u201d will occur only in the title):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'>  FT.SEARCH idx:movies "star @genre:{action}" RETURN 2 title release_year\n1) (integer) 1\n2) "movies:1002"\n3) 1) "title"\n   2) "Star Wars: Episode V - The Empire Strikes Back"\n   3) "release_year"\n   4) "1980"\n')),Object(r.b)("p",null,"The FT.SEARCH command is the base command to search your database, it has many options and is associated with a powerful and rich query syntax that you can find in the documentation. (Note: You can also use the index to do data aggregation using the FT.AGGREGATE command.)"),Object(r.b)("h3",{id:"next-step"},"Next Step"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Learn more about RediSearch in the ",Object(r.b)("a",{parentName:"li",href:"https://github.com/RediSearch/redisearch-getting-started/"},"Getting Started with RediSearch 2.0"),"  tutorial on GitHub."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/howtos/moviesdatabase/getting-started"},"How to list and search Movie database using Redisearch"))))}u.isMDXComponent=!0},393:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var i=a(0),n=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),l=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(a),p=i,b=u["".concat(s,".").concat(p)]||u[p]||h[p]||r;return a?n.a.createElement(b,o(o({ref:t},c),{},{components:a})):n.a.createElement(b,o({ref:t},c))}));function b(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},929:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/select_cloud_vendor-1ad229a2effb7aad2f19495d0cea18fb.png"},930:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/details_database-471fa25198e8a549638e2fc8710b96c0.png"},931:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/add_database-9830232a6e209dc61f0bfd5a8bf87ea4.png"},932:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/database_creds-f7ab4af8f0121712ed02fff3901ebfec.png"},933:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/database_details-d49880aa22636d96917ad114493a4711.png"},934:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisearch12-9bd265678de5cf0028ce56ae124468e1.png"}}]);