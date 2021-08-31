(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{228:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(237)),i={id:"index-usingjava",title:"How to cache JSON data in Redis with Java",sidebar_label:"RedisJSON with Java",slug:"/howtos/redisjson/using-java"},s={unversionedId:"howtos/redisjson/using-java/index-usingjava",id:"howtos/redisjson/using-java/index-usingjava",isDocsHomePage:!1,title:"How to cache JSON data in Redis with Java",description:"JRedisJSON is a Java client library for RedisJSON. This client provides access to RedisJSON's Redis API, and provides back-and-forth serialization between Java's and its objects. This client supports the core RedisJSON commands at the moment.",source:"@site/docs/howtos/redisjson/using-java/index-usingjava.mdx",slug:"/howtos/redisjson/using-java",permalink:"/howtos/redisjson/using-java",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisjson/using-java/index-usingjava.mdx",version:"current",sidebar_label:"RedisJSON with Java",sidebar:"docs",previous:{title:"How to cache JSON data in Redis with Go",permalink:"/howtos/redisjson/using-go"},next:{title:"How to visualize JSON data using RedisInsight",permalink:"/howtos/redisjson/using-redisinsight"}},c=[{value:"Step 1. Run RedisMod Docker container",id:"step-1-run-redismod-docker-container",children:[]},{value:"Step 2. Clone the repository",id:"step-2-clone-the-repository",children:[]},{value:"Step 3. Install Maven",id:"step-3-install-maven",children:[]},{value:"Step 4. Create a file",id:"step-4-create-a-file",children:[]},{value:"Step 5. Run the maven executables",id:"step-5-run-the-maven-executables",children:[]},{value:"References",id:"references",children:[]}],l={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/RedisJSON/JRedisJSON"}),"JRedisJSON")," is a Java client library for RedisJSON. This client provides access to RedisJSON's Redis API, and provides back-and-forth serialization between Java's and its objects. This client supports the core RedisJSON commands at the moment."),Object(o.b)("p",null,"Follow the below steps to get started with RedisJSON and Java:"),Object(o.b)("h3",{id:"step-1-run-redismod-docker-container"},"Step 1. Run RedisMod Docker container"),Object(o.b)("p",null,"This simple container image bundles together the latest stable releases of Redis and select Redis modules from Redis Lab. "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," docker run -d -p 6379:6379 redislabs/redismod:latest\n")),Object(o.b)("h3",{id:"step-2-clone-the-repository"},"Step 2. Clone the repository"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," git clone https://github.com/RedisJSON/JRedisJSON\n")),Object(o.b)("h3",{id:"step-3-install-maven"},"Step 3. Install Maven"),Object(o.b)("p",null,"If you have already installed Maven, then it will show that maven 3.8.1 is already installed and up-to-date.\nIf not, then run the below command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," brew install mvn\n")),Object(o.b)("h3",{id:"step-4-create-a-file"},"Step 4. Create a file"),Object(o.b)("p",null,"Copy the below content and save a file name redisdeveloper.java"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),' import redis.clients.jedis.Jedis;\nimport com.redislabs.modules.rejson.JReJSON;\n\n// First get a connection\nJReJSON client = new JReJSON("localhost", 6379);\n\n// Setting a Redis key name _foo_ to the string _"bar"_, and reading it back\nclient.set("foo", "bar");\nString s0 = (String) client.get("foo");\n\n// Omitting the path (usually) defaults to the root path, so the call above to\n// `get()` and the following ones // are basically interchangeable\nString s1 = (String) client.get("foo", new Path("."));\nString s2 = (String) client.get("foo", Path.ROOT_PATH);\n\n// Any Gson-able object can be set and updated\nclient.set("obj", new Object());             // just an empty object\nclient.set("obj", null, new Path(".zilch"));\nPath p = new Path(".whatevs");\nclient.set("obj", true, p);\nclient.set("obj", 42, p);\nclient.del("obj", p);                        // back to almost nothing\n')),Object(o.b)("h3",{id:"step-5-run-the-maven-executables"},"Step 5. Run the maven executables"),Object(o.b)("p",null,'Use the "clean" command to delete all previously compiled Java .class files and resources (like .properties) in your project. Let your build start from a clean slate. Also, you can pass "install" to let it compile, test & package your Java project and even install/copy your built .jar/.war file into your local Maven repository.'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," mvn clean install -Dmaven.test.skip=true\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),' 1628854852.903490 [0 172.17.0.1:60194] "JSON.SET" "obj" "." "{\\"str\\":\\"string\\",\\"bTrue\\":true}"\n 1628854852.905266 [0 172.17.0.1:60194] "JSON.GET" "obj" "bTrue" "str"\n 1628854852.909629 [0 172.17.0.1:60198] "FLUSHDB"\n 1628854852.911907 [0 172.17.0.1:60202] "JSON.SET" "foobar" "." "{\\"foo\\":\\"bar\\"}"\n 1628854852.913345 [0 172.17.0.1:60202] "JSON.TYPE" "foobar" ".foo[1]"\n 1628854852.918301 [0 172.17.0.1:60206] "FLUSHDB"\n 1628854852.920702 [0 172.17.0.1:60210] "JSON.SET" "obj" "." "{\\"str\\":\\"string\\",\\"bTrue\\":true}"\n 1628854852.922083 [0 172.17.0.1:60210] "JSON.SET" "obj" ".none" "\\"strangle\\"" "XX"\n 1628854852.926862 [0 172.17.0.1:60214] "FLUSHDB"\n 1628854852.930541 [0 172.17.0.1:60218] "JSON.SET" "test" "." "\\"foo\\""\n 1628854852.932374 [0 172.17.0.1:60218] "JSON.GET" "test" ".bar"\n 1628854852.937640 [0 172.17.0.1:60222] "FLUSHDB"\n 1628854852.940467 [0 172.17.0.1:60226] "JSON.SET" "obj" "." "{\\"str\\":\\"string\\",\\"bTrue\\":true}"\n 1628854852.941928 [0 172.17.0.1:60226] "JSON.SET" "obj" ".none" "\\"strangle\\"" "NX"\n 1628854852.943441 [0 172.17.0.1:60226] "JSON.GET" "obj" ".none"\n')),Object(o.b)("h3",{id:"references"},"References"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/howtos/redisjson/using-python"}),"RedisJSON and Python")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/howtos/redisjson/storing-complex-json-document"}),"How to store and retrieve nested JSON document")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/howtos/redisjson/using-nodejs"}),"Importing JSON data into Redis using NodeJS")," "),Object(o.b)("li",{parentName:"ul"},"Learn more about ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://oss.redis.com/redisjson/"}),"RedisJSON")," in the Quickstart tutorial."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/howtos/shoppingcart"}),"How to build shopping cart app using NodeJS and RedisJSON")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://redislabs.com/blog/index-and-query-json-docs-with-redis/"}),"Indexing, Querying, and Full-Text Search of JSON Documents with Redis"))))}d.isMDXComponent=!0},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=d(n),p=a,O=b["".concat(i,".").concat(p)]||b[p]||u[p]||o;return n?r.a.createElement(O,s(s({ref:t},l),{},{components:n})):r.a.createElement(O,s({ref:t},l))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);