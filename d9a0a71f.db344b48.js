(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{339:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(393)),i=["components"],s={id:"index-basic-caching",title:"How to add a basic API Cache to your ASP.NET Core application",sidebar_label:"Basic API Caching using ASP.NET Core",slug:"/develop/dotnet/aspnetcore/rate-limiting/fixed-window",authors:["steve"]},c={unversionedId:"develop/dotnet/aspnetcore/caching/basic/index-basic-caching",id:"develop/dotnet/aspnetcore/caching/basic/index-basic-caching",isDocsHomePage:!1,title:"How to add a basic API Cache to your ASP.NET Core application",description:"Redis is synonymous with caching, and for a good reason, Redis is fast and easy to get up and running with and does an excellent job as a cache.",source:"@site/docs/develop/dotnet/aspnetcore/caching/basic/index-basic-api-caching.md",slug:"/develop/dotnet/aspnetcore/rate-limiting/fixed-window",permalink:"/develop/dotnet/aspnetcore/rate-limiting/fixed-window",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/dotnet/aspnetcore/caching/basic/index-basic-api-caching.md",version:"current",lastUpdatedAt:1648152977,sidebar_label:"Basic API Caching using ASP.NET Core",sidebar:"docs",previous:{title:"Configurable Sliding Window Rate Limiting Middleware for Redis & ASP.NET Core",permalink:"/develop/dotnet/aspnetcore/rate-limiting/middleware"},next:{title:"Getting Started with Redis OM .NET",permalink:"/develop/dotnet/redis-om-dotnet/getting-started"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Start Redis",id:"start-redis",children:[]},{value:"Create the Project",id:"create-the-project",children:[]},{value:"Add Redis Cache to ASP.NET Core app",id:"add-redis-cache-to-aspnet-core-app",children:[]},{value:"Create Data Structures to Hold Results",id:"create-data-structures-to-hold-results",children:[]},{value:"Dependency Injection Into the Weather Forecast Controller",id:"dependency-injection-into-the-weather-forecast-controller",children:[]},{value:"Query the API",id:"query-the-api",children:[]},{value:"Write the Forecast Action",id:"write-the-forecast-action",children:[]},{value:"Run the App",id:"run-the-app",children:[]},{value:"Resources",id:"resources",children:[]}],d={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Redis is synonymous with caching, and for a good reason, Redis is fast and easy to get up and running with and does an excellent job as a cache. "),Object(o.b)("p",null,"There are two big reasons to use a cache over the source of truth."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Time - caches are much faster"),Object(o.b)("li",{parentName:"ol"},"Cost - sometimes going to a source of truth has a monetary cost. For example, API endpoints sometimes charge per request. This means that we want to limit unnecessary requests to a particular endpoint.")),Object(o.b)("p",null,"In the second case, unnecessary requests to the API endpoint are wasteful and can add up to a high financial cost to the application over time. Therefore, in this tutorial, we will look at caching the results of API requests to prevent us from having to make round trips to an API."),Object(o.b)("p",null,"For our example, we will use the US National Weather Service's (NWS) Weather API - which is free and requires no authentication beyond a user-agent. We will build an API to get a weather forecast based on latitude and longitude using ASP.NET Core."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"IDE to write C# code - Visual Studio, Rider, VS Code, etc. . ."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://dotnet.microsoft.com/en-us/download/dotnet/6.0"},".NET 6 SDK")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.docker.com/products/docker-desktop"},"Docker"))),Object(o.b)("h2",{id:"start-redis"},"Start Redis"),Object(o.b)("p",null,"Let's start out by starting redis; for development purposes, you can just use docker:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"docker run -p 6379:6379 redis\n")),Object(o.b)("p",null,"If you are getting ready to deploy to production, you may want to make use of the ",Object(o.b)("a",{parentName:"p",href:"https://app.redislabs.com/"},"Redis Cloud")),Object(o.b)("h2",{id:"create-the-project"},"Create the Project"),Object(o.b)("p",null,"Next, we'll create the ASP.NET Core API project using the .NET CLI."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"dotnet new webapi -n BasicWeatherCacheApp\n")),Object(o.b)("p",null,"Then we'll cd into the ",Object(o.b)("inlineCode",{parentName:"p"},"BasicWeatherCacheApp")," directory that we just created, and we will add the ",Object(o.b)("inlineCode",{parentName:"p"},"StackExchange.Redis")," package to the project:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"dotnet add package StackExchange.Redis\n")),Object(o.b)("h2",{id:"add-redis-cache-to-aspnet-core-app"},"Add Redis Cache to ASP.NET Core app"),Object(o.b)("p",null,"Open up the ",Object(o.b)("inlineCode",{parentName:"p"},"program.cs")," file. This is where the services are all defined and injected into the project. Add the following to add the StackExchange.Redis ",Object(o.b)("inlineCode",{parentName:"p"},"ConnectionMultiplexer")," Redis to the ASP.NET Core application as well as an HttpClient:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},'builder.Services.AddSingleton<IConnectionMultiplexer>(ConnectionMultiplexer.Connect("localhost"));\nbuilder.Services.AddHttpClient();\n')),Object(o.b)("h2",{id:"create-data-structures-to-hold-results"},"Create Data Structures to Hold Results"),Object(o.b)("p",null,"The resulting structure from the NWS is a bit verbose, but we will endeavor to just capture the future forecasts for a particular area."),Object(o.b)("p",null,"We'll create two structures, the first will contain the actual forecast, and the second will have the list of forecasts from a given request, as well as the time it took to accumulate the forecasts. For the first, we'll use the default ",Object(o.b)("inlineCode",{parentName:"p"},"WeatherForecast")," class that's created in the template, open up ",Object(o.b)("inlineCode",{parentName:"p"},"WeatherForecast.cs"),", and replace its contents with:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},'public class WeatherForecast\n{\n    [JsonPropertyName("number")]\n    public int Number { get; set; }\n\n    [JsonPropertyName("name")]\n    public string Name { get; set; }\n\n    [JsonPropertyName("startTime")]\n    public DateTime StartTime { get; set; }\n    \n    [JsonPropertyName("endTime")]\n    public DateTime EndTime { get; set; }\n\n    [JsonPropertyName("isDayTime")]\n    public bool IsDayTime { get; set; }\n\n    [JsonPropertyName("temperature")]\n    public int Temperature { get; set; }\n\n    [JsonPropertyName("temperatureUnit")]\n    public string? TemperatureUnit { get; set; }\n    \n    [JsonPropertyName("temperatureTrend")]\n    public string? TemperatureTrend { get; set; }\n\n    [JsonPropertyName("windSpeed")]\n    public string? WindSpeed { get; set; }\n    \n    [JsonPropertyName("windDirection")]\n    public string? WindDirection { get; set; }\n    \n    [JsonPropertyName("shortForecast")]\n    public string? ShortForecast { get; set; }\n\n    [JsonPropertyName("detailedForecast")]\n    public string? DetailedForecast { get; set; }\n}\n')),Object(o.b)("p",null,"Next, create the file ",Object(o.b)("inlineCode",{parentName:"p"},"ForecastResult.cs")," and add the following to it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"public class ForecastResult\n{\n    public long ElapsedTime { get; }\n    public IEnumerable<WeatherForecast> Forecasts { get; }\n\n    public ForecastResult(IEnumerable<WeatherForecast> forecasts, long elapsedTime)\n    {\n        Forecasts = forecasts;\n        ElapsedTime = elapsedTime;\n    }\n}\n")),Object(o.b)("h2",{id:"dependency-injection-into-the-weather-forecast-controller"},"Dependency Injection Into the Weather Forecast Controller"),Object(o.b)("p",null,"Now that we've set up our app, we need to configure our controller. First, open the ",Object(o.b)("inlineCode",{parentName:"p"},"Controllers/WeatherForecastController")," (this controller is automatically created along with the template) and add the following code to inject what we need into it."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},'private readonly HttpClient _client;\nprivate readonly IDatabase _redis;\n\npublic WeatherForecastController(HttpClient client, IConnectionMultiplexer muxer)\n{\n    _client = client;\n    _client.DefaultRequestHeaders.UserAgent.Add(new ProductInfoHeaderValue("weatherCachingApp","1.0") );\n    _redis = muxer.GetDatabase();\n}\n')),Object(o.b)("h2",{id:"query-the-api"},"Query the API"),Object(o.b)("p",null,"To query the Weather API to find the forecast for a particular latitude and longitude, we need to go through a 2 step process. First, there's no natural API for querying the forecast based on geolocation. Instead, every geolocation is assigned a particular office out of which it's monitored, and each office has a grid 2D grid that a specific latitude and longitude will map to. Fortunately, there's a ",Object(o.b)("inlineCode",{parentName:"p"},"points")," API endpoint to which you can pass your latitude and longitude. This will give you the particular office out of which the point is valid and the x/y grid coordinates for that point. You need to query the forecast endpoint for that grid points for that office and then pull out the forecasted periods. The following accomplishes all this."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},'private async Task<string> GetForecast(double latitude, double longitude)\n{\n    var pointsRequestQuery = $"https://api.weather.gov/points/{latitude},{longitude}"; //get the URI\n    var result = await _client.GetFromJsonAsync<JsonObject>(pointsRequestQuery);\n    var gridX = result["properties"]["gridX"].ToString();\n    var gridY = result["properties"]["gridY"].ToString();\n    var gridId = result["Properties"]["gridId"].ToString();\n    var forecastRequestQuery = $"https://api.weather.gov/gridpoints/{gridId}/{gridX},{gridY}/forecast";\n    var forecastResult = await _client.GetFromJsonAsync<JsonObject>(forecastRequestQuery);\n    var periodsJson = forecastResult["properties"]["periods"].ToJsonString();\n    return periodsJson;\n}\n')),Object(o.b)("h2",{id:"write-the-forecast-action"},"Write the Forecast Action"),Object(o.b)("p",null,"Given the multiple API Calls, it's clear why using a cache is critical for our application. These forecasts do not update very often, every 1-3 hours. That means making two back-to-back API requests can be expensive in both time and money. In the case of this API, there's no financial cost associated with the requests. However, with a commercial API, there often times will be per-request costs. When we are writing this action, we will check the cache. If the cache contains the relevant forecast, we will return that. Otherwise, we will hit the API, save the result, and set the key to expire. We'll time it and then reply back with the result and time it took."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},'[HttpGet(Name = "GetWeatherForecast")]\npublic async Task<ForecastResult> Get([FromQuery] double latitude, [FromQuery] double longitude)\n{\n    string json;\n    var watch = Stopwatch.StartNew();\n    var keyName = $"forecast:{latitude},{longitude}";\n    json = await _redis.StringGetAsync(keyName);\n    if (string.IsNullOrEmpty(json))\n    {\n        json = await GetForecast(latitude, longitude);\n        var setTask = _redis.StringSetAsync(keyName, json);\n        var expireTask = _redis.KeyExpireAsync(keyName, TimeSpan.FromSeconds(3600));\n        await Task.WhenAll(setTask, expireTask);\n    }\n    \n    var forecast =\n        JsonSerializer.Deserialize<IEnumerable<WeatherForecast>>(json);\n    watch.Stop();\n    var result = new ForecastResult(forecast, watch.ElapsedMilliseconds);\n        \n    return result;\n}\n')),Object(o.b)("h2",{id:"run-the-app"},"Run the App"),Object(o.b)("p",null,"All that's left to do now is run the app. Run ",Object(o.b)("inlineCode",{parentName:"p"},"dotnet run")," in your console, and open up to ",Object(o.b)("inlineCode",{parentName:"p"},"https://localhost:PORT_NUMBER/swagger/index.html")," and use the GUI to send a request. Otherwise, you can use a cURL to send the request. The first time you send a new latitude and longitude, you'll notice that it takes pretty long to send the request, ~1 second. When you make the request again, and it hits the cache, it will drop dramatically to ~1-5ms."),Object(o.b)("h2",{id:"resources"},"Resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Source code for this demo is located in ",Object(o.b)("a",{parentName:"li",href:"https://github.com/redis-developer/basic-aspnetcore-api-caching"},"GitHub")),Object(o.b)("li",{parentName:"ul"},"More documentation for the StackExchange.Redis library is located on it's ",Object(o.b)("a",{parentName:"li",href:"https://stackexchange.github.io/StackExchange.Redis/"},"docs site"))))}p.isMDXComponent=!0},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,b=p["".concat(i,".").concat(h)]||p[h]||u[h]||o;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);