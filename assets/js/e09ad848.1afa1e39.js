/*! For license information please see e09ad848.1afa1e39.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[153],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,p=d["".concat(l,".").concat(h)]||d[h]||f[h]||o;return n?r.createElement(p,s(s({ref:t},c),{},{components:n})):r.createElement(p,s({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6691:function(e,t,n){n.d(t,{l:function(){return m},n:function(){return y}});var r=n(7294),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function o(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}o(".styles-module_carousel-base__3keqD {\n\twidth: 100%;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\toutline: none;\n}\n\n.styles-module_item-provider__YgMwz {\n\toverflow: hidden;\n\twidth: 100%;\n\tcursor: pointer;\n}\n\n.styles-module_item-container__a8zaY img {\n\t-webkit-user-select: none;\n\t        user-select: none;\n\t-webkit-user-drag: none;\n}\n\n.styles-module_item-tracker__3bypy {\n\theight: 100%;\n\tdisplay: flex;\n}\n\n.styles-module_carousel-arrow__26sRw {\n\tz-index: 1;\n}\n");var s,a,l=function(e){return r.createElement("button",{className:"styles-module_carousel-arrow__26sRw",onClick:e.onClick,"data-direction":e.direction})};(a=s||(s={}))[a.Right=-1]="Right",a[a.Left=1]="Left";var u=function(){function e(e,t){this.arr=e,this.currentIndex=t}return e.prototype.next=function(){var e=this.currentIndex,t=this.arr;return this.currentIndex=e<t.length-1?e+1:0,this.current()},e.prototype.prev=function(){var e=this.currentIndex,t=this.arr;return this.currentIndex=e>0&&e<t.length?e-1:t.length-1,this.current()},e.prototype.current=function(){return this.arr[this.currentIndex]},e}(),c=function(e,t,n){return n*e*t},f=function(e,t,n,r){var i=e>t;return n?{left:i,right:i}:{left:i&&0!==r,right:i&&r+t<e}},d=function(e,t,n){if(!n)return e;for(var r=Array.from(e),i=new u(e,0),o=0;o<t;o++)r.unshift(i.prev());return r};function h(e){return e.nativeEvent instanceof MouseEvent?e.nativeEvent.pageX:e.nativeEvent instanceof TouchEvent?e.nativeEvent.changedTouches[0].pageX:0}var p=function(e){var t=(0,r.useState)(200),n=t[0],o=t[1],a=(0,r.useCallback)((function(t){if(null!==t){var n=t.getBoundingClientRect().width/e.show;o(n),e.widthCallBack(n)}}),[n]);e.responsive&&function(e){var t=(0,r.useState)(window.innerWidth),i=t[0],s=t[1];(0,r.useLayoutEffect)((function(){var e=function(){var e=i-window.innerWidth;s(window.innerWidth),function(e){o(n-e)}(e)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[])}();var l=(0,r.useState)({initial:e.transform,start:0,isDown:!1,drag:0,finished:!0,pointers:!0}),u=l[0],c=l[1],f=function(t){t.persist(),c(i(i({},u),{isDown:!0,start:h(t),initial:e.transform,finished:!1}))},d=function(t){if(t.persist(),!u.finished){if(Math.abs(u.drag)<n*e.swipeOn)return e.dragCallback(e.transform),c({initial:e.transform,start:0,isDown:!1,drag:0,finished:!0,pointers:!0});e.slideCallback(u.drag>0?s.Right:s.Left),c(i(i({},u),{drag:0,isDown:!1,finished:!0,pointers:!0}))}},p=function(e){if(e.persist(),u.isDown){var t=h(e);c(i(i({},u),{drag:u.start-t,pointers:!1}))}},g=e.swiping?{onTouchCancel:d,onTouchEnd:d,onTouchMove:p,onTouchStart:f,onMouseDown:f,onMouseLeave:d,onMouseUp:d,onMouseMove:p}:{};return r.createElement("div",{ref:a,className:"styles-module_item-provider__YgMwz"},r.createElement("div",i({"":"trackList"},g,{className:"styles-module_item-tracker__3bypy",style:{transform:"translateX("+(e.transform-u.drag)+"px)",transition:"transform "+e.transition+"s ease 0s",width:n*e.items.length}}),e.items.map((function(e,t){return r.createElement("div",{key:t,style:{width:n,pointerEvents:u.pointers?"all":"none"},className:"styles-module_item-container__a8zaY"},e)}))))},g={children:[],show:1,slide:1,transition:.5,swiping:!1,swipeOn:1,responsive:!1,infinite:!0,className:"",useArrowKeys:!1,a11y:{},dynamic:!1,paginationCallback:null,pageCount:0,rightArrow:null,leftArrow:null},m=function(e){var t,n,o,a,h=i(i({},g),e),m=(0,r.useState)(d(h.children,h.slide,h.infinite)),v=m[0],y=m[1],w=(0,r.useState)(0),b=w[0],k=w[1],_=(0,r.useState)({transform:0,transition:0,isSliding:!1}),C=_[0],x=_[1],E=(0,r.useState)(0),T=E[0],L=E[1],O=(0,r.useState)(f(h.children.length,h.show,h.infinite,T)),S=O[0],R=O[1],j=(o=e.children,a=(0,r.useRef)(),(0,r.useEffect)((function(){a.current=o})),a.current),M=(0,r.useState)(0),D=M[0],N=M[1],I=(0,r.useRef)(d(h.children,h.slide,h.infinite)),P=(0,r.useRef)(!1);h.dynamic&&(0,r.useEffect)((function(){var e=function(e,t,n,r,i){if(n&&n.length<t.length)return d(t,r,i);var o=e.map((function(e){return t.find((function(t){return e.key===t.key}))}));return o.some((function(e){return void 0===e}))?d(t,r,i):o}(I.current,h.children,j,h.slide,h.infinite);y(e),I.current=e,D<h.pageCount&&j&&(null==j?void 0:j.length)<h.children.length&&(H(s.Right),N(D+1))}),[h.children]);var H=function(e){if(!(C.isSliding||e===s.Right&&!S.right||e===s.Left&&!S.left)){if(h.paginationCallback&&e===s.Right&&D<h.pageCount-1&&!P.current)return P.current=!0,void h.paginationCallback(e);var t=h.children,n=function(e,t,n,r){var i=e-r*t;return i<0?n+i:n<=i?i-n:i}(T,h.slide,t.length,e),r=h.infinite?function(e,t,n,r,i,o){var a=new u(e,n),l=Array.from(t);switch(+o){case s.Left:for(var c=i;c>=0;c--)(i-c<0||!l[c-i])&&l.unshift(a.current()),a.prev();break;case s.Right:for(c=0;c<r+i;c++)l[2*i+c]||l.push(a.current()),a.next()}return l}(t,v,n,h.show,h.slide,e):v;h.infinite&&e===s.Right&&(y(r),I.current=r),x({transform:C.transform+c(b,h.slide,e),transition:h.transition,isSliding:!0}),L(n),R(f(t.length,h.show,h.infinite,n)),setTimeout((function(){if(h.infinite){var t=function(e,t,n){return n===s.Left?e.slice(0,-1*t):e.slice(t)}(e===s.Right?I.current:r,h.slide,e);y(t),I.current=t}x({transform:h.infinite?c(b,h.slide,s.Right):C.transform+c(b,h.slide,e),transition:0,isSliding:!1})}),1e3*h.transition),P.current=!1}};return r.createElement("div",i({},h.a11y,{"":"carousel",tabIndex:0},h.useArrowKeys?{onKeyDown:function(e){37===e.keyCode?H(s.Left):39===e.keyCode&&H(s.Right)}}:{},{className:"styles-module_carousel-base__3keqD "+h.className}),S.left&&r.createElement("div",{onClick:function(){return H(s.Left)}},null!==(t=h.leftArrow)&&void 0!==t?t:r.createElement(l,{direction:"left"})),r.createElement(p,i({},h,{transition:C.transition,items:I.current,transform:C.transform,slideCallback:function(e){H(e)},dragCallback:function(e){x({transform:e,transition:h.transition,isSliding:!1}),setTimeout((function(){return x(i(i({},C),{transition:0}))}),1e3*h.transition)},widthCallBack:function(e){k(e),x({transform:h.infinite?c(e,h.slide,s.Right):0,transition:0,isSliding:!1})}})),S.right&&r.createElement("div",{onClick:function(){return H(s.Right)}},null!==(n=h.rightArrow)&&void 0!==n?n:r.createElement(l,{direction:"right"})))},v="styles-module_sliding__3T6T6";o(".styles-module_sliderBase__swkx1 {\n\twidth: 100%;\n\tposition: relative;\n}\n\n.styles-module_slider__o0fqa {\n\tdisplay: flex;\n\toverflow-x: auto;\n\tscrollbar-width: none; /* Firefox 64 */\n\t-ms-overflow-style: none; /* Internet Explorer 11 */\n}\n\n.styles-module_slider__o0fqa::-webkit-scrollbar {\n\t/** WebKit */\n\tdisplay: none;\n}\n\n.styles-module_slider__o0fqa > * {\n\tflex: 0 0 auto;\n}\n\n.styles-module_sliding__3T6T6 > * {\n\tpointer-events: none;\n}\n");var y=function(e){var t=e.children,n=e.className,i=e.leftIcon,o=e.rightIcon,a=(0,r.useRef)(null),l=(0,r.useState)(!1),u=l[0],c=l[1],f=(0,r.useState)({startX:0,scrollLeft:0}),d=f[0],h=f[1],p=function(){var e=a.current;return{left:!!e&&e.scrollLeft>0,right:!!e&&e.scrollWidth>e.scrollLeft+e.offsetWidth}},g=(0,r.useState)(p()),m=g[0],y=g[1],w=function(e){y(p())},b=(0,r.useCallback)((function(e){null!==e&&(Object.defineProperty(a,"current",{value:e}),y(p()),e.addEventListener("scroll",w))}),[a,t]),k=function(e){c(!1),y(p()),a.current.classList.remove(v)},_=function(e,t,n){for(var r=0,i=0;r<=e;i++)window.setTimeout(C,r,i*t/100+n),r+=e/100},C=function(e){a.current.scrollLeft=e},x=function(e,t,n){return r.createElement("div",{"data-arrow":t,onClick:function(){return function(e){var t=function(e){for(var t,n,r=a.current,i=e===s.Left?r.scrollLeft+r.offsetWidth:r.scrollLeft,o=0,l=0,u=Array.from(r.children);l<u.length;l++){var c=(t=u[l],n=getComputedStyle(t),t.offsetWidth+(parseInt(n.marginLeft,10)||0)+(parseInt(n.marginRight,10)||0));if((o+=c)>=i){var f=e===s.Left?o-i:c;return(r.offsetWidth-f)*e}}return r.offsetWidth}(e),n=a.current.scrollLeft;_(500,t,n)}(e)}},null!=n?n:r.createElement("button",null))};return r.createElement("div",{className:"styles-module_sliderBase__swkx1 "+n,"":"carousel"},m.left&&x(s.Right,"left",i),m.right&&x(s.Left,"right",o),r.createElement("div",{ref:b,onMouseDown:function(e){c(!0),h({startX:e.pageX-a.current.offsetLeft,scrollLeft:a.current.scrollLeft})},onMouseLeave:k,onMouseUp:k,onMouseMove:function(e){if(u){e.preventDefault(),a.current.classList.add(v);var t=e.pageX-a.current.offsetLeft-d.startX;a.current.scrollLeft=d.scrollLeft-t}},className:"styles-module_slider__o0fqa"},t))}},5607:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return f},Highlight:function(){return d},default:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),s=n(6691),a=["components"],l={slug:"infinity",title:"Infinite Carousel"},u=void 0,c={unversionedId:"infinityCarousel",id:"infinityCarousel",title:"Infinite Carousel",description:"Carousel is infinite at default",source:"@site/docs/infinityCarousel.md",sourceDirName:".",slug:"/infinity",permalink:"/react-carousel/docs/infinity",editUrl:"https://github.com/trendyol/react-carousel/edit/master/website/docs/infinityCarousel.md",tags:[],version:"current",frontMatter:{slug:"infinity",title:"Infinite Carousel"},sidebar:"someSidebar",previous:{title:"Scrolling Carousel",permalink:"/react-carousel/docs/scrolling-carousel-api"},next:{title:"Swipeable Carousel",permalink:"/react-carousel/docs/swipible"}},f=[],d=function(e){var t=e.children,n=e.color;return(0,o.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"90px 0",display:"block",height:"200px",margin:"16px 16px 16px 0"}}," ",t," ")},h={toc:f,Highlight:d};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Carousel is infinite at default"),(0,o.kt)(s.l,{className:"exampleCarousel1",show:3.5,slide:2,transition:.5,mdxType:"Carousel"},(0,o.kt)(d,{color:"#f27a1a",mdxType:"Highlight"},"We love Trendyol orange"),(0,o.kt)("a",{target:"_blank",href:"https://github.com/trendyol/"},(0,o.kt)(d,{color:"#d53f8c",mdxType:"Highlight"},"This is our github")),(0,o.kt)(d,{color:"#16be48",mdxType:"Highlight"},"We love Trendyol green"),(0,o.kt)("a",{target:"_blank",href:"https://trendyol.com/"},(0,o.kt)(d,{color:"#3f51b5",mdxType:"Highlight"},"This is our website"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<Carousel show={3.5} slide={2} transition={0.5}>\n    <Highlight color="#f27a1a">We love Trendyol orange</Highlight>\n    <Highlight color="#d53f8c">This is our github</Highlight>\n    <Highlight color="#16be48">We love Trendyol green</Highlight>\n    <Highlight color="#3f51b5">This is our website</Highlight>\n</Carousel>\n')))}p.isMDXComponent=!0}}]);