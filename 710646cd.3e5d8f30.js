(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{215:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(3),o=r(7),i=(r(0),r(393)),a=(r(394),["components"]),s={id:"index-redisbloom",title:"Preventing Duplicate Checkins with RedisBloom",sidebar_label:"RedisBloom",slug:"/develop/node/nodecrashcourse/redisbloom",authors:["simon"]},c={unversionedId:"develop/node/node-crash-course/redisbloom/index-redisbloom",id:"develop/node/node-crash-course/redisbloom/index-redisbloom",isDocsHomePage:!1,title:"Preventing Duplicate Checkins with RedisBloom",description:"As our application grows in popularity, we're getting more and more checkins from our expanding user base.  We've decided that we want to limit this a bit, and only allow each user to give each location a particular star rating once.  For example, if user 100 checks in at location 73 and rates it 3 stars, we want to reject any further 3 star checkins from them at that location.",source:"@site/docs/develop/node/node-crash-course/redisbloom/index-redisbloom.mdx",slug:"/develop/node/nodecrashcourse/redisbloom",permalink:"/develop/node/nodecrashcourse/redisbloom",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/node-crash-course/redisbloom/index-redisbloom.mdx",version:"current",lastUpdatedAt:1635760568,sidebar_label:"RedisBloom",sidebar:"docs",previous:{title:"Advanced Streams: Parallel Processing Checkins with Consumer Groups",permalink:"/develop/node/nodecrashcourse/advancedstreams"},next:{title:"Course Wrap Up",permalink:"/develop/node/nodecrashcourse/coursewrapup"}},l=[{value:"Hands-on Exercise",id:"hands-on-exercise",children:[]},{value:"External Resources",id:"external-resources",children:[]}],u={toc:l};function d(e){var t=e.components,s=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(n.a)({},u,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{class:"text--center"},Object(i.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/rzMugckhQss",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(i.b)("p",null,"As our application grows in popularity, we're getting more and more checkins from our expanding user base.  We've decided that we want to limit this a bit, and only allow each user to give each location a particular star rating once.  For example, if user 100 checks in at location 73 and rates it 3 stars, we want to reject any further 3 star checkins from them at that location."),Object(i.b)("p",null,"In order to do this, we need a way of remembering each checkin, and to quickly determine if we've seen it before.  We can't do this by querying the data in our checkins stream, as streams don't allow that sort of access and are periodically trimmed, removing older checkins that have been processed and are no longer needed."),Object(i.b)("p",null,"We can represent our checkins in the form ",Object(i.b)("inlineCode",{parentName:"p"},"<userId>:<locationId>:<rating>"),".  With this schema, the string 100733 would represent user 100's checkin at location 73 with a 3 star rating."),Object(i.b)("p",null,"We then need to remember each checkin, so that we can ensure it's a unique combination of user ID, location ID, and star rating.  We could use a Redis Set for this.  Sets are great whenever we want to maintain a collection of unique members, as they don't allow duplicates.  With a Redis Set, adding a new member and checking whether a member is in the Set are both O(1) operations, meaning their performance doesn't degrade as the Set grows."),Object(i.b)("p",null,"However, every new member of a Set that we add (in our case these are unique checkins) causes the Set to take up more memory on the Redis server. And this growth will become an issue as we continue to receive more and more checkins."),Object(i.b)("p",null,"But what if there was a way to check if a potential new member was already in a set that didn't have this memory consumption issue?  A Bloom Filter is a space-efficient probabilistic data structure that can help here.  Bloom Filters store hashed representations of the members of a Set rather than the actual member data itself. Unlike a Set, we can't get members back out of the Bloom Filter, but we can test if something is already in there or not... with some false positives due to hash collisions.  When asked if something is a member of a Set, the Bloom Filter can tell us \"no it isn't\", or \"it's likely that it is\"."),Object(i.b)("p",null,"This hashing approach sacrifices the 100% accuracy we'd get with a Set to dramatically reduce the memory overhead.  Bloom Filters can be configured with a desired acceptable error rate, so for our application this seems like a good way to enforce our \"no duplicate checkins\" rule without having a runaway memory consumption problem.  Whenever the Bloom Filter tells us its maybe seen a checkin before it will mostly be correct, and we'll accept that sometimes we disallow a checkin that we actually haven't had before as a sensible tradeoff for keeping our memory usage under control."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://redisbloom.io/"},"RedisBloom")," is a module from Redis that provides a Bloom Filter implementation for Redis, along with other useful probabilistic data structures.  In the video, you'll see how easy this is to use in a Node.js application, with no math skills required!"),Object(i.b)("h2",{id:"hands-on-exercise"},"Hands-on Exercise"),Object(i.b)("p",null,"In this exercise, you'll see the Bloom filter in action by attempting to submit the same checkin to the system more than once."),Object(i.b)("p",null,"You'll need to be running the Checkin Receiver Service... stop it with Ctrl-C if it's still running from a previous exercise. Then, restart it using the following command. This command will disable the login requirement which we don't want  for this exercise:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ npm run checkinreceiver\n\n> js-crash-course@0.0.1 checkinreceiver \n> node ./src/checkinreceiver.js\n\ninfo: Authentication disabled, checkins do not require a valid user session.\ninfo: Checkin receiver listening on port 8082.\n")),Object(i.b)("p",null,'Now, open Postman and create a new request, selecting "POST" as the HTTP verb.'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Set the URL to ",Object(i.b)("inlineCode",{parentName:"li"},"localhost:8082/api/checkin")),Object(i.b)("li",{parentName:"ul"},'In the "Body" tab, set the type dropdowns to "raw" and "JSON"'),Object(i.b)("li",{parentName:"ul"},"In the body text area, enter the following JSON:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{"userId": 100, "locationId": 73, "starRating": 3}\n')),Object(i.b)("p",null,"Your request should look like this:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Checkin Request",src:r(887).default})),Object(i.b)("p",null,'Click "Send" to submit your checkin to the Checkin Receiver, which should respond with a 202 Accepted status and empty response body:'),Object(i.b)("p",null,Object(i.b)("img",{alt:"202 Checkin Response",src:r(888).default})),Object(i.b)("p",null,'Click "Send" a second time and you should receive a 422 Unprocessable Entity response from the Checkin Receiver along with an error message:'),Object(i.b)("p",null,Object(i.b)("img",{alt:"422 Checkin Response",src:r(889).default})),Object(i.b)("p",null,"With the Checkin Receiver service still running, start the Checkin Generator utility that generates random checkins:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"node-js-crash-course $ npm run checkingenerator\n\n> js-crash-course@0.0.1 checkingenerator \n> node ./src/checkingenerator.js\n\ninfo: Started checkin generator.\n")),Object(i.b)("p",null,"Leave the Checkin Generator running. It will generate a new random checkin every few seconds.  Let it run and generate a few hundred checkins.  While it's doing that, periodically monitor the memory usage required by the Bloom Filter using redis-cli or the CLI tab in RedisInsight:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"127.0.0.1:6379> bf.info ncc:checkinfilter\n 1) Capacity\n 2) (integer) 1000000\n 3) Size\n 4) (integer) 2576760\n 5) Number of filters\n 6) (integer) 1\n 7) Number of items inserted\n 8) (integer) 269\n 9) Expansion rate\n10) (integer) 2\n")),Object(i.b)("p",null,"Run this a few times as more checkins are generated, and note that the size required to store the Bloom Filter doesn't increase as the number of items inserted increases.  While sacrificing some accuracy, Bloom Filters are a storage efficient solution for this type of use case."),Object(i.b)("h2",{id:"external-resources"},"External Resources"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Find out more about RedisBloom at its ",Object(i.b)("a",{parentName:"li",href:"https://redisbloom.io/"},"official website"),"."),Object(i.b)("li",{parentName:"ul"},"Wikipedia: ",Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Bloom_filter"},"Bloom Filters"),".")),Object(i.b)("p",null,"In this video, Guy Royse explains what Bloom Filters are and how to use them in Redis:"),Object(i.b)("div",{class:"text--center"},Object(i.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Z9_wrhdbSC4",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(i.b)("p",null,"Redis Sets are a powerful data type to know about, learn more with Andrew's two videos on the Redis University YouTube channel.  First, Redis Sets Explained:"),Object(i.b)("div",{class:"text--center"},Object(i.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/6Pjz819sT7M",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(i.b)("p",null,"Followed by Redis Sets Elaborated:"),Object(i.b)("div",{class:"text--center"},Object(i.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/N5i5QiYdyZU",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))}d.isMDXComponent=!0},393:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),b=n,m=d["".concat(a,".").concat(b)]||d[b]||h[b]||i;return r?o.a.createElement(m,s(s({ref:t},l),{},{components:r})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},394:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return a}));var n=r(20),o=r(401);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,s=void 0!==a&&a,c=i.absolute,l=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(s)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+u:u}(i,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},401:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},887:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/postman_bloom_checkin-2ef0be39a5183ca7d2fd6b484cd5cc9d.png"},888:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/postman_bloom_202_response-2695c8e261c8f1b0ff3722e52b488659.png"},889:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/postman_bloom_422_response-8356347eab305ea70f8a3ed095b8308e.png"}}]);