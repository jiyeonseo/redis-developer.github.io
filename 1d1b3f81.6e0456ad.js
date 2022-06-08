(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(393)),o=(n(394),["components"]),s={id:"index-lesson_2",title:"Introducing Spring Data Redis",sidebar_label:"Spring Data Redis",slug:"/develop/java/redis-and-spring-course/lesson_2",authors:["bsb"]},p={unversionedId:"develop/java/spring/redis-and-spring-course/lesson_2/index-lesson_2",id:"develop/java/spring/redis-and-spring-course/lesson_2/index-lesson_2",isDocsHomePage:!1,title:"Introducing Spring Data Redis",description:"Objectives",source:"@site/docs/develop/java/spring/redis-and-spring-course/lesson_2/index-lesson_2.mdx",slug:"/develop/java/redis-and-spring-course/lesson_2",permalink:"/develop/java/redis-and-spring-course/lesson_2",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/java/spring/redis-and-spring-course/lesson_2/index-lesson_2.mdx",version:"current",lastUpdatedAt:1646402901,sidebar_label:"Spring Data Redis",sidebar:"docs",previous:{title:"Spring and Redis: Up and Running",permalink:"/develop/java/redis-and-spring-course/lesson_1"},next:{title:"Object Mapping & Redis Repositories",permalink:"/develop/java/redis-and-spring-course/lesson_3"}},l=[{value:"Objectives",id:"objectives",children:[]},{value:"Agenda",id:"agenda",children:[]},{value:"Introducing Spring Data Redis",id:"introducing-spring-data-redis",children:[]},{value:"Redis template",id:"redis-template",children:[]},{value:"Using the redis template",id:"using-the-redis-template",children:[]}],c={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"objectives"},"Objectives"),Object(i.b)("p",null,"Configure a RedisTemplate and learn how to access different operation bundles to read and write data to and from Redis in a Spring REST controller."),Object(i.b)("h3",{id:"agenda"},"Agenda"),Object(i.b)("p",null,"In this lesson, students will learn:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"How to configure the connection to Redis from the application"),Object(i.b)("li",{parentName:"ul"},"How to access and configure the Spring Data RedisTemplate"),Object(i.b)("li",{parentName:"ul"},"How to use opsForXXX to read and write data to Redis"),Object(i.b)("li",{parentName:"ul"},"The basis of Spring\u2019s @RestController")),Object(i.b)("p",null,"If you get stuck:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The progress made in this lesson is available on the redi2read github repository at ",Object(i.b)("a",{parentName:"li",href:"https://github.com/redis-developer/redi2read/tree/course/milestone-2"},"https://github.com/redis-developer/redi2read/tree/course/milestone-2"))),Object(i.b)("h3",{id:"introducing-spring-data-redis"},"Introducing Spring Data Redis"),Object(i.b)("p",null,"Spring Data Redis provides the abstractions of the Spring Data platform to Redis."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Spring Data")," makes it easy to use data access technologies, relational and non-relational databases, map-reduce frameworks, and cloud-based data services.\nTo learn more about Spring Data, see ",Object(i.b)("a",{parentName:"li",href:"https://spring.io/projects/spring-data"},"https://spring.io/projects/spring-data"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Spring Data Redis")," provides access to Redis from Spring applications. It offers both low-level and high-level abstractions for interacting with Redis.")),Object(i.b)("h3",{id:"redis-template"},"Redis template"),Object(i.b)("p",null,"We will start by configuring a RedisTemplate, a class that provides a thread-safe bridge between Spring and Redis Commands. It handles connection management, freeing the developer from opening and closing  Redis connections."),Object(i.b)("p",null,"Start from the main application class, ",Object(i.b)("inlineCode",{parentName:"p"},"Redi2readApplication"),", located at ",Object(i.b)("inlineCode",{parentName:"p"},"src/main/java/com/redislabs/edu/redi2read/Redi2readApplication.java"),"."),Object(i.b)("p",null,"Add a ",Object(i.b)("inlineCode",{parentName:"p"},"@Bean")," annotated method called redisTemplate, which takes a ",Object(i.b)("inlineCode",{parentName:"p"},"RedisConnectionFactory")," and returns a ",Object(i.b)("inlineCode",{parentName:"p"},"RedisTemplate"),". This method will provide a configured bean of type ",Object(i.b)("inlineCode",{parentName:"p"},"RedisTemplate")," in the Spring container. We can inject this bean wherever we need to access Redis."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"@Bean\npublic RedisTemplate<?, ?> redisTemplate(RedisConnectionFactory connectionFactory) {\n  RedisTemplate<?, ?> template = new RedisTemplate<>();\n  template.setConnectionFactory(connectionFactory);\n\n  return template;\n}\n")),Object(i.b)("p",null,"This requires the following imports:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"import org.springframework.context.annotation.Bean;\nimport org.springframework.data.redis.connection.RedisConnectionFactory;\nimport org.springframework.data.redis.core.RedisTemplate;\n")),Object(i.b)("p",null,"Notice that while the template types are generic, it is up to the serializers/deserializers to convert the given Objects to-and-from binary data correctly."),Object(i.b)("p",null,"We could also configure the Redis host and port programmatically by defining a ",Object(i.b)("inlineCode",{parentName:"p"},"@Bean")," annotated method that returns a ",Object(i.b)("inlineCode",{parentName:"p"},"RedisConnectionFactory")," (either a ",Object(i.b)("inlineCode",{parentName:"p"},"JedisConnectionFactory")," or ",Object(i.b)("inlineCode",{parentName:"p"},"LettuceConnectionFactory"),") and use the ",Object(i.b)("inlineCode",{parentName:"p"},"setHostName")," and ",Object(i.b)("inlineCode",{parentName:"p"},"setPort")," methods."),Object(i.b)("p",null,"But since Spring Data Redis can configure the beans using a properties file (either Java Properties or YAML), we will use the ",Object(i.b)("inlineCode",{parentName:"p"},"applications.properties")," file instead."),Object(i.b)("p",null,"Spring Data Redis properties are prefixed with ",Object(i.b)("inlineCode",{parentName:"p"},"spring.redis."),". In the file ",Object(i.b)("inlineCode",{parentName:"p"},"src/main/resources/application.properties")," add the following properties:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"spring.redis.host=localhost\nspring.redis.port=6379\n")),Object(i.b)("p",null,"While we're at it, let\u2019s also add an exclusion for the autoconfiguration of Spring Security. Since we\u2019ve included the Maven dependency for Spring Security but have not yet configured it, Spring defaults on the safe side and protects all endpoints on the application. So, for now, we\u2019ll disable security autoconfiguration until we decide to secure our services."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"spring.redis.host=localhost\nspring.redis.port=6379\nspring.autoconfigure.exclude=org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration\n")),Object(i.b)("h3",{id:"using-the-redis-template"},"Using the redis template"),Object(i.b)("p",null,"To test the RedisTemplate, we\u2019ll create a REST controller and use it to  perform some operations against our Redis instance."),Object(i.b)("p",null,"We will add the controller under the src/main/java/com/redislabs/edu/redi2read/controllers folder, which means it\u2019ll live in the com.redislabs.edu.redi2read.controllers package."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"package com.redislabs.edu.redi2read.controllers;\n\npublic class HelloRedisController {\n\n}\n")),Object(i.b)("p",null,"Next, let\u2019s annotate the class with the ",Object(i.b)("inlineCode",{parentName:"p"},"@RestController")," and the ",Object(i.b)("inlineCode",{parentName:"p"},"@RequestMapping")," annotations. The controller will now listen to requests rooted at http://localhost:8080/api/redis."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'@RestController\n@RequestMapping("/api/redis")\npublic class HelloRedisController {\n\n}\n')),Object(i.b)("p",null,"Add the necessary import as shown next:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"import org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\n")),Object(i.b)("p",null,"Next, let\u2019s inject an ",Object(i.b)("inlineCode",{parentName:"p"},"@Autowired")," instance of ",Object(i.b)("inlineCode",{parentName:"p"},"RedisTemplate"),". Notice that we will use concrete classes for the ",Object(i.b)("inlineCode",{parentName:"p"},"K")," and ",Object(i.b)("inlineCode",{parentName:"p"},"V")," parameter classes in ",Object(i.b)("inlineCode",{parentName:"p"},"RedisTemplate<K,V>"),". ",Object(i.b)("inlineCode",{parentName:"p"},"K")," is the Redis key type (usually a ",Object(i.b)("inlineCode",{parentName:"p"},"String"),") and ",Object(i.b)("inlineCode",{parentName:"p"},"V"),", the Redis value type (i.e., something that maps to a Redis data structure)."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'@RestController\n@RequestMapping("/api/redis")\npublic class HelloRedisController {\n\n  @Autowired\n  private RedisTemplate<String, String> template;\n}\n')),Object(i.b)("p",null,"Add the necessary import as shown next:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"import org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.data.redis.core.RedisTemplate;\n")),Object(i.b)("p",null,"Now, all we need is a controller method to run some Redis commands. We will use the Redis SET command (",Object(i.b)("a",{parentName:"p",href:"https://redis.io/commands/set"},"https://redis.io/commands/set"),") as we previously demonstrated using the Redis CLI."),Object(i.b)("p",null,"First, we\u2019ll create a String that will serve to prefix the keys that we write to Redis:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'private static final String STRING_KEY_PREFIX = "redi2read:strings:";\n')),Object(i.b)("p",null,"The method is annotated with the ",Object(i.b)("inlineCode",{parentName:"p"},"@PostMapping")," with a path of ",Object(i.b)("inlineCode",{parentName:"p"},"/strings"),", making the effective path for our post ",Object(i.b)("inlineCode",{parentName:"p"},"/api/redis/strings"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"@Request")," body and the return value of the method is a ",Object(i.b)("inlineCode",{parentName:"p"},"Map.Entry<String, String>")," which is convenient when dealing with name-value pairs."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'@PostMapping("/strings")\n@ResponseStatus(HttpStatus.CREATED)\npublic Map.Entry<String, String> setString(@RequestBody Map.Entry<String, String> kvp) {\n  return kvp;\n}\n')),Object(i.b)("p",null,"Add the necessary import as shown next:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"import org.springframework.web.bind.annotation.PostMapping;\nimport org.springframework.web.bind.annotation.ResponseStatus;\n")),Object(i.b)("p",null,"If we launch the application now with:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"./mvnw clean spring-boot:run\n")),Object(i.b)("p",null,"We can use curl to invoke our ",Object(i.b)("inlineCode",{parentName:"p"},"api/redis/strings")," endpoint:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'$ curl --location --request POST \'http://localhost:8080/api/redis/strings\' \\\n  --header \'Content-Type: application/json\' \\\n  --data-raw \'{ "database:redis:creator": "Salvatore Sanfilippo" }\'\n{"database:redis:creator":"Salvatore Sanfilippo"}\n')),Object(i.b)("p",null,"This results in the JSON payload being echoed back. Let's complete the implementation of the setString method so that we can write a Redis string to the database:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'@PostMapping("/strings")\n@ResponseStatus(HttpStatus.CREATED)\npublic Map.Entry<String, String> setString(@RequestBody Map.Entry<String, String> kvp) {\n  template.opsForValue().set(STRING_KEY_PREFIX + kvp.getKey(), kvp.getValue());\n\n  return kvp;\n}\n')),Object(i.b)("p",null,"We will use the ",Object(i.b)("inlineCode",{parentName:"p"},"RedisTemplate "),"instance template ",Object(i.b)("inlineCode",{parentName:"p"},"opsForValue()")," method to get an instance of ",Object(i.b)("inlineCode",{parentName:"p"},"ValueOperations"),", which provides methods to execute operations performed on simple values (or ",Object(i.b)("inlineCode",{parentName:"p"},"Strings")," in Redis terminology).\nThe Redis SET method is implemented using the (you guessed it!) ",Object(i.b)("inlineCode",{parentName:"p"},"set()")," method, which takes a key name and a value. We are prepending the KEY_SPACE_PREFIX to the key that's provided as an argument.\nBefore you fire up another curl request, let\u2019s start a Redis CLI instance with the MONITOR flag so that we can watch what transpires when we hit the server."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ redis-cli MONITOR\n")),Object(i.b)("p",null,"Now, when you issue the POST request again, you should see output similar to:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'1617346602.221390 [0 172.19.0.1:58396] "SET" "redi2read:strings:database:redis:creator" "Salvatore Sanfilippo"\n')),Object(i.b)("p",null,"We can launch another Redis CLI to query Redis ourselves:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'127.0.0.1:6379> KEYS *\n1) "redi2read:strings:database:redis:creator"\n127.0.0.1:6379> TYPE "redi2read:strings:database:redis:creator"\nstring\n127.0.0.1:6379> GET "redi2read:strings:database:redis:creator"\n"Salvatore Sanfilippo"\n127.0.0.1:6379>\n')),Object(i.b)("p",null,"If we use the KEYS * command, we can see all of the keys stored in Redis (don\u2019t do this on a production box with a lot of data,\nas you\u2019ll block your Redis instance while serving a massive response).\nThe ",Object(i.b)("inlineCode",{parentName:"p"},"redi2read:strings:database:redis:creator")," key has been created, and it is a Redis String with a value of ",Object(i.b)("inlineCode",{parentName:"p"},"Salvatore Sanfilipo"),"\nWe can now write strings to Redis through our REST controller.\nNext, let\u2019s add a corresponding GET method to our controller to read string values:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'@GetMapping("/strings/{key}")\npublic Map.Entry<String, String> getString(@PathVariable("key") String key) {\n  String value = template.opsForValue().get(STRING_KEY_PREFIX + key);\n\n  if (value == null) {\n    throw new ResponseStatusException(HttpStatus.NOT_FOUND, "key not found");\n  }\n\n  return new SimpleEntry<String, String>(key, value);\n}\n')),Object(i.b)("p",null,"With imports:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"import java.util.AbstractMap.SimpleEntry;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.server.ResponseStatusException;\n")),Object(i.b)("p",null,"We can now issue a GET request to retrieve String keys:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'$ curl --location --request GET \'http://localhost:8080/api/redis/strings/database:redis:creator\'\n{"database:redis:creator":"Salvatore Sanfilippo"}\n')),Object(i.b)("p",null,"On the Redis CLI monitor you should see:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'1617347871.901585 [0 172.19.0.1:58284] "GET" "redi2read:strings:database:redis:creator"\n')),Object(i.b)("p",null,"Note that in order to return an error on a key not found, we have to check the result for null and throw an appropriate exception."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{\n  "timestamp": "2021-04-02T07:45:10.303+00:00",\n  "status": 404,\n  "error": "Not Found",\n  "trace": "org.springframework.web.server.ResponseStatusException: 404...\\n",\n  "message": "key not found",\n  "path": "/api/redis/strings/database:neo4j:creator"\n}\n')),Object(i.b)("p",null,"Keep in mind that this is a \u201cdevelopment time\u201d exception, appropriate to be shown on an error page meant for developers.\nLikely, we would intercept this exception and create an API appropriate response (likely just the status and error fields above)."))}d.isMDXComponent=!0},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),c=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},394:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(20),a=n(401);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,s=void 0!==o&&o,p=i.absolute,l=void 0!==p&&p;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(s)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+c:c}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},401:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))}}]);