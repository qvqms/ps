import{r as a,c as e,U as s,w as t,a as l,b as r,l as d,d as i,k as o,j as u,F as c,f as p,g as v,h,t as n,T as f,a0 as m,a1 as x}from"./index.adfd1ee8.js";import{r as b}from"./index.4c06ea03.js";import{_}from"./plugin-vue_export-helper.db4a78ed.js";const g={class:"p-3 hotSearch"},j={key:0,class:"text-lg flex items-center justify-center"},k=[(a=>(m("data-v-b883e638"),a=a(),x(),a))((()=>i("h4",{class:"mt-1.5"},"热搜",-1)))],y={key:1},S={class:"mt-1.5"},T=["href"],z={class:"truncate leading-5 text-xs hotTop"};var q=_({__name:"hotSearch",props:{data:{type:Object,default:()=>({size:"1x1"})}},setup(m){var x;const _=m,q=a(e.get("baiduTopSearch",[])),w=a(_.data.size);s({url:"/index/baiduTopSearch"}).then((({data:a,code:s})=>{if(1==s){q.value=[];let s=a.splice(0,5);q.value.push(...s),e.set("baiduTopSearch",q.value)}}));return(null==(x=_.data)?void 0:x.id)&&t(_.data,(a=>{var e;e=a,w.value=e.size})),(a,e)=>(l(),r("div",g,["1x1"==w.value?(l(),r("div",j,k)):d("",!0),"1x1"!=w.value?(l(),r("div",y,[i("div",{class:"text-sm hover",onClick:e[0]||(e[0]=o((a=>u(b)("https://top.baidu.com/board?tab=realtime")),["stop"]))},"百度热搜"),i("ul",S,[(l(!0),r(c,null,p(q.value,((a,e)=>(l(),v(f,{key:e},{default:h((()=>[i("a",{href:a.url,target:"__black"},[i("li",z,n(e+1)+" "+n(a.query),1)],8,T)])),_:2},1024)))),128))])])):d("",!0)]))}},[["__scopeId","data-v-b883e638"]]);export{q as default};
