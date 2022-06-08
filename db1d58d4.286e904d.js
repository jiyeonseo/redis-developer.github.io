(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{341:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(7),o=(n(0),n(393)),s=(n(394),["components"]),a={id:"index-introducingredisinsight",title:"Introducing RedisInsight",sidebar_label:"Introducing RedisInsight",slug:"/develop/node/nodecrashcourse/introducingredisinsight",authors:["simon"]},d={unversionedId:"develop/node/node-crash-course/introducingredisinsight/index-introducingredisinsight",id:"develop/node/node-crash-course/introducingredisinsight/index-introducingredisinsight",isDocsHomePage:!1,title:"Introducing RedisInsight",description:"RedisInsight is a free product from Redis that provides an intuitive graphical user interface for managing Redis databases. RedisInsight allows you to browse Redis and monitor changes in data in real time.  You can edit data stored in existing keys, create and delete new ones, and run redis-cli commands.",source:"@site/docs/develop/node/node-crash-course/introducingredisinsight/index-introducingredisinsight.mdx",slug:"/develop/node/nodecrashcourse/introducingredisinsight",permalink:"/develop/node/nodecrashcourse/introducingredisinsight",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/node-crash-course/introducingredisinsight/index-introducingredisinsight.mdx",version:"current",lastUpdatedAt:1635760568,sidebar_label:"Introducing RedisInsight",sidebar:"docs",previous:{title:"Using Redis from Node.js",permalink:"/develop/node/nodecrashcourse/redisandnodejs"},next:{title:"Sample Application Overview",permalink:"/develop/node/nodecrashcourse/sampleapplicationoverview"}},c=[{value:"External Resources",id:"external-resources",children:[]}],u={toc:c};function l(e){var t=e.components,n=Object(i.a)(e,s);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{class:"text--center"},Object(o.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/EUY8WyQdR-o",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(o.b)("p",null,"RedisInsight is a free product from Redis that provides an intuitive graphical user interface for managing Redis databases. RedisInsight allows you to browse Redis and monitor changes in data in real time.  You can edit data stored in existing keys, create and delete new ones, and run redis-cli commands."),Object(o.b)("p",null,"RedisInsight also supports some popular Redis modules, and we'll use it in this course to look at data managed by the RedisJSON and RediSearch modules.  The data type specific views in RedisInsight make visualizing even the most complex Redis data types easy.  We'll benefit from this when we look at Redis Streams later in the course."),Object(o.b)("p",null,"For this course, we'll be running Redis in a Docker container.  While you can complete the course using just the redis-cli interface provided with the container, we'd strongly recommend that you ",Object(o.b)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/redis-insight/"},"download and install RedisInsight")," to benefit from its graphical interface and specialized views for Redis data types and modules."),Object(o.b)("p",null,'We\'ll cover how to connect RedisInsight to our Redis server in the "Up and Running with the Sample Application" module shortly.'),Object(o.b)("h2",{id:"external-resources"},"External Resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://redis.com/redis-enterprise/redis-insight/"},"RedisInsight Home Page and downloads"))))}l.isMDXComponent=!0},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),l=u(n),f=r,h=l["".concat(s,".").concat(f)]||l[f]||p[f]||o;return n?i.a.createElement(h,a(a({ref:t},c),{},{components:n})):i.a.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},394:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var r=n(20),i=n(401);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,s=o.forcePrependBaseUrl,a=void 0!==s&&s,d=o.absolute,c=void 0!==d&&d;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(a)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(o,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},401:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))}}]);