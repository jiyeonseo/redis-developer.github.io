(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{364:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(393)),s=(n(398),n(399),n(394),n(395),["components"]),c={id:"index-php",title:"Php and Redis",sidebar_label:"Php",slug:"/develop/php/",authors:["ajeet"]},o={unversionedId:"develop/php/index-php",id:"develop/php/index-php",isDocsHomePage:!1,title:"Php and Redis",description:"Find tutorials, examples and technical articles that will help you to develop with Redis and Php.",source:"@site/docs/develop/php/index-php.mdx",slug:"/develop/php/",permalink:"/develop/php/",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/php/index-php.mdx",version:"current",lastUpdatedAt:1651061947,sidebar_label:"Php",sidebar:"docs",previous:{title:"Ruby and Redis",permalink:"/develop/ruby/"},next:{title:"Deno and Redis",permalink:"/develop/deno/"}},l=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Step 2. Get pecl",id:"step-2-get-pecl",children:[]},{value:"Step 3. Install PhpRedis",id:"step-3-install-phpredis",children:[]},{value:"Step 4. Opening a Connection to Redis Using PhpRredis",id:"step-4-opening-a-connection-to-redis-using-phprredis",children:[]},{value:"Step 5. Executing the script",id:"step-5-executing-the-script",children:[]},{value:"Further Reference:",id:"further-reference",children:[]}],d={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,s);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Find tutorials, examples and technical articles that will help you to develop with Redis and Php."),Object(r.b)("h3",{id:"getting-started"},"Getting Started"),Object(r.b)("p",null,"In order to use Redis with PHP you will need a PHP Redis client. In the following sections, we will demonstrate the use of ",Object(r.b)("a",{parentName:"p",href:"https://github.com/phpredis/phpredis"},"PhpRedis"),", a flexible and feature-complete Redis client library for PHP. Additional ",Object(r.b)("a",{parentName:"p",href:"http://redis.io/clients#PHP"},"PHP clients")," for Redis can be found under the PHP section of the Redis Clients page."),Object(r.b)("p",null,"Redis is an open source, in-memory, key-value data store most commonly used as a primary database, cache, message broker, and queue. Redis cache delivers sub-millisecond response times, enabling fast and powerful real-time applications in industries such as gaming, fintech, ad-tech, social media, healthcare, and IoT."),Object(r.b)("h4",{id:"step-1-run-a-redis-server"},"Step 1. Run a Redis server"),Object(r.b)("p",null,"You can either run Redis server in a Docker container or directly on your machine. Follow the below command to setup a Redis server locally on Mac OS:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"}," brew tap redis-stack/redis-stack\n brew install --cask redis-stack\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"INFO")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Redis Stack unifies and simplifies the developer experience of the leading Redis modules and the capabilities they provide. Redis Stack bundles five Redis modules: RedisJSON, RedisSearch, RedisGraph, RedisTimeSeries, and RedisBloom.\n",Object(r.b)("a",{parentName:"p",href:"/create/redis-stack"},"Learn more")))),Object(r.b)("p",null,"Ensure that you are able to use the following Redis command to connect to the Redis instance."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"}," redis-cli -h localhost -p 6379\n localhost>\n")),Object(r.b)("p",null,"Now you should be able to perform CRUD operations with Redis keys. The above Redis client command might require password if you have setup authentication in your Redis configuration file. If a Redis password is not set, then it will perform the default connection to Redis server. You can play around inserting data to Redis using ",Object(r.b)("inlineCode",{parentName:"p"},"SET")," and then fetching it back with the ",Object(r.b)("inlineCode",{parentName:"p"},"GET")," command."),Object(r.b)("h3",{id:"step-2-get-pecl"},"Step 2. Get pecl"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"apt install pkg-php-tools\n")),Object(r.b)("h3",{id:"step-3-install-phpredis"},"Step 3. Install PhpRedis"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"pecl install redis\n")),Object(r.b)("h3",{id:"step-4-opening-a-connection-to-redis-using-phprredis"},"Step 4. Opening a Connection to Redis Using PhpRredis"),Object(r.b)("p",null,"The following code creates a connection to Redis using Phpredis"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"<?php\n \n$redis = new Redis();\n//Connecting to Redis\n$redis->connect('hostname', port);\n$redis->auth('password');\n \nif ($redis->ping()) {\n echo \"PONGn\";\n}\n \n?>\n")),Object(r.b)("p",null,"Replace the following values with those of your database and save this file as ",Object(r.b)("inlineCode",{parentName:"p"},"connect.php"),"."),Object(r.b)("h3",{id:"step-5-executing-the-script"},"Step 5. Executing the script"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"php connect.php\n")),Object(r.b)("p",null,'It should display "PONG" as output. You can verify this by running the monitor command'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'127.0.0.1:6379> monitor\nOK\n1614778301.165001 [0 [::1]:57666] "PING"\n')),Object(r.b)("h3",{id:"further-reference"},"Further Reference:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/redis-developer/redis-php-getting-started/"},"Getting Started with Redis & Php")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/nrk/phpiredis"},"PHP extension for Redis based on Hiredis")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/ronnylt/redlock-php"},"Redis distributed locks in PHP"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/phpredis/phpredis/blob/develop/cluster.markdown#redis-cluster"},"Support for Redis Cluster")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/phpredis/phpredis/blob/develop/sentinel.markdown#readme"},"Support for Redis Sentinel"))),Object(r.b)("div",null,Object(r.b)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"}," ",Object(r.b)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}p.isMDXComponent=!0},395:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(393),s=n(400);n(394),n(59);t.a=function(e){var t=i.a.useState(!1),n=t[0],a=t[1];return i.a.createElement("div",{className:"ri-container"},i.a.createElement("div",{className:"ri-description-short"},i.a.createElement("div",{className:"ri-icon"},i.a.createElement("span",{className:"fe fe-zap"})),i.a.createElement("div",{className:"ri-detail"},i.a.createElement("div",{className:"ri-title"},i.a.createElement("a",{href:e.page},e.title)),i.a.createElement("div",{className:"ri-description"},e.description,i.a.Children.count(e.children)>0&&i.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return a(!n)}})))),n&&i.a.createElement("div",{className:"ri-description-long"},i.a.createElement(r.a,{components:s.a},e.children)))}},396:function(e,t,n){"use strict";var a=n(0),i=n(397);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},397:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},398:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(396),s=n(402),c=n(60),o=n.n(c),l=37,d=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,u=e.groupId,b=e.className,h=Object(r.a)(),m=h.tabGroupChoices,f=h.setTabGroupChoices,v=Object(a.useState)(c),O=v[0],g=v[1],j=a.Children.toArray(e.children);if(null!=u){var N=m[u];null!=N&&N!==O&&p.some((function(e){return e.value===N}))&&g(N)}var R=function(e){g(e),null!=u&&f(u,e)},w=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},b)},p.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(s.a)("tabs__item",o.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return R(t)},onClick:function(){R(t)}},n)}))),t?Object(a.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},399:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);