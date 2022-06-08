(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{243:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(393)),i=["components"],s={id:"index-lara-aasem-story",title:"Hacktoberfest Stories: Opening the source of open source",sidebar_label:"Lara's Hacktoberfest at Redis Story",slug:"/hacktoberfest/stories/lara-aasem"},c={unversionedId:"get-involved/hacktoberfest/lara-aasem-story/index-lara-aasem-story",id:"get-involved/hacktoberfest/lara-aasem-story/index-lara-aasem-story",isDocsHomePage:!1,title:"Hacktoberfest Stories: Opening the source of open source",description:"Preface by Suze Shardlow, Developer Community Manager at Redis:",source:"@site/docs/get-involved/hacktoberfest/lara-aasem-story/index-lara-aasem-story.mdx",slug:"/hacktoberfest/stories/lara-aasem",permalink:"/hacktoberfest/stories/lara-aasem",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/get-involved/hacktoberfest/lara-aasem-story/index-lara-aasem-story.mdx",version:"current",lastUpdatedAt:1635372538,sidebar_label:"Lara's Hacktoberfest at Redis Story",sidebar:"docs",previous:{title:"Hacktoberfest 2021 at Redis",permalink:"/hacktoberfest/"},next:{title:"Hacktoberfest Stories: A Hacktoberfest Composition: Redis and Docker",permalink:"/hacktoberfest/stories/vincent-aceto"}},l=[{value:"Finding...",id:"finding",children:[]},{value:"... enjoying...",id:"-enjoying",children:[]},{value:"... and working on the issue",id:"-and-working-on-the-issue",children:[]},{value:"Post-merge-um",id:"post-merge-um",children:[]}],b={toc:l};function d(e){var t=e.components,s=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},b,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Preface by Suze Shardlow, Developer Community Manager at Redis:")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",{parentName:"p",href:"https://laasem.github.io"},"Lara Aasem")," is a backend software engineer based in Cairo, Egypt.  For Hacktoberfest, she contributed an enhancement to ",Object(o.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=cowIZWASJNs"},"Kaboom"),", which is one of our demo apps.  This is her story.")),Object(o.b)("p",null,"Open source has always simultaneously fascinated and daunted me. As a backend engineer with a background in sociology, the fact that our world is powered by software built out of empathy, a desire to improve our collective experience, and genuine love of craft\u2014rather than profit\u2014seemed upliftingly radical to me. The open source community's codes of conduct, care for all involved, and emphasis on learning drew me in, but I was still intimidated by it. How do I even start contributing significantly to projects I know nothing about?"),Object(o.b)("p",null,"It was there that Hacktoberfest found me. It was 2020 and I was frustrated after a drawn-out attempt to make a sizable contribution to a project went awry because I could never find the time to properly address the review comments for a change of that size. After hearing about the event from coworkers, I realized there was a space in which I could make small, beginner-friendly yet meaningful contributions. While exploring unfamiliar codebases and using languages I may not be super comfortable with was challenging, it was also rewarding, especially with the support of maintainers and the knowledge that I was contributing to building the kind of world I dream about."),Object(o.b)("h2",{id:"finding"},"Finding..."),Object(o.b)("p",null,"My first experience with Hacktoberfest was so fulfilling, I spent all of 2021 excited for October. When the time came, I once again used ",Object(o.b)("a",{parentName:"p",href:"http://goodfirstissues.com/"},"www.goodfirstissues.com"),", an aggregator that lists GitHub issues labeled as ",Object(o.b)("inlineCode",{parentName:"p"},"goodfirstissue"),", with the ability to filter by other labels as well as the programming language and name of the repository housing the issue. My criteria when searching for issues were:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"small and well-documented enough to be worked on in a few hours,"),Object(o.b)("li",{parentName:"ul"},"in a language I know but am not necessarily proficient in, and"),Object(o.b)("li",{parentName:"ul"},"exciting because of the nature of the project, the learning opportunities it offers, or (ideally) both.")),Object(o.b)("p",null,"This is how I came across ",Object(o.b)("a",{parentName:"p",href:"https://github.com/redis-developer/redis-kaboom-rpg/issues/7"},"an issue by Redis")," to implement an API validation for a ",Object(o.b)("a",{parentName:"p",href:"https://github.com/redis-developer/redis-kaboom-rpg"},"Redis RPG game example")," built with Kaboom.JS."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Screen grab of the issue",src:a(979).default})),Object(o.b)("p",null,"It fit all my criteria:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"As a straightforward change, it would only take a few hours to become familiar with the project, run it, implement the validation, and address any review comments, especially since the project was well-documented and the issue description explained exactly what was required and how to seek help from the maintainers."),Object(o.b)("li",{parentName:"ul"},"It was in Node.js, a framework I'm very familiar with."),Object(o.b)("li",{parentName:"ul"},"I was excited to learn more about Redis and contribute to a repository that helped other developers learn more about it.")),Object(o.b)("h2",{id:"-enjoying"},"... enjoying..."),Object(o.b)("p",null,"This last point made the issue all the more enjoyable to work on. I have a high-level understanding of how Redis works and have used it before with Ruby on Rails via ",Object(o.b)("inlineCode",{parentName:"p"},"redis-rb"),", a ",Object(o.b)("a",{parentName:"p",href:"https://github.com/redis/redis-rb"},"Ruby client library"),". It was exciting to try a ",Object(o.b)("a",{parentName:"p",href:"https://github.com/luin/ioredis"},"Node.js client")," instead (",Object(o.b)("inlineCode",{parentName:"p"},"ioredis"),") and to be exposed to RedisJSON, going through its ",Object(o.b)("a",{parentName:"p",href:"https://oss.redis.com/redisjson/commands/"},"docs")," to find the most suitable command to use for this particular issue. It was also helpful to see another contributor suggest improvements to my implementation in their own ",Object(o.b)("a",{parentName:"p",href:"https://github.com/redis-developer/redis-kaboom-rpg/pull/12"},"pull request (PR)")," implementing validation for another API."),Object(o.b)("h2",{id:"-and-working-on-the-issue"},"... and working on the issue"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1. Finding out how to contribute")),Object(o.b)("p",null,"Different projects have different guidelines for contributing. These may be outlined in the ",Object(o.b)("inlineCode",{parentName:"p"},"README.md")," of the project's GitHub repo, in a separate ",Object(o.b)("inlineCode",{parentName:"p"},"CONTRIBUTING.md")," file in the repo's base directory, or in a guide on the project or organization's website, the latter being the case with Redis as explained in the issue description. The ",Object(o.b)("a",{parentName:"p",href:"https://developer.redis.com/hacktoberfest/"},"Redis Hacktoberfest guide")," asked contributors to comment on the issue they're working on and to only claim one at a time out of fairness, which seems to be standard procedure across many open source repos."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Screen grab of Lara asking to be assigned",src:a(980).default})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"2. Running the project")),Object(o.b)("p",null,"After quickly combing through the ",Object(o.b)("inlineCode",{parentName:"p"},"README.md"),", my next step was to run the project to get a better sense of how it worked. At the time, the project structure was that you could run Redis via Docker but you had to run the API server locally (this has since been addressed via ",Object(o.b)("a",{parentName:"p",href:"https://github.com/redis-developer/redis-kaboom-rpg/issues/1"},"another issue"),"), so this is what I did. I also made sure to load the sample data as instructed in the Setup section of the ",Object(o.b)("inlineCode",{parentName:"p"},"README.md")," (and after, if I remember correctly, a few errors)."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Screen grab of the Redis Kaboom server listening on port 8080",src:a(981).default})),Object(o.b)("p",null,Object(o.b)("img",{alt:"Screen grab of the Redis Kaboom server listening on port 8080",src:a(982).default})),Object(o.b)("p",null,Object(o.b)("img",{alt:"Screen grab of the Redis Kaboom server listening on port 8080",src:a(983).default})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3. Trying out the API")),Object(o.b)("p",null,"The API in question is a ",Object(o.b)("inlineCode",{parentName:"p"},"GET")," request that fetches the data for a room given the game ID."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Screen grab of Postman",src:a(984).default})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"4. Implementing the validation")),Object(o.b)("p",null,"If this API was called with an invalid room number, the server would crash with a ",Object(o.b)("inlineCode",{parentName:"p"},"500")," HTTP status code. The issue was to explicitly validate the room number, returning a more meaningful ",Object(o.b)("inlineCode",{parentName:"p"},"400")," HTTP status code and response body to the client."),Object(o.b)("p",null,"After combing through the sample data I had loaded previously via npm run load and finding out that the room data was persisted as an array of JSON objects, I assumed the minimum room number would be 0. To get the maximum, then, I would need to get the last index in the array by getting the array length and subtracting one from it. For this, I used the ",Object(o.b)("inlineCode",{parentName:"p"},"JSON.ARRLEN")," RedisJSON command, validating that the room number sent in the request path was within range and returning ",Object(o.b)("inlineCode",{parentName:"p"},"400")," otherwise."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Screen grab of the file changes in GitHub",src:a(985).default})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"5. Testing")),Object(o.b)("p",null,"Always a beautiful moment:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Screen grab of Postman showing an invalid room number",src:a(986).default})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"6. Opening a PR")),Object(o.b)("p",null,"Once I was satisfied with the functionality and quality of the code, I pushed my changes to a fork of the upstream repo and opened a PR. I simply linked the issue number in the PR description as there was no required template to follow and there wasn't much else to note regarding the implementation."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Screen grab of Lara&#39;s pull request",src:a(987).default})),Object(o.b)("h2",{id:"post-merge-um"},"Post-merge-um"),Object(o.b)("p",null,"On checking my PR to see that it was reviewed, approved, and merged (and to revel in the beauty of all those ",Object(o.b)("inlineCode",{parentName:"p"},"hacktoberfest-accepted"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Merged"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"Closed")," labels), I noticed another contributor had referenced my PR in their own. They had some good comments on a corner case I had missed as well as the format of the response I was sending."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Screen grab of another contributor&#39;s PR",src:a(988).default})),Object(o.b)("p",null,"A quarter of the way into Hacktoberfest 2021 and I had already learned a lot, engaged with other members of the open source community, and had a good time doing it. While finding and contributing to suitable open source issues could still be challenging at times, it was no longer the seemingly impossible task it used to be."))}d.isMDXComponent=!0},393:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=b(a),p=n,m=d["".concat(i,".").concat(p)]||d[p]||u[p]||o;return a?r.a.createElement(m,s(s({ref:t},l),{},{components:a})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},979:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/1-the-issue-f451f37bd9acf0045dab7fc482eee35a.png"},980:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/2-lara-asking-for-assignment-18c6bc5c709c14d87aa34a44b9c67159.png"},981:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/3-terminal-778b575f01529361dd69b0e12ad859c2.png"},982:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/4-terminal-b08a8d5067f1777555e60068dae61d90.png"},983:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/5-terminal-7670cc32784cf0784f7bef87cdefa198.png"},984:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/6-postman-b8f308c1984f120e9005afd72caf8211.png"},985:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/7-github-9ad5b9f1f6a9f46248bf75df5a930b3b.png"},986:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/8-postman-ed4e6832b96f6960dcc8d594d22f8c40.png"},987:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/9-the-pr-874ababbf780bf0c6cbdff7bb73e58b1.png"},988:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/10-corner-case-f2d8432fe30bea320f7fe755d815b142.png"}}]);