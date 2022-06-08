(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{123:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),i=(r(0),r(393)),o=["components"],c={id:"index-azure-cache-terraform-private",title:"Azure Cache for Redis Enterprise using Terraform with Private Link",sidebar_label:"Azure Cache for Redis Enterprise using Terraform with Private Link",slug:"/operate/provisioning/azure-cache-terraform-private"},s={unversionedId:"operate/provisioning/azure-cache-terraform-private/index-azure-cache-terraform-private",id:"operate/provisioning/azure-cache-terraform-private/index-azure-cache-terraform-private",isDocsHomePage:!1,title:"Azure Cache for Redis Enterprise using Terraform with Private Link",description:"Azure Private Link for Azure Cache for Redis provides private connectivity from a virtual network to your cache instance. This means that you can now use Azure Private Link to connect to an Azure Cache for Redis instance from your virtual network via a private endpoint, which is assigned a private IP address in a subnet within the virtual network. It simplifies the network architecture and secures the connection between endpoints in Azure by eliminating data exposure to the public internet. Private Link carries traffic privately, reducing your exposure to threats and helps you meet compliance standards.",source:"@site/docs/operate/provisioning/azure-cache-terraform-private/index-azure-cache-terraform-private.mdx",slug:"/operate/provisioning/azure-cache-terraform-private",permalink:"/operate/provisioning/azure-cache-terraform-private",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/operate/provisioning/azure-cache-terraform-private/index-azure-cache-terraform-private.mdx",version:"current",lastUpdatedAt:1647322397,sidebar_label:"Azure Cache for Redis Enterprise using Terraform with Private Link",sidebar:"docs",previous:{title:"Azure Cache for Redis Enterprise using Terraform",permalink:"/operate/provisioning/azure-cache-terraform"},next:{title:"Introduction to Running Redis at Scale",permalink:"/operate/redis-at-scale"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Step 1. Getting Started",id:"step-1-getting-started",children:[]},{value:"Step 2: Clone the repository",id:"step-2-clone-the-repository",children:[]},{value:"Step 3: Initialize the repository",id:"step-3-initialize-the-repository",children:[]},{value:"Step 4: Modify the variables (optional)",id:"step-4-modify-the-variables-optional",children:[]},{value:"Step 5: Verify the plan",id:"step-5-verify-the-plan",children:[]},{value:"Step 6: Apply the plan",id:"step-6-apply-the-plan",children:[]},{value:"Step 7: Connect using generated output",id:"step-7-connect-using-generated-output",children:[]},{value:"Resources",id:"resources",children:[]},{value:"References",id:"references",children:[]}],l={toc:p};function u(e){var t=e.components,r=Object(n.a)(e,o);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Azure Private Link for Azure Cache for Redis provides private connectivity from a virtual network to your cache instance. This means that you can now use Azure Private Link to connect to an Azure Cache for Redis instance from your virtual network via a private endpoint, which is assigned a private IP address in a subnet within the virtual network. It simplifies the network architecture and secures the connection between endpoints in Azure by eliminating data exposure to the public internet. Private Link carries traffic privately, reducing your exposure to threats and helps you meet compliance standards."),Object(i.b)("p",null,"Azure Resource Manager (a.k.a AzureRM) is the deployment and management service for Azure. It provides a management layer that enables you to create, update, and delete resources in your Azure account. You can use management features, like access control, locks, and tags, to secure and organize your resources after deployment. The \"azurerm_redis_enterprise_cluster\" is a resource that manages a Redis Enterprise cluster. This is a template to get started with the 'azurerm_redis_enterprise_cluster' resource available in the 'azurerm' provider with Terraform."),Object(i.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://terraform.io"},"Terraform")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"},"Azure CLI"))),Object(i.b)("h3",{id:"step-1-getting-started"},"Step 1. Getting Started"),Object(i.b)("p",null,"Login in to Azure using the Azure CLI"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"az login\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Login with a Service Principal will also work")),Object(i.b)("p",null,"Login using an Azure Service Principal"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"az login --service-principal --username APP_ID --tenant TENANT_ID --password [password || /path/to/cert]\n")),Object(i.b)("h3",{id:"step-2-clone-the-repository"},"Step 2: Clone the repository"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/redis-developer/acre-terraform\n")),Object(i.b)("h3",{id:"step-3-initialize-the-repository"},"Step 3: Initialize the repository"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"cd acre-terraform\nterraform init\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The output should include: ",Object(i.b)("inlineCode",{parentName:"p"},"Terraform has been successfully initialized"))),Object(i.b)("h3",{id:"step-4-modify-the-variables-optional"},"Step 4: Modify the variables (optional)"),Object(i.b)("p",null,"The default variables are setup to deploy the smallest 'E10' instance into the 'East US' region.\nChanges can be made by updating the ",Object(i.b)("inlineCode",{parentName:"p"},"variables.tf")," file."),Object(i.b)("h3",{id:"step-5-verify-the-plan"},"Step 5: Verify the plan"),Object(i.b)("p",null,"The 'plan' output will show you everything being created by the template."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"terraform plan\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The output should include: ",Object(i.b)("inlineCode",{parentName:"p"},"Plan: 18 to add, 0 to change, 0 to destroy."))),Object(i.b)("h3",{id:"step-6-apply-the-plan"},"Step 6: Apply the plan"),Object(i.b)("p",null,"When the plan looks good, 'apply' the template."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"terraform apply\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The output should include: ",Object(i.b)("inlineCode",{parentName:"p"},"Apply complete! Resources: 18 added, 0 changed, 0 destroyed."))),Object(i.b)("h3",{id:"step-7-connect-using-generated-output"},"Step 7: Connect using generated output"),Object(i.b)("p",null,"The access key is sensitive, so viewing the outputs must be requested specifically.\nThe output is also in JSON format."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"terraform output redisgeek_config\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Example output:"),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",{parentName:"pre"},'{\n"hostname" = "redisgeek-8jy4.eastus.redisenterprise.cache.azure.net"\n"access_key" = "DQYABC3uRMXXXXXXXXXXXXXXXXTRkfgOXXXPjs82Y="\n"port" = "10000"\n}\n'))),Object(i.b)("h3",{id:"resources"},"Resources"),Object(i.b)("h5",{id:"1-how-to-use-redis-cache-for-redis-like-a-pro"},"1. How to use Redis Cache for Redis like a Pro"),Object(i.b)("div",{class:"text--center"},Object(i.b)("iframe",{width:"760",height:"415",src:"https://www.youtube.com/embed/eThj-jwViZw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(i.b)("h5",{id:"2-do-more-with-azure-cache-for-redis-enterprise-tiers"},"2. Do More with Azure Cache for Redis, Enterprise Tiers"),Object(i.b)("div",{class:"text--center"},Object(i.b)("iframe",{width:"760",height:"415",src:"https://www.youtube.com/embed/t6XQHsKFMKQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(i.b)("h3",{id:"references"},"References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/garantiadata.redis_enterprise_1sp_public_preview?ocid=redisga_redislabs_cloudpartner_cta1"},"Azure Cache for Redis Enterprise")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RWGGx3"},"Accelerate Modern Application Delivery with Redis Enterprise on Microsoft Azure")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/develop/dotnet/"},".Net and Redis")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/quickstart-create-redis-enterprise"},"Quickstart: Create a Redis Enterprise cache"))))}u.isMDXComponent=!0},393:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),b=a,h=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return r?n.a.createElement(h,c(c({ref:t},p),{},{components:r})):n.a.createElement(h,c({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);