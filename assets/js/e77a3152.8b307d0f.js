"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[5797],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>u});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function k(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),s=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=s(e.components);return n.createElement(i.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=k(e,["components","mdxType","originalType","parentName"]),c=s(t),u=r,f=c["".concat(i,".").concat(u)]||c[u]||p[u]||o;return t?n.createElement(f,l(l({ref:a},m),{},{components:t})):n.createElement(f,l({ref:a},m))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=c;var k={};for(var i in a)hasOwnProperty.call(a,i)&&(k[i]=a[i]);k.originalType=e,k.mdxType="string"==typeof e?e:r,l[1]=k;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1780:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>k,toc:()=>s});var n=t(7462),r=(t(7294),t(3905));const o={slug:"aws-eks-on-kafka-vs-msk",title:"Amazon EKS on Kafka vs MSK",description:"aws eks on kafka vs msk",authors:"dev-owner",keywords:["AWS","EKS","K8S","kubernetes","docker","kafka","msk"],tags:["AWS","EKS","K8S","kubernetes","docker","kafka","msk"]},l="EKS on Kafka, MSK",k={permalink:"/blog/aws-eks-on-kafka-vs-msk",source:"@site/blog/2022-11-20-[AWS EKS] AWS EKS on Kafka vs MSK.md",title:"Amazon EKS on Kafka vs MSK",description:"aws eks on kafka vs msk",date:"2022-11-20T00:00:00.000Z",formattedDate:"2022\ub144 11\uc6d4 20\uc77c",tags:[{label:"AWS",permalink:"/blog/tags/aws"},{label:"EKS",permalink:"/blog/tags/eks"},{label:"K8S",permalink:"/blog/tags/k-8-s"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"docker",permalink:"/blog/tags/docker"},{label:"kafka",permalink:"/blog/tags/kafka"},{label:"msk",permalink:"/blog/tags/msk"}],readingTime:3.61,hasTruncateMarker:!1,authors:[{name:"Jaewoo Sung",title:"Maintainer of blog",url:"https://github.com/dev-owner",key:"dev-owner"}],frontMatter:{slug:"aws-eks-on-kafka-vs-msk",title:"Amazon EKS on Kafka vs MSK",description:"aws eks on kafka vs msk",authors:"dev-owner",keywords:["AWS","EKS","K8S","kubernetes","docker","kafka","msk"],tags:["AWS","EKS","K8S","kubernetes","docker","kafka","msk"]},nextItem:{title:"\uc2e4\ub9ac\ucf58\ubc38\ub9ac\uc5d0\uc11c \ub0a0\uc544\uc628 \ub370\uc774\ud130 \uc5d4\uc9c0\ub2c8\uc5b4\ub9c1 \ucee8\ud37c\ub7f0\uc2a4",permalink:"/blog/review-programmers-data-engineering-conference"}},i={authorsImageUrls:[void 0]},s=[{value:"\uc5b4\ub5a4 \ubc29\ubc95\ub4e4\uc774 \uc788\uc744\uae4c?",id:"\uc5b4\ub5a4-\ubc29\ubc95\ub4e4\uc774-\uc788\uc744\uae4c",level:2},{value:"EKS on Kafka\uc5d0\uc11c \uc0dd\uac01\ud574 \ubcfc \uc218 \uc788\ub294 \uc810",id:"eks-on-kafka\uc5d0\uc11c-\uc0dd\uac01\ud574-\ubcfc-\uc218-\uc788\ub294-\uc810",level:2},{value:"Amazon Managed Streaming for Apache Kafka(MSK)",id:"amazon-managed-streaming-for-apache-kafkamsk",level:2}],m={toc:s};function p(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Kafka\ub294 \uc774\ubca4\ud2b8 \uae30\ubc18 \uc544\ud0a4\ud14d\ucc98\ub098 MSA \ub4f1\ub4f1 \ud604\ub300 \uc544\ud0a4\ud14d\ucc98 \uba54\uc138\uc9c0 \ube0c\ub85c\ucee4\ub85c \ube7c\ub193\uc744 \uc218 \uc5c6\ub294 \uc694\uc18c\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"EKS \ub610\ud55c \ub300\ubd80\ubd84\uc758 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ucee8\ud14c\uc774\ub108\ub85c \ubc30\ud3ec\ud558\ub294 \uc640\uc911\uc5d0 \uac70\uc758 \ud544\uc218\uc801\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4\ub97c \ubcf4\ub2e4 \ub354 \ud3b8\ub9ac\ud558\uac8c \uc0ac\uc6a9\ud560 \ub54c \ub9ce\uc774 \uc0ac\uc6a9\ud558\ub294 \uc694\uc18c\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub7ec\uba74 Kafka\ub97c EKS\uc5d0 \uc62c\ub824\uc11c \uc0ac\uc6a9\ud558\ub294 \ucf00\uc774\uc2a4\uc5d0 \ub300\ud574 \uc5b4\ub5a4 \ubc29\ubc95\uc774 \uc788\ub294\uc9c0, \uc7a5\ub2e8\uc810\uc774 \ubb34\uc5c7\uc778\uc9c0 \uc54c\uc544\ubd05\uc2dc\ub2e4."),(0,r.kt)("h2",{id:"\uc5b4\ub5a4-\ubc29\ubc95\ub4e4\uc774-\uc788\uc744\uae4c"},"\uc5b4\ub5a4 \ubc29\ubc95\ub4e4\uc774 \uc788\uc744\uae4c?"),(0,r.kt)("p",null,"EKS(K8S)\uc5d0 \uce74\ud504\uce74\ub97c \ubc30\ud3ec\ud558\ub294 \ubc29\uc2dd\uc5d0\ub294 \uc5ec\ub7ec\uac00\uc9c0\uac00 \uc788\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/strimzi/strimzi-kafka-operator"},"Manage Kafka on Kubernetes: Strimzi")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/banzaicloud/koperator"},"Banzai Cloud")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.confluent.io/operator/current/co-deploy-cfk.html"},"Confluent")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://artifacthub.io/packages/helm/bitnami/kafka"},"Bitnami Kafka Helm chart"))),(0,r.kt)("p",null,"\uc704 \ubc29\uc2dd\ub4e4 \ub9d0\uace0\ub3c4 \uc5ec\ub7ec \ubc29\ubc95\ub4e4\uc774 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4 :)"),(0,r.kt)("h2",{id:"eks-on-kafka\uc5d0\uc11c-\uc0dd\uac01\ud574-\ubcfc-\uc218-\uc788\ub294-\uc810"},"EKS on Kafka\uc5d0\uc11c \uc0dd\uac01\ud574 \ubcfc \uc218 \uc788\ub294 \uc810"),(0,r.kt)("p",null,"\uc544\ubb34\ub798\ub3c4 \uc9c1\uc811 \ud074\ub7ec\uc2a4\ud130\ub97c \uad00\ub9ac\ud558\ub2e4 \ubcf4\ub2c8 \uadf8 \uacfc\uc815\uc5d0\uc11c \ubc30\uc6b0\ub294\uac74 \ub9ce\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ubaa8\ub4e0\uac83\uc774 Admin\uc758 \ud1b5\uc81c \ud558\uc5d0 \uad00\ub9ac\ub418\ub2c8 \uc790\uc720\ub3c4\ub098 \ub514\ubc84\uae45 \ud658\uacbd \ub610\ud55c \uad00\ub9ac\ud615 \uc11c\ube44\uc2a4\ubcf4\ub2e4\ub294 \ud3b8\ud560 \ub4ef \uc2f6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub7ec\ub098 \uadf8 \uc774\uc678 \ubd80\ubd84\uc5d0\uc11c\ub294 \uc81c \uc9c0\uc2dd\uc758 \ud55c\uacc4\uc778\uc9c0 \ub354 \uc88b\uc740\uc810\uc740 \uc0dd\uac01\ud558\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4. \ub300\ubd80\ubd84\uc758 \ucf00\uc774\uc2a4\uc5d0\uc11c heavy lifting\ud55c \uc791\uc5c5\uc744 \ub300\uc2e0\ud574\uc8fc\ub294 \uad00\ub9ac\ud615 \uc11c\ube44\uc2a4\uac00 \ub0ab\ub2e4\ub294 \uc0dd\uac01\uc744 \ub5a8\uce60\uc218\uac00 \uc5c6\ub124\uc694.."),(0,r.kt)("p",null,"\uad6c\ucd95\ud558\ub294 \ub808\ud37c\ub7f0\uc2a4\ub294 \uc544\ub798\uc640 \uac19\uc740 \uc0ac\uc774\ud2b8\ub4e4\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@JinnaBalu/kafka-cluster-on-amezon-eks-cluster-5850d67ae723"},"https://medium.com/@JinnaBalu/kafka-cluster-on-amezon-eks-cluster-5850d67ae723")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://portworx.com/run-ha-kafka-amazon-elastic-container-service-kubernetes/"},"https://portworx.com/run-ha-kafka-amazon-elastic-container-service-kubernetes/"))),(0,r.kt)("h2",{id:"amazon-managed-streaming-for-apache-kafkamsk"},"Amazon Managed Streaming for Apache Kafka(MSK)"),(0,r.kt)("p",null,"AWS\uc5d0\uc11c\ub294 Kafka\ub97c managed service\ub85c \uc81c\uacf5\ud558\ub294 MSK\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc704\uc5d0\uc11c \uc7a0\uae50 \uc598\uae30\ud588\uc9c0\ub9cc, \uc0ac\uc2e4 \ub300\ubd80\ubd84\uc758 \uc0c1\ud669\uc5d0\uc11c MSK\ub97c \uc4f0\ub294\uac8c \ub098\uc744 \uac83 \uac19\ub2e4\ub294 \uc0dd\uac01\uc785\ub2c8\ub2e4. \uc9c1\uc811 \uc124\uce58 \uc6b4\uc601\uc740 \uc5c5\ub370\uc774\ud2b8\ub098 \uad00\ub9ac \uce21\uba74\uc5d0\uc11c \uc5b4\ub824\uc6c0\uc744 \uacaa\uc744 \ud655\ub960\uc774 \ud06c\uae30 \ub54c\ubb38\uc774\uace0, Heavy lifting\uc744 \ud53c\ud560 \uc218 \uc788\uc73c\uba74 \ud53c\ud558\ub294\uac8c \ub0ab\uc9c0 \uc54a\uc744\uae4c\ub77c\ub294 \uc0dd\uac01\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub9ac\uace0 \uad00\ub9ac \uce21\uba74\uc744 \uc81c\uc678\ud558\ub354\ub77c\ub3c4, EKS\uc640 \ub2ec\ub9ac MSK\ub294 ",(0,r.kt)("strong",{parentName:"p"},"inter-az \ub370\uc774\ud130 \uc804\uc1a1 \ube44\uc6a9\uc774 \ubb34\ub8cc"),"\uc774\uae30 \ub54c\ubb38\uc5d0 \uc774\ub7ec\ud55c \ubd80\ubd84\ub610\ud55c \uace0\ub824\ud574\ubcf4\uba74 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h1",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,r.kt)("p",null,"\uc544\ubb34\ub798\ub3c4 \uc694\uc998 \ub300\ubd80\ubd84\uc758 \ucf00\uc774\uc2a4\uc5d0\uc11c \uc9c1\uc811 \ud074\ub7ec\uc2a4\ud130\ub97c \uad6c\ucd95\ud574\uc11c \uc0ac\uc6a9\ud558\ub294 \uac83 \ubcf4\ub2e4\ub294 \uad00\ub9ac\ud615 \uc11c\ube44\uc2a4\ub97c \uc0ac\uc6a9\ud558\ub294\uac8c \uc5ec\ub7ec\uac00\uc9c0 \uce21\uba74\uc5d0\uc11c \ud6a8\uc728\uc131\uc774 \uc88b\uc740 \uac83 \uac19\uc2b5\ub2c8\ub2e4. \ub2e8, \ud68c\uc0ac\uc758 \uaddc\ubaa8\uac00 \ub108\ubb34 \ucee4\uc11c On-premise\uc5d0 \uc9c1\uc811 \ud074\ub7ec\uc2a4\ud130\ub97c \uad6c\ucd95\ud574\uc11c \uad00\ub9ac\ud574\uc57c \ud558\ub294 \uc0c1\ud669\uc774\ub098 \ud68c\uc0ac\uc758 \uc0c1\ud669\uc5d0 \ub9de\ucdb0 \ud2b9\uc815 \uae30\ub2a5\uc744 \ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5 \ud574\uc57c \ud558\ub294 \uc0c1\ud669 \uac19\uc740 \uacbd\uc6b0 \uc9c1\uc811 \ud574\uc57c \ud560 \uc218\ub3c4 \uc788\ub2e4\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4."))}p.isMDXComponent=!0}}]);