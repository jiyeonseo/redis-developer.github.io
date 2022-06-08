(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{1299:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisgraph1-b44744e302a6aaf7c455dbcffee3b325.png"},1300:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisgraph-2105f44e0f297f5a5cc67c8b6ed4fcdc.png"},1301:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisgraphflow-d35eff71cab37cb13ed5dc479bba4fbd.png"},1302:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisgraph4-f408a02a39ac7bb111677a317bd5b695.png"},336:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return p}));var r=a(3),i=a(7),n=(a(0),a(393)),s=["components"],o={id:"index-redisgraph",title:"RedisGraph",sidebar_label:"RedisGraph",slug:"/modules/redisgraph"},c={unversionedId:"modules/redisgraph/index-redisgraph",id:"modules/redisgraph/index-redisgraph",isDocsHomePage:!1,title:"RedisGraph",description:"RedisGraph is a Redis module that enables enterprises to process any kind of connected data much faster than with traditional relational or existing graph databases. RedisGraph implements a unique data storage and processing solution (with sparse-adjacency matrices and GraphBLAS) to deliver the fastest and most efficient way to store, manage, and process connected data in graphs. With RedisGraph, you can process complex transactions 10 - 600 times faster than with traditional graph solutions while using 50 - 60% less memory resources than other graph databases!",source:"@site/docs/modules/redisgraph/index-redisgraph.mdx",slug:"/modules/redisgraph",permalink:"/modules/redisgraph",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/modules/redisgraph/index-redisgraph.mdx",version:"current",lastUpdatedAt:1637877355,sidebar_label:"RedisGraph"},d=[{value:"Step 1. Register and subscribe",id:"step-1-register-and-subscribe",children:[]},{value:"Step 2. Create a database with RedisGraph Module",id:"step-2-create-a-database-with-redisgraph-module",children:[]},{value:"Step 3. Connect to a database",id:"step-3-connect-to-a-database",children:[]},{value:"Step 4. Getting Started with RedisGraph",id:"step-4-getting-started-with-redisgraph",children:[]},{value:"Step 5: Insert data into a graph",id:"step-5-insert-data-into-a-graph",children:[]},{value:"Next Step",id:"next-step",children:[]}],l={toc:d};function p(e){var t=e.components,o=Object(i.a)(e,s);return Object(n.b)("wrapper",Object(r.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"RedisGraph is a Redis module that enables enterprises to process any kind of connected data much faster than with traditional relational or existing graph databases. RedisGraph implements a unique data storage and processing solution (with sparse-adjacency matrices and GraphBLAS) to deliver the fastest and most efficient way to store, manage, and process connected data in graphs. With RedisGraph, you can process complex transactions 10 - 600 times faster than with traditional graph solutions while using 50 - 60% less memory resources than other graph databases!"),Object(n.b)("h3",{id:"step-1-register-and-subscribe"},"Step 1. Register and subscribe"),Object(n.b)("p",null,"Follow ",Object(n.b)("a",{parentName:"p",href:"/create/cloud/rediscloud"},"this link to register")," and subscribe to Redis Enterprise Cloud"),Object(n.b)("p",null,Object(n.b)("img",{alt:"RedisGraph",src:a(1299).default})),Object(n.b)("h3",{id:"step-2-create-a-database-with-redisgraph-module"},"Step 2. Create a database with RedisGraph Module"),Object(n.b)("p",null,Object(n.b)("img",{alt:"RedisGraph",src:a(1300).default})),Object(n.b)("h3",{id:"step-3-connect-to-a-database"},"Step 3. Connect to a database"),Object(n.b)("p",null,"Follow ",Object(n.b)("a",{parentName:"p",href:"explore/redisinsight"},"this")," link to know how to connect to a database"),Object(n.b)("h3",{id:"step-4-getting-started-with-redisgraph"},"Step 4. Getting Started with RedisGraph"),Object(n.b)("p",null,"In the following steps, we will use some basic RediGraph commands to insert data into a graph and then query the graph. You can run them from the Redis command-line interface (redis-cli) or use the CLI available in RedisInsight. (See part 2 of this tutorial to learn more about using the RedisInsight CLI.)"),Object(n.b)("p",null,Object(n.b)("img",{alt:"RedisGraph",src:a(1301).default})),Object(n.b)("h3",{id:"step-5-insert-data-into-a-graph"},"Step 5: Insert data into a graph"),Object(n.b)("h4",{id:"insert-actors"},"Insert actors"),Object(n.b)("p",null,"To interact with RedisGraph you will typically use the GRAPH.QUERY command and execute Cypher queries. Let\u2019s start to insert some actors into the graph:movies graph name, which is automatically created using this command:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},'>> GRAPH.QUERY graph:movies "CREATE (:Actor {name:\'Mark Hamill\', actor_id:1}), (:Actor {name:\'Harrison Ford\', actor_id:2}), (:Actor {name:\'Carrie Fisher\', actor_id:3})"\n\n1) 1) "Labels added: 1"\n   2) "Nodes created: 3"\n   3) "Properties set: 6"\n   4) "Query internal execution time: 0.675400 milliseconds"\n')),Object(n.b)("p",null,"This single query creates three actors, along with their names and unique IDs."),Object(n.b)("h4",{id:"insert-a-movie"},"Insert a movie"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},'> GRAPH.QUERY graph:movies "CREATE (:Movie {title:\'Star Wars: Episode V - The Empire Strikes Back\', release_year: 1980 , movie_id:1})"\n1) 1) "Labels added: 1"\n   2) "Nodes created: 1"\n   3) "Properties set: 3"\n   4) "Query internal execution time: 0.392300 milliseconds"\n')),Object(n.b)("p",null,"This single query creates a movie with a title, the release year, and an ID."),Object(n.b)("h4",{id:"associate-actors-and-movies"},"Associate actors and movies"),Object(n.b)("p",null,"The core of a graph is the relationships between the nodes, allowing the applications to navigate and query them. Let\u2019s create a relationship between the actors and the movies:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},'> GRAPH.QUERY graph:movies "MATCH (a:Actor),(m:Movie) WHERE a.actor_id = 1 AND m.movie_id = 1 CREATE (a)-[r:Acted_in {role:\'Luke Skywalker\'}]->(m) RETURN r"\n1) 1) "r"\n2) 1) 1) 1) 1) "id"\n            2) (integer) 1\n         2) 1) "type"\n            2) "Acted_in"\n         3) 1) "src_node"\n            2) (integer) 0\n         4) 1) "dest_node"\n            2) (integer) 3\n         5) 1) "properties"\n            2) 1) 1) "role"\n                  2) "Luke Skywalker"\n3) 1) "Properties set: 1"\n   2) "Relationships created: 1"\n   3) "Query internal execution time: 0.664800 milliseconds"\n')),Object(n.b)("p",null,"This command created a new relation indicating that the actor Mark Hamill acted in Star Wars: Episode V  as Luke Skywalker."),Object(n.b)("p",null,"Let\u2019s repeat this process for the other actors:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"> GRAPH.QUERY graph:movies \"MATCH (a:Actor), (m:Movie) WHERE a.actor_id = 2 AND m.movie_id = 1 CREATE (a)-[r:Acted_in {role:'Han Solo'}]->(m) RETURN r\"\n> GRAPH.QUERY graph:movies \"MATCH (a:Actor), (m:Movie) WHERE a.actor_id = 3 AND m.movie_id = 1 CREATE (a)-[r:Acted_in {role:'Princess Leila'}]->(m) RETURN r\"\n")),Object(n.b)("p",null,"You can also do all of this in a single query, for example:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},'> GRAPH.QUERY graph:movies "CREATE (:Actor {name:\'Marlo Brando\', actor_id:4})-[:Acted_in {role:\'Don Vito Corleone\'}]->(:Movie {title:\'The Godfather\', release_year: 1972 , movie_id:2})"\n\n1) 1) "Nodes created: 2"\n   2) "Properties set: 6"\n   3) "Relationships created: 1"\n   4) "Query internal execution time: 0.848500 milliseconds"\n')),Object(n.b)("h4",{id:"querying-the-graph"},"Querying the graph"),Object(n.b)("p",null,"Now that you have data in your graph, you\u2019re ready to ask some questions, such as:"),Object(n.b)("h4",{id:"what-are-the-titles-of-all-the-movies"},"\u201cWhat are the titles of all the movies?\u201d"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},'> GRAPH.QUERY graph:movies "MATCH (m:Movie) RETURN m.title"\n\n1) 1) "m.title"\n2) 1) 1) "Star Wars: Episode V - The Empire Strikes Back"\n   2) 1) "The Godfather"\n3) 1) "Query internal execution time: 0.349400 milliseconds"\n')),Object(n.b)("h4",{id:"what-is-the-information-for-the-movie-with-the-id-of--1"},"\u201cWhat is the information for the movie with the ID of  1?\u201d"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},'> GRAPH.QUERY graph:movies "MATCH (m:Movie) WHERE m.movie_id = 1 RETURN m"\n\n1) 1) "m"\n2) 1) 1) 1) 1) "id"\n            2) (integer) 3\n         2) 1) "labels"\n            2) 1) "Movie"\n         3) 1) "properties"\n            2) 1) 1) "title"\n                  2) "Star Wars: Episode V - The Empire Strikes Back"\n               2) 1) "release_year"\n                  2) (integer) 1980\n               3) 1) "movie_id"\n                  2) (integer) 1\n3) 1) "Query internal execution time: 0.365800 milliseconds"\n')),Object(n.b)("h4",{id:"who-are-the-actors-in-the-movie-star-wars-episode-v---the-empire-strikes-back-and-what-roles-did-they-play"},"\u201cWho are the actors in the movie 'Star Wars: Episode V - The Empire Strikes Back' and what roles did they play?\u201d"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},'> GRAPH.QUERY graph:movies "MATCH (a:Actor)-[r:Acted_in]-(m:Movie) WHERE m.movie_id = 1 RETURN a.name,m.title,r.role"\n1) 1) "a.name"\n   2) "m.title"\n   3) "r.role"\n2) 1) 1) "Mark Hamill"\n      2) "Star Wars: Episode V - The Empire Strikes Back"\n      3) "Luke Skywalker"\n   2) 1) "Harrison Ford"\n      2) "Star Wars: Episode V - The Empire Strikes Back"\n      3) "Han Solo"\n   3) 1) "Carrie Fisher"\n      2) "Star Wars: Episode V - The Empire Strikes Back"\n      3) "Princess Leila"\n3) 1) "Query internal execution time: 0.641200 milliseconds"\n')),Object(n.b)("h4",{id:"visualizing-graph-databases-with-redisinsight"},"Visualizing graph databases with RedisInsight"),Object(n.b)("p",null,"If you are using RedisInsight, you can visualize and navigate into the nodes and relationships graphically.\nClick on the RedisGraph menu entry on the left and enter the query:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"MATCH (m:Actor) return m\n")),Object(n.b)("p",null,"Click on the Execute button, and double click on the actors to follow the relationships You should see a graph like this one:"),Object(n.b)("p",null,Object(n.b)("img",{alt:"RedisGraph",src:a(1302).default})),Object(n.b)("h3",{id:"next-step"},"Next Step"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Learn more about RedisGraph in the ",Object(n.b)("a",{parentName:"li",href:"https://oss.redis.com/redisgraph/"},"Quickstart")," tutorial.")))}p.isMDXComponent=!0},393:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var r=a(0),i=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=i.a.createContext({}),l=function(e){var t=i.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(a),u=r,b=p["".concat(s,".").concat(u)]||p[u]||h[u]||n;return a?i.a.createElement(b,o(o({ref:t},d),{},{components:a})):i.a.createElement(b,o({ref:t},d))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<n;d++)s[d]=a[d];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);