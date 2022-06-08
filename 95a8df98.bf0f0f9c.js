(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{255:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(393)),o=["components"],s={id:"index-using-dotnet",title:"How to query Graph data in Redis using .NET",sidebar_label:"RedisGraph and .NET",slug:"/howtos/redisgraph/using-dotnet",authors:["steve"]},p={unversionedId:"howtos/redisgraph/using-dotnet/index-using-dotnet",id:"howtos/redisgraph/using-dotnet/index-using-dotnet",isDocsHomePage:!1,title:"How to query Graph data in Redis using .NET",description:"RedisGraph enables you to store and query graph data in Redis using the Cypher Query Language. In this article, we will discuss the usage of RedisGraph with .NET.",source:"@site/docs/howtos/redisgraph/using-dotnet/index-usingdotnet.md",slug:"/howtos/redisgraph/using-dotnet",permalink:"/howtos/redisgraph/using-dotnet",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisgraph/using-dotnet/index-usingdotnet.md",version:"current",lastUpdatedAt:1639059220,sidebar_label:"RedisGraph and .NET",sidebar:"docs",previous:{title:"How to visualize Graph data using RedisInsight",permalink:"/howtos/redisgraph/using-redisinsight"},next:{title:"How to query Graph data in Redis using Python",permalink:"/howtos/redisgraph/using-python"}},c=[{value:"NRedisGraph",id:"nredisgraph",children:[]},{value:"Running RedisGraph",id:"running-redisgraph",children:[]},{value:"Connecting",id:"connecting",children:[]},{value:"Sending a Query",id:"sending-a-query",children:[{value:"Creating a Node",id:"creating-a-node",children:[]},{value:"Creating Relationships",id:"creating-relationships",children:[]},{value:"Querying Relationships",id:"querying-relationships",children:[]}]},{value:"Resources",id:"resources",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"RedisGraph enables you to store and query graph data in Redis using the ",Object(i.b)("a",{parentName:"p",href:"https://opencypher.org/"},"Cypher Query Language"),". In this article, we will discuss the usage of RedisGraph with .NET."),Object(i.b)("h2",{id:"nredisgraph"},"NRedisGraph"),Object(i.b)("p",null,"We'll use the ",Object(i.b)("a",{parentName:"p",href:"https://www.nuget.org/packages/NRedisGraph/"},"NRedisGraph")," package in this tutorial. To install the package in your project, use ",Object(i.b)("inlineCode",{parentName:"p"},"dotnet add package NRedisGraph"),"."),Object(i.b)("h2",{id:"running-redisgraph"},"Running RedisGraph"),Object(i.b)("p",null,"The easiest way to get up and running with RedisGraph locally is to use the RedisGraph docker image:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"docker run -p 6379:6379 redislabs/redisgraph\n")),Object(i.b)("p",null,"The above command will start an instance of Redis locally with the RedisGraph module loaded, and you will be able to connect to it on ",Object(i.b)("strong",{parentName:"p"},"localhost:6379")),Object(i.b)("h2",{id:"connecting"},"Connecting"),Object(i.b)("p",null,"NRedisGraph makes use of the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/StackExchange/StackExchange.Redis"},"StackExchange.Redis")," project which is installed along with ",Object(i.b)("inlineCode",{parentName:"p"},"NRedisGraph"),". To create the ",Object(i.b)("inlineCode",{parentName:"p"},"RedisGraph")," object you'll first create a ",Object(i.b)("inlineCode",{parentName:"p"},"ConnectionMultiplexer"),", and pull a reference to an ",Object(i.b)("inlineCode",{parentName:"p"},"IDatabase")," object from it, and then initialize the ",Object(i.b)("inlineCode",{parentName:"p"},"RedisGraph")," with the ",Object(i.b)("inlineCode",{parentName:"p"},"IDatabase")," object:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'var muxer = ConnectionMultiplexer.Connect("localhost");\nvar db = muxer.GetDatabase();\nvar graph = new RedisGraph(db);\n')),Object(i.b)("h2",{id:"sending-a-query"},"Sending a Query"),Object(i.b)("p",null,"Querying in RedisGraph applies to a wide array of operations, but fundamentally when executing queries with NRedisGraph, all you need to do is execute ",Object(i.b)("inlineCode",{parentName:"p"},"graph.Query")," or ",Object(i.b)("inlineCode",{parentName:"p"},"graph.QueryAsync")," passing in the name of the graph you want to query and the query you want to run. For example, we'll be using the graph ",Object(i.b)("inlineCode",{parentName:"p"},"pets")," for the remainder of this tutorial, ",Object(i.b)("inlineCode",{parentName:"p"},"pets")," is the name of the key the graph will be stored at. Hence any call to ",Object(i.b)("inlineCode",{parentName:"p"},"graph.Query")," or ",Object(i.b)("inlineCode",{parentName:"p"},"graph.QueryAsync")," will first pass in ",Object(i.b)("inlineCode",{parentName:"p"},"pets")," to indicate the graph to work with."),Object(i.b)("h3",{id:"creating-a-node"},"Creating a Node"),Object(i.b)("p",null,"To create a node in RedisGraph, you'll use the Create Operation. Let's start by making 2 Humans, Alice and Bob:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'var createBobResult = await graph.QueryAsync("pets", "CREATE(:human{name:\'Bob\',age:32})");\nawait graph.QueryAsync("pets", "CREATE(:human{name:\'Alice\',age:30})");\n')),Object(i.b)("p",null,"Running a Query against RedisGraph will result in a ",Object(i.b)("inlineCode",{parentName:"p"},"ResultSet"),". This result will contain some metadata about the result of the query in the ",Object(i.b)("inlineCode",{parentName:"p"},"Statistics")," section and any results generated by the query. In the above case, the only thing returned is the statistics for the query, which you can print out directly from the results object:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'Console.WriteLine($"Nodes Created:{createBobResult.Statistics.NodesCreated}");\nConsole.WriteLine($"Properties Set:{createBobResult.Statistics.PropertiesSet}");\nConsole.WriteLine($"Labels Created:{createBobResult.Statistics.LabelsAdded}");\nConsole.WriteLine($"Operation took:{createBobResult.Statistics.QueryInternalExecutionTime}");\n')),Object(i.b)("p",null,"You can create nodes with other labels by simply executing another CREATE statement. For example, if we wanted to create a 'pet' named 'Honey' who is a 5-year-old greyhound, we would run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},"await graph.QueryAsync(\"pets\", \"CREATE(:pet{name:'Honey',age:5,species:'canine',breed:'Greyhound'})\");\n")),Object(i.b)("h3",{id:"creating-relationships"},"Creating Relationships"),Object(i.b)("p",null,"Like creating nodes, you can also create relationships in RedisGraph using the ",Object(i.b)("inlineCode",{parentName:"p"},"Query"),"/",Object(i.b)("inlineCode",{parentName:"p"},"QueryAsync")," commands to create relationships between nodes in RedisGraph. For example, to establish the owner relationship between Bob and the Greyhound Honey, you would use the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},"await graph.QueryAsync(\"pets\",\n    \"MATCH(a:human),(p:pet) WHERE(a.name='Bob' and p.name='Honey') CREATE (a)-[:OWNS]->(p)\");\n")),Object(i.b)("p",null,"You could establish other relationships as well between nodes, say, for example, both Bob and Alice both walk Honey you could add the connections:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},"await graph.QueryAsync(\"pets\",\n    \"MATCH(a:human),(p:pet) WHERE(a.name='Alice' and p.name='Honey') CREATE (a)-[:WALKS]->(p)\");\nawait graph.QueryAsync(\"pets\",\n    \"MATCH(a:human),(p:pet) WHERE(a.name='Bob' and p.name='Honey') CREATE (a)-[:WALKS]->(p)\");\n")),Object(i.b)("h3",{id:"querying-relationships"},"Querying Relationships"),Object(i.b)("p",null,"Now that we've created a few Nodes and Relationships between nodes, we can query things in the Graph, again using ",Object(i.b)("inlineCode",{parentName:"p"},"Query")," and ",Object(i.b)("inlineCode",{parentName:"p"},"QueryAsync"),". So, for example, if we wanted to find all of Honey's owners, we would issue the following query:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'var matches = await graph.QueryAsync("pets", "MATCH(a:human),(p:pet) where (a)-[:OWNS]->(p) and p.name=\'Honey\' return a");\n')),Object(i.b)("p",null,"We can then iterate over the resultant matches, which is the same ",Object(i.b)("inlineCode",{parentName:"p"},"ResultSet")," class we were using before, but it will have actual results we can access this time."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'foreach (var match in matches)\n{\n    Console.WriteLine(((Node) match.Values.First()).PropertyMap["name"].Value);\n}\n')),Object(i.b)("p",null,"We can also find all the walkers of Honey by finding all the human's who have a ",Object(i.b)("inlineCode",{parentName:"p"},"WALKS")," relationship with Honey:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'matches = await graph.QueryAsync("pets", "MATCH(a:human),(p:pet) where (a)-[:WALKS]->(p) and p.name=\'Honey\' return a");\n')),Object(i.b)("p",null,"Then if we wanted to find all of Bob's dogs, we would query the graph and find all the canines who have an OWNS relationship with a human named Bob:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},"matches = await graph.QueryAsync(\"pets\", \"MATCH(a:human),(p:pet) where (a)-[:OWNS]->(p) and p.species='canine' and a.name='Bob' return p\");\n")),Object(i.b)("h2",{id:"resources"},"Resources"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Code for this demo is available in ",Object(i.b)("a",{parentName:"li",href:"https://github.com/redis-developer/redis-graph-dotnet-basic-app"},"GitHub")),Object(i.b)("li",{parentName:"ul"},"To learn more about RedisGraph, check out the ",Object(i.b)("a",{parentName:"li",href:"https://oss.redis.com/redisgraph/"},"docs site")),Object(i.b)("li",{parentName:"ul"},"To learn more about The Cypher Query Language, check out ",Object(i.b)("a",{parentName:"li",href:"http://opencypher.org/"},"opencypher.org"))))}u.isMDXComponent=!0},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,b=u["".concat(o,".").concat(h)]||u[h]||d[h]||i;return n?r.a.createElement(b,s(s({ref:t},c),{},{components:n})):r.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);