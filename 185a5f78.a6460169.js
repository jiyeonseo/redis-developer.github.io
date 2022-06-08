(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(393)),s=["components"],o={id:"service-stack",title:"How to handle blocking stream reads with ServiceStack.Redis",sidebar_label:"Blocking Stream Reads with ServiceStack.Redis",slug:"/develop/dotnet/streams/blocking-reads/service-stack",authors:["steve"]},c={unversionedId:"develop/dotnet/streams/blocking-reads/service-stack/service-stack",id:"develop/dotnet/streams/blocking-reads/service-stack/service-stack",isDocsHomePage:!1,title:"How to handle blocking stream reads with ServiceStack.Redis",description:"ServiceStack.Redis is part of the ServiceStack suite, it has some restrictions when used for commercial purposes - see their license",source:"@site/docs/develop/dotnet/streams/blocking-reads/service-stack/service-stack.md",slug:"/develop/dotnet/streams/blocking-reads/service-stack",permalink:"/develop/dotnet/streams/blocking-reads/service-stack",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/dotnet/streams/blocking-reads/service-stack/service-stack.md",version:"current",lastUpdatedAt:1648152977,sidebar_label:"Blocking Stream Reads with ServiceStack.Redis",sidebar:"docs",previous:{title:"Blocking Stream Reads",permalink:"/develop/dotnet/streams/blocking-reads"},next:{title:"Blocking Stream reads with CSRedis",permalink:"/develop/dotnet/streams/blocking-reads/cs-redis"}},l=[{value:"Start Redis",id:"start-redis",children:[]},{value:"Create the app",id:"create-the-app",children:[{value:"Add the package to your app",id:"add-the-package-to-your-app",children:[]},{value:"Initialize the client manager",id:"initialize-the-client-manager",children:[]},{value:"Add items to streams",id:"add-items-to-streams",children:[]},{value:"Reading messages",id:"reading-messages",children:[]},{value:"Reading a stream outside a group with XREAD",id:"reading-a-stream-outside-a-group-with-xread",children:[]},{value:"Reading with consumer groups",id:"reading-with-consumer-groups",children:[]},{value:"Create the group and start the tasks",id:"create-the-group-and-start-the-tasks",children:[]}]},{value:"Run the app",id:"run-the-app",children:[]},{value:"Resources:",id:"resources",children:[]}],d={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,s);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/ServiceStack/ServiceStack.Redis"},"ServiceStack.Redis")," is part of the ServiceStack suite, it has some restrictions when used for commercial purposes - see their ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ServiceStack/ServiceStack.Redis/blob/master/license.txt"},"license")),Object(i.b)("h2",{id:"start-redis"},"Start Redis"),Object(i.b)("p",null,"If you're developing locally (which is what we will assume for the balance of this tutorial), you can start Redis fairly quickly with docker:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"docker run -p 6379:6379 redis\n")),Object(i.b)("h2",{id:"create-the-app"},"Create the app"),Object(i.b)("p",null,"We will build a simple console application for streaming telemetry using the library. To do so, use the ",Object(i.b)("inlineCode",{parentName:"p"},"dotnet new")," command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"dotnet new console -n StreamsWithServiceStack\n")),Object(i.b)("h3",{id:"add-the-package-to-your-app"},"Add the package to your app"),Object(i.b)("p",null,"You can add this package to your app with:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"dotnet add package ServiceStack.Redis\n")),Object(i.b)("h3",{id:"initialize-the-client-manager"},"Initialize the client manager"),Object(i.b)("p",null,"To initialize a client with ServiceStack, you'll need to create a ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ServiceStack/ServiceStack.Redis#redis-client-managers"},Object(i.b)("inlineCode",{parentName:"a"},"RedisClientManager")),". Then, add the following to ",Object(i.b)("inlineCode",{parentName:"p"},"Program.cs"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'var manager = new BasicRedisClientManager("localhost");\n')),Object(i.b)("h3",{id:"add-items-to-streams"},"Add items to streams"),Object(i.b)("p",null,"Redis streams are not yet fully supported by ServiceStack.Redis, however, you can run raw commands easily with the ",Object(i.b)("inlineCode",{parentName:"p"},"CustomAsync")," method. So let's create a new class called ",Object(i.b)("inlineCode",{parentName:"p"},"Producer.cs")," and add the following to it."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'public static class Producer\n{\n    public static async Task Produce(BasicRedisClientManager manager, CancellationToken token)\n    {\n        var client = await manager.GetClientAsync(token);\n        var random = new Random();\n        while (!token.IsCancellationRequested)\n        {\n            await client.CustomAsync("XADD", "telemetry", "*", "temp",random.Next(50,65), "time", DateTimeOffset.Now.ToUnixTimeSeconds());\n            await Task.Delay(10000, token);\n        }\n    }\n}\n')),Object(i.b)("p",null,"This code will send new telemetry every 10 seconds to the ",Object(i.b)("inlineCode",{parentName:"p"},"telemetry")," stream, with a ",Object(i.b)("inlineCode",{parentName:"p"},"temp")," record and a ",Object(i.b)("inlineCode",{parentName:"p"},"time")," record. "),Object(i.b)("h3",{id:"reading-messages"},"Reading messages"),Object(i.b)("p",null,"As mentioned earlier, ServiceStack does not have native support for the Streams API, so we need to do a bit of work after retrieving a record from a stream. However, this isn't a complex operation since the resulting structure is a predictable set of nested arrays going from an array of the streams requested to an array of messages retrieved from each stream to the message itself split between its id and its attributes. Finally, the field value pairs within a message; this looks something like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'127.0.0.1:6379> XREAD COUNT 1 BLOCK 20000 STREAMS telemetry $\n1) 1) "telemetry"\n   2) 1) 1) "1642857504469-0"\n         2) 1) "temp"\n            2) "57"\n            3) "time"\n            4) "1642857504"\n')),Object(i.b)("p",null,"This data structure is pretty predictable to parse, so we'll add a little parsing method. First, Create ",Object(i.b)("inlineCode",{parentName:"p"},"Consumer.cs")," and add the following to it:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},"using ServiceStack.Redis;\n\nnamespace StreamsWithServicestack;\n\npublic static class Consumer\n{\n    public static IDictionary<string, string> ParseStreamResult(RedisText text, out string id)\n    {\n        var result = new Dictionary<string, string>();\n\n        var fieldValPairs = text.Children[0].Children[1].Children[0].Children[1].Children;\n        id = text.Children[0].Children[1].Children[0].Children[0].Text;\n        for (var i = 0; i < fieldValPairs.Count; i += 2)\n        {\n            result.Add(fieldValPairs[i].Text, fieldValPairs[i+1].Text);\n        }\n\n        return result;\n    }\n}\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ParseStreamResult")," will yield the first message from the first stream of an ",Object(i.b)("inlineCode",{parentName:"p"},"XREAD")," or ",Object(i.b)("inlineCode",{parentName:"p"},"XREADGROUP"),", this isn't a fully generalized solution but will serve our purposes here."),Object(i.b)("h3",{id:"reading-a-stream-outside-a-group-with-xread"},"Reading a stream outside a group with XREAD"),Object(i.b)("p",null,"To read the next message in a stream, which is necessarily a blocking operation, you will use the ",Object(i.b)("inlineCode",{parentName:"p"},"XREAD")," command with the ",Object(i.b)("inlineCode",{parentName:"p"},"BLOCK")," option and the special ",Object(i.b)("inlineCode",{parentName:"p"},"$")," id. Then, in the ",Object(i.b)("inlineCode",{parentName:"p"},"Consumer")," class, add the following, which will read off the stream in a continuous loop, blocking for 20 seconds at each request."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'public static async Task Consume(IRedisClientsManagerAsync manager, CancellationToken token)\n{\n    var client = await manager.GetClientAsync(token);\n    while (!token.IsCancellationRequested)\n    {\n        string id;\n        var result = await client.CustomAsync("XREAD", "COUNT", 1, "BLOCK", 20000, "STREAMS", "telemetry", "$");\n        var fvp = ParseStreamResult(result, out id);\n        Console.WriteLine($"read: result {id} - temp: {fvp["temp"]} time: {fvp["time"]}");\n    }\n}\n')),Object(i.b)("h3",{id:"reading-with-consumer-groups"},"Reading with consumer groups"),Object(i.b)("p",null,"Reading messages in a consumer group can be helpful in cases where you have a common task that you want to distribute across many consumers in a high-throughput environment. It's a two-step process:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Read the stream"),Object(i.b)("li",{parentName:"ol"},"Acknowledge receipt of the message")),Object(i.b)("p",null,"This task can be done by running an ",Object(i.b)("inlineCode",{parentName:"p"},"XREADGROUP")," and a ",Object(i.b)("inlineCode",{parentName:"p"},"XACK")," back to back. The ",Object(i.b)("inlineCode",{parentName:"p"},"XREADGROUP")," will take, in addition to the parameters we spoke about for the ",Object(i.b)("inlineCode",{parentName:"p"},"XREAD"),", the ",Object(i.b)("inlineCode",{parentName:"p"},"GROUP")," name, the consumer's name, and instead of taking the special ",Object(i.b)("inlineCode",{parentName:"p"},"$")," id, it will take the special ",Object(i.b)("inlineCode",{parentName:"p"},">")," id, which will have it take the next unassigned id for the group. We'll then extract the information from it, update our average, and then acknowledge the receipt of the message."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'public static async Task ConsumeFromGroup(IRedisClientsManagerAsync manager, CancellationToken token)\n{\n    var client = await manager.GetClientAsync(token);\n    var total = 0;\n    var num = 0;\n    while (!token.IsCancellationRequested)\n    {\n        string id;\n        var result = await client.CustomAsync("XREADGROUP", "GROUP", "avg", "avg-1", "COUNT", "1", "BLOCK",\n            20000, "STREAMS", "telemetry", ">");\n        var fvp = ParseStreamResult(result, out id);\n        total += int.Parse(fvp["temp"]);\n        num++;\n        Console.WriteLine(\n            $"Group-read: result {id} - temp: {fvp["temp"]} time: {fvp["time"]}, current average: {total / num}");\n        await client.CustomAsync("XACK", "telemetry", "avg", id);\n    }\n}\n')),Object(i.b)("h3",{id:"create-the-group-and-start-the-tasks"},"Create the group and start the tasks"),Object(i.b)("p",null,"The final bit we need is to create the group and start up all the tasks. We'll use the ",Object(i.b)("inlineCode",{parentName:"p"},"XGROUP")," command with the ",Object(i.b)("inlineCode",{parentName:"p"},"MKSTREAM")," option to create the group. We'll then start up all the tasks we need for our producer and consumers, and we'll await everything. Add the following to your ",Object(i.b)("inlineCode",{parentName:"p"},"Program.cs")," file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'using ServiceStack.Redis;\nusing StreamsWithServicestack;\n\nvar manager = new BasicRedisClientManager("localhost");\nvar asyncClient = await manager.GetClientAsync();\n\nvar tokenSource = new CancellationTokenSource();\nvar token = tokenSource.Token;\n\ntry\n{\n    await asyncClient.CustomAsync("XGROUP", "CREATE", "telemetry", "avg", "0-0", "MKSTREAM");\n}\ncatch (Exception ex)\n{\n    Console.WriteLine(ex);\n}\n\nvar writeTask = Producer.Produce(manager, token);\nvar readTask = Consumer.Consume(manager, token);\nvar groupReadTask = Consumer.ConsumeFromGroup(manager, token);\n\nawait Task.WhenAll(writeTask, readTask, groupReadTask);\n\n')),Object(i.b)("h2",{id:"run-the-app"},"Run the app"),Object(i.b)("p",null,"All that's left to do is to run the app, and you'll see a continuous stream of messages coming in every 10 seconds. You can run the app by running:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"dotnet run\n")),Object(i.b)("h2",{id:"resources"},"Resources:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The source for this tutorial is in ",Object(i.b)("a",{parentName:"li",href:"https://github.com/redis-developer/redis-streams-with-dotnet/tree/main/StreamsWithServicestack"},"GitHub")),Object(i.b)("li",{parentName:"ul"},"Redis University has an extensive ",Object(i.b)("a",{parentName:"li",href:"https://university.redis.com/courses/ru202/"},"course")," on Redis Streams where you can learn everything you need to know about them."),Object(i.b)("li",{parentName:"ul"},"You can learn more about Redis Streams in the ",Object(i.b)("a",{parentName:"li",href:"https://redis.io/topics/streams-intro"},"Streams Info")," article on redis.io")))}p.isMDXComponent=!0},393:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,b=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return a?r.a.createElement(b,o(o({ref:t},l),{},{components:a})):r.a.createElement(b,o({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);