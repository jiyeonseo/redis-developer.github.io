(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{379:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),s=(n(0),n(393)),o=(n(394),["components"]),a={id:"index-persistence-options-in-redis",title:"2.1 Persistence options in Redis",sidebar_label:"2.1 Persistence options in Redis'",slug:"/operate/redis-at-scale/persistence-and-durability/persistence-options-in-redis",isEditable:!1},c={unversionedId:"operate/redis-at-scale/persistence-and-durability/persistence-options-in-redis/index-persistence-options-in-redis",id:"operate/redis-at-scale/persistence-and-durability/persistence-options-in-redis/index-persistence-options-in-redis",isDocsHomePage:!1,title:"2.1 Persistence options in Redis",description:"If a Redis server that only stores data in RAM is restarted, all data is lost. To prevent such data loss, there needs to be some mechanism for persisting the data to disk;",source:"@site/docs/operate/redis-at-scale/persistence-and-durability/persistence-options-in-redis/index-persistence-options-in-redis.mdx",slug:"/operate/redis-at-scale/persistence-and-durability/persistence-options-in-redis",permalink:"/operate/redis-at-scale/persistence-and-durability/persistence-options-in-redis",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/operate/redis-at-scale/persistence-and-durability/persistence-options-in-redis/index-persistence-options-in-redis.mdx",version:"current",lastUpdatedAt:1654705686,sidebar_label:"2.1 Persistence options in Redis'",sidebar:"docs",previous:{title:"2.0 Introduction to Persistence and Durability",permalink:"/operate/redis-at-scale/persistence-and-durability/introduction"},next:{title:"2.2 Exercise: Saving a Snapshot",permalink:"/operate/redis-at-scale/persistence-and-durability/exercise"}},l=[],d={toc:l};function u(e){var t=e.components,n=Object(i.a)(e,o);return Object(s.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("div",{align:"center"},Object(s.b)("iframe",{width:"896",height:"509",src:"https://www.youtube.com/embed/08V8KeXhZY4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(s.b)("br",null),Object(s.b)("br",null),Object(s.b)("p",null,"If a Redis server that only stores data in RAM is restarted, all data is lost. To prevent such data loss, there needs to be some mechanism for persisting the data to disk; Redis provides two of them: ",Object(s.b)("strong",null,"snapshotting")," and an ",Object(s.b)("strong",null,"append-only file"),", or ",Object(s.b)("strong",null,"AOF"),". You can configure your Redis instances to use either of the two, or a combination of both."),Object(s.b)("p",null,"When a snapshot is created, the entire point-in-time view of the dataset is written to persistent storage in a compact ",Object(s.b)("strong",null,".rdb")," file. You can set up recurring backups, for example every 1, 12, or 24 hours and use these backups to easily restore different versions of the data set in case of disasters. You can also use these snapshots to create a clone of the server, or simply leave them in place for a future restart."),Object(s.b)("p",null,"Creating a .rdb file requires a lot of disk I/O. If performed in the main Redis process, this would reduce the server\u2019s performance. That\u2019s why this work is done by a forked child process. But even forking can be time-consuming if the dataset is large. This may result in decreased performance or in Redis failing to serve clients for a few milliseconds or even up to a second for very large datasets. Understanding this should help you decide whether this solution makes sense for your requirements."),Object(s.b)("p",null,"You can configure the name and location of the .rdb file with the ",Object(s.b)("strong",null,"dbfilename")," and ",Object(s.b)("strong",null,"dir")," configuration directives, either through the ",Object(s.b)("strong",null,"redis.conf")," file, or through the redis-cli as explained in ",Object(s.b)("a",{parentName:"p",href:"https://developer.redis.com//operate/redis-at-scale/talking-to-redis/configuring-a-redis-server"},"Section 1 Unit 2"),". And of course you can configure how often you want to create a snapshot. Here\u2019s an excerpt from the redis.conf file showing the default values."),Object(s.b)("p",null,"As an example, this configuration will make Redis automatically dump the dataset to disk every 60 seconds if at least 1000 keys changed in that period. While snapshotting is a great strategy for the use cases explained above, it leaves a huge possibility for data loss. You can configure snapshots to run every few minutes, or after X writes against the database, but if the server crashes you lose all the writes since the last snapshot was taken. In many use cases, that kind of data loss can be acceptable, but in many others it is absolutely not. For all of those other use cases Redis offers the AOF persistence option."),Object(s.b)("p",null,"AOF, or append-only file works by logging every incoming write command to disk as it happens. These commands can then be replayed at server startup, to reconstruct the original dataset. Commands are logged using the same format as the Redis protocol itself, in an append-only fashion. The AOF approach provides greater durability than snapshotting, and allows you to configure how often file syncs happen. "),Object(s.b)("p",null,"Depending on your durability requirements (or how much data you can afford to lose), you can choose which fsync policy is the best for your use case:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",null,"fsync every write"),": The safest policy: The write is acknowledged to the client only after it has been written to the AOF file and flushed to disk. Since in this approach we are writing to disk synchronously, we can expect a much higher latency than usual."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",null,"fsync every second"),": The default policy. Fsync is performed asynchronously, in a background thread, so write performance is still high. Choose this option if you need high performance and can afford to lose up to one second worth of writes."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",null,"no fsync"),": In this case Redis will log the command to the file descriptor, but will not force the OS to flush the data to disk. If the OS crashes we can lose a few seconds of data (Normally Linux will flush data every 30 seconds with this configuration, but it's up to the kernel\u2019s exact tuning.).")),Object(s.b)("p",null,"The relevant configuration directives for AOF are shown on the screen. AOF contains a log of all the operations that modified the database in a format that\u2019s easy to understand and parse. When the file gets too big, Redis can automatically rewrite it in the background, compacting it in a way that only the latest state of the data is preserved."))}u.isMDXComponent=!0},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,h=u["".concat(o,".").concat(f)]||u[f]||p[f]||s;return n?i.a.createElement(h,a(a({ref:t},l),{},{components:n})):i.a.createElement(h,a({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var l=2;l<s;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},394:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o}));var r=n(20),i=n(401);function s(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,s=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var s=void 0===r?{}:r,o=s.forcePrependBaseUrl,a=void 0!==o&&o,c=s.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(a)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+d:d}(s,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,s().withBaseUrl)(e,t)}},401:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))}}]);