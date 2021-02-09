(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"0jh0":function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},"2klF":function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},"A2+M":function(e,t,n){var o=n("X8hv");e.exports={MDXRenderer:o}},Ck4i:function(e,t,n){var o=n("Q83E"),r=n("2klF");function a(t,n,c){return r()?e.exports=a=Reflect.construct:e.exports=a=function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&o(a,n.prototype),a},a.apply(null,arguments)}e.exports=a},E7vN:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return m})),n.d(t,"default",(function(){return f}));var o=n("8o2o"),r=(n("q1tI"),n("7ljp")),a=n("KcSJ"),c=n("Wbzz"),l=n("mwIZ"),i=n.n(l),u=n("NJaX"),s=n("BXwR"),m={},d={_frontmatter:m},b=a.a;function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.mdx)(b,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",null,"DataTable Filter Types"),Object(r.mdx)(s.a,{frontmatter:i()(n,"pageContext.frontmatter")?n.pageContext.frontmatter:null,mdxType:"SingleComponentStatus"}),Object(r.mdx)("p",null,"The DataTable component is a wrapper that uses the ",Object(r.mdx)("a",{href:"https://react-table.tanstack.com/docs"},"react-table")," library to\ncreate tables. It can be used as is, or its subcomponents can be used on their own, allowing the developer full control."),Object(r.mdx)("h2",null,"Filtering and sorting"),Object(r.mdx)("p",null,"Paragon currently provides two filter types, TextFilter and CheckboxFilter. You can also define your own filter types."),Object(r.mdx)("p",null,"In this example, a default TextFilter component is used as the default filter for all columns. A default filter can be passed in,\nor a filter component can be defined on the column using the ",Object(r.mdx)("inlineCode",{parentName:"p"},"Filter")," attribute. See ",Object(r.mdx)("a",{href:"https://react-table.tanstack.com/docs/api/useFilters"},"react-table filters documentation"),"\nfor more information."),Object(r.mdx)("p",null,'A CheckboxFilter is used on the coat color column. Filters can be defined on the columns themselves. The CheckboxFilter additionally requires that the "CheckboxFilters" property be defined on the column.'),Object(r.mdx)("h3",null,"Available filter functions"),Object(r.mdx)("p",null,"A filtering function can be defined on the column as well as the filter component. Custom filtering functions can also be defined, see ",Object(r.mdx)("a",{href:"https://react-table.tanstack.com/docs/api/useFilters#column-options"},"react-table filters documentation"),"\nfor more information.\nFilter functions are definied on the column as the ",Object(r.mdx)("inlineCode",{parentName:"p"},"filter")," attribute."),Object(r.mdx)("dl",null,Object(r.mdx)("dt",null,"text"),Object(r.mdx)("dd",null,"This is the default filter function. It lower-cases the search string and checks if the row value includes the search string"),Object(r.mdx)("dt",null,"exactText"),Object(r.mdx)("dd",null,"Checks that the row value matches the search string exactly (case-insensitive)"),Object(r.mdx)("dt",null,"exactTextCase"),Object(r.mdx)("dd",null,"Checks that the row value matches the search string exactly (case-sensitive)"),Object(r.mdx)("dt",null,"includes"),Object(r.mdx)("dd",null,"Check that the row value includes the search string"),Object(r.mdx)("dt",null,"includesAll"),Object(r.mdx)("dd",null,"Check that the row value includes every item in the array"),Object(r.mdx)("dt",null,"includesSome"),Object(r.mdx)("dd",null,"Check that row value includes some item in the array"),Object(r.mdx)("dt",null,"exact"),Object(r.mdx)("dd",null,"Checks for exact equality between the row value and the search term. ",Object(r.mdx)("pre",null,"===")),Object(r.mdx)("dt",null,"equals"),Object(r.mdx)("dd",null,"Checks for equality between the row value and the search term. ",Object(r.mdx)("pre",null,"==")),Object(r.mdx)("dt",null,"between"),Object(r.mdx)("dd",null,"Expects an array with a min and max value as the search term. Checks that the row value is between the min and max")),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<DataTable\n  isFilterable\n  defaultColumnValues={{ Filter: TextFilter }}\n  columns={[\n    {\n      Header: 'Name',\n      accessor: 'name',\n\n    },\n    {\n      Header: 'Famous For',\n      accessor: 'famous_for',\n    },\n    {\n      Header: 'Coat Color',\n      accessor: 'color',\n      Filter: CheckboxFilter,\n      filter: 'includesValue',\n      checkboxFilters: [{\n        name: 'russian white',\n        number: 1,\n      },\n      {\n        name: 'orange tabby',\n        number: 2\n      },\n      {\n        name: 'brown tabby',\n        number: 3\n      },\n      {\n        name: 'siamese',\n        number: 1,\n      }\n      ]\n    },\n  ]}\n  itemCount={7}\n  data={[\n    {\n      name: 'Lil Bub',\n      color: 'brown tabby',\n      famous_for: 'weird tongue',\n    },\n    {\n      name: 'Grumpy Cat',\n      color: 'siamese',\n      famous_for: 'serving moods',\n    },\n    {\n      name: 'Smoothie',\n      color: 'orange tabby',\n      famous_for: 'modeling',\n    },\n    {\n      name: 'Maru',\n      color: 'brown tabby',\n      famous_for: 'being a lovable oaf',\n    },\n    {\n      name: 'Keyboard Cat',\n      color: 'orange tabby',\n      famous_for: 'piano virtuoso',\n    },\n    {\n      name: 'Long Cat',\n      color: 'russian white',\n      famous_for:\n        'being loooooooooooooooooooooooooooooooooooooooooooooooooooooong',\n    },\n    {\n      name: 'Zeno',\n      color: 'brown tabby',\n      famous_for: 'getting halfway there'\n    },\n  ]}\n\n/>\n")),Object(r.mdx)("h2",null,"Props"),Object(r.mdx)("h3",null,"Avaliable filter types"),Object(r.mdx)(c.StaticQuery,{query:"3707325421",render:function(e){var t=e.textFilter,n=e.checkboxFilter;return Object(r.mdx)("div",null,Object(r.mdx)("h4",null,"TextFilter"),t?Object(r.mdx)(u.a,{propMetaData:t.props,mdxType:"PropsTable"}):null,Object(r.mdx)("h4",null,"CheckboxFilter"),n?Object(r.mdx)(u.a,{propMetaData:n.props,mdxType:"PropsTable"}):null)},mdxType:"StaticQuery"}))}f.isMDXComponent=!0},KcSJ:function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),a=n("A2+M"),c=n("7ljp"),l=n("MhRC"),i=(n("hZTp"),{pre:function(e){return r.a.createElement("div",e)},code:l.a}),u=function(e){var t=e.children,n=t;return"string"==typeof n&&(n=r.a.createElement(a.MDXRenderer,null,t)),r.a.createElement(c.MDXProvider,{components:i},n)};t.a=function(e){return r.a.createElement("div",null,r.a.createElement(u,null,e.children))}},Q83E:function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},R7tm:function(e,t,n){var o=n("qHws"),r=n("gC2u"),a=n("dQcQ"),c=n("m7BV");e.exports=function(e){return o(e)||r(e)||a(e)||c()}},X8hv:function(e,t,n){var o=n("Ck4i"),r=n("R7tm"),a=n("0jh0"),c=n("uDP2");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=n("q1tI"),s=n("7ljp"),m=s.useMDXComponents,d=s.mdx,b=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,a=e.children,l=c(e,["scope","components","children"]),s=m(n),f=b(t),p=u.useMemo((function(){if(!a)return null;var e=i({React:u,mdx:d},f),t=Object.keys(e),n=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(r(t),[""+a])).apply(void 0,[{}].concat(r(n)))}),[a,t]);return u.createElement(p,i({components:s},l))}},dQcQ:function(e,t,n){var o=n("hMe3");e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}},gC2u:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},hMe3:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}},m7BV:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},qHws:function(e,t,n){var o=n("hMe3");e.exports=function(e){if(Array.isArray(e))return o(e)}}}]);
//# sourceMappingURL=component---src-pages-table-tablefilters-mdx-d71a1ef2e40ab8e66e3c.js.map