"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8245],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(y,o(o({ref:t},u),{},{components:a})):n.createElement(y,o({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2213:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:2},o="Arquitectura",s={unversionedId:"documentation/architecture",id:"documentation/architecture",title:"Arquitectura",description:"C\xf3mo es, c\xf3mo la definimos y qu\xe9 contiene",source:"@site/docs/documentation/architecture.md",sourceDirName:"documentation",slug:"/documentation/architecture",permalink:"/docs/documentation/architecture",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/architecture.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"wikiSidebar",previous:{title:"Documentaci\xf3n",permalink:"/docs/category/documentaci\xf3n"},next:{title:"Eventos",permalink:"/docs/documentation/events"}},l={},c=[{value:"Capas y su misi\xf3n",id:"capas-y-su-misi\xf3n",level:2},{value:"API Gateway",id:"api-gateway",level:3},{value:"Business",id:"business",level:3},{value:"Auth",id:"auth",level:3},{value:"Entities",id:"entities",level:3},{value:"Third party adapters",id:"third-party-adapters",level:3},{value:"Analytics",id:"analytics",level:3},{value:"Observability &amp; trazability",id:"observability--trazability",level:3},{value:"Serverless",id:"serverless",level:2},{value:"CI/CD",id:"cicd",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"arquitectura"},"Arquitectura"),(0,r.kt)("p",null,"C\xf3mo es, c\xf3mo la definimos y qu\xe9 contiene"),(0,r.kt)("iframe",{width:"800",height:"450",src:"https://whimsical.com/embed/9p3qoqGCuGHaL5eZ8tmDgw"}),(0,r.kt)("h2",{id:"capas-y-su-misi\xf3n"},"Capas y su misi\xf3n"),(0,r.kt)("p",null,"Trabajaremos con una arquitectura de microservicios, organizada por capas."),(0,r.kt)("h3",{id:"api-gateway"},"API Gateway"),(0,r.kt)("p",null,"Expone p\xfablicamente los endpoint de los micro servicios. Se comunica con la capa AUTH."),(0,r.kt)("h3",{id:"business"},"Business"),(0,r.kt)("p",null,"Aqu\xed vive la mayor parte de la l\xf3gica de negocio. Existen dos tipos de APIs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Orchestrators: pueden llamar a otras APIs, incluyendo orchestrators, atomic-services, entities y third parties. No acceden directamente a una BD."),(0,r.kt)("li",{parentName:"ul"},"Atomic-Services: no llaman a ningun otro recurso ni acceden a BDs.")),(0,r.kt)("h3",{id:"auth"},"Auth"),(0,r.kt)("p",null,"Resuelve la autenticaci\xf3n y la autorizaci\xf3n, incluyendo los toggles."),(0,r.kt)("h3",{id:"entities"},"Entities"),(0,r.kt)("p",null,"Administan las entidades del modelo de negocio. Se caracterizan por tener un modelo de datos que persiste en una BD, una m\xednima l\xf3gica de negocio y resuelven el CRUD sobre el recurso. No realizan llamadas a otras APIs."),(0,r.kt)("h3",{id:"third-party-adapters"},"Third party adapters"),(0,r.kt)("p",null,"Implementaci\xf3n y conexi\xf3n con recursos de terceros. Protegen a nuestro dominio, evitan que se contamine con el dominio de un tercero. Estas APIs no se comunican con otras del producto y pueden o no persistir mediante una BD."),(0,r.kt)("h3",{id:"analytics"},"Analytics"),(0,r.kt)("p",null,"Esta capa se encarga de mantener la data necesaria para la anal\xedtica. Se comunica con las capas Business Layer y Entites Layer mediante eventos, en un s\xf3lo sentido (apis => anal\xedtica). Cu\xe9nta con conectores http para la publicaci\xf3n, pero su arquitectura interna es de eventos a diferencia del resto del producto."),(0,r.kt)("h3",{id:"observability--trazability"},"Observability & trazability"),(0,r.kt)("p",null,"Permite comprender el estado interno de la soluci\xf3n en funci\xf3n de la telemetr\xeda. Considera 3 fuentes de datos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Logs: Registros de lo que va ocurriendo en el sistema."),(0,r.kt)("li",{parentName:"ul"},"M\xe9tricas: Informaci\xf3n cuantitativa relativa a procesos o recursos en m\xe1quinas."),(0,r.kt)("li",{parentName:"ul"},"Trazas: Datos que permiten comprender las rutas (llamadas http, mensajes en cola, ejecuciones programadas) para optimizar e identificar errores.")),(0,r.kt)("h2",{id:"serverless"},"Serverless"),(0,r.kt)("p",null,"Sin servidor."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\xbfPor qu\xe9?")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nos permite centrarnos en el c\xf3digo m\xe1s que en el aprovisionamiento y mantenci\xf3n de la infraestructura"),(0,r.kt)("li",{parentName:"ul"},"Minimiza el costo de la soluci\xf3n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\xbfC\xf3mo?")),(0,r.kt)("p",null,"Usaremos Lambdas"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Serverless")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Prerequisitos")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Resolver la integraci\xf3n continua"),(0,r.kt)("li",{parentName:"ul"},"Resolver TDD"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\xbfC\xf3mo transitamos a este nuevo esquema?")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Migraremos APIs REST a recursos con lambdas, encapsulando colas y l\xf3gica de eventos"),(0,r.kt)("li",{parentName:"ul"},"Mantendremos la arquitectura de microservicios HTTP REST"))))),(0,r.kt)("h2",{id:"cicd"},"CI/CD"),(0,r.kt)("iframe",{width:"800",height:"450",src:"https://whimsical.com/embed/N4ac5C1zpggtpuMfwx8EKn@2Ux7TurymMnHfj6zjc3T"}))}d.isMDXComponent=!0}}]);