import{j as e}from"./jsx-runtime-fea6ae26.js";function d({tokens:r,hasRemValue:s}){return e.jsxs("table",{className:"tokens-grid",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Value"}),s&&e.jsx("th",{children:"Pixels"})]})}),e.jsx("tbody",{children:Object.entries(r).map(([n,t])=>e.jsxs("tr",{children:[e.jsx("td",{children:n}),e.jsx("td",{children:t}),s&&e.jsxs("td",{children:[Number(t.replace("rem",""))*16,"px"]})]},n))})]})}try{d.displayName="TokensGrid",d.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:null,description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}}}catch{}export{d as T};
//# sourceMappingURL=TokensGrid-5f015613.js.map
