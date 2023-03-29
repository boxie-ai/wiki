"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4368],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>g});var t=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),d=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=d(e.components);return t.createElement(s.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?t.createElement(g,i(i({ref:a},c),{},{components:n})):t.createElement(g,i({ref:a},c))}));function g(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9547:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=n(7462),o=(n(7294),n(3905));const r={title:"Desarrollando con TDD, BDD, DDD \ud83e\udd72",authors:["benja"],image:"./assets/cat-dev.jpg",tags:["testing","guias"]},i=void 0,l={permalink:"/wiki/blog/2022/09/13/tdd-bdd-ddd",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-09-13-tdd-bdd-ddd/index.md",source:"@site/blog/2022-09-13-tdd-bdd-ddd/index.md",title:"Desarrollando con TDD, BDD, DDD \ud83e\udd72",description:"cat dev",date:"2022-09-13T00:00:00.000Z",formattedDate:"13 de septiembre de 2022",tags:[{label:"testing",permalink:"/wiki/blog/tags/testing"},{label:"guias",permalink:"/wiki/blog/tags/guias"}],readingTime:6.375,hasTruncateMarker:!0,authors:[{name:"Benjam\xedn Roa",title:"Desarrollador",url:"https://gitlab.com/broa",imageURL:"https://trello-members.s3.amazonaws.com/5e95bc4f2bc4ae1ad51b9dda/301e1a568b2b6527600023094f223b46/50.png",key:"benja"}],frontMatter:{title:"Desarrollando con TDD, BDD, DDD \ud83e\udd72",authors:["benja"],image:"./assets/cat-dev.jpg",tags:["testing","guias"]},prevItem:{title:"Introducci\xf3n al testing",permalink:"/wiki/blog/testing-101"}},s={image:n(1845).Z,authorsImageUrls:[void 0]},d=[{value:"\xbfBEDEQU\xc9?",id:"bedequ\xe9",level:2},{value:"Test Driven Development (TDD) - 2003",id:"test-driven-development-tdd---2003",level:3},{value:"Domain Driven Design (DDD) - 2004",id:"domain-driven-design-ddd---2004",level:3},{value:"Behaviour Driven Development (BDD) - 2011",id:"behaviour-driven-development-bdd---2011",level:3},{value:"C\xf3mo combinarlos",id:"c\xf3mo-combinarlos",level:2},{value:"Previo al desarrollo: refinamiento",id:"previo-al-desarrollo-refinamiento",level:3},{value:"BDD",id:"bdd",level:4},{value:"DDD",id:"ddd",level:4},{value:"Planning",id:"planning",level:3},{value:"Desarrollo",id:"desarrollo",level:3},{value:"Criterios de aceptaci\xf3n como test",id:"criterios-de-aceptaci\xf3n-como-test",level:4},{value:"Programaci\xf3n",id:"programaci\xf3n",level:4},{value:"Rinse &amp; Repeat",id:"rinse--repeat",level:3},{value:"Recapitulando",id:"recapitulando",level:2},{value:"Recursos",id:"recursos",level:2}],c={toc:d},p="wrapper";function u(e){let{components:a,...r}=e;return(0,o.kt)(p,(0,t.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cat dev",src:n(1845).Z,width:"1103",height:"714"})),(0,o.kt)("p",null,"Paseando un poco en Google, es muy f\xe1cil encontrar una tremenda cantidad de Gur\xfas que prometen\nmejorar tu forma de desarrollar. Lo m\xe1s probable es que existan tantas estrategias como personas en el planeta, y que cada uno deba experimentar hasta encontrar la propia."),(0,o.kt)("p",null,"En este art\xedculo explicar\xe9 c\xf3mo podr\xedan utilizarse ",(0,o.kt)("inlineCode",{parentName:"p"},"BDD")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"DDD")," en conjunto con ",(0,o.kt)("inlineCode",{parentName:"p"},"TDD"),". Puede ponerse medio arenoso el camino\ny no est\xe1 f\xe1cil encontrar el nivel de detalle/profundidad\nque debiera darle a cada arista, veamos qu\xe9 sale."),(0,o.kt)("h2",{id:"bedequ\xe9"},"\xbfBEDEQU\xc9?"),(0,o.kt)("p",null,"Para comenzar, vamos a repasar r\xe1pidamente en qu\xe9 consisten estas maravillosas siglas. Tres metodolog\xedas:"),(0,o.kt)("h3",{id:"test-driven-development-tdd---2003"},(0,o.kt)("a",{parentName:"h3",href:"https://en.wikipedia.org/wiki/Test-driven_development"},"Test Driven Development (TDD) - 2003")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.kentbeck.com"},"Kent Beck")," nos propone un flujo de trabajo guiado por los test. Comienzas con un test, te aseguras\nde que falle (\ud83d\udd34); escribes el m\xednimo de l\xedneas de c\xf3digo necesario para satisfacerlo, te aseguras de que ahora el test pase (\ud83d\udfe2);\ny luego te preguntas c\xf3mo puedo ordenar/organizar/abstraer mejor la soluci\xf3n (refactor \ud83d\udc68\u200d\ud83c\udfed). Es un m\xe9todo incremental que pretende\nmejorar tus resultados oblig\xe1ndote a poner el objetivo (test) por delante de tus ganas de lanzarte a escribir c\xf3digo."),(0,o.kt)("h3",{id:"domain-driven-design-ddd---2004"},(0,o.kt)("a",{parentName:"h3",href:"https://www.amazon.com/-/es/Eric-Evans/dp/0321125215"},"Domain Driven Design (DDD) - 2004")),(0,o.kt)("p",null,"Erik Evans, por su lado, propone dejar el dominio al centro y crear un lenguaje com\xfan entre el software y el negocio que permita modelar\nmejor los problemas y fomente la colaboraci\xf3n entre los distintos actores\n(",(0,o.kt)("a",{parentName:"p",href:"https://martinfowler.com/bliki/UbiquitousLanguage.html"},"ubiquitous language"),"), derribando las barreras entre lo t\xe9cnico\ny lo no-t\xe9cnico. La idea es mejorar la comunicaci\xf3n para poder alinear objetivos, flexibilizar, mejorar la calidad del c\xf3digo y\norientarlo siempre al negocio."),(0,o.kt)("h3",{id:"behaviour-driven-development-bdd---2011"},(0,o.kt)("a",{parentName:"h3",href:"https://www.amazon.com/RSpec-Book-Behaviour-Development-Cucumber/dp/1934356379"},"Behaviour Driven Development (BDD) - 2011")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://dannorth.net"},"Dan North")," en respuesta a TDD, propone que manteniendo sus principios, agreguemos una capa superior que\npermita dise\xf1ar la soluci\xf3n en base al comportamiento que un usuario debiera experimentar al interactuar con ella. Los objetivos\nestar\xedan definidos en t\xe9rminos de estas expectativas que el usuario tendr\xeda y se acordar\xedan con el Product Owner (PO) como criterios\nde aceptaci\xf3n. Para especificar estos acuerdos, propone el uso de ",(0,o.kt)("inlineCode",{parentName:"p"},"functional specifications")," que vendr\xeda siendo un documento\nque describe escenarios, ejemplos y casos de uso; todo potencialmente automatizable. Tal como en ",(0,o.kt)("inlineCode",{parentName:"p"},"TDD"),", pero de alto nivel: \ud83d\udfe5, \ud83d\udfe9 y \ud83d\udc68\u200d\ud83c\udfed. Postula que la colaboraci\xf3n entre el usuario\ny el equipo de desarrollo mejorar\xeda la definici\xf3n de lo que hay que desarrollar, su scope y la calidad del resultado."),(0,o.kt)("p",null,"Cada una de ellas tiene bastante literatura y teor\xeda, da para estudiarlas un buen rato. En este art\xedculo no profundizar\xe9\nmuch\xedsimo m\xe1s en cada una, pero s\xed te lo recomiendo encarecidamente."),(0,o.kt)("h2",{id:"c\xf3mo-combinarlos"},"C\xf3mo combinarlos"),(0,o.kt)("p",null,"Ahora vamos a lo bueno."),(0,o.kt)("h3",{id:"previo-al-desarrollo-refinamiento"},"Previo al desarrollo: refinamiento"),(0,o.kt)("p",null,"En nuestro ",(0,o.kt)("a",{parentName:"p",href:"https://scrumguides.org/scrum-guide.html#product-backlog"},"backlog")," hay muchos potenciales incrementos,\ncada uno de ellos consiste en una idea de mejora del software.\nEl equipo de desarrollo toma cada una de estas ideas y las ",(0,o.kt)("em",{parentName:"p"},"procesa")," aplicando la ",(0,o.kt)("inlineCode",{parentName:"p"},"DOR"),"\n(",(0,o.kt)("a",{parentName:"p",href:"https://www.scruminc.com/definition-of-ready/"},"Definition of Ready"),"), a este proceso lo conocemos como\n",(0,o.kt)("a",{parentName:"p",href:"https://less.works/less/framework/product-backlog-refinement"},"refinamiento"),"."),(0,o.kt)("p",null,"El producto del refinamiento, adem\xe1s del dise\xf1o de una soluci\xf3n, ser\xe1 una\ndefinici\xf3n de la historia de\nusuario, la forma en que se podr\xe1 medir el incremento y acordaremos con el PO los criterios de aceptaci\xf3n aplicando estrategias de ",(0,o.kt)("inlineCode",{parentName:"p"},"BDD")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"DDD"),".\nEstos \xfaltimos, si\nbien inicialmente solo estar\xe1n enunciados, debieran ser potencialmente programables como un test automatizado."),(0,o.kt)("h4",{id:"bdd"},"BDD"),(0,o.kt)("p",null,"Comenzamos a comprender el problema desde la perspectiva del usuario."),(0,o.kt)("admonition",{title:"Preguntas gu\xedas / BDD",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"\xbfQui\xe9n es el usuario?"),(0,o.kt)("li",{parentName:"ul"},"\xbfQui\xe9n de mi equipo u organizaci\xf3n lo conoce de cerca?"),(0,o.kt)("li",{parentName:"ul"},"\xbfQu\xe9 informaci\xf3n cuanti/cualitativa tengo o puedo conseguir acerca de su problem\xe1tica?"),(0,o.kt)("li",{parentName:"ul"},"\xbfPuedo conversar con alguien que represente personalmente a ese usuario?"),(0,o.kt)("li",{parentName:"ul"},"\xbfEn qu\xe9 escenarios o situaciones el usuario tiene la problem\xe1tica?"),(0,o.kt)("li",{parentName:"ul"},"\xbfQu\xe9 expectativas tiene?"),(0,o.kt)("li",{parentName:"ul"},"\xbfC\xf3mo puedo satisfacer esas expectativas?"))),(0,o.kt)("h4",{id:"ddd"},"DDD"),(0,o.kt)("p",null,"Luego analizo c\xf3mo el negocio / organizaci\xf3n responde o debiera responder ante esta necesidad del usuario. Es\nprobable que alguna de estas situaciones ya est\xe9n siendo atendidas o que la organizaci\xf3n tenga algunas particularidades relevantes a tener en cuenta."),(0,o.kt)("admonition",{title:"Preguntas gu\xedas / DDD",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"\xbfConvers\xe9 con todos los actores de mi organizaci\xf3n que han enfrentado este problema antes?"),(0,o.kt)("li",{parentName:"ul"},"\xbfAnalic\xe9 c\xf3mo lo resolv\xedan?"),(0,o.kt)("li",{parentName:"ul"},"\xbfDise\xf1\xe9 un proceso para atender la necesidad? \xbfLo convers\xe9 con los otros actores de mi organizaci\xf3n?"),(0,o.kt)("li",{parentName:"ul"},"\xbfQu\xe9 reglas de negocio, normativas o regulaciones debiera tener en cuenta?"),(0,o.kt)("li",{parentName:"ul"},"\xbfExiste alg\xfan algoritmo o l\xf3gica complicada que sea relevante?"),(0,o.kt)("li",{parentName:"ul"},"\xbfQu\xe9 objetos de valor o entidades estoy enriqueciendo o\nmodificando con este incremento?"),(0,o.kt)("li",{parentName:"ul"},"\xbfQu\xe9 desarrolladores/equipos tienen o deber\xedan tener relaci\xf3n con esta historia?"),(0,o.kt)("li",{parentName:"ul"},"\xbfConsider\xe9 en mi soluci\xf3n procesos de negocio o acuerdos est\xe1ndares de mi organizaci\xf3n (auditor\xeda, por ejemplo)?"),(0,o.kt)("li",{parentName:"ul"},"\xbfConsider\xe9 la continuidad operacional del negocio? \xbfC\xf3mo mi soluci\xf3n impacta en el negocio?"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BDD")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"DDD")," nos ayudan a definir criterios de aceptaci\xf3n con foco en el objetivo (",(0,o.kt)("strong",{parentName:"p"},"outcome"),")."),(0,o.kt)("h3",{id:"planning"},"Planning"),(0,o.kt)("p",null,"Durante la ",(0,o.kt)("a",{parentName:"p",href:"https://less.works/less/framework/sprint-planning-one"},(0,o.kt)("strong",{parentName:"a"},"planning")),",\ncada equipo elige un incremento que est\xe9 ",(0,o.kt)("em",{parentName:"p"},"listo"),", para estos efectos:\nque al menos haya pasado por el proceso de refinamiento y cuente con\ncriterios de aceptaci\xf3n ya acordados con el PO."),(0,o.kt)("p",null,"Si bien buena parte del trabajo debiera venir avanzado, ahora\nrevisar\xe9 y, si es necesario, dudar\xe9 de lo acordado. Intentar\xe9 aplicar\n",(0,o.kt)("em",{parentName:"p"},"slicing")," (cortar el incremendo en incrementos m\xe1s peque\xf1os) y re-negociar\xe9\ncon el PO potenciales cambios o mejoras sobre los criterios de aceptaci\xf3n."),(0,o.kt)("p",null,"En este momento, tambi\xe9n, el equipo dise\xf1ar\xe1 una estrategia para el\nsprint: c\xf3mo dosificar la entrega del valor. Conseguir que el ",(0,o.kt)("em",{parentName:"p"},"delivery/release")," sea cotidiano le quitar\xe1 el riesgo a mi sprint y bajar\xe1 la\nansiedad de ",(0,o.kt)("strong",{parentName:"p"},"La Gran Entrega")," justo antes de la ",(0,o.kt)("em",{parentName:"p"},"review"),"."),(0,o.kt)("h3",{id:"desarrollo"},"Desarrollo"),(0,o.kt)("p",null,"Una vez que, como equipo, elegimos un item del backlog y planificamos el ",(0,o.kt)("em",{parentName:"p"},"sprint"),": comienza el desarrollo."),(0,o.kt)("h4",{id:"criterios-de-aceptaci\xf3n-como-test"},"Criterios de aceptaci\xf3n como test"),(0,o.kt)("p",null,"Organizar\xe9 los criterios de aceptaci\xf3n de forma secuencial, suponiendo que\nexiste cierta linealidad en ellos. Los agrupar\xe9 en peque\xf1os ",(0,o.kt)("em",{parentName:"p"},"releases"),"\n(funcionalidades que puedo sacar a producci\xf3n). Tomar\xe9 el primero de ellos."),(0,o.kt)("p",null,"Comenzar\xe9 mi desarrollo con dos piezas claves:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Programar\xe9 los criterios de aceptaci\xf3n como ",(0,o.kt)("a",{parentName:"li",href:"blog/testing-101/#a-orientados-al-funcionamiento-black-box"},"tests orientados al funcionamiento")," ","[",(0,o.kt)("inlineCode",{parentName:"li"},"BDD")," y ",(0,o.kt)("inlineCode",{parentName:"li"},"TDD"),", test fallando (\ud83d\udfe5)]"),(0,o.kt)("li",{parentName:"ul"},"Configurar\xe9 y desplegar\xe9 ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Feature_toggle"},"feature-toggles")," necesarios para que mi incremento pueda vivir en producci\xf3n\nsin entorpecer el funcionamiento del resto del software")),(0,o.kt)("h4",{id:"programaci\xf3n"},"Programaci\xf3n"),(0,o.kt)("p",null,"\xa1Ahora a programar!, usar\xe9 ",(0,o.kt)("inlineCode",{parentName:"p"},"DDD")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"TDD")," para definir peque\xf1as funcionalidades: escribir\xe9 un test unitario (\ud83d\udd34), las l\xedneas de c\xf3digo que lo satisfagan (\ud83d\udfe2) y el refactor (\ud83d\udc68\u200d\ud83c\udfed)."),(0,o.kt)("p",null,"Seguir\xe9 programando test unitarios hasta conseguir que los test asociadas a mis criterios de aceptaci\xf3n pasen (",(0,o.kt)("inlineCode",{parentName:"p"},"BDD"),", \ud83d\udfe9) y en ese momento, tengo mi primer incremento listo para ser desplegado en producci\xf3n."),(0,o.kt)("h3",{id:"rinse--repeat"},"Rinse & Repeat"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"tdd double loop",src:n(1105).Z,width:"939",height:"658"})),(0,o.kt)("p",null,"Este proceso incremental se repetir\xe1, intentando concentrar\nestrat\xe9gicamente el valor de la historia en los primeros\nreleases y, dejando para el final las mejoras que el\nequipo hayan decidido hacer por sobre los criterios acordados con el PO."),(0,o.kt)("h2",{id:"recapitulando"},"Recapitulando"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"outside in testing",src:n(6503).Z,width:"928",height:"750"})),(0,o.kt)("p",null,"Como ya habr\xe1n podido ver, cada paso de nuestro flujo de trabajo tiene una pincelada importante de estas estrategias."),(0,o.kt)("p",null,"Algunas ideas para cerrar:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DDD nos entrega la perspectiva del negocio, la visi\xf3n global, la estructura del dominio y la capacidad para abordar problemas t\xe9cnicos de forma consistente"),(0,o.kt)("li",{parentName:"ul"},"BDD, la perspectiva del usuario. El permanente recordatorio de que tenemos que entender un problema real que aqueja a una persona"),(0,o.kt)("li",{parentName:"ul"},"TDD, nos entrega herramientas para crear casos de prueba previo al desarrollo y ayuda a siempre mantener el foco")),(0,o.kt)("p",null,"Conseguir desarrollar este ciclo con maestr\xeda puede tomar mucho tiempo, requiere disciplina, tenacidad, paciencia y, sobre todo, repetici\xf3n. Mucha repetici\xf3n."),(0,o.kt)("h2",{id:"recursos"},"Recursos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.amazon.com/-/es/gp/product/B095SQ9WP4/"},"Test Driven Development: By Example / Kent Beck / 2000")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.domainlanguage.com/wp-content/uploads/2016/05/DDD_Reference_2015-03.pdf"},"Reference - Domain-Driven Design / Eric Evans / 2015")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dannorth.net/introducing-bdd/"},"Introducing BDD / Dan North / 2006"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"meme",src:n(7769).Z,width:"1280",height:"720"})))}u.isMDXComponent=!0},1845:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/cat-dev-eb0a3bfdff6b3456304a7f1060cb1125.jpg"},1105:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/double-tdd-schema-61b2c78284134502173ef77818449d64.png"},6503:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/outside-in-testing-ee85815fcc9f8d5bfaaecb3c7c0bae8c.png"},7769:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/yoda-meme-0bccc2323d2f56438dcca73ae5773b3d.jpg"}}]);