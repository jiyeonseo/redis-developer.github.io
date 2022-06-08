(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{1430:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisearch3-b44744e302a6aaf7c455dbcffee3b325.png"},1431:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisearch11-97f6b91b53c4322f8861ac0f006d29a3.png"},1432:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisearch12-9bd265678de5cf0028ce56ae124468e1.png"},387:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),i=(a(0),a(393)),s=["components"],o={id:"index-redisearch",title:"RediSearch",sidebar_label:"RediSearch",slug:"/modules/redisearch"},c={unversionedId:"modules/redisearch/index-redisearch",id:"modules/redisearch/index-redisearch",isDocsHomePage:!1,title:"RediSearch",description:"RediSearch is a powerful text search and secondary indexing engine, built on top of Redis as a Redis module. Written in C, RediSearch is extremely fast compared to other open-source search engines. It implements multiple data types and commands that fundamentally change what you can do with Redis. RediSearch supports capabilities for search and filtering such as geo-spatial queries, retrieving only IDs (instead of whole documents), and custom document scoring. Aggregations can combine map, filter, and reduce/group-by operations in custom pipelines that run across millions of elements in an instant.",source:"@site/docs/modules/redisearch/index-redisearch.mdx",slug:"/modules/redisearch",permalink:"/modules/redisearch",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/modules/redisearch/index-redisearch.mdx",version:"current",lastUpdatedAt:1615958541,sidebar_label:"RediSearch"},d=[{value:"Step 1. Register and subscribe",id:"step-1-register-and-subscribe",children:[]},{value:"Step 2. Create a database with Redisearch Module",id:"step-2-create-a-database-with-redisearch-module",children:[]},{value:"Step 3. Connect to a database",id:"step-3-connect-to-a-database",children:[]},{value:"Step 4. Getting Started with Redisearch",id:"step-4-getting-started-with-redisearch",children:[]},{value:"Next Step",id:"next-step",children:[]}],l={toc:d};function u(e){var t=e.components,o=Object(r.a)(e,s);return Object(i.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"RediSearch is a powerful text search and secondary indexing engine, built on top of Redis as a Redis module. Written in C, RediSearch is extremely fast compared to other open-source search engines. It implements multiple data types and commands that fundamentally change what you can do with Redis. RediSearch supports capabilities for search and filtering such as geo-spatial queries, retrieving only IDs (instead of whole documents), and custom document scoring. Aggregations can combine map, filter, and reduce/group-by operations in custom pipelines that run across millions of elements in an instant. "),Object(i.b)("p",null,"RediSearch also supports auto-completion with fuzzy prefix matching, and atomic real-time insertion of new documents to a search index.With the latest RediSearch 2.0 release, it\u2019s now easier than ever to create a secondary index on top of your existing data. You can just add RediSearch to your existing Redis database, create an index, and start querying it, without having to migrate your data or use new commands for adding data to the index. This drastically lowers the learning curve for new RediSearch users and lets you create indexes on your existing Redis databases\u2014without even having to restart them."),Object(i.b)("h3",{id:"step-1-register-and-subscribe"},"Step 1. Register and subscribe"),Object(i.b)("p",null,"Follow ",Object(i.b)("a",{parentName:"p",href:"/create/cloud/rediscloud"},"this link to register")," and subscribe to Redis Enterprise Cloud"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Redisearch",src:a(1430).default})),Object(i.b)("h3",{id:"step-2-create-a-database-with-redisearch-module"},"Step 2. Create a database with Redisearch Module"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Redisearch",src:a(1431).default})),Object(i.b)("h3",{id:"step-3-connect-to-a-database"},"Step 3. Connect to a database"),Object(i.b)("p",null,"Follow ",Object(i.b)("a",{parentName:"p",href:"explore/redisinsight"},"this")," link to know how to connect to a database"),Object(i.b)("h3",{id:"step-4-getting-started-with-redisearch"},"Step 4. Getting Started with Redisearch"),Object(i.b)("p",null,"To begin, let\u2019s create a basic dataset based on movies information, which we will use to show how to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Insert data"),Object(i.b)("li",{parentName:"ul"},"Create an index"),Object(i.b)("li",{parentName:"ul"},"Query data")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Redisearch",src:a(1432).default})),Object(i.b)("h4",{id:"insert-data-into-redisearch"},"Insert data into RediSearch"),Object(i.b)("p",null,"We are now ready to insert some data. This example uses movies data stored as Redis Hashes, so let\u2019s insert a couple of movies:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'HSET movies:11002 title "Star Wars: Episode V - The Empire Strikes Back" plot "Luke Skywalker begins Jedi training with Yoda." release_year 1980 genre "Action" rating 8.7 votes 1127635\n\n(integer) 6 \n\n> HSET movies:11003 title "The Godfather" plot "The aging patriarch of an organized crime dynasty transfers control of his empire to his son." release_year 1972 genre "Drama" rating 9.2 votes 1563839 \n\n(integer) 6\n')),Object(i.b)("p",null,"Your Redis Enterprise Cloud database now contains two Hashes. It is simple to retrieve information using the HMGET command, if you know the key of the movies (movies:11002):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'> HMGET movies:11002 title rating\n\n1) "Star Wars: Episode V - The Empire Strikes Back"\n2) "8.7"\n')),Object(i.b)("h4",{id:"create-an-index-in-redisearch"},"Create an index in RediSearch"),Object(i.b)("p",null,"To be able to query the hashes on the field for title, say, or genre, you must first create an index. To create an index, you must define a schema to list the fields and their types that are indexed, and that you can use in your queries."),Object(i.b)("p",null,"Use the FT.CREATE command to create an index, as shown here:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'> FT.CREATE idx:movies ON hash PREFIX 1 "movies:" SCHEMA title TEXT SORTABLE release_year NUMERIC SORTABLE rating NUMERIC SORTABLE genre TAG SORTABLE\n\nOK\n')),Object(i.b)("p",null,"In the command above, we:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create an index named idx:movies"),Object(i.b)("li",{parentName:"ul"},"Used a schema made up of four fields:\ntitle\nrelease_year\nrating\ngenre")),Object(i.b)("p",null,"Before running queries on our new index, though, let\u2019s take a closer look at the elements of the FT.CREATE command:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"idx:movies: the name of the index, which you will use when doing queries"),Object(i.b)("li",{parentName:"ul"},"ON hash: the type of structure to be indexed. (Note that RediSearch 2.0 supports only the Hash structure, but this parameter will allow RediSearch to index other structures in the future.)"),Object(i.b)("li",{parentName:"ul"},"PREFIX 1 \u201cmovies:\u201d: the prefix of the keys that should be indexed. This is a list, so since we want to index only movies:* keys the number is 1. If you want to index movies and TV shows with the same fields, you could use: PREFIX 2 \u201cmovies:\u201d \u201ctv_show:\u201d"),Object(i.b)("li",{parentName:"ul"},"SCHEMA \u2026: defines the schema, the fields, and their type to index. As you can see in the command, we are using TEXT, NUMERIC, and TAG, as well as SORTABLE parameters.")),Object(i.b)("p",null,"The RediSearch 2.0 engine will scan the database using the PREFIX values, and update the index based on the schema definition. This makes it easy to add an index to an existing application that uses Hashes, there\u2019s no need to change your code."),Object(i.b)("h4",{id:"search-the-movies-in-the-redisearch-index"},"Search the movies in the RediSearch index"),Object(i.b)("p",null,"You can now use the FT.SEARCH to search your database, for example, to search all movies sorted by release year:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'>  FT.SEARCH idx:movies * SORTBY release_year ASC RETURN 2 title release_year\n1) (integer) 2\n2) "movies:1003"\n3) 1) "release_year"\n   2) "1972"\n   3) "title"\n   4) "The Godfather"\n4) "movies:1002"\n5) 1) "release_year"\n   2) "1980"\n   3) "title"\n   4) "Star Wars: Episode V - The Empire Strikes Back"\n')),Object(i.b)("p",null,"You can also search \u201caction\u201d movies that contain \u201cstar\u201d in the index (in our sample index, the term \u201cstar\u201d will occur only in the title):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'>  FT.SEARCH idx:movies "star @genre:{action}" RETURN 2 title release_year\n1) (integer) 1\n2) "movies:1002"\n3) 1) "title"\n   2) "Star Wars: Episode V - The Empire Strikes Back"\n   3) "release_year"\n   4) "1980"\n')),Object(i.b)("p",null,"The FT.SEARCH command is the base command to search your database, it has many options and is associated with a powerful and rich query syntax that you can find in the documentation. (Note: You can also use the index to do data aggregation using the FT.AGGREGATE command.)"),Object(i.b)("h3",{id:"next-step"},"Next Step"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Learn more about RediSearch in the ",Object(i.b)("a",{parentName:"li",href:"https://github.com/RediSearch/redisearch-getting-started/"},"Getting Started with RediSearch 2.0"),"  tutorial on GitHub."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/howtos/moviesdatabase/getting-started"},"How to list and search Movie database using Redisearch"))))}u.isMDXComponent=!0},393:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(a),p=n,b=u["".concat(s,".").concat(p)]||u[p]||h[p]||i;return a?r.a.createElement(b,o(o({ref:t},d),{},{components:a})):r.a.createElement(b,o({ref:t},d))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);