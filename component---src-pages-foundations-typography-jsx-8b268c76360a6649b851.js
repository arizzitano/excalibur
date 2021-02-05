(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{GKuY:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var l=a("9Hrx"),n=a("q1tI"),r=a.n(n),c=function(e){function t(t){var a;a=e.call(this,t)||this;var l=t.properties.reduce((function(e,t){return e[t]=null,e}),{});return a.state=l,a.item=r.a.createRef(),a}Object(l.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){setTimeout(this.measure.bind(this),10)},a.measure=function(){var e=getComputedStyle(this.item.current),t=this.props.properties.reduce((function(t,a){return t[a]=e.getPropertyValue(a),t}),{});this.setState(t)},a.render=function(){return r.a.createElement(r.a.Fragment,null,this.props.renderBefore?this.props.renderBefore(this.state):null,r.a.cloneElement(this.props.children,{ref:this.item}),this.props.renderAfter?this.props.renderAfter(this.state):null)},t}(r.a.Component);c.defaultProps={properties:[],renderBefore:void 0,renderAfter:void 0}},WK2X:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("dmsj"),c=a("GKuY"),m={200:"Light",300:"Light",400:"Regular",500:"Medium",600:"Medium",700:"Bold",800:"Black"},u={properties:["font-size","line-height","font-family","font-weight"],renderAfter:function(e){var t=e["font-family"]?e["font-family"].split(",")[0]:null,a=m[e["font-weight"]],l=Math.round(10*Number.parseFloat(e["font-size"]))/10,r=Math.round(10*Number.parseFloat(e["line-height"]))/10;return n.a.createElement("p",{className:"m-0 text-muted"},n.a.createElement("span",{className:"mr-2"},t," ",a),l,"px / ",r,"px")}};t.default=function(){return n.a.createElement("div",null,n.a.createElement(r.a,{title:"Typography"}),n.a.createElement("h1",null,"Typography"),n.a.createElement("table",{className:"w-100 table pgn-doc__status-table"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"3"},n.a.createElement("h2",{className:"mt-3"},"Headings"))),n.a.createElement("tr",null,n.a.createElement("th",null,"Desktop"),n.a.createElement("th",null,"Mobile"),n.a.createElement("th",null,"CSS Class")),[1,2,3,4,5,6].map((function(e){return n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(c.a,u,n.a.createElement("p",{className:"m-0 h"+e},"Heading ",e))),n.a.createElement("td",{className:"mobile-type"},n.a.createElement(c.a,u,n.a.createElement("p",{className:"m-0 h"+e},"Heading ",e))),n.a.createElement("td",null,n.a.createElement("code",null,".h",e)))})),n.a.createElement("tr",null,n.a.createElement("td",{colSpan:"2"},n.a.createElement(c.a,u,n.a.createElement("p",{className:"heading-label"},"Heading Label")),"A heading label is usually paired with and proceeds a Heading."),n.a.createElement("td",null,n.a.createElement("code",null,".heading-label")))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"3"},n.a.createElement("h2",{className:"mt-3"},"Body"))),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"2"},"Desktop & Mobile"),n.a.createElement("th",null,"CSS Class")),n.a.createElement("tr",null,n.a.createElement("td",{colSpan:"2"},n.a.createElement(c.a,u,n.a.createElement("p",{className:"lead m-0"},"Large Body"))),n.a.createElement("td",null,n.a.createElement("code",null,".lead"))),n.a.createElement("tr",null,n.a.createElement("td",{colSpan:"2"},n.a.createElement(c.a,u,n.a.createElement("p",{className:"m-0"},"Body"))),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",{colSpan:"2"},n.a.createElement(c.a,u,n.a.createElement("p",{className:"small m-0"},"Small Body"))),n.a.createElement("td",null,n.a.createElement("code",null,".small"))),n.a.createElement("tr",null,n.a.createElement("td",{colSpan:"2"},n.a.createElement(c.a,u,n.a.createElement("p",{className:"x-small m-0"},"Extra Small Body"))),n.a.createElement("td",null,n.a.createElement("code",null,".x-small")))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"3"},n.a.createElement("h2",{className:"mt-3"},"Display"))),n.a.createElement("tr",null,n.a.createElement("th",null,"Desktop"),n.a.createElement("th",null,"Mobile"),n.a.createElement("th",null,"CSS Class")),[1,2,3,4].map((function(e){return n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(c.a,u,n.a.createElement("p",{className:"m-0 display-"+e},"Display ",e))),n.a.createElement("td",{className:"mobile-type"},n.a.createElement(c.a,u,n.a.createElement("p",{className:"m-0 display-"+e},"Display ",e))),n.a.createElement("td",null,n.a.createElement("code",null,".display-",e)))}))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"3"},n.a.createElement("h2",{className:"mt-3"},"Links"))),n.a.createElement("tr",null,n.a.createElement("td",{colSpan:"2"},n.a.createElement("a",{href:"#"},"Standalone Link")),n.a.createElement("td",null,n.a.createElement("small",null,"The default style for ",n.a.createElement("code",null,"a")," tags that don't appear in a ",n.a.createElement("code",null,"p")," tag."))),n.a.createElement("tr",null,n.a.createElement("td",{colSpan:"2"},n.a.createElement("p",null,"An ",n.a.createElement("a",{className:"inline-link",href:"#"},"inline link")," in a sentence.")),n.a.createElement("td",null,n.a.createElement("small",null,"For links inside a ",n.a.createElement("code",null,"p")," or with the ",n.a.createElement("code",null,".inline-link")," class name."))),n.a.createElement("tr",null,n.a.createElement("td",{colSpan:"2"},n.a.createElement("a",{className:"muted-link",href:"#"},"Muted, Standalone Link")),n.a.createElement("td",null,n.a.createElement("small",null,n.a.createElement("code",null,".muted-link")," not in a ",n.a.createElement("code",null,"p")," tag."))),n.a.createElement("tr",null,n.a.createElement("td",{colSpan:"2"},n.a.createElement("p",null,"An ",n.a.createElement("a",{className:"muted-link inline-link",href:"#"},"muted, inline link")," in a sentence.")),n.a.createElement("td",null,n.a.createElement("small",null,"For ",n.a.createElement("code",null,".muted-link")," links inside a ",n.a.createElement("code",null,"p")," or with the ",n.a.createElement("code",null,".inline-link")," class name."))))),n.a.createElement("table",{className:"w-100 table pgn-doc__status-table"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"2"},n.a.createElement("h2",null,"Decoration and Emphasis"))),n.a.createElement("tr",null,n.a.createElement("th",null,"Style"),n.a.createElement("th",null,"CSS Class")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("p",{className:"text-lowercase"},"Lowercase text.")),n.a.createElement("td",null,n.a.createElement("code",null,".text-lowercase"))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("p",{className:"text-uppercase"},"uppercase text.")),n.a.createElement("td",null,n.a.createElement("code",null,".text-uppercase"))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("p",{className:"text-capitalize"},"capitalize text.")),n.a.createElement("td",null,n.a.createElement("code",null,".text-capitalize"))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("p",{className:"text-decoration-none"},"No decorations.")),n.a.createElement("td",null,n.a.createElement("code",null,".text-decoration-none"))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("p",{className:"text-italic"},"Italic text.")),n.a.createElement("td",null,n.a.createElement("code",null,".text-italic"))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("p",{className:"font-weight-bold"},"Bold text.")),n.a.createElement("td",null,n.a.createElement("code",null,".font-weight-bold"))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("p",{className:"font-weight-normal"},"Regular text.")),n.a.createElement("td",null,n.a.createElement("code",null,".font-weight-normal"))))),n.a.createElement("table",{className:"w-100 table pgn-doc__status-table"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"2"},n.a.createElement("h2",null,"Alignment"))),n.a.createElement("tr",null,n.a.createElement("th",null,"Style"),n.a.createElement("th",null,"CSS Class")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("p",{className:"text-left"},"left text.")),n.a.createElement("td",null,n.a.createElement("code",null,".text-left"))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("p",{className:"text-right"},"right text.")),n.a.createElement("td",null,n.a.createElement("code",null,".text-right"))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("p",{className:"text-center"},"center text.")),n.a.createElement("td",null,n.a.createElement("code",null,".text-center"))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("p",{className:"text-justify"},"justify text."),n.a.createElement("p",{className:"text-justify text-muted small",style:{maxWidth:"20rem"}},"At the edge of forever tendrils of gossamer clouds corpus callosum culture Vangelis dispassionate extraterrestrial observer.")),n.a.createElement("td",null,n.a.createElement("code",null,".text-justify"))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("p",{className:"text-wrap"},"wrap text.")),n.a.createElement("td",null,n.a.createElement("code",null,".text-wrap"))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("p",{className:"text-nowrap"},"nowrap text.")),n.a.createElement("td",null,n.a.createElement("code",null,".text-nowrap"))))))}}}]);
//# sourceMappingURL=component---src-pages-foundations-typography-jsx-8b268c76360a6649b851.js.map