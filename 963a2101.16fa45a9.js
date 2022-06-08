(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{1017:function(e,t,s){"use strict";s.r(t),t.default=s.p+"assets/images/redisinsightinstall-b920e816c541305ea0ea2dd2593f5a0f.png"},1018:function(e,t,s){"use strict";s.r(t),t.default=s.p+"assets/images/redisinsight4-c10ff2035f21df96053f824b1eefd790.png"},1019:function(e,t,s){"use strict";s.r(t),t.default=s.p+"assets/images/image16-f836b92d6eb88d65708f265ceb5b3999.png"},1020:function(e,t,s){"use strict";s.r(t),t.default=s.p+"assets/images/image17-155c7a654363e8bc371e37c1791d7b82.png"},1021:function(e,t,s){"use strict";s.r(t),t.default=s.p+"assets/images/image18-c2bc893d9a93df35ab96cef4756bb0ba.png"},1022:function(e,t,s){"use strict";s.r(t),t.default=s.p+"assets/images/image19-efa23e18b80c286c2570b7e209d58a6b.png"},256:function(e,t,s){"use strict";s.r(t),s.d(t,"frontMatter",(function(){return o})),s.d(t,"metadata",(function(){return l})),s.d(t,"toc",(function(){return c})),s.d(t,"default",(function(){return m}));var a=s(3),n=s(7),i=(s(0),s(393)),r=(s(398),s(399),s(394),s(395),["components"]),o={id:"index-streams",title:"Use Redis Streams Consumer Groups with RedisInsight",sidebar_label:"Use Redis Streams Consumer Groups with RedisInsight",slug:"/explore/redisinsight/streams",authors:["ajeet"]},l={unversionedId:"explore/redisinsight/streams/index-streams",id:"explore/redisinsight/streams/index-streams",isDocsHomePage:!1,title:"Use Redis Streams Consumer Groups with RedisInsight",description:"Redis is an open source, in-memory, key-value data store most commonly used as a primary database, cache, message broker, and message queue. Redis cache delivers sub-millisecond response times, enabling fast and powerful real-time applications in industries such as gaming, fintech, ad-tech, social media, healthcare, and IoT. The Stream is a new data type introduced with Redis 5.0, which models a log data structure in a more abstract way.",source:"@site/docs/explore/redisinsight/streams/index-streams.mdx",slug:"/explore/redisinsight/streams",permalink:"/explore/redisinsight/streams",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsight/streams/index-streams.mdx",version:"current",lastUpdatedAt:1651581525,sidebar_label:"Use Redis Streams Consumer Groups with RedisInsight",sidebar:"docs",previous:{title:"Manage Your Redis Cluster using RedisInsight Cluster Management Tool",permalink:"/explore/redisinsight/cluster"},next:{title:"RedisInsight Profiler Tool - Analyze Your Redis Commands Using Redis Monitor Command",permalink:"/explore/redisinsight/profiler"}},c=[{value:"Prerequisite:",id:"prerequisite",children:[{value:"Step 1. Run a Redis server",id:"step-1-run-a-redis-server",children:[]}]},{value:"Step 2: Download RedisInsight",id:"step-2-download-redisinsight",children:[]},{value:"Step 3. Cloning the repository",id:"step-3-cloning-the-repository",children:[]},{value:"Step 4. Run the producer(Post a new message)",id:"step-4-run-the-producerpost-a-new-message",children:[]},{value:"Step 5. Run the consumer(Consume messages)",id:"step-5-run-the-consumerconsume-messages",children:[]},{value:"Step 6: Posting the new messages",id:"step-6-posting-the-new-messages",children:[]},{value:"Additional Links",id:"additional-links",children:[]}],d={toc:c};function m(e){var t=e.components,o=Object(n.a)(e,r);return Object(i.b)("wrapper",Object(a.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Redis is an open source, in-memory, key-value data store most commonly used as a primary database, cache, message broker, and message queue. Redis cache delivers sub-millisecond response times, enabling fast and powerful real-time applications in industries such as gaming, fintech, ad-tech, social media, healthcare, and IoT. The Stream is a new data type introduced with Redis 5.0, which models a log data structure in a more abstract way.\nA Redis Stream is a Redis data type that represents a log, so you can add new information and message in an append-only mode.\nRedis Streams lets you build \u201cKafka-like\u201d applications, which can:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create applications that publish and consume messages. Nothing extraordinary here, you could already do that with Redis Pub/Sub(Publisher/Subscriber)."),Object(i.b)("li",{parentName:"ul"},"Consume messages that are published even when the client application (consumer) is not running. This is a big difference from Redis Pub/Sub."),Object(i.b)("li",{parentName:"ul"},"Consume messages starting from a specific point. For example, read the whole history or only new messages. ")),Object(i.b)("p",null,"In addition, Redis Streams has the concept of a consumer group. Redis Streams consumer groups, like the similar concept in ",Object(i.b)("a",{parentName:"p",href:"https://kafka.apache.org/"},"Apache Kafka"),", allows client applications to consume messages in a distributed fashion (multiple clients), making it easy to scale and create highly available systems."),Object(i.b)("p",null,"Let\u2019s dive under the covers and see ",Object(i.b)("a",{parentName:"p",href:"https://redis.io/topics/streams-intro"},"Redis Streams")," through the lens of RedisInsight. You will see how to use the ",Object(i.b)("a",{parentName:"p",href:"https://developer.redis.com/develop/java/#using-lettuce"},"Lettuce Java client")," to publish and consume messages using consumer group.This is the first basic example that uses a single consumer."),Object(i.b)("h2",{id:"prerequisite"},"Prerequisite:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://openjdk.java.net/install/"},"Install OpenJDK")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://maven.apache.org/install.html"},"Install Apache Maven")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://developer.redis.com/create"},"Install Redis"))),Object(i.b)("h3",{id:"step-1-run-a-redis-server"},"Step 1. Run a Redis server"),Object(i.b)("p",null,"Redis is an open source, in-memory, key-value data store most commonly used as a primary database, cache, message broker, and queue. Redis delivers sub-millisecond response times, enabling fast and powerful real-time applications in industries such as gaming, fintech, ad-tech, social media, healthcare, and IoT. You can run a Redis database directly over your local mac os or in a container. If you have Docker installed in your sytem, type the following command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"}," docker run -d -p 6379:6379 redislabs/redismod\n")),Object(i.b)("p",null,"You can connect to Redis server using the ",Object(i.b)("inlineCode",{parentName:"p"},"redis-cli")," command like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"}," redis-cli\n")),Object(i.b)("p",null,"The above command will make a connection to the Redis server. It will then present a prompt that allows you to run Redis commands.\nPlease note that you can connect to Redis server using multiple clients."),Object(i.b)("h2",{id:"step-2-download-redisinsight"},"Step 2: Download RedisInsight"),Object(i.b)("p",null,"To install RedisInsight on your local system, you need to first download the software from the Redis website."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/redis-insight/#insight-form"},"Click this link ")," to access a form that allows you to select the operating system of your choice."),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:s(1017).default})),Object(i.b)("p",null,"Run the installer. After the web server starts, open http://YOUR_HOST_IP:8001 and add a Redis database connection."),Object(i.b)("p",null,'Select "Connect to a Redis database"\n',Object(i.b)("img",{alt:"My Image",src:s(1018).default})),Object(i.b)("p",null,"Enter the requested details, including Name, Host (endpoint), Port, and Password.  Then click \u201cADD REDIS DATABASE\u201d."),Object(i.b)("h2",{id:"step-3-cloning-the-repository"},"Step 3. Cloning the repository"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"}," git clone https://github.com/redis-developer/redis-streams-101-java\n cd redis-streams-101-java\n mvn clean verify\n")),Object(i.b)("h2",{id:"step-4-run-the-producerpost-a-new-message"},"Step 4. Run the producer(Post a new message)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'\n mvn exec:java -Dexec.mainClass="com.kanibl.redis.streams.simple.RedisStreams101Producer" -Dexec.args="5"\n\n Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/sisu/sisu-guice/2.1.7/sisu-guice-2.1.7-noaop.jar (472 kB at 450 kB/s)\n Downloaded from central: https://repo.maven.apache.org/maven2/org/slf4j/slf4j-api/1.7.5/slf4j-api-1.7.5.jar (26 kB at 25 kB/s)\n Downloaded from central: https://repo.maven.apache.org/maven2/commons-codec/commons-codec/1.11/commons-codec-1.11.jar (335 kB at 313 kB/s)\n\n Sending 5 message(s)\n May 18, 2021 1:07:00 PM io.lettuce.core.EpollProvider <clinit>\n INFO: Starting without optional epoll library\n May 18, 2021 1:07:00 PM io.lettuce.core.KqueueProvider <clinit>\n INFO: Starting without optional kqueue library\n       Message 1621343220998-0 : {sensor_ts=1621343220975, loop_info=0, speed=15, direction=270} posted\n       Message 1621343221009-0 : {sensor_ts=1621343221007, loop_info=1, speed=15, direction=270} posted\n       Message 1621343221016-0 : {sensor_ts=1621343221011, loop_info=2, speed=15, direction=270} posted\n       Message 1621343221019-0 : {sensor_ts=1621343221017, loop_info=3, speed=15, direction=270} posted\n       Message 1621343221023-0 : {sensor_ts=1621343221021, loop_info=4, speed=15, direction=270} posted\n\n\n [INFO] ------------------------------------------------------------------------\n [INFO] BUILD SUCCESS\n [INFO] ------------------------------------------------------------------------\n [INFO] Total time:  9.102 s\n [INFO] Finished at: 2021-05-18T13:07:01Z\n [INFO] ------------------------------------------------------------------------\n \n')),Object(i.b)("h2",{id:"step-5-run-the-consumerconsume-messages"},"Step 5. Run the consumer(Consume messages)"),Object(i.b)("p",null,"Open a new terminal and run this command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"\n mvn exec:java -Dexec.main\n")),Object(i.b)("p",null,"The consumer will start and consume the message you just posted, and wait for any new messages."),Object(i.b)("h2",{id:"step-6-posting-the-new-messages"},"Step 6: Posting the new messages"),Object(i.b)("p",null,"In the first terminal, let us post new entries to a Redis stream:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},' mvn exec:java -Dexec.mainClass="com.kanibl.redis.streams.simple.RedisStreams101Producer" -Dexec.args="100"\n')),Object(i.b)("p",null,"Let us try to visualise the latest message using the RedisInsight browser tool. Make sure \u2018Stream Data\u2019 is selected and select any one of the streams. For a specified stream, you\u2019ll find a table showing data in that stream along with a timestamp of when each entry was added."),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:s(1019).default})),Object(i.b)("p",null,"To see the processing side of the stream select \u2018Stream Data\u201d. You will see 105 records under the streaming data."),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:s(1020).default})),Object(i.b)("p",null,"Click on \u201cConsumer Group\u201d to see application_1 as promising active consumers."),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:s(1021).default})),Object(i.b)("p",null,"RedisInsight also provide you to select fields as shown under \u201cView Columns\u201d section."),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:s(1022).default})),Object(i.b)("p",null,"It also displays pending items/messages for the specific streams as shown above."),Object(i.b)("h2",{id:"additional-links"},"Additional Links"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/explore/redisinsight/slowlog"},"Slowlog Configuration using RedisInsight")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/explore/redisinsight/browser"},"Explore Redis keys using RedisInsight browser tool")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/explore/redisinsight/memoryanalyzer"},"Memory Analysis using RedisInsight")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://redis.io/commands/xadd/"},"Add data to a Redis Stream using the XADD command")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://redis.io/commands/xreadgroup/"},"XREAD with support for consumer groups using XREADGROUP command")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://redis.io/commands/xread/"},"How to use the XREAD command (XREAD count)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://redis.io/commands/xack/"},"Remove one or multiple messages from consumer group using XACK command")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://redis.io/docs/manual/data-types/streams/#removing-single-items-from-a-stream"},"Removing single items from a stream using stream ID"))),Object(i.b)("h2",{id:""}),Object(i.b)("div",null,Object(i.b)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"}," ",Object(i.b)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}m.isMDXComponent=!0},395:function(e,t,s){"use strict";var a=s(0),n=s.n(a),i=s(393),r=s(400);s(394),s(59);t.a=function(e){var t=n.a.useState(!1),s=t[0],a=t[1];return n.a.createElement("div",{className:"ri-container"},n.a.createElement("div",{className:"ri-description-short"},n.a.createElement("div",{className:"ri-icon"},n.a.createElement("span",{className:"fe fe-zap"})),n.a.createElement("div",{className:"ri-detail"},n.a.createElement("div",{className:"ri-title"},n.a.createElement("a",{href:e.page},e.title)),n.a.createElement("div",{className:"ri-description"},e.description,n.a.Children.count(e.children)>0&&n.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return a(!s)}})))),s&&n.a.createElement("div",{className:"ri-description-long"},n.a.createElement(i.a,{components:r.a},e.children)))}},396:function(e,t,s){"use strict";var a=s(0),n=s(397);t.a=function(){var e=Object(a.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},397:function(e,t,s){"use strict";var a=s(0),n=Object(a.createContext)(void 0);t.a=n},398:function(e,t,s){"use strict";var a=s(0),n=s.n(a),i=s(396),r=s(402),o=s(60),l=s.n(o),c=37,d=39;t.a=function(e){var t=e.lazy,s=e.block,o=e.defaultValue,m=e.values,u=e.groupId,p=e.className,b=Object(i.a)(),h=b.tabGroupChoices,g=b.setTabGroupChoices,f=Object(a.useState)(o),j=f[0],O=f[1],v=a.Children.toArray(e.children);if(null!=u){var w=h[u];null!=w&&w!==j&&m.some((function(e){return e.value===w}))&&O(w)}var y=function(e){O(e),null!=u&&g(u,e)},R=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":s},p)},m.map((function(e){var t=e.value,s=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return R.push(e)},onKeyDown:function(e){!function(e,t,s){switch(s.keyCode){case d:!function(e,t){var s=e.indexOf(t)+1;e[s]?e[s].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var s=e.indexOf(t)-1;e[s]?e[s].focus():e[e.length-1].focus()}(e,t)}}(R,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},s)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},399:function(e,t,s){"use strict";var a=s(0),n=s.n(a);t.a=function(e){var t=e.children,s=e.hidden,a=e.className;return n.a.createElement("div",{role:"tabpanel",hidden:s,className:a},t)}}}]);