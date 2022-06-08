(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{182:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var s=a(3),n=a(7),i=(a(0),a(393)),r=(a(398),a(399),a(394),a(395),["components"]),o={id:"index-chatapp",title:"How to build a Chat application using Redis",sidebar_label:"How to build a Chat application using Redis",slug:"/howtos/chatapp",authors:["ajeet"]},l={unversionedId:"howtos/chatapp/index-chatapp",id:"howtos/chatapp/index-chatapp",isDocsHomePage:!1,title:"How to build a Chat application using Redis",description:"Real-time chat app is an online communication channel that allows you to conduct real-time conversations. More and more developers are tapping into the power of Redis as it is extremely fast & due to its support for variety of rich data structure such as Lists, Sets, Sorted Sets, Hashes etc. Redis comes along with a Pub/Sub messaging feature functionality that allows developers to scale the backend by spawning multiple server instances.",source:"@site/docs/howtos/chatapp/index-chatapp.mdx",slug:"/howtos/chatapp",permalink:"/howtos/chatapp",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/chatapp/index-chatapp.mdx",version:"current",lastUpdatedAt:1651582007,sidebar_label:"How to build a Chat application using Redis",sidebar:"docs",previous:{title:"10. Sample Application",permalink:"/howtos/moviesdatabase/sampleapp"},next:{title:"How to build a Fraud Detection System using Redis",permalink:"/howtos/frauddetection"}},c=[{value:"Step 1. Prerequisites",id:"step-1-prerequisites",children:[]},{value:"Step 2. Clone the repository",id:"step-2-clone-the-repository",children:[]},{value:"Step 3. Installing the requred packages",id:"step-3-installing-the-requred-packages",children:[]},{value:"Step 4. Starting the frontend",id:"step-4-starting-the-frontend",children:[]},{value:"Step 4. Installing the required Python modules",id:"step-4-installing-the-required-python-modules",children:[]},{value:"Step 5: Running the Backend",id:"step-5-running-the-backend",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"How the data is stored?",id:"how-the-data-is-stored",children:[]},{value:"How the data is accessed?",id:"how-the-data-is-accessed",children:[]},{value:"Related Posts",id:"related-posts",children:[]}],d={toc:c};function p(e){var t=e.components,o=Object(n.a)(e,r);return Object(i.b)("wrapper",Object(s.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Real-time chat app is an online communication channel that allows you to conduct real-time conversations. More and more developers are tapping into the power of Redis as it is extremely fast & due to its support for variety of rich data structure such as Lists, Sets, Sorted Sets, Hashes etc. Redis comes along with a Pub/Sub messaging feature functionality that allows developers to scale the backend by spawning multiple server instances.\nPlease note that this code is open source. You can find the link at the end of this tutorial."),Object(i.b)("div",{class:"text--center"},Object(i.b)("iframe",{width:"760",height:"415",src:"https://www.youtube.com/embed/miK7xDkDXF0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(i.b)("p",null,"In this tutorial, we will see how to develop real time messaging apps with Flask, Socket.IO and Redis. This example uses Redis Pub/sub feature  combined with websockets for implementing the real time chat app communication between client and server."),Object(i.b)("p",null,"Please note that this code is open source and implements the basic features of a live chat app. You can find the link at the end of this tutorial."),Object(i.b)("h3",{id:"step-1-prerequisites"},"Step 1. Prerequisites"),Object(i.b)("p",null,"In order to perform this instant messaging app development, you will need the following software:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Python 3.6+")),Object(i.b)("h3",{id:"step-2-clone-the-repository"},"Step 2. Clone the repository"),Object(i.b)("p",null,"First of all, we will clone the project that implements basic chat functionality."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git clone https://github.com/redis-developer/basic-redis-chat-app-demo-python\n")),Object(i.b)("h3",{id:"step-3-installing-the-requred-packages"},"Step 3. Installing the requred packages"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"cd client\nyarn install\n")),Object(i.b)("h3",{id:"step-4-starting-the-frontend"},"Step 4. Starting the frontend"),Object(i.b)("p",null,"To run the frontend of the chat app, run the following command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"yarn start\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"You can now access a chat window in the browser.\n\n  Local:            http://localhost:3000\n  On Your Network:  http://192.168.1.9:3000\n")),Object(i.b)("p",null,Object(i.b)("img",{alt:"chatapp",src:a(826).default})),Object(i.b)("h3",{id:"step-4-installing-the-required-python-modules"},"Step 4. Installing the required Python modules"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"cd ..\npip3 install -r requirements.txt\n")),Object(i.b)("h3",{id:"step-5-running-the-backend"},"Step 5: Running the Backend"),Object(i.b)("p",null,"To start the fully chat app, run the following commands:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"python3 -m venv venv/\nsource venv/bin/activate\npython3 app.py\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"python3 app.py                  \n * Restarting with stat\n * Debugger is active!\n * Debugger PIN: 220-696-610\n(8122) wsgi starting up on http://127.0.0.1:5000\n")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Chatapp",src:a(827).default})),Object(i.b)("h3",{id:"how-does-it-work"},"How does it work?"),Object(i.b)("p",null,"This instant messaging app server works as a basic REST API which involves keeping the session and handling the user state in the chat room (besides the WebSocket/real-time part). When the server starts, the initialization step occurs. At first, a new Redis connection is established and it's checked whether it's needed to load the demo data."),Object(i.b)("h4",{id:"initialization"},"Initialization"),Object(i.b)("p",null,"For simplicity, a key with total_users value is checked: if it does not exist, we fill the Redis database with initial data. EXISTS total_users (checks if the key exists)\nThe demo data initialization is handled in multiple steps:"),Object(i.b)("h4",{id:"creating-of-demo-users"},"Creating of demo users"),Object(i.b)("p",null,"We create a new user id: INCR total_users. Then we set a user ID lookup key by user name: e.g. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"SET username:nick user:1\n")),Object(i.b)("p",null,"And finally, the rest of the data is written to the hash set: "),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'  HSET user:1 username "nick" password "bcrypt_hashed_password".\n')),Object(i.b)("p",null,'Additionally, each user is added to the default "General" room.\nFor handling chat rooms for each user, we have a set that holds the chat room ids. Here\'s an example command of how to add the room: '),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},' SADD user:1:rooms "0"\n')),Object(i.b)("p",null,"Populate private messages between users. At first, private rooms are created: if a private room needs to be established, for each user a room id: room:1:2 is generated, where numbers correspond to the user ids in ascending order."),Object(i.b)("p",null,"E.g. Create a private room between 2 users: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"}," SADD user:1:rooms 1:2 and SADD user:2:rooms 1:2\n")),Object(i.b)("p",null,"Then we add messages to this room by writing to a sorted set: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"}," ZADD room:1:2 1615480369 \"{'from': 1, 'date': 1615480369, 'message': 'Hello', 'roomId': '1:2'}\"\n")),Object(i.b)("p",null,"We use a stringified JSON for keeping the message structure and simplify the implementation details for this demo-app."),Object(i.b)("p",null,'Populate the "General" room with messages. Messages are added to the sorted set with id of the "General" room: room:0'),Object(i.b)("h4",{id:"pubsub"},"Pub/sub"),Object(i.b)("p",null,"After initialization, a pub/sub subscription is created: SUBSCRIBE MESSAGES. At the same time, each server instance will run a listener on a message on this channel to receive real-time updates."),Object(i.b)("p",null,"Again, for simplicity, each message is serialized to JSON, which we parse and then handle in the same manner, as WebSocket messages."),Object(i.b)("p",null,"Pub/sub allows connecting multiple servers written in different platforms without taking into consideration the implementation detail of each server."),Object(i.b)("h4",{id:"real-time-chat-and-session-handling"},"Real-time chat and session handling"),Object(i.b)("p",null,"When a WebSocket/real-time server is instantiated, which listens for the next events:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Connection. A new user is connected. At this point, a user ID is captured and saved to the session (which is cached in Redis). Note, that session caching is language/library-specific and it's used here purely for persistence and maintaining the state between server reloads.")),Object(i.b)("p",null,"A global set with online_users key is used for keeping the online state for each user. So on a new connection, a user ID is written to that set:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"}," SADD online_users 1\n")),Object(i.b)("p",null,"Here we  have added user with id 1 to the set online_users"),Object(i.b)("p",null,"After that, a message is broadcasted to the clients to notify them that a new user is joined the chat."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Disconnect. It works similarly to the connection event, except we need to remove the user for online_users set and notify the clients: SREM online_users 1 (makes user with id 1 offline).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Message. A user sends a message, and it needs to be broadcasted to the other clients. The pub/sub allows us also to broadcast this message to all server instances which are connected to this Redis:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"}," PUBLISH message \"{'serverId': 4132, 'type':'message', 'data': {'from': 1, 'date': 1615480369, 'message': 'Hello', 'roomId': '1:2'}}\"\n")))),Object(i.b)("p",null,"Note we send additional data related to the type of the message and the server id. Server id is used to discard the messages by the server instance which sends them since it is connected to the same MESSAGES channel."),Object(i.b)("p",null,"The type field of the serialized JSON corresponds to the real-time method we use for real-time communication (connect/disconnect/message)."),Object(i.b)("p",null,"The data is method-specific information. In the example above it's related to the new message."),Object(i.b)("h3",{id:"how-the-data-is-stored"},"How the data is stored?"),Object(i.b)("p",null,"Redis is used mainly as a database to keep the user/messages data and for sending messages between connected servers."),Object(i.b)("p",null,"The real-time functionality is handled by Socket.IO for server-client messaging. Additionally each server instance subscribes to the MESSAGES channel of pub/sub and dispatches messages once they arrive. Note that, the server transports pub/sub messages with a separate event stream (handled by Server Sent Events), this is due to the need of running pub/sub message loop apart from socket.io signals."),Object(i.b)("p",null,"The chat data is stored in various keys and various data types.\nUser data is stored in a hash set where each user entry contains the next values:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"username: unique user name;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"password: hashed password")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Additionally a set of chat rooms is associated with user")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Rooms are sorted sets which contains messages where score is the timestamp for each message")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Each chat room has a name associated with it")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'The "online" set is global for all users is used for keeping track on which user is online.')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Each user hash's set is accessed by key user:{userId}. The data for it stored with ",Object(i.b)("inlineCode",{parentName:"p"},"HSET key field data"),". User ID is calculated by incrementing the ",Object(i.b)("inlineCode",{parentName:"p"},"total_users")," key (",Object(i.b)("inlineCode",{parentName:"p"},"INCR total_users"),")")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Usernames are stored as separate keys (",Object(i.b)("inlineCode",{parentName:"p"},"username:{username}"),") which returns the userId for quicker access and stored with ",Object(i.b)("inlineCode",{parentName:"p"},"SET username:{username} {userId}"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Rooms which a user belongs to are stored at ",Object(i.b)("inlineCode",{parentName:"p"},"user:{userId}:rooms")," as a set of chat room ids. A room is added by ",Object(i.b)("inlineCode",{parentName:"p"},"SADD user:{userId}:rooms {roomId}")," command.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Messages are stored at ",Object(i.b)("inlineCode",{parentName:"p"},"room:{roomId}")," key in a sorted set (as mentioned above). They are added with the ",Object(i.b)("inlineCode",{parentName:"p"},"ZADD room:{roomId} {timestamp} {message}")," command. Messages are serialized to an app-specific JSON string."))),Object(i.b)("h3",{id:"how-the-data-is-accessed"},"How the data is accessed?"),Object(i.b)("p",null,"Get User HGETALL user:{id}. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"}," HGETALL user:2\n")),Object(i.b)("p",null,"where we get data for the user with id: 2."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Online users: SMEMBERS online_users. This will return ids of users which are online")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Get room ids of a user: SMEMBERS user:{id}:rooms.\nExample: "),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"}," SMEMBERS user:2:rooms\n")))),Object(i.b)("p",null,"This will return IDs of chat rooms for user with ID: 2"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Get list of messages ",Object(i.b)("inlineCode",{parentName:"p"},"ZREVRANGE room:{roomId} {offset_start} {offset_end}"),".\nExample: "),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"}," ZREVRANGE room:1:2 0 50\n")),Object(i.b)("p",{parentName:"li"},"It will return 50 messages with 0 offsets for the private room between users with IDs 1 and 2."))),Object(i.b)("h2",{id:"related-posts"},"Related Posts"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/redis-developer/basic-redis-chat-app-demo-dotnet"},"Building a Chat application demo in .Net")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/redis-developer/basic-redis-chat-app-demo-java"},"Building a Chat application demo in Java")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/redis-developer/basic-redis-chat-app-demo-nodejs"},"Building a Chat application demo in NodeJS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/redis-developer/basic-redis-chat-demo-go"},"Building a Chat application demo in Go")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/redis-developer/basic-redis-chat-demo-ruby"},"Building a Chat application demo in Ruby"))))}p.isMDXComponent=!0},395:function(e,t,a){"use strict";var s=a(0),n=a.n(s),i=a(393),r=a(400);a(394),a(59);t.a=function(e){var t=n.a.useState(!1),a=t[0],s=t[1];return n.a.createElement("div",{className:"ri-container"},n.a.createElement("div",{className:"ri-description-short"},n.a.createElement("div",{className:"ri-icon"},n.a.createElement("span",{className:"fe fe-zap"})),n.a.createElement("div",{className:"ri-detail"},n.a.createElement("div",{className:"ri-title"},n.a.createElement("a",{href:e.page},e.title)),n.a.createElement("div",{className:"ri-description"},e.description,n.a.Children.count(e.children)>0&&n.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return s(!a)}})))),a&&n.a.createElement("div",{className:"ri-description-long"},n.a.createElement(i.a,{components:r.a},e.children)))}},396:function(e,t,a){"use strict";var s=a(0),n=a(397);t.a=function(){var e=Object(s.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},397:function(e,t,a){"use strict";var s=a(0),n=Object(s.createContext)(void 0);t.a=n},398:function(e,t,a){"use strict";var s=a(0),n=a.n(s),i=a(396),r=a(402),o=a(60),l=a.n(o),c=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,p=e.values,b=e.groupId,u=e.className,h=Object(i.a)(),m=h.tabGroupChoices,f=h.setTabGroupChoices,O=Object(s.useState)(o),j=O[0],g=O[1],w=s.Children.toArray(e.children);if(null!=b){var v=m[b];null!=v&&v!==j&&p.some((function(e){return e.value===v}))&&g(v)}var N=function(e){g(e),null!=b&&f(b,e)},y=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":a},u)},p.map((function(e){var t=e.value,a=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},a)}))),t?Object(s.cloneElement)(w.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return Object(s.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},399:function(e,t,a){"use strict";var s=a(0),n=a.n(s);t.a=function(e){var t=e.children,a=e.hidden,s=e.className;return n.a.createElement("div",{role:"tabpanel",hidden:a,className:s},t)}},826:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/chatapp_server-5bee233da218811142ccb0a536639640.png"},827:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/chatapp_homepage-e18893a7fe583a1dbda4c15347ee9d52.png"}}]);