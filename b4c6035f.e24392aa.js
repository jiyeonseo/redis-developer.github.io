(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{295:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return d})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var i=t(3),a=t(7),r=(t(0),t(393)),o=["components"],s={id:"index-jsonindex-document",title:"How to index JSON documents using RedisJSON & RediSearch",sidebar_label:"How to index JSON documents using RedisJSON & RediSearch",slug:"/howtos/redisjson/jsonindex-document"},d={unversionedId:"howtos/redisjson/json-using-redisearch/jsonindex-document/index-jsonindex-document",id:"howtos/redisjson/json-using-redisearch/jsonindex-document/index-jsonindex-document",isDocsHomePage:!1,title:"How to index JSON documents using RedisJSON & RediSearch",description:"RedisJSON 2.0 Private Preview was announced for the first time during RedisConf 2021. With this newer version, RedisJSON will fully support JSONPath expressions and Active-Active geo-distribution. The Active-Active implementation is based on Conflict-free Replicated Data-Types (CRDT).",source:"@site/docs/howtos/redisjson/json-using-redisearch/jsonindex-document/index-jsonindex-document.mdx",slug:"/howtos/redisjson/jsonindex-document",permalink:"/howtos/redisjson/jsonindex-document",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisjson/json-using-redisearch/jsonindex-document/index-jsonindex-document.mdx",version:"current",lastUpdatedAt:1637928141,sidebar_label:"How to index JSON documents using RedisJSON & RediSearch"},c=[{value:"Prerequisites:",id:"prerequisites",children:[]},{value:"Step 1. Run the &quot;preview&quot; tagged Redismod container",id:"step-1-run-the-preview-tagged-redismod-container",children:[]},{value:"Step 2. Create an Index",id:"step-2-create-an-index",children:[]},{value:"Step 3. Populate the database with JSON document",id:"step-3-populate-the-database-with-json-document",children:[]},{value:"Step 4. Indexing the database with JSON document",id:"step-4-indexing-the-database-with-json-document",children:[]},{value:"Step 5. Projecting using JSON Path expressions",id:"step-5-projecting-using-json-path-expressions",children:[]},{value:"References",id:"references",children:[]}],u={toc:c};function l(e){var n=e.components,t=Object(a.a)(e,o);return Object(r.b)("wrapper",Object(i.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"RedisJSON 2.0 Private Preview was announced for the first time during RedisConf 2021. With this newer version, RedisJSON will fully support JSONPath expressions and ",Object(r.b)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/technology/active-active-geo-distribution/"},"Active-Active geo-distribution"),". The Active-Active implementation is based on ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type"},"Conflict-free Replicated Data-Types (CRDT)"),"."),Object(r.b)("p",null,"Prior to v2.2, RediSearch only supported Redis hashes. Going forward, RediSearch will support  RedisJSON documents. This opens a powerful new set of document-based indexing use cases. In addition, RediSearch now provides query profiling. This will empower developers to understand and optimize their RediSearch queries, increasing their developer experience."),Object(r.b)("p",null,"RediSearch has been providing indexing and search capabilities on hashes. Under the hood, RedisJSON 2.0 exposes an internal public API. Internal, because this API is exposed to other modules running inside a Redis node. Public, because any module can consume this API. So does RediSearch 2.2 ! In addition to indexing Redis hashes, RediSearch also indexes JSON. To index JSON, you must use the RedisJSON module."),Object(r.b)("p",null,"By exposing its capabilities to other modules, RedisJSON gives RediSearch the ability to index JSON documents so users can now find documents by indexing and querying the content. These combined modules give you a powerful, low latency, JSON-oriented document database!"),Object(r.b)("h3",{id:"prerequisites"},"Prerequisites:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Redis 6.x or later"),Object(r.b)("li",{parentName:"ul"},"RediSearch 2.2 or later"),Object(r.b)("li",{parentName:"ul"},"RediJSON 2.0 or later")),Object(r.b)("h3",{id:"step-1-run-the-preview-tagged-redismod-container"},'Step 1. Run the "preview" tagged Redismod container'),Object(r.b)("p",null,"Please note that this publicly available Docker Image is a community preview and doesn't support Active-Active.This Docker image contains Redis together with the main Redis modules, including RediSearch and RedisJSON.  You'll need the preview tag of the image, which you can access as follows:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"}," docker run -p 6379:6379 redislabs/redismod:preview\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"}," info modules\n # Modules\n module:name=rg,ver=10006,api=1,filters=0,usedby=[],using=[ai],options=[]\n module:name=graph,ver=20406,api=1,filters=0,usedby=[],using=[],options=[]\n module:name=timeseries,ver=10410,api=1,filters=0,usedby=[],using=[],options=[]\n module:name=bf,ver=20205,api=1,filters=0,usedby=[],using=[],options=[]\n module:name=ai,ver=10003,api=1,filters=0,usedby=[rg],using=[],options=[]\n module:name=ReJSON,ver=20000,api=1,filters=0,usedby=[search],using=[],options=[]\n module:name=search,ver=20200,api=1,filters=0,usedby=[],using=[ReJSON],options=[]\n")),Object(r.b)("h3",{id:"step-2-create-an-index"},"Step 2. Create an Index"),Object(r.b)("p",null,"Let's start by creating an index."),Object(r.b)("p",null,"We can now specify ON JSON to inform RediSearch that we want to index JSON documents.\nThen, on the SCHEMA part, you can provide JSONPath expressions. The result of each JSON Path expression is indexed and associated with a logical name ( attribute ). This attribute (previously called field ) is used in the query part."),Object(r.b)("p",null,"This is the basic syntax for indexing a JSON document:"),Object(r.b)("b",null,"Syntax"),":",Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"}," FT.CREATE {index_name} ON JSON SCHEMA {json_path} AS {attribute} {type}\n")),Object(r.b)("b",null,"Command"),":",Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"}," FT.CREATE userIdx ON JSON SCHEMA $.user.name AS name TEXT $.user.email AS email  TAG\n")),Object(r.b)("h3",{id:"step-3-populate-the-database-with-json-document"},"Step 3. Populate the database with JSON document"),Object(r.b)("p",null,"We should first populate the database with a JSON document using the JSON.SET command. In our example we are going to use the following JSON document:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'{\n  "user": {\n    "name": "Paul John",\n    "email": "paul.john@example.com",\n    "age": "42",\n    "country": "London"\n  }\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'JSON.SET myuser $ \'{ "user":{"name": "Paul John", "email": "paul.john@example.com", "age": "4", "country": "London" }}\'\n\n')),Object(r.b)("p",null,"Because indexing is synchronous, the document will be visible on the index as soon as the JSON.SET command returns. Any subsequent query matching the indexed content will return the document"),Object(r.b)("h3",{id:"step-4-indexing-the-database-with-json-document"},"Step 4. Indexing the database with JSON document"),Object(r.b)("p",null,"This new version includes a comprehensive support of JSONPath. It is now possible to use all the expressiveness of JSONPath expressions."),Object(r.b)("p",null,"To create a new index, we use the FT.CREATE command. The schema of the index now accepts JSONPath expressions. The result of the expression is indexed and associated with an attribute (here: title)."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"FT.CREATE myIdx ON JSON SCHEMA $.title AS title TEXT\n")),Object(r.b)("p",null,"We can now do a search query and find our JSON document using FT.SEARCH:"),Object(r.b)("b",null,"Command"),":",Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"}," FT.SEARCH userIdx '@name:(John)'\n")),Object(r.b)("b",null,"Result"),":",Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},' 1) (integer) 1\n 2) "myuser"\n 3) 1) "$"\n    2) "{\\"user\\":{\\"name\\":\\"Paul John\\",\\"email\\":\\"paul.john@example.com\\",\\"age\\":\\"4\\",\\"country\\":\\"London\\"}}"\n')),Object(r.b)("p",null,"We just saw that, by default, FT.SEARCH returns the whole document. We can also return only specific attribute (here name)"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"  FT.SEARCH userIdx '@name:(John)' RETURN 1 name\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'  1) (integer) 1\n  2) "myuser"\n  3) 1) "name"\n    2) "Paul John" \n')),Object(r.b)("h3",{id:"step-5-projecting-using-json-path-expressions"},"Step 5. Projecting using JSON Path expressions"),Object(r.b)("p",null,"The RETURN parameter also accepts a JSON Path expression which let us extract any part of the JSON document.\nIn this example, we return the result of the JSON Path expression $.user.hp ."),Object(r.b)("b",null,"Command"),":",Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"}," FT.SEARCH userIdx '@name:(John)' RETURN 1 $.user.email\n")),Object(r.b)("b",null,"Result"),":",Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},' 1) (integer) 1\n 2) "myuser"\n 3) 1) "$.user.email"\n    2) "paul.john@example.com"\n')),Object(r.b)("p",null,"Please Note: It is not possible to index JSON object and JSON arrays. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},' {\n    "user": {\n    "name": "Paul John",\n    "email": "paul.john@example.com",\n    "age": "42",\n    "country": "London",\n    \u201caddress": [\n        "Orbital Park",\n        " Hounslow"\n  ],\n  "pincode": "TW4 6JS"\n }\n  }\n}\n')),Object(r.b)("b",null,"Command"),":",Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},' JSON.SET myuser $ \'{ "user": { "name": "Paul John", "email": "paul.hojn@example.com", "age" :"40", "country": "London", "address": [ "Orbital Park","Hounslow" ], "pincode": "TW4 6JS" }}\'\n')),Object(r.b)("h3",{id:"references"},"References"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://university.redis.com/courses/ru204/"},"RU204: Storing, Querying and Indexing JSON at Speed")," - a course at Redis University")))}l.isMDXComponent=!0},393:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return m}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),l=u(t),b=i,m=l["".concat(o,".").concat(b)]||l[b]||p[b]||r;return t?a.a.createElement(m,s(s({ref:n},c),{},{components:t})):a.a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=b;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);