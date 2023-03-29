"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9246],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>k});var t=a(7294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=o,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return a?t.createElement(k,i(i({ref:n},c),{},{components:a})):t.createElement(k,i({ref:n},c))}));function k(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1775:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var t=a(7462),o=(a(7294),a(3905));const r={},i="Micro-frontends",l={unversionedId:"documentation/how-did-we/microfrontends",id:"documentation/how-did-we/microfrontends",title:"Micro-frontends",description:"Los microfrontends (inspirados en los microservicios) son un tipo de arquitectura donde se divide una",source:"@site/docs/documentation/how-did-we/microfrontends.md",sourceDirName:"documentation/how-did-we",slug:"/documentation/how-did-we/microfrontends",permalink:"/wiki/docs/documentation/how-did-we/microfrontends",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/how-did-we/microfrontends.md",tags:[],version:"current",frontMatter:{},sidebar:"wikiSidebar",previous:{title:"Docusaurus",permalink:"/wiki/docs/documentation/how-did-we/docusaurus"}},s={},p=[{value:"Contexto",id:"contexto",level:2},{value:"Microfrontend: mf-lendaas.com-documentation",id:"microfrontend-mf-lendaascom-documentation",level:2},{value:"Creaci\xf3n repositorio ra\xedz para micro-frontends",id:"creaci\xf3n-repositorio-ra\xedz-para-micro-frontends",level:2},{value:"Despliegue",id:"despliegue",level:2},{value:"Desplegar repositorio en prod",id:"desplegar-repositorio-en-prod",level:2},{value:"(Deprecado) Crear nuestro primer micro-front",id:"deprecado-crear-nuestro-primer-micro-front",level:2},{value:"Importar modulos desde el repositorio root usando Module Federation",id:"importar-modulos-desde-el-repositorio-root-usando-module-federation",level:2},{value:"Referenciar <em>assets</em> est\xe1ticos",id:"referenciar-assets-est\xe1ticos",level:2},{value:"Instalar vue-router",id:"instalar-vue-router",level:2},{value:"Resolviendo problemas con CORS",id:"resolviendo-problemas-con-cors",level:2},{value:"Creando el repositorio <code>mf-lendaas-com-pricing</code>",id:"creando-el-repositorio-mf-lendaas-com-pricing",level:2},{value:"Micro-frontend Pricing",id:"micro-frontend-pricing",level:2}],c={toc:p},m="wrapper";function u(e){let{components:n,...a}=e;return(0,o.kt)(m,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"micro-frontends"},"Micro-frontends"),(0,o.kt)("p",null,"Los microfrontends (inspirados en los microservicios) son un tipo de arquitectura donde se divide una\naplicaci\xf3n web en diferentes m\xf3dulos o funciones individuales."),(0,o.kt)("p",null,"Son aut\xf3nomas, permiten flexibilidad y velocidad a los equipos de desarrollo."),(0,o.kt)("h2",{id:"contexto"},"Contexto"),(0,o.kt)("p",null,"Contexto aqu\xed ..."),(0,o.kt)("h2",{id:"microfrontend-mf-lendaascom-documentation"},"Microfrontend: mf-lendaas.com-documentation"),(0,o.kt)("p",null,"Uno de nuestros primeros microfrontends creados en Lendaas, ha sido nuestra documentaci\xf3n, la cual fue\ndesarrollada con tecnolog\xeda ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"),". Esta contiene nuestra wiki y nuestro blog."),(0,o.kt)("p",null,"Al repositorio lo hemos llamado ",(0,o.kt)("em",{parentName:"p"},"mf-lendaas.com-documentation"),".\nCambiamos el nombre en package.json y readme."),(0,o.kt)("h2",{id:"creaci\xf3n-repositorio-ra\xedz-para-micro-frontends"},"Creaci\xf3n repositorio ra\xedz para micro-frontends"),(0,o.kt)("p",null,"Al repositorio lo llamamos ",(0,o.kt)("em",{parentName:"p"},"mf-lendaas.com-app-shell"),".\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lendaas/mf-lendaas-com-app-shell"},"Ver repo")),(0,o.kt)("p",null,"Generamos un root-config con el siguiente comando:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-single-spa --moduleType root-config\n")),(0,o.kt)("p",null,"Hacemos el paso a paso de single-spa con las siguientes opciones:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"npm: yes"),(0,o.kt)("li",{parentName:"ul"},"typescript: yes"),(0,o.kt)("li",{parentName:"ul"},"single-spa Layout Engine: yes"),(0,o.kt)("li",{parentName:"ul"},"Organization name: Lendaas")),(0,o.kt)("p",null,"Sacamos el Husky por molesto."),(0,o.kt)("p",null,"Instalar la extensi\xf3n de chrome ",(0,o.kt)("em",{parentName:"p"},"Single-spa Inspector"),"\ndisponible ",(0,o.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/single-spa-inspector/emldbibkihanfiaiaghebffnbahjcgcp/related"},"ac\xe1"),"\n."),(0,o.kt)("h2",{id:"despliegue"},"Despliegue"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Creamos directorio ",(0,o.kt)("inlineCode",{parentName:"li"},".circleci")," en la ra\xedz del repositorio"),(0,o.kt)("li",{parentName:"ul"},"Creamos el archivo ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/lendaas/mf-lendaas-com-app-shell/blob/main/.circleci/config.yml"},(0,o.kt)("inlineCode",{parentName:"a"},"config.yml"))),(0,o.kt)("li",{parentName:"ul"},"Agregamos el\narchivo ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/lendaas/docs-lendaas-com/blob/main/.circleci/get-aws-variables.sh"},(0,o.kt)("inlineCode",{parentName:"a"},"get-aws-variables.sh")),"\nen el directorio ",(0,o.kt)("inlineCode",{parentName:"li"},".circleci"),", copi\xe1ndolo de un repositorio existente"),(0,o.kt)("li",{parentName:"ul"},"Creamos el archivo ",(0,o.kt)("inlineCode",{parentName:"li"},"template.yml")," en la ra\xedz del repositorio")),(0,o.kt)("h2",{id:"desplegar-repositorio-en-prod"},"Desplegar repositorio en prod"),(0,o.kt)("p",null,"Realizamos las siguientes configuraciones en el archivo ",(0,o.kt)("em",{parentName:"p"},"config.yml"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Modificamos la ruta a ",(0,o.kt)("em",{parentName:"p"},"dist")," dependiendo de la carpeta que nos contruya el build en el run name: ",(0,o.kt)("em",{parentName:"p"},"upload build"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Sacamos la configuraci\xf3n de Cypress, por lo que debemos eliminar el stack manualmente."))),(0,o.kt)("h2",{id:"deprecado-crear-nuestro-primer-micro-front"},"(Deprecado) Crear nuestro primer micro-front"),(0,o.kt)("admonition",{title:"Atenci\xf3n",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Estos pasos no nos funcionaron. Finalmente usamos ",(0,o.kt)("inlineCode",{parentName:"p"},"vue-cli-plugin-single-spa")," para inicializar el repositorio.")),(0,o.kt)("p",null,"Creamos un nuevo repo (mf-lendaas-com-header) con los siguientes comandos:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm create vite@latest\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Project Name: mf-lendaas-com-header"),(0,o.kt)("li",{parentName:"ul"},"Elegimos: Vue"),(0,o.kt)("li",{parentName:"ul"},"Elegimos Typescript")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i\nnpm i --save-dev @node/types\nnpm i -D eslint\nnpm install --save single-spa-vue\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Agregamos en el archivo vite.config.ts c\xf3digo para que use localhost y no 127.0.0.1"),(0,o.kt)("li",{parentName:"ul"},"Agregamos soporte para usar variables de entorno en vite.config.ts"),(0,o.kt)("li",{parentName:"ul"},"Inicializamos lint ",(0,o.kt)("inlineCode",{parentName:"li"},"./node_modules/.bin/eslint --init")),(0,o.kt)("li",{parentName:"ul"},"Agregamos el script ",(0,o.kt)("inlineCode",{parentName:"li"},'lint: "eslint"')," al package.json"),(0,o.kt)("li",{parentName:"ul"},"Actualizamos main.ts para que utilice single-spa"),(0,o.kt)("li",{parentName:"ul"},"Agregamos el archivo main-standalone.ts y un script en al package.json para ejecutar en modo standalone.")),(0,o.kt)("p",null,"Configuramos el ",(0,o.kt)("inlineCode",{parentName:"p"},"vite.config.ts"),": ejemplo ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/joeldenning/vite-single-spa-example"},"ac\xe1")),(0,o.kt)("h2",{id:"importar-modulos-desde-el-repositorio-root-usando-module-federation"},"Importar modulos desde el repositorio root usando Module Federation"),(0,o.kt)("p",null,"Nos estamos basando en la configuraci\xf3n\nde ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/joeldenning/vite-single-spa-root-config/blob/main/src/index.ejs"},"este repositorio"),".\nDesde este repositorio tomamos el archivo ",(0,o.kt)("inlineCode",{parentName:"p"},"org-root-config.js"),"."),(0,o.kt)("p",null,"Finalmente, no pudimos usar Vite y Module Federation.\nLo que utilizamos fue Webpack y ImportMaps, que es lo que viene por defecto con ",(0,o.kt)("inlineCode",{parentName:"p"},"vue-cli-plugin-single-spa"),"."),(0,o.kt)("h2",{id:"referenciar-assets-est\xe1ticos"},"Referenciar ",(0,o.kt)("em",{parentName:"h2"},"assets")," est\xe1ticos"),(0,o.kt)("p",null,"Dado que los micro frontends quedan insertos en un repositorio ",(0,o.kt)("em",{parentName:"p"},"root"),", las referencias a ",(0,o.kt)("em",{parentName:"p"},"assets")," est\xe1ticos, tales como\nim\xe1genes, no funcionan correctamente.\nLa soluci\xf3n es entregarle al componente Vue un ",(0,o.kt)("inlineCode",{parentName:"p"},"prop")," llamado ",(0,o.kt)("inlineCode",{parentName:"p"},"assetPath")," en el archivo ",(0,o.kt)("inlineCode",{parentName:"p"},"main.ts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const vueLifecycles: SingleSpaVueLifecycles = singleSpaVue({\n  createApp,\n  appOptions: {\n    render() {\n      return h(App, {\n        props: {},\n        // @ts-ignore\n        assetPath: this.assetPath,\n      });\n    },\n  },\n  handleInstance: (/* app */) => {\n    // app.use(router);\n  },\n});\n")),(0,o.kt)("h2",{id:"instalar-vue-router"},"Instalar vue-router"),(0,o.kt)("p",null,"El manejo de rutas se hace directamente desde cada micro-frontends"),(0,o.kt)("p",null,"Instalamos vue-router en cada repositorio micro-front que lo necesite."),(0,o.kt)("p",null,"router/index.ts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { createRouter, createWebHashHistory } from 'vue-router';\n\nconst routes = [\n  { path: '/', component: () => import('@/pages/Index.vue') },\n  { path: '/onboarding', component: () => import('@/pages/Onboarding.vue') },\n];\n\nexport default createRouter({\n  history: createWebHashHistory(),\n  routes,\n});\n")),(0,o.kt)("p",null,"Main.ts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import router from '@/router/index';\n\nconst vueLifecycles: SingleSpaVueLifecycles = singleSpaVue({\n  handleInstance: (app) => {\n    app.use(router);\n  },\n});\n")),(0,o.kt)("h2",{id:"resolviendo-problemas-con-cors"},"Resolviendo problemas con CORS"),(0,o.kt)("p",null,"Dado que los recursos que cargamos usando micro frontends pueden provenir de distintos or\xedgenes (por\nejemplo, ",(0,o.kt)("inlineCode",{parentName:"p"},"lendaas.com"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"cdn.lendaas.com")," o ",(0,o.kt)("inlineCode",{parentName:"p"},"www.lendaas.com"),"), el navegador podr\xeda tener problemas para cargar estos\nrecursos por las reglas CORS.\nCuando empezamos a alojar nuestras propias fuentes en el CDN, empezamos a tener problemas para cargarlas.\nEn la consola nos mostraba el\nerror ",(0,o.kt)("inlineCode",{parentName:"p"},"Refused to load the font '<URL>' because it violates the following Content Security Policy directive: \"default-src 'self' https: localhost:*\". Note that 'font-src' was not explicitly set, so 'default-src' is used as a fallback.")),(0,o.kt)("p",null,"En el repositorio ",(0,o.kt)("inlineCode",{parentName:"p"},"mf-lendaas-com-app-shell")," archivo ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ejs")," se debe actualizar la siguiente l\xednea con los valores\nnecesarios:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"\n<meta http-equiv=\"Content-Security-Policy\"\n      content=\"default-src 'self' https: localhost:*; script-src 'unsafe-inline' 'unsafe-eval' https: localhost:*; connect-src https: localhost:* ws://localhost:*; style-src 'unsafe-inline' https:; object-src 'none';\">\n")),(0,o.kt)("h2",{id:"creando-el-repositorio-mf-lendaas-com-pricing"},"Creando el repositorio ",(0,o.kt)("inlineCode",{parentName:"h2"},"mf-lendaas-com-pricing")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Crear repositorio en GitHub")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Crear ",(0,o.kt)("inlineCode",{parentName:"p"},".nvmrc"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"node -v > .nvmrc")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Estamos usando la versi\xf3n v16.17.1"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Instalar Vue en el repo: ",(0,o.kt)("inlineCode",{parentName:"p"},"vue create . --merge")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Requiere tener previamente instalado Vue CLI de forma global: ",(0,o.kt)("inlineCode",{parentName:"li"},"npm i -g @vue/cli")),(0,o.kt)("li",{parentName:"ul"},"Manually select features:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Seleccionar Babel, TS, Linter, Unit, E2E"),(0,o.kt)("li",{parentName:"ul"},"Vue 3.x"),(0,o.kt)("li",{parentName:"ul"},"Class-style component syntax? ",(0,o.kt)("strong",{parentName:"li"},"No")),(0,o.kt)("li",{parentName:"ul"},"Babel? ",(0,o.kt)("strong",{parentName:"li"},"Yes")),(0,o.kt)("li",{parentName:"ul"},"Airbnb"),(0,o.kt)("li",{parentName:"ul"},"Lint on save"),(0,o.kt)("li",{parentName:"ul"},"Jest"),(0,o.kt)("li",{parentName:"ul"},"Cypress"),(0,o.kt)("li",{parentName:"ul"},"In dedicated config files"),(0,o.kt)("li",{parentName:"ul"},"Save preset > ",(0,o.kt)("inlineCode",{parentName:"li"},"lendaas-mf")))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Agregar con el CLI de Vue: ",(0,o.kt)("inlineCode",{parentName:"p"},"vue add single-spa"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configurar el ",(0,o.kt)("inlineCode",{parentName:"p"},"libraryTarget")," en el proyecto:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"  // vue.config.js\nconst { defineConfig } = require('@vue/cli-service');\n\nmodule.exports = defineConfig({\n  ...,\n  configureWebpack: {\n    output: {\n      libraryTarget: 'system',\n    },\n  },\n});\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configurar test para que funcionen sin el vue-cli-service , editando el archivo ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n"scripts": {\n  ...,\n  "test:unit": "jest",\n  "test:e2e": "cypress open"\n}\n}\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Instala y configura Pinia"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"vue add pinia")),(0,o.kt)("li",{parentName:"ul"},"En el ",(0,o.kt)("inlineCode",{parentName:"li"},"main.ts")," con ",(0,o.kt)("inlineCode",{parentName:"li"},"single-spa"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { createPinia } from "pinia";\nconst vueLifecycles: SingleSpaVueLifecycles = singleSpaVue({\n  createApp,\n  appOptions: {\n    render() {\n      ...\n    }\n  },\n  // instalamos pinia en la aplicaci\xf3n de vue\n  handleInstance: (app) => {\n    app.use(router);\n  }\n});\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configuramos los tests y el archivo config.yml para el despliegue"))),(0,o.kt)("h2",{id:"micro-frontend-pricing"},"Micro-frontend Pricing"),(0,o.kt)("p",null,"Para utilizar class recordar que tenemos que separar cada argumento en una l\xednea, en el caso del mf pricing creamos una\nclase Service que pretende tener un m\xe9todo recursivo que nos permita obtener el total de los servicios seleccionados con\nsu precio."),(0,o.kt)("p",null,"El servicio tendr\xe1 los siguientes datos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"forced"),(0,o.kt)("li",{parentName:"ul"},"conversionIndicator"),(0,o.kt)("li",{parentName:"ul"},"totalFixed"),(0,o.kt)("li",{parentName:"ul"},"maxVariable")),(0,o.kt)("p",null,"Las pruebas se realizan sobre ",(0,o.kt)("inlineCode",{parentName:"p"},"PricingCalculator")))}u.isMDXComponent=!0}}]);