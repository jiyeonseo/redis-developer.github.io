(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{393:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return h}));var t=r(0),s=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var u=s.a.createContext({}),l=function(e){var n=s.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},d=function(e){var n=l(e.components);return s.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},p=s.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),p=t,h=d["".concat(c,".").concat(p)]||d[p]||m[p]||o;return r?s.a.createElement(h,a(a({ref:n},u),{},{components:r})):s.a.createElement(h,a({ref:n},u))}));function h(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=p;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:t,c[1]=a;for(var u=2;u<o;u++)c[u]=r[u];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},394:function(e,n,r){"use strict";r.d(n,"b",(function(){return o})),r.d(n,"a",(function(){return c}));var t=r(20),s=r(401);function o(){var e=Object(t.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,r=void 0===n?"/":n,o=e.url;return{withBaseUrl:function(e,n){return function(e,n,r,t){var o=void 0===t?{}:t,c=o.forcePrependBaseUrl,a=void 0!==c&&c,i=o.absolute,u=void 0!==i&&i;if(!r)return r;if(r.startsWith("#"))return r;if(Object(s.b)(r))return r;if(a)return n+r;var l=r.startsWith(n)?r:n+r.replace(/^\//,"");return u?e+l:l}(o,r,e,n)}}}function c(e,n){return void 0===n&&(n={}),(0,o().withBaseUrl)(e,n)}},401:function(e,n,r){"use strict";function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function s(e){return void 0!==e&&!t(e)}r.d(n,"b",(function(){return t})),r.d(n,"a",(function(){return s}))},522:function(e,n,r){"use strict";r.r(n),n.default=r.p+"assets/images/stream_overview-ee1bf9b1581a559b156ff57f50798881.png"},523:function(e,n,r){"use strict";r.r(n),n.default=r.p+"assets/images/consumer_group-478bcd500658bab3b2a2f61478f65f4e.png"},524:function(e,n,r){"use strict";r.r(n),n.default=r.p+"assets/images/insight_consumer_groups-e18a2418163651ba436f6dfe721d896a.png"},525:function(e,n,r){"use strict";r.r(n),n.default=r.p+"assets/images/insight_consumer_group_detail-129c949c515dbbbe56abb425631c5729.png"},80:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return u})),r.d(n,"default",(function(){return d}));var t=r(3),s=r(7),o=(r(0),r(393)),c=(r(394),["components"]),a={id:"index-advancedstreams",title:"Advanced Streams: Parallel Processing Checkins with Consumer Groups",sidebar_label:"Advanced Streams",slug:"/develop/node/nodecrashcourse/advancedstreams",authors:["simon"]},i={unversionedId:"develop/node/node-crash-course/advancedstreams/index-advancedstreams",id:"develop/node/node-crash-course/advancedstreams/index-advancedstreams",isDocsHomePage:!1,title:"Advanced Streams: Parallel Processing Checkins with Consumer Groups",description:"As our application grows in popularity and our user base increases, we're receiving more and more checkins.  Recall that checkins are added to a Redis Stream by the Checkin Receiver, and read from that stream by the Checkin Processor.  The Stream acts as a buffer between these two components:",source:"@site/docs/develop/node/node-crash-course/advancedstreams/index-advancedstreams.mdx",slug:"/develop/node/nodecrashcourse/advancedstreams",permalink:"/develop/node/nodecrashcourse/advancedstreams",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/node-crash-course/advancedstreams/index-advancedstreams.mdx",version:"current",lastUpdatedAt:1635760568,sidebar_label:"Advanced Streams",sidebar:"docs",previous:{title:"Scaling an Express Application with Redis as a Session Store",permalink:"/develop/node/nodecrashcourse/sessionstorage"},next:{title:"Preventing Duplicate Checkins with RedisBloom",permalink:"/develop/node/nodecrashcourse/redisbloom"}},u=[{value:"Hands-on Exercise",id:"hands-on-exercise",children:[]},{value:"External Resources",id:"external-resources",children:[]}],l={toc:u};function d(e){var n=e.components,a=Object(s.a)(e,c);return Object(o.b)("wrapper",Object(t.a)({},l,a,{components:n,mdxType:"MDXLayout"}),Object(o.b)("div",{class:"text--center"},Object(o.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/xdROBvMb4LE",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(o.b)("p",null,"As our application grows in popularity and our user base increases, we're receiving more and more checkins.  Recall that checkins are added to a Redis Stream by the Checkin Receiver, and read from that stream by the Checkin Processor.  The Stream acts as a buffer between these two components:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Stream Overview",src:r(522).default})),Object(o.b)("p",null,"Unfortunately, our single Checkin Processor is struggling to keep up with the volume of new checkins.  This means that we're seeing longer and longer lag times between a checkin arriving in the Stream and its values being reflected in our user and location Hashes."),Object(o.b)("p",null,"And, we can't run more than one instance of the Checkin Processor, as each instance will consume the whole Stream.  What we need is a way for multiple instances of the same consumer code to collaboratively process entries from a Stream."),Object(o.b)("p",null,"Redis Streams offers consumer groups as a solution for this.  We can think of a consumer group as a single logical consumer that reads the entire Stream, spreading the work out between individual consumers in the group:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Stream Overview",src:r(523).default})),Object(o.b)("p",null,"Redis tracks which messages have been delivered to which consumers in the group, ensuring that each consumer receives its own unique subset of the Stream to process.  This allows for parallel processing of the Stream by multiple consumer processes.  As you'll see in the video, this requires us to rethink our processing logic to allow Stream entries to be processed out of order,  and to avoid race conditions when updating user and location Hashes.  We'll use the Lua interpreter built into Redis to help here."),Object(o.b)("h2",{id:"hands-on-exercise"},"Hands-on Exercise"),Object(o.b)("p",null,"In this exercise, you'll run multiple concurrent instances of the Checkin Group Processor so that you can see how they work together to collaboratively process the Stream."),Object(o.b)("p",null,"If you're still running the Checkin Processor service, stop it with Ctrl-C."),Object(o.b)("p",null,"Next, open up two terminal windows.  cd to the ",Object(o.b)("inlineCode",{parentName:"p"},"node-js-crash-course")," folder that you cloned the GitHub repo into in both windows."),Object(o.b)("p",null,"In one terminal, start an instance of the Checkin Group Processor that we'll call consumer1:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'$ npm run checkingroupprocessor consumer1\n\n> js-crash-course@0.0.1 checkingroupprocessor \n> node ./src/checkingroupprocessor.js "consumer1"\n\ninfo: consumer1: Starting up.\ninfo: consumer1: Processing checkin 1609602085397-0.\ndebug: consumer1: Processing 1609602085397-0.\ndebug: consumer1: Updating user ncc:users:789 and location ncc:locations:171.\ninfo: consumer1: Acknowledged processing of checkin 1609602085397-0.\ninfo: consumer1: Pausing to simulate work.\ninfo: consumer1: Processing checkin 1609604227545-0.\ndebug: consumer1: Processing 1609604227545-0.\ndebug: consumer1: Updating user ncc:users:752 and location ncc:locations:100.\ninfo: consumer1: Acknowledged processing of checkin 1609604227545-0.\ninfo: consumer1: Pausing to simulate work.\ninfo: consumer1: Processing checkin 1609605397408-0.\ndebug: consumer1: Processing 1609605397408-0.\ndebug: consumer1: Updating user ncc:users:180 and location ncc:locations:13.\ninfo: consumer1: Acknowledged processing of checkin 1609605397408-0.\ninfo: consumer1: Pausing to simulate work.\ninfo: consumer1: Processing checkin 1609605876514-0.\n...\n')),Object(o.b)("p",null,"In the second terminal, start another instance of the Checkin Group Processor, consumer2:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'$ npm run checkingroupprocessor consumer2\n\n> js-crash-course@0.0.1 checkingroupprocessor \n> node ./src/checkingroupprocessor.js "consumer2"\n\ninfo: consumer2: Starting up.\ninfo: consumer2: Processing checkin 1609603711960-0.\ndebug: consumer2: Processing 1609603711960-0.\ndebug: consumer2: Updating user ncc:users:455 and location ncc:locations:181.\ninfo: consumer2: Acknowledged processing of checkin 1609603711960-0.\ninfo: consumer2: Pausing to simulate work.\ninfo: consumer2: Processing checkin 1609604778689-0.\ndebug: consumer2: Processing 1609604778689-0.\ndebug: consumer2: Updating user ncc:users:102 and location ncc:locations:144.\ninfo: consumer2: Acknowledged processing of checkin 1609604778689-0.\ninfo: consumer2: Pausing to simulate work.\n...\n')),Object(o.b)("p",null,"Look at the checkin IDs that each consumer processes.  Note that they don't receive the same checkins.  The Redis server gives each consumer in a group its own logical view of the Stream, each processing a subset of entries.  This speeds up checkin processing as now we can have more than one consumer running at the same time."),Object(o.b)("p",null,"Let\u2019s take a look at some of the information Redis is tracking about our consumer group.  Go ahead and stop both consumer processes by pressing Ctrl-C."),Object(o.b)("p",null,'If you\'re using RedisInsight, open up the "Streams" browser, click the ',Object(o.b)("inlineCode",{parentName:"p"},"ncc:checkins"),' key, and then select the "Consumer Groups" tab.  You should see something like this:'),Object(o.b)("p",null,Object(o.b)("img",{alt:"RedisInsight Consumer Groups",src:r(524).default})),Object(o.b)("p",null,"This shows the number of consumers that are in the group, how many pending messages each has (a pending message is one that has been read by a consumer but not yet acknowledged with ",Object(o.b)("inlineCode",{parentName:"p"},"XACK"),"), and the consumer's idle time since it last read from the Stream."),Object(o.b)("p",null,'Click on "checkinConsumers" in the Consumer Group table to see a breakdown of pending messages and idle time for each consumer:'),Object(o.b)("p",null,Object(o.b)("img",{alt:"RedisInsight Consumer Groups Detail",src:r(525).default})),Object(o.b)("p",null,"In a real-world system, you could use this information to detect consumers that have encountered a problem processing entries.  Redis Streams provides commands to reassign messages that a consumer has read but not acknowledged, allowing you to build consumer recovery strategies that re-allocate those messages to healthy consumer instances in the same group."),Object(o.b)("p",null,"If you're using redis-cli rather than RedisInsight, you can see the same information using the ",Object(o.b)("inlineCode",{parentName:"p"},"XINFO")," and ",Object(o.b)("inlineCode",{parentName:"p"},"XPENDING")," commands:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> xinfo groups ncc:checkins\n1) 1) "name"\n   2) "checkinConsumers"\n   3) "consumers"\n   4) (integer) 2\n   5) "pending"\n   6) (integer) 0\n   7) "last-delivered-id"\n   8) "1609605876514-0"\n127.0.0.1:6379> xpending ncc:checkins checkinConsumers\n1) (integer) 0\n127.0.0.1:6379> xinfo consumers ncc:checkins checkinConsumers\n1) 1) "name"\n   2) "consumer1"\n   3) "pending"\n   4) (integer) 0\n   5) "idle"\n   6) (integer) 2262454\n2) 1) "name"\n   2) "consumer2"\n   3) "pending"\n   4) (integer) 0\n   5) "idle"\n   6) (integer) 2266244\n')),Object(o.b)("h2",{id:"external-resources"},"External Resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://university.redis.com/courses/ru202/"},"RU202 Redis Streams"),", a free online course at Redis University."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://redis.io/topics/streams-intro"},"Introduction to Redis Streams")," at redis.io."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://redis.io/commands/xgroup"},"XGROUP documentation")," at redis.io."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://redis.io/commands/xreadgroup"},"XREADGROUP documentation")," at redis.io."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://redis.io/commands/xinfo"},"XINFO documentation")," at redis.io."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://redis.io/commands/xpending"},"XPENDING documentation")," at redis.io."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://redis.io/commands/eval"},"Redis Lua Scripting documentation")," at redis.io.")))}d.isMDXComponent=!0}}]);