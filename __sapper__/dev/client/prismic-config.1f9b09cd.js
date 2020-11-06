var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var prismicDom_min = createCommonjsModule(function (module, exports) {
!function(e,t){module.exports=t();}("undefined"!=typeof self?self:commonjsGlobal,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1);},function(e,t,n){var r=n(2),o=n(3);e.exports={Link:r,Date:o};},function(e,t,n){e.exports={url:function(e,t){if(e&&[e.link_type,e._linkType,e.linkType].some((function(e){return e&&["Document","Link.Document","Link.document"].includes(e)}))&&t&&"function"==typeof t){var n=t(e);if(n)return n}return e&&e.url?e.url:""}};},function(e,t){e.exports=function(e){if(!e)return null;var t=24==e.length?"".concat(e.substring(0,22),":").concat(e.substring(22,24)):e;return new Date(t)};}]);},function(e,t,n){e.exports=n(2);},function(e,t,n){var r=n(0),o=n(3),i=r.Date,u=r.Link;e.exports={Date:i,Link:u,RichText:o};},function(e,t,n){var r=n(4),o=n(0).Link,i=n(5),u=r.Elements;function c(e,t,n,r,c){switch(t){case u.heading1:return l("h1",n,c);case u.heading2:return l("h2",n,c);case u.heading3:return l("h3",n,c);case u.heading4:return l("h4",n,c);case u.heading5:return l("h5",n,c);case u.heading6:return l("h6",n,c);case u.paragraph:return l("p",n,c);case u.preformatted:return function(e){return "<pre".concat(a(e),">").concat(i(e.text),"</pre>")}(n);case u.strong:return l("strong",n,c);case u.em:return l("em",n,c);case u.listItem:case u.oListItem:return l("li",n,c);case u.list:return l("ul",n,c);case u.oList:return l("ol",n,c);case u.image:return function(e,t){var n=t.linkTo?o.url(t.linkTo,e):null,r=t.linkTo&&t.linkTo.target?'target="'.concat(t.linkTo.target,'" rel="noopener"'):"",i=[t.label||"","block-img"],u='<img src="'.concat(t.url,'" alt="').concat(t.alt||"",'" copyright="').concat(t.copyright||"",'">');return '\n    <p class="'.concat(i.join(" "),'">\n      ').concat(n?"<a ".concat(r,' href="').concat(n,'">').concat(u,"</a>"):u,"\n    </p>\n  ")}(e,n);case u.embed:return function(e){return '\n    <div data-oembed="'.concat(e.oembed.embed_url,'"\n      data-oembed-type="').concat(e.oembed.type,'"\n      data-oembed-provider="').concat(e.oembed.provider_name,'"\n      ').concat(a(e),">\n          \n      ").concat(e.oembed.html,"\n    </div>\n  ")}(n);case u.hyperlink:return function(e,t,n){var r=t.data.target?'target="'.concat(t.data.target,'" rel="noopener"'):"";return "<a ".concat(r,' href="').concat(o.url(t.data,e),'">').concat(n.join(""),"</a>")}(e,n,c);case u.label:return function(e,t){return "<span ".concat(a(e.data),">").concat(t.join(""),"</span>")}(n,c);case u.span:return function(e){return e?i(e).replace(/\n/g,"<br />"):""}(r);default:return ""}}function a(e){return e.label?' class="'.concat(e.label,'"'):""}function l(e,t,n){return "<".concat(e).concat(a(t),">").concat(n.join(""),"</").concat(e,">")}e.exports={asText:function(e,t){return r.asText(e,t)},asHtml:function(e,t,n){return r.serialize(e,c.bind(null,t),n).join("")},Elements:u};},function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){var r=n(3);e.exports=function(e){return function t(n){return 0===arguments.length||r(n)?t:e.apply(this,arguments)}};},function(e,t,n){var r=n(0),o=n(3);e.exports=function(e){return function t(n,i){switch(arguments.length){case 0:return t;case 1:return o(n)?t:r((function(t){return e(n,t)}));default:return o(n)&&o(i)?t:o(n)?r((function(t){return e(t,i)})):o(i)?r((function(t){return e(n,t)})):e(n,i)}}};},function(e,t,n){var r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.PRIORITIES=t.NODE_TYPES=void 0;var i={heading1:"heading1",heading2:"heading2",heading3:"heading3",heading4:"heading4",heading5:"heading5",heading6:"heading6",paragraph:"paragraph",preformatted:"preformatted",strong:"strong",em:"em",listItem:"list-item",oListItem:"o-list-item",list:"group-list-item",oList:"group-o-list-item",image:"image",embed:"embed",hyperlink:"hyperlink",label:"label",span:"span"};t.NODE_TYPES=i;var u=(o(r={},i.heading1,4),o(r,i.heading2,4),o(r,i.heading3,4),o(r,i.heading4,4),o(r,i.heading5,4),o(r,i.heading6,4),o(r,i.paragraph,3),o(r,i.preformatted,5),o(r,i.strong,6),o(r,i.em,6),o(r,i.oList,1),o(r,i.list,1),o(r,i.listItem,1),o(r,i.oListItem,1),o(r,i.image,1),o(r,i.embed,1),o(r,i.hyperlink,3),o(r,i.label,4),o(r,i.span,7),r);t.PRIORITIES=u;},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]};},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(12)),o=d(n(15)),i=d(n(16)),u=d(n(17)),c=d(n(21)),a=d(n(7)),l=n(23),f=n(2),s=n(8);function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}function h(e){return function(e,t){return t.reduce((function(e,t){var n=(0, c.default)(e);if(n){if(n.some((function(e){return e.isParentOf(t)})))return (0, u.default)(e).concat([n.concat(t)]);var r=(0, c.default)(n);return r&&function(e,t){return e.end>=t.start}(r,t)?(0, u.default)(e).concat([n.concat(t)]):e.concat([[t]])}return [[t]]}),[])}(0,(0, i.default)([function(e,t){return e.start-t.start},function(e,t){return e.end-t.end}],e))}function y(e){if(0===e.length)throw new Error("Unable to elect node on empty list");var t=function(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(e.sort((function(e,t){if(e.isParentOf(t))return -1;if(t.isParentOf(e))return 1;var n=f.PRIORITIES[e.type]-f.PRIORITIES[t.type];return 0===n?e.text.length-t.text.length:n})));return {elected:t[0],others:t.slice(1)}}function v(e,t,n){if(t.length>0)return function(e,t,n){return t.reduce((function(r,o,i){var u=[],c=0===i&&o.start>n.lower,a=i===t.length-1&&n.upper>o.end;if(c){var l=new s.TextNode(n.lower,o.start,e.slice(n.lower,o.start));u=u.concat(l);}else {var f=t[i-1];if(f&&o.start>f.end){var d=e.slice(f.end,o.start),p=new s.TextNode(f.end,o.start,d);u=u.concat(p);}}if(u=u.concat(o),a){var h=new s.TextNode(o.end,n.upper,e.slice(o.end,n.upper));u=u.concat(h);}return r.concat(u)}),[])}(e,m(e,t),n);var r=e.slice(n.lower,n.upper);return [new s.TextNode(n.lower,n.upper,r)]}function m(e,t){var n=h((0, o.default)((function(e){return e.start}),t)).map(y),i=(0, r.default)(n.map((function(t){return function(e,t){var n=t.others.reduce((function(n,r){var o=n.inner,i=n.outer,u=function(e,t,n){return n.start<t.start?{inner:s.SpanNode.slice(n,t.start,n.end,e),outer:s.SpanNode.slice(n,n.start,t.start,e)}:n.end>t.end?{inner:s.SpanNode.slice(n,n.start,t.end,e),outer:s.SpanNode.slice(n,t.end,n.end,e)}:{inner:n}}(e,t.elected,r);return {inner:o.concat(u.inner),outer:u.outer?i.concat(u.outer):i}}),{inner:[],outer:[]}),r=n.inner,o=n.outer;return [t.elected.setChildren(v(e,r,t.elected.boundaries()))].concat(m(e,o))}(e,t)})));return (0, o.default)((function(e){return e.start}),i)}var b=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);}var t,n;return t=e,(n=[{key:"fromRichText",value:function(e){return {key:(0, a.default)(),children:e.reduce((function(e,t,n){if(l.RichTextBlock.isEmbedBlock(t.type)||l.RichTextBlock.isImageBlock(t.type))return e.concat(new s.BlockNode(t.type,t));var r=function(e){var t=e.spans.map((function(t){var n=e.text.slice(t.start,t.end);return new s.SpanNode(t.start,t.end,t.type,n,[],t)})),n={lower:0,upper:e.text.length};return v(e.text,t,n)}(t),o=e[e.length-1];if(l.RichTextBlock.isListItem(t.type)&&o&&o instanceof s.ListBlockNode){var i=new s.ListItemBlockNode(t,r),c=o.addChild(i);return (0, u.default)(e).concat(c)}if(l.RichTextBlock.isOrderedListItem(t.type)&&o&&o instanceof s.OrderedListBlockNode){var a=new s.OrderedListItemBlockNode(t,r),f=o.addChild(a);return (0, u.default)(e).concat(f)}if(l.RichTextBlock.isListItem(t.type)){var d=new s.ListItemBlockNode(t,r),p=new s.ListBlockNode(l.RichTextBlock.emptyList(),[d]);return e.concat(p)}if(l.RichTextBlock.isOrderedListItem(t.type)){var h=new s.OrderedListItemBlockNode(t,r),y=new s.OrderedListBlockNode(l.RichTextBlock.emptyOrderedList(),[h]);return e.concat(y)}return e.concat(new s.BlockNode(t.type,t,r))}),[])}}}])&&p(t,n),e}();t.default=b;},function(e,t){e.exports=Array.isArray||function(e){return null!=e&&e.length>=0&&"[object Array]"===Object.prototype.toString.call(e)};},function(e,t){e.exports=function(e){return "[object String]"===Object.prototype.toString.call(e)};},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=(new Date).getTime();return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)}))};},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.ListBlockNode=t.OrderedListBlockNode=t.OrderedListItemBlockNode=t.ListItemBlockNode=t.BlockNode=t.TextNode=t.SpanNode=t.Node=void 0;var r,o=(r=n(7))&&r.__esModule?r:{default:r},i=n(2);function u(e){return (u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}function a(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function l(e,t){return !t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return (f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&function(e,t){(Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t);}(e,t);}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var p=function e(t,n,r){d(this,e),this.key=(0, o.default)(),this.type=t,this.element=n,this.children=r;};t.Node=p;var h=function(e){function t(e,n,r,o,i,u){var c;return d(this,t),(c=l(this,f(t).call(this,r,u,i))).start=e,c.end=n,c.text=o,c.children=i,c}return s(t,p),a(t,[{key:"boundaries",value:function(){return {lower:this.start,upper:this.end}}},{key:"isParentOf",value:function(e){return this.start<=e.start&&this.end>=e.end}},{key:"setChildren",value:function(e){return new t(this.start,this.end,this.type,this.text,e,this.element)}}],[{key:"slice",value:function(e,n,r,o){return new t(n,r,e.type,o.slice(n,r),e.children,e.element)}}]),t}();t.SpanNode=h;var y=function(e){function t(e,n,r){d(this,t);var o={type:i.NODE_TYPES.span,start:e,end:n,text:r};return l(this,f(t).call(this,e,n,i.NODE_TYPES.span,r,[],o))}return s(t,h),t}();t.TextNode=y;var v=function(e){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return d(this,t),l(this,f(t).call(this,e,n,r))}return s(t,p),t}();t.BlockNode=v;var m=function(e){function t(e,n){return d(this,t),l(this,f(t).call(this,i.NODE_TYPES.listItem,e,n))}return s(t,v),t}();t.ListItemBlockNode=m;var b=function(e){function t(e,n){return d(this,t),l(this,f(t).call(this,i.NODE_TYPES.oListItem,e,n))}return s(t,v),t}();t.OrderedListItemBlockNode=b;var g=function(e){function t(e,n){return d(this,t),l(this,f(t).call(this,i.NODE_TYPES.oList,e,n))}return s(t,v),a(t,[{key:"addChild",value:function(e){var n=this.children.concat(e);return new t(this.element,n)}}]),t}();t.OrderedListBlockNode=g;var x=function(e){function t(e,n){return d(this,t),l(this,f(t).call(this,i.NODE_TYPES.list,e,n))}return s(t,v),a(t,[{key:"addChild",value:function(e){var n=this.children.concat(e);return new t(this.element,n)}}]),t}();t.ListBlockNode=x;},function(e,t,n){e.exports=n(10);},function(e,t,n){var r=c(n(11)),o=c(n(4)),i=c(n(24)),u=n(2);function c(e){return e&&e.__esModule?e:{default:e}}e.exports={asText:r.default,asTree:o.default.fromRichText,serialize:i.default,Elements:u.NODE_TYPES};},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e,t){var n="string"==typeof t?t:" ";return e.map((function(e){return e.text})).join(n)};},function(e,t,n){var r=n(0)(n(13)(!0));e.exports=r;},function(e,t,n){var r=n(14);e.exports=function(e){return function t(n){for(var o,i,u,c=[],a=0,l=n.length;a<l;){if(r(n[a]))for(u=0,i=(o=e?t(n[a]):n[a]).length;u<i;)c[c.length]=o[u],u+=1;else c[c.length]=n[a];a+=1;}return c}};},function(e,t,n){var r=n(0),o=n(5),i=n(6),u=r((function(e){return !!o(e)||!!e&&"object"==typeof e&&!i(e)&&(1===e.nodeType?!!e.length:0===e.length||e.length>0&&e.hasOwnProperty(0)&&e.hasOwnProperty(e.length-1))}));e.exports=u;},function(e,t,n){var r=n(1)((function(e,t){return Array.prototype.slice.call(t,0).sort((function(t,n){var r=e(t),o=e(n);return r<o?-1:r>o?1:0}))}));e.exports=r;},function(e,t,n){var r=n(1)((function(e,t){return Array.prototype.slice.call(t,0).sort((function(t,n){for(var r=0,o=0;0===r&&o<e.length;)r=e[o](t,n),o+=1;return r}))}));e.exports=r;},function(e,t,n){var r=n(18)(0,-1);e.exports=r;},function(e,t,n){var r=n(19),o=n(20)(r("slice",(function(e,t,n){return Array.prototype.slice.call(n,e,t)})));e.exports=o;},function(e,t,n){var r=n(5);e.exports=function(e,t){return function(){var n=arguments.length;if(0===n)return t();var o=arguments[n-1];return r(o)||"function"!=typeof o[e]?t.apply(this,arguments):o[e].apply(o,Array.prototype.slice.call(arguments,0,n-1))}};},function(e,t,n){var r=n(0),o=n(1),i=n(3);e.exports=function(e){return function t(n,u,c){switch(arguments.length){case 0:return t;case 1:return i(n)?t:o((function(t,r){return e(n,t,r)}));case 2:return i(n)&&i(u)?t:i(n)?o((function(t,n){return e(t,u,n)})):i(u)?o((function(t,r){return e(n,t,r)})):r((function(t){return e(n,u,t)}));default:return i(n)&&i(u)&&i(c)?t:i(n)&&i(u)?o((function(t,n){return e(t,n,c)})):i(n)&&i(c)?o((function(t,n){return e(t,u,n)})):i(u)&&i(c)?o((function(t,r){return e(n,t,r)})):i(n)?r((function(t){return e(t,u,c)})):i(u)?r((function(t){return e(n,t,c)})):i(c)?r((function(t){return e(n,u,t)})):e(n,u,c)}}};},function(e,t,n){var r=n(22)(-1);e.exports=r;},function(e,t,n){var r=n(1),o=n(6),i=r((function(e,t){var n=e<0?t.length+e:e;return o(t)?t.charAt(n):t[n]}));e.exports=i;},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.RichTextBlock=void 0;var r=n(2);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}var i=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.type=t,this.text=n,this.spans=r;}var t,n;return t=e,(n=[{key:"isEmbedBlock",value:function(e){return e===r.NODE_TYPES.embed}},{key:"isImageBlock",value:function(e){return e===r.NODE_TYPES.image}},{key:"isList",value:function(e){return e===r.NODE_TYPES.list}},{key:"isOrderedList",value:function(e){return e===r.NODE_TYPES.oList}},{key:"isListItem",value:function(e){return e===r.NODE_TYPES.listItem}},{key:"isOrderedListItem",value:function(e){return e===r.NODE_TYPES.oListItem}},{key:"emptyList",value:function(){return {type:r.NODE_TYPES.list,spans:[],text:""}}},{key:"emptyOrderedList",value:function(){return {type:r.NODE_TYPES.oList,spans:[],text:""}}}])&&o(t,n),e}();t.RichTextBlock=i;},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(4))&&r.__esModule?r:{default:r},i=n(8);t.default=function(e,t,n){return o.default.fromRichText(e).children.map((function(e,r){return function(e,t,n,r){return function e(n,o){var u=n instanceof i.SpanNode?n.text:null,c=n.children.reduce((function(t,n,r){return t.concat([e(n,r)])}),[]);return r&&r(n.type,n.element,u,c,o)||t(n.type,n.element,u,c,o)}(e,n)}(e,t,r,n)}))};}]);},function(e,t,n){/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var r=/["'&<>]/;e.exports=function(e){var t,n=""+e,o=r.exec(n);if(!o)return n;var i="",u=0,c=0;for(u=o.index;u<n.length;u++){switch(n.charCodeAt(u)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#39;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}c!==u&&(i+=n.substring(c,u)),c=u+1,i+=t;}return c!==u?i+n.substring(c,u):i};}])}));
});

var PrismicDOM = unwrapExports(prismicDom_min);
var prismicDom_min_1 = prismicDom_min.PrismicDOM;

var browserPonyfill = createCommonjsModule(function (module, exports) {
var __self__ = (function (root) {
function F() {
this.fetch = false;
this.DOMException = root.DOMException;
}
F.prototype = root;
return new F();
})(typeof self !== 'undefined' ? self : commonjsGlobal);
(function(self) {

var irrelevant = (function (exports) {
  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob:
      'FileReader' in self &&
      'Blob' in self &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = self.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.onabort = function() {
        reject(new exports.DOMException('Aborted', 'AbortError'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  if (!self.fetch) {
    self.fetch = fetch;
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  return exports;

}({}));
})(__self__);
delete __self__.fetch.polyfill;
exports = __self__.fetch; // To enable: import fetch from 'cross-fetch'
exports.default = __self__.fetch; // For TypeScript consumers without esModuleInterop.
exports.fetch = __self__.fetch; // To enable: import {fetch} from 'cross-fetch'
exports.Headers = __self__.Headers;
exports.Request = __self__.Request;
exports.Response = __self__.Response;
module.exports = exports;
});
var browserPonyfill_1 = browserPonyfill.fetch;
var browserPonyfill_2 = browserPonyfill.Headers;
var browserPonyfill_3 = browserPonyfill.Request;
var browserPonyfill_4 = browserPonyfill.Response;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var Variation = /** @class */ (function () {
    function Variation(data) {
        this.data = {};
        this.data = data;
    }
    Variation.prototype.id = function () {
        return this.data.id;
    };
    Variation.prototype.ref = function () {
        return this.data.ref;
    };
    Variation.prototype.label = function () {
        return this.data.label;
    };
    return Variation;
}());
var Experiment = /** @class */ (function () {
    function Experiment(data) {
        this.data = {};
        this.data = data;
        this.variations = (data.variations || []).map(function (v) {
            return new Variation(v);
        });
    }
    Experiment.prototype.id = function () {
        return this.data.id;
    };
    Experiment.prototype.googleId = function () {
        return this.data.googleId;
    };
    Experiment.prototype.name = function () {
        return this.data.name;
    };
    return Experiment;
}());
var Experiments = /** @class */ (function () {
    function Experiments(data) {
        if (data) {
            this.drafts = (data.drafts || []).map(function (exp) {
                return new Experiment(exp);
            });
            this.running = (data.running || []).map(function (exp) {
                return new Experiment(exp);
            });
        }
    }
    Experiments.prototype.current = function () {
        if (this.running.length > 0) {
            return this.running[0];
        }
        else {
            return null;
        }
    };
    Experiments.prototype.refFromCookie = function (cookie) {
        if (!cookie || cookie.trim() === '')
            return null;
        var splitted = cookie.trim().split(' ');
        if (splitted.length < 2)
            return null;
        var expId = splitted[0];
        var varIndex = parseInt(splitted[1], 10);
        var exp = this.running.filter(function (exp) {
            return exp.googleId() === expId && exp.variations.length > varIndex;
        })[0];
        return exp ? exp.variations[varIndex].ref() : null;
    };
    return Experiments;
}());

var LazySearchForm = /** @class */ (function () {
    function LazySearchForm(id, api) {
        this.id = id;
        this.api = api;
        this.fields = {};
    }
    LazySearchForm.prototype.set = function (key, value) {
        this.fields[key] = value;
        return this;
    };
    LazySearchForm.prototype.ref = function (ref) {
        return this.set('ref', ref);
    };
    LazySearchForm.prototype.query = function (query) {
        return this.set('q', query);
    };
    LazySearchForm.prototype.pageSize = function (size) {
        return this.set('pageSize', size);
    };
    LazySearchForm.prototype.fetch = function (fields) {
        console.warn('Warning: Using Fetch is deprecated. Use the property `graphQuery` instead.');
        return this.set('fetch', fields);
    };
    LazySearchForm.prototype.fetchLinks = function (fields) {
        console.warn('Warning: Using FetchLinks is deprecated. Use the property `graphQuery` instead.');
        return this.set('fetchLinks', fields);
    };
    LazySearchForm.prototype.graphQuery = function (query) {
        return this.set('graphQuery', query);
    };
    LazySearchForm.prototype.lang = function (langCode) {
        return this.set('lang', langCode);
    };
    LazySearchForm.prototype.page = function (p) {
        return this.set('page', p);
    };
    LazySearchForm.prototype.after = function (documentId) {
        return this.set('after', documentId);
    };
    LazySearchForm.prototype.orderings = function (orderings) {
        return this.set('orderings', orderings);
    };
    LazySearchForm.prototype.url = function () {
        var _this = this;
        return this.api.get().then(function (api) {
            return LazySearchForm.toSearchForm(_this, api).url();
        });
    };
    LazySearchForm.prototype.submit = function (cb) {
        var _this = this;
        return this.api.get().then(function (api) {
            return LazySearchForm.toSearchForm(_this, api).submit(cb);
        });
    };
    LazySearchForm.toSearchForm = function (lazyForm, api) {
        var form = api.form(lazyForm.id);
        if (form) {
            return Object.keys(lazyForm.fields).reduce(function (form, fieldKey) {
                var fieldValue = lazyForm.fields[fieldKey];
                if (fieldKey === 'q') {
                    return form.query(fieldValue);
                }
                else if (fieldKey === 'pageSize') {
                    return form.pageSize(fieldValue);
                }
                else if (fieldKey === 'fetch') {
                    return form.fetch(fieldValue);
                }
                else if (fieldKey === 'fetchLinks') {
                    return form.fetchLinks(fieldValue);
                }
                else if (fieldKey === 'graphQuery') {
                    return form.graphQuery(fieldValue);
                }
                else if (fieldKey === 'lang') {
                    return form.lang(fieldValue);
                }
                else if (fieldKey === 'page') {
                    return form.page(fieldValue);
                }
                else if (fieldKey === 'after') {
                    return form.after(fieldValue);
                }
                else if (fieldKey === 'orderings') {
                    return form.orderings(fieldValue);
                }
                else {
                    return form.set(fieldKey, fieldValue);
                }
            }, form);
        }
        else {
            throw new Error("Unable to access to form " + lazyForm.id);
        }
    };
    return LazySearchForm;
}());
var SearchForm = /** @class */ (function () {
    function SearchForm(form, httpClient) {
        this.httpClient = httpClient;
        this.form = form;
        this.data = {};
        for (var field in form.fields) {
            if (form.fields[field]['default']) {
                this.data[field] = [form.fields[field]['default']];
            }
        }
    }
    SearchForm.prototype.set = function (field, value) {
        var fieldDesc = this.form.fields[field];
        if (!fieldDesc)
            throw new Error('Unknown field ' + field);
        var checkedValue = value === '' || value === undefined ? null : value;
        var values = this.data[field] || [];
        if (fieldDesc.multiple) {
            values = checkedValue ? values.concat([checkedValue]) : values;
        }
        else {
            values = checkedValue ? [checkedValue] : values;
        }
        this.data[field] = values;
        return this;
    };
    /**
     * Sets a ref to query on for this SearchForm. This is a mandatory
     * method to call before calling submit(), and api.form('everything').submit()
     * will not work.
     */
    SearchForm.prototype.ref = function (ref) {
        return this.set('ref', ref);
    };
    /**
     * Sets a predicate-based query for this SearchForm. This is where you
     * paste what you compose in your prismic.io API browser.
     */
    SearchForm.prototype.query = function (query) {
        if (typeof query === 'string') {
            return this.query([query]);
        }
        else if (Array.isArray(query)) {
            return this.set('q', "[" + query.join('') + "]");
        }
        else {
            throw new Error("Invalid query : " + query);
        }
    };
    /**
     * Sets a page size to query for this SearchForm. This is an optional method.
     *
     * @param {number} size - The page size
     * @returns {SearchForm} - The SearchForm itself
     */
    SearchForm.prototype.pageSize = function (size) {
        return this.set('pageSize', size);
    };
    /**
     * Restrict the results document to the specified fields
     */
    SearchForm.prototype.fetch = function (fields) {
        console.warn('Warning: Using Fetch is deprecated. Use the property `graphQuery` instead.');
        var strFields = Array.isArray(fields) ? fields.join(',') : fields;
        return this.set('fetch', strFields);
    };
    /**
     * Include the requested fields in the DocumentLink instances in the result
     */
    SearchForm.prototype.fetchLinks = function (fields) {
        console.warn('Warning: Using FetchLinks is deprecated. Use the property `graphQuery` instead.');
        var strFields = Array.isArray(fields) ? fields.join(',') : fields;
        return this.set('fetchLinks', strFields);
    };
    /**
     * Sets the graphquery to query for this SearchForm. This is an optional method.
     */
    SearchForm.prototype.graphQuery = function (query) {
        return this.set('graphQuery', query);
    };
    /**
     * Sets the language to query for this SearchForm. This is an optional method.
     */
    SearchForm.prototype.lang = function (langCode) {
        return this.set('lang', langCode);
    };
    /**
     * Sets the page number to query for this SearchForm. This is an optional method.
     */
    SearchForm.prototype.page = function (p) {
        return this.set('page', p);
    };
    /**
     * Remove all the documents except for those after the specified document in the list. This is an optional method.
     */
    SearchForm.prototype.after = function (documentId) {
        return this.set('after', documentId);
    };
    /**
     * Sets the orderings to query for this SearchForm. This is an optional method.
     */
    SearchForm.prototype.orderings = function (orderings) {
        if (!orderings) {
            return this;
        }
        else {
            return this.set('orderings', "[" + orderings.join(',') + "]");
        }
    };
    /**
     * Build the URL to query
     */
    SearchForm.prototype.url = function () {
        var url = this.form.action;
        if (this.data) {
            var sep = (url.indexOf('?') > -1 ? '&' : '?');
            for (var key in this.data) {
                if (Object.prototype.hasOwnProperty.call(this.data, key)) {
                    var values = this.data[key];
                    if (values) {
                        for (var i = 0; i < values.length; i++) {
                            url += sep + key + '=' + encodeURIComponent(values[i]);
                            sep = '&';
                        }
                    }
                }
            }
        }
        return url;
    };
    /**
     * Submits the query, and calls the callback function.
     */
    SearchForm.prototype.submit = function (cb) {
        return this.httpClient.cachedRequest(this.url()).then(function (response) {
            cb && cb(null, response);
            return response;
        }).catch(function (error) {
            cb && cb(error);
            throw error;
        });
    };
    return SearchForm;
}());

var OPERATOR = {
    at: 'at',
    not: 'not',
    missing: 'missing',
    has: 'has',
    any: 'any',
    in: 'in',
    fulltext: 'fulltext',
    similar: 'similar',
    numberGt: 'number.gt',
    numberLt: 'number.lt',
    numberInRange: 'number.inRange',
    dateBefore: 'date.before',
    dateAfter: 'date.after',
    dateBetween: 'date.between',
    dateDayOfMonth: 'date.day-of-month',
    dateDayOfMonthAfter: 'date.day-of-month-after',
    dateDayOfMonthBefore: 'date.day-of-month-before',
    dateDayOfWeek: 'date.day-of-week',
    dateDayOfWeekAfter: 'date.day-of-week-after',
    dateDayOfWeekBefore: 'date.day-of-week-before',
    dateMonth: 'date.month',
    dateMonthBefore: 'date.month-before',
    dateMonthAfter: 'date.month-after',
    dateYear: 'date.year',
    dateHour: 'date.hour',
    dateHourBefore: 'date.hour-before',
    dateHourAfter: 'date.hour-after',
    GeopointNear: 'geopoint.near',
};
function encode(value) {
    if (typeof value === 'string') {
        return "\"" + value + "\"";
    }
    else if (typeof value === 'number') {
        return value.toString();
    }
    else if (value instanceof Date) {
        return value.getTime().toString();
    }
    else if (Array.isArray(value)) {
        return "[" + value.map(function (v) { return encode(v); }).join(',') + "]";
    }
    else if (typeof value === "boolean") {
        return value.toString();
    }
    else {
        throw new Error("Unable to encode " + value + " of type " + typeof value);
    }
}
var geopoint = {
    near: function (fragment, latitude, longitude, radius) {
        return "[" + OPERATOR.GeopointNear + "(" + fragment + ", " + latitude + ", " + longitude + ", " + radius + ")]";
    },
};
var date = {
    before: function (fragment, before) {
        return "[" + OPERATOR.dateBefore + "(" + fragment + ", " + encode(before) + ")]";
    },
    after: function (fragment, after) {
        return "[" + OPERATOR.dateAfter + "(" + fragment + ", " + encode(after) + ")]";
    },
    between: function (fragment, before, after) {
        return "[" + OPERATOR.dateBetween + "(" + fragment + ", " + encode(before) + ", " + encode(after) + ")]";
    },
    dayOfMonth: function (fragment, day) {
        return "[" + OPERATOR.dateDayOfMonth + "(" + fragment + ", " + day + ")]";
    },
    dayOfMonthAfter: function (fragment, day) {
        return "[" + OPERATOR.dateDayOfMonthAfter + "(" + fragment + ", " + day + ")]";
    },
    dayOfMonthBefore: function (fragment, day) {
        return "[" + OPERATOR.dateDayOfMonthBefore + "(" + fragment + ", " + day + ")]";
    },
    dayOfWeek: function (fragment, day) {
        return "[" + OPERATOR.dateDayOfWeek + "(" + fragment + ", " + encode(day) + ")]";
    },
    dayOfWeekAfter: function (fragment, day) {
        return "[" + OPERATOR.dateDayOfWeekAfter + "(" + fragment + ", " + encode(day) + ")]";
    },
    dayOfWeekBefore: function (fragment, day) {
        return "[" + OPERATOR.dateDayOfWeekBefore + "(" + fragment + ", " + encode(day) + ")]";
    },
    month: function (fragment, month) {
        return "[" + OPERATOR.dateMonth + "(" + fragment + ", " + encode(month) + ")]";
    },
    monthBefore: function (fragment, month) {
        return "[" + OPERATOR.dateMonthBefore + "(" + fragment + ", " + encode(month) + ")]";
    },
    monthAfter: function (fragment, month) {
        return "[" + OPERATOR.dateMonthAfter + "(" + fragment + ", " + encode(month) + ")]";
    },
    year: function (fragment, year) {
        return "[" + OPERATOR.dateYear + "(" + fragment + ", " + year + ")]";
    },
    hour: function (fragment, hour) {
        return "[" + OPERATOR.dateHour + "(" + fragment + ", " + hour + ")]";
    },
    hourBefore: function (fragment, hour) {
        return "[" + OPERATOR.dateHourBefore + "(" + fragment + ", " + hour + ")]";
    },
    hourAfter: function (fragment, hour) {
        return "[" + OPERATOR.dateHourAfter + "(" + fragment + ", " + hour + ")]";
    },
};
var number = {
    gt: function (fragment, value) {
        return "[" + OPERATOR.numberGt + "(" + fragment + ", " + value + ")]";
    },
    lt: function (fragment, value) {
        return "[" + OPERATOR.numberLt + "(" + fragment + ", " + value + ")]";
    },
    inRange: function (fragment, before, after) {
        return "[" + OPERATOR.numberInRange + "(" + fragment + ", " + before + ", " + after + ")]";
    },
};
var Predicates = {
    at: function (fragment, value) {
        return "[" + OPERATOR.at + "(" + fragment + ", " + encode(value) + ")]";
    },
    not: function (fragment, value) {
        return "[" + OPERATOR.not + "(" + fragment + ", " + encode(value) + ")]";
    },
    missing: function (fragment) {
        return "[" + OPERATOR.missing + "(" + fragment + ")]";
    },
    has: function (fragment) {
        return "[" + OPERATOR.has + "(" + fragment + ")]";
    },
    any: function (fragment, values) {
        return "[" + OPERATOR.any + "(" + fragment + ", " + encode(values) + ")]";
    },
    in: function (fragment, values) {
        return "[" + OPERATOR.in + "(" + fragment + ", " + encode(values) + ")]";
    },
    fulltext: function (fragment, value) {
        return "[" + OPERATOR.fulltext + "(" + fragment + ", " + encode(value) + ")]";
    },
    similar: function (documentId, maxResults) {
        return "[" + OPERATOR.similar + "(\"" + documentId + "\", " + maxResults + ")]";
    },
    date: date,
    dateBefore: date.before,
    dateAfter: date.after,
    dateBetween: date.between,
    dayOfMonth: date.dayOfMonth,
    dayOfMonthAfter: date.dayOfMonthAfter,
    dayOfMonthBefore: date.dayOfMonthBefore,
    dayOfWeek: date.dayOfWeek,
    dayOfWeekAfter: date.dayOfWeekAfter,
    dayOfWeekBefore: date.dayOfWeekBefore,
    month: date.month,
    monthBefore: date.monthBefore,
    monthAfter: date.monthAfter,
    year: date.year,
    hour: date.hour,
    hourBefore: date.hourBefore,
    hourAfter: date.hourAfter,
    number: number,
    gt: number.gt,
    lt: number.lt,
    inRange: number.inRange,
    near: geopoint.near,
    geopoint: geopoint,
};

/* eslint-disable */
// Some portions of code from https://github.com/jshttp/cookie
var decode = decodeURIComponent;
function tryDecode(str, decode) {
    try {
        return decode(str);
    }
    catch (e) {
        return str;
    }
}
function parse(str, options) {
    if (typeof str !== 'string') {
        throw new TypeError('argument str must be a string');
    }
    var obj = {};
    var opt = options || {};
    var pairs = str.split(/; */);
    var dec = opt.decode || decode;
    pairs.forEach(function (pair) {
        var eq_idx = pair.indexOf('=');
        // skip things that don't look like key=value
        if (eq_idx < 0) {
            return;
        }
        var key = pair.substr(0, eq_idx).trim();
        var val = pair.substr(++eq_idx, pair.length).trim();
        // quoted values
        if ('"' == val[0]) {
            val = val.slice(1, -1);
        }
        // only assign once
        if (undefined == obj[key]) {
            obj[key] = tryDecode(val, dec);
        }
    });
    return obj;
}
var Cookies = { parse: parse };

function createPreviewResolver(token, documentId, getDocByID) {
    var resolve = function (linkResolver, defaultUrl, cb) {
        if (documentId && getDocByID) {
            return getDocByID(documentId, { ref: token }).then(function (document) {
                if (!document) {
                    cb && cb(null, defaultUrl);
                    return defaultUrl;
                }
                else {
                    var url = (linkResolver && linkResolver(document)) || document.url || defaultUrl;
                    cb && cb(null, url);
                    return url;
                }
            });
        }
        else {
            return Promise.resolve(defaultUrl);
        }
    };
    return { token: token, documentId: documentId, resolve: resolve };
}

var PREVIEW_COOKIE = 'io.prismic.preview';
var EXPERIMENT_COOKIE = 'io.prismic.experiment';
var ResolvedApi = /** @class */ (function () {
    function ResolvedApi(data, httpClient, options) {
        this.data = data;
        this.masterRef = data.refs.filter(function (ref) { return ref.isMasterRef; })[0];
        this.experiments = new Experiments(data.experiments);
        this.bookmarks = data.bookmarks;
        this.httpClient = httpClient;
        this.options = options;
        this.refs = data.refs;
        this.tags = data.tags;
        this.types = data.types;
        this.languages = data.languages;
    }
    /**
     * Returns a useable form from its id, as described in the RESTful description of the API.
     * For instance: api.form("everything") works on every repository (as "everything" exists by default)
     * You can then chain the calls: api.form("everything").query('[[:d = at(document.id, "UkL0gMuvzYUANCpf")]]').ref(ref).submit()
     */
    ResolvedApi.prototype.form = function (formId) {
        var form = this.data.forms[formId];
        if (form) {
            return new SearchForm(form, this.httpClient);
        }
        return null;
    };
    ResolvedApi.prototype.everything = function () {
        var f = this.form('everything');
        if (!f)
            throw new Error('Missing everything form');
        return f;
    };
    /**
     * The ID of the master ref on this prismic.io API.
     * Do not use like this: searchForm.ref(api.master()).
     * Instead, set your ref once in a variable, and call it when you need it; this will allow to change the ref you're viewing easily for your entire page.
     */
    ResolvedApi.prototype.master = function () {
        return this.masterRef.ref;
    };
    /**
     * Returns the ref ID for a given ref's label.
     * Do not use like this: searchForm.ref(api.ref("Future release label")).
     * Instead, set your ref once in a variable, and call it when you need it; this will allow to change the ref you're viewing easily for your entire page.
     */
    ResolvedApi.prototype.ref = function (label) {
        var ref = this.data.refs.filter(function (ref) { return ref.label === label; })[0];
        return ref ? ref.ref : null;
    };
    ResolvedApi.prototype.currentExperiment = function () {
        return this.experiments.current();
    };
    /**
     * Query the repository
     */
    ResolvedApi.prototype.query = function (q, optionsOrCallback, cb) {
        if (cb === void 0) { cb = function () { }; }
        var _a = typeof optionsOrCallback === 'function'
            ? { options: {}, callback: optionsOrCallback }
            : { options: optionsOrCallback || {}, callback: cb }, options = _a.options, callback = _a.callback;
        var form = this.everything();
        for (var key in options) {
            form = form.set(key, options[key]);
        }
        if (!options.ref) {
            // Look in cookies if we have a ref (preview or experiment)
            var cookieString = '';
            if (this.options.req) { // NodeJS
                cookieString = this.options.req.headers['cookie'] || '';
            }
            else if (typeof window !== 'undefined' && window.document) { // Browser
                cookieString = window.document.cookie || '';
            }
            var cookies = Cookies.parse(cookieString);
            var previewRef = cookies[PREVIEW_COOKIE];
            var experimentRef = this.experiments.refFromCookie(cookies[EXPERIMENT_COOKIE]);
            form = form.ref(previewRef || experimentRef || this.masterRef.ref);
        }
        if (q) {
            form.query(q);
        }
        return form.submit(callback);
    };
    /**
     * Retrieve the document returned by the given query
     * @param {string|array|Predicate} the query
     * @param {object} additional parameters. In NodeJS, pass the request as 'req'.
     * @param {function} callback(err, doc)
     */
    ResolvedApi.prototype.queryFirst = function (q, optionsOrCallback, cb) {
        var _a = typeof optionsOrCallback === 'function'
            ? { options: {}, callback: optionsOrCallback }
            : { options: optionsOrCallback || {}, callback: cb || (function () { }) }, options = _a.options, callback = _a.callback;
        options.page = 1;
        options.pageSize = 1;
        return this.query(q, options).then(function (response) {
            var document = response && response.results && response.results[0];
            callback(null, document);
            return document;
        }).catch(function (error) {
            callback(error);
            throw error;
        });
    };
    /**
     * Retrieve the document with the given id
     */
    ResolvedApi.prototype.getByID = function (id, maybeOptions, cb) {
        var options = maybeOptions ? __assign({}, maybeOptions) : {};
        if (!options.lang)
            options.lang = '*';
        return this.queryFirst(Predicates.at('document.id', id), options, cb);
    };
    /**
     * Retrieve multiple documents from an array of id
     */
    ResolvedApi.prototype.getByIDs = function (ids, maybeOptions, cb) {
        var options = maybeOptions ? __assign({}, maybeOptions) : {};
        if (!options.lang)
            options.lang = '*';
        return this.query(Predicates.in('document.id', ids), options, cb);
    };
    /**
     * Retrieve the document with the given uid
     */
    ResolvedApi.prototype.getByUID = function (type, uid, maybeOptions, cb) {
        var options = maybeOptions ? __assign({}, maybeOptions) : {};
        if (options.lang === '*')
            throw new Error("FORBIDDEN. You can't use getByUID with *, use the predicates instead.");
        if (!options.page)
            options.page = 1;
        return this.queryFirst(Predicates.at("my." + type + ".uid", uid), options, cb);
    };
    /**
     * Retrieve the singleton document with the given type
     */
    ResolvedApi.prototype.getSingle = function (type, maybeOptions, cb) {
        var options = maybeOptions ? __assign({}, maybeOptions) : {};
        return this.queryFirst(Predicates.at('document.type', type), options, cb);
    };
    /**
     * Retrieve the document with the given bookmark
     */
    ResolvedApi.prototype.getBookmark = function (bookmark, maybeOptions, cb) {
        var id = this.data.bookmarks[bookmark];
        if (id) {
            return this.getByID(id, maybeOptions, cb);
        }
        else {
            return Promise.reject('Error retrieving bookmarked id');
        }
    };
    ResolvedApi.prototype.getPreviewResolver = function (token, documentId) {
        return createPreviewResolver(token, documentId, this.getByID.bind(this));
    };
    ResolvedApi.prototype.previewSession = function (token, linkResolver, defaultUrl, cb) {
        var _this = this;
        console.warn('previewSession function is deprecated in favor of getPreviewResolver function.');
        return new Promise(function (resolve, reject) {
            _this.httpClient.request(token, function (e, result) {
                if (e) {
                    cb && cb(e);
                    reject(e);
                }
                else if (result) {
                    if (!result.mainDocument) {
                        cb && cb(null, defaultUrl);
                        resolve(defaultUrl);
                    }
                    else {
                        return _this.getByID(result.mainDocument, { ref: token }).then(function (document) {
                            if (!document) {
                                cb && cb(null, defaultUrl);
                                resolve(defaultUrl);
                            }
                            else {
                                var url = (linkResolver && linkResolver(document)) || document.url || defaultUrl;
                                cb && cb(null, url);
                                resolve(url);
                            }
                        }).catch(reject);
                    }
                }
            });
        });
    };
    return ResolvedApi;
}());

/* eslint-disable */
/**
* A doubly linked list-based Least Recently Used (LRU) cache. Will keep most
* recently used items while discarding least recently used items when its limit
* is reached.
*
* Licensed under MIT. Copyright (c) 2010 Rasmus Andersson <http://hunch.se/>
* Typescript-ified by Oleksandr Nikitin <https://tvori.info>
*
* Illustration of the design:
*
*       entry             entry             entry             entry
*       ______            ______            ______            ______
*      | head |.newer => |      |.newer => |      |.newer => | tail |
*      |  A   |          |  B   |          |  C   |          |  D   |
*      |______| <= older.|______| <= older.|______| <= older.|______|
*
*  removed  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  added
*/
function MakeLRUCache(limit) {
    return new LRUCache(limit);
}
function LRUCache(limit) {
    // Current size of the cache. (Read-only).
    this.size = 0;
    // Maximum number of items this cache can hold.
    this.limit = limit;
    this._keymap = {};
}
/**
 * Put <value> into the cache associated with <key>. Returns the entry which was
 * removed to make room for the new entry. Otherwise undefined is returned
 * (i.e. if there was enough room already).
 */
LRUCache.prototype.put = function (key, value) {
    var entry = { key: key, value: value };
    // Note: No protection agains replacing, and thus orphan entries. By design.
    this._keymap[key] = entry;
    if (this.tail) {
        // link previous tail to the new tail (entry)
        this.tail.newer = entry;
        entry.older = this.tail;
    }
    else {
        // we're first in -- yay
        this.head = entry;
    }
    // add new entry to the end of the linked list -- it's now the freshest entry.
    this.tail = entry;
    if (this.size === this.limit) {
        // we hit the limit -- remove the head
        return this.shift();
    }
    else {
        // increase the size counter
        this.size++;
    }
};
/**
 * Purge the least recently used (oldest) entry from the cache. Returns the
 * removed entry or undefined if the cache was empty.
 *
 * If you need to perform any form of finalization of purged items, this is a
 * good place to do it. Simply override/replace this function:
 *
 *   var c = new LRUCache(123);
 *   c.shift = function() {
 *     var entry = LRUCache.prototype.shift.call(this);
 *     doSomethingWith(entry);
 *     return entry;
 *   }
 */
LRUCache.prototype.shift = function () {
    // todo: handle special case when limit == 1
    var entry = this.head;
    if (entry) {
        if (this.head.newer) {
            this.head = this.head.newer;
            this.head.older = undefined;
        }
        else {
            this.head = undefined;
        }
        // Remove last strong reference to <entry> and remove links from the purged
        // entry being returned:
        entry.newer = entry.older = undefined;
        // delete is slow, but we need to do this to avoid uncontrollable growth:
        delete this._keymap[entry.key];
    }
    console.log('purging ', entry.key);
    return entry;
};
/**
 * Get and register recent use of <key>. Returns the value associated with <key>
 * or undefined if not in cache.
 */
LRUCache.prototype.get = function (key, returnEntry) {
    // First, find our cache entry
    var entry = this._keymap[key];
    if (entry === undefined)
        return; // Not cached. Sorry.
    // As <key> was found in the cache, register it as being requested recently
    if (entry === this.tail) {
        // Already the most recently used entry, so no need to update the list
        return returnEntry ? entry : entry.value;
    }
    // HEAD--------------TAIL
    //   <.older   .newer>
    //  <--- add direction --
    //   A  B  C  <D>  E
    if (entry.newer) {
        if (entry === this.head)
            this.head = entry.newer;
        entry.newer.older = entry.older; // C <-- E.
    }
    if (entry.older)
        entry.older.newer = entry.newer; // C. --> E
    entry.newer = undefined; // D --x
    entry.older = this.tail; // D. --> E
    if (this.tail)
        this.tail.newer = entry; // E. <-- D
    this.tail = entry;
    return returnEntry ? entry : entry.value;
};
// ----------------------------------------------------------------------------
// Following code is optional and can be removed without breaking the core
// functionality.
/**
 * Check if <key> is in the cache without registering recent use. Feasible if
 * you do not want to chage the state of the cache, but only "peek" at it.
 * Returns the entry associated with <key> if found, or undefined if not found.
 */
LRUCache.prototype.find = function (key) {
    return this._keymap[key];
};
/**
 * Update the value of entry with <key>. Returns the old value, or undefined if
 * entry was not in the cache.
 */
LRUCache.prototype.set = function (key, value) {
    var oldvalue;
    var entry = this.get(key, true);
    if (entry) {
        oldvalue = entry.value;
        entry.value = value;
    }
    else {
        oldvalue = this.put(key, value);
        if (oldvalue)
            oldvalue = oldvalue.value;
    }
    return oldvalue;
};
/**
 * Remove entry <key> from cache and return its value. Returns undefined if not
 * found.
 */
LRUCache.prototype.remove = function (key) {
    var entry = this._keymap[key];
    if (!entry)
        return;
    delete this._keymap[entry.key]; // need to do delete unfortunately
    if (entry.newer && entry.older) {
        // relink the older entry with the newer entry
        entry.older.newer = entry.newer;
        entry.newer.older = entry.older;
    }
    else if (entry.newer) {
        // remove the link to us
        entry.newer.older = undefined;
        // link the newer entry to head
        this.head = entry.newer;
    }
    else if (entry.older) {
        // remove the link to us
        entry.older.newer = undefined;
        // link the newer entry to head
        this.tail = entry.older;
    }
    else { // if(entry.older === undefined && entry.newer === undefined) {
        this.head = this.tail = undefined;
    }
    this.size--;
    return entry.value;
};
/** Removes all entries */
LRUCache.prototype.removeAll = function () {
    // This should be safe, as we never expose strong refrences to the outside
    this.head = this.tail = undefined;
    this.size = 0;
    this._keymap = {};
};
/**
 * Return an array containing all keys of entries stored in the cache object, in
 * arbitrary order.
 */
if (typeof Object.keys === 'function') {
    LRUCache.prototype.keys = function () { return Object.keys(this._keymap); };
}
else {
    LRUCache.prototype.keys = function () {
        var keys = [];
        for (var k in this._keymap)
            keys.push(k);
        return keys;
    };
}
/**
 * Call `fun` for each entry. Starting with the newest entry if `desc` is a true
 * value, otherwise starts with the oldest (head) enrty and moves towards the
 * tail.
 *
 * `fun` is called with 3 arguments in the context `context`:
 *   `fun.call(context, Object key, Object value, LRUCache self)`
 */
LRUCache.prototype.forEach = function (fun, context, desc) {
    var entry;
    if (context === true) {
        desc = true;
        context = undefined;
    }
    else if (typeof context !== 'object')
        context = this;
    if (desc) {
        entry = this.tail;
        while (entry) {
            fun.call(context, entry.key, entry.value, this);
            entry = entry.older;
        }
    }
    else {
        entry = this.head;
        while (entry) {
            fun.call(context, entry.key, entry.value, this);
            entry = entry.newer;
        }
    }
};
/** Returns a JSON (array) representation */
//LRUCache.prototype.toJSON = function () {
//    var s: IEntry[] = [], entry = this.head;
//    while (entry) {
//        s.push({ key: entry.key.toJSON(), value: entry.value.toJSON() });
//        entry = entry.newer;
//    }
//    return s;
//};
/** Returns a String representation */
LRUCache.prototype.toString = function () {
    var s = '', entry = this.head;
    while (entry) {
        s += String(entry.key) + ':' + entry.value;
        entry = entry.newer;
        if (entry)
            s += ' < ';
    }
    return s;
};
// Export ourselves
//if (typeof this === 'object') this.LRUCache = LRUCache;

var DefaultApiCache = /** @class */ (function () {
    function DefaultApiCache(limit) {
        if (limit === void 0) { limit = 1000; }
        this.lru = MakeLRUCache(limit);
    }
    DefaultApiCache.prototype.isExpired = function (key) {
        var value = this.lru.get(key, false);
        if (value) {
            return value.expiredIn !== 0 && value.expiredIn < Date.now();
        }
        else {
            return false;
        }
    };
    DefaultApiCache.prototype.get = function (key, cb) {
        var value = this.lru.get(key, false);
        if (value && !this.isExpired(key)) {
            cb(null, value.data);
        }
        else {
            cb && cb(null);
        }
    };
    DefaultApiCache.prototype.set = function (key, value, ttl, cb) {
        this.lru.remove(key);
        this.lru.put(key, {
            data: value,
            expiredIn: ttl ? (Date.now() + (ttl * 1000)) : 0,
        });
        cb && cb(null);
    };
    DefaultApiCache.prototype.remove = function (key, cb) {
        this.lru.remove(key);
        cb && cb(null);
    };
    DefaultApiCache.prototype.clear = function (cb) {
        this.lru.removeAll();
        cb && cb(null);
    };
    return DefaultApiCache;
}());

function fetchRequest(url, options, callback) {
    var fetchOptions = {
        headers: {
            Accept: 'application/json',
        },
    };
    if (options && options.proxyAgent) {
        fetchOptions.agent = options.proxyAgent;
    }
    // can't use number because of NodeJS globals included
    var timeoutId;
    var fetchPromise = browserPonyfill(url, fetchOptions);
    var promise = options.timeoutInMs ? Promise.race([
        fetchPromise,
        new Promise(function (_, reject) {
            timeoutId = setTimeout(function () { return reject(new Error(url + " response timeout")); }, options.timeoutInMs);
        })
    ]) : fetchPromise;
    promise.then(function (resp) {
        clearTimeout(timeoutId);
        if (~~(resp.status / 100 !== 2)) {
            /**
             * @description
             * drain the resp before throwing an error to prevent memory leaks
             * @link https://github.com/bitinn/node-fetch/issues/83
             */
            return resp.text().then(function () {
                var e = new Error("Unexpected status code [" + resp.status + "] on URL " + url);
                e.status = resp.status;
                throw e;
            });
        }
        return resp.json().then(function (result) {
            var cacheControl = resp.headers.get('cache-control');
            var parsedCacheControl = cacheControl ? /max-age=(\d+)/.exec(cacheControl) : null;
            var ttl = parsedCacheControl ? parseInt(parsedCacheControl[1], 10) : undefined;
            callback(null, result, resp, ttl);
        });
    }).catch(function (err) {
        clearTimeout(timeoutId);
        callback(err);
    });
}
var DefaultRequestHandler = /** @class */ (function () {
    function DefaultRequestHandler(options) {
        this.options = options || {};
    }
    DefaultRequestHandler.prototype.request = function (url, callback) {
        fetchRequest(url, this.options, callback);
    };
    return DefaultRequestHandler;
}());

var HttpClient = /** @class */ (function () {
    function HttpClient(requestHandler, cache, proxyAgent, timeoutInMs) {
        this.requestHandler = requestHandler || new DefaultRequestHandler({ proxyAgent: proxyAgent, timeoutInMs: timeoutInMs });
        this.cache = cache || new DefaultApiCache();
    }
    HttpClient.prototype.request = function (url, callback) {
        this.requestHandler.request(url, function (err, result, xhr, ttl) {
            if (err) {
                callback && callback(err, null, xhr, ttl);
            }
            else if (result) {
                callback && callback(null, result, xhr, ttl);
            }
        });
    };
    /**
     * Fetch a URL corresponding to a query, and parse the response as a Response object
     */
    HttpClient.prototype.cachedRequest = function (url, maybeOptions) {
        var _this = this;
        var options = maybeOptions || {};
        var run = function (cb) {
            var cacheKey = options.cacheKey || url;
            _this.cache.get(cacheKey, function (cacheGetError, cacheGetValue) {
                if (cacheGetError || cacheGetValue) {
                    cb(cacheGetError, cacheGetValue);
                }
                else {
                    _this.request(url, function (fetchError, fetchValue, _, ttlReq) {
                        if (fetchError) {
                            cb(fetchError, null);
                        }
                        else {
                            var ttl = ttlReq || options.ttl;
                            if (ttl) {
                                _this.cache.set(cacheKey, fetchValue, ttl, cb);
                            }
                            cb(null, fetchValue);
                        }
                    });
                }
            });
        };
        return new Promise(function (resolve, reject) {
            run(function (err, value) {
                if (err)
                    reject(err);
                if (value)
                    resolve(value);
            });
        });
    };
    return HttpClient;
}());

function separator(url) {
    return url.indexOf('?') > -1 ? '&' : '?';
}
var Api = /** @class */ (function () {
    function Api(url, options) {
        this.options = options || {};
        this.url = url;
        if (this.options.accessToken) {
            var accessTokenParam = "access_token=" + this.options.accessToken;
            this.url += separator(url) + accessTokenParam;
        }
        if (this.options.routes) {
            this.url += separator(url) + ("routes=" + encodeURIComponent(JSON.stringify(this.options.routes)));
        }
        this.apiDataTTL = this.options.apiDataTTL || 5;
        this.httpClient = new HttpClient(this.options.requestHandler, this.options.apiCache, this.options.proxyAgent, this.options.timeoutInMs);
    }
    /**
     * Fetches data used to construct the api client, from cache if it's
     * present, otherwise from calling the prismic api endpoint (which is
     * then cached).
     */
    Api.prototype.get = function (cb) {
        var _this = this;
        return this.httpClient.cachedRequest(this.url, { ttl: this.apiDataTTL }).then(function (data) {
            var resolvedApi = new ResolvedApi(data, _this.httpClient, _this.options);
            cb && cb(null, resolvedApi);
            return resolvedApi;
        }).catch(function (error) {
            cb && cb(error);
            throw error;
        });
    };
    return Api;
}());

var DefaultClient = /** @class */ (function () {
    function DefaultClient(url, options) {
        this.api = new Api(url, options);
    }
    DefaultClient.prototype.getApi = function () {
        return this.api.get();
    };
    DefaultClient.prototype.everything = function () {
        return this.form('everything');
    };
    DefaultClient.prototype.form = function (formId) {
        return new LazySearchForm(formId, this.api);
    };
    DefaultClient.prototype.query = function (q, optionsOrCallback, cb) {
        return this.getApi().then(function (api) { return api.query(q, optionsOrCallback, cb); });
    };
    DefaultClient.prototype.queryFirst = function (q, optionsOrCallback, cb) {
        return this.getApi().then(function (api) { return api.queryFirst(q, optionsOrCallback, cb); });
    };
    DefaultClient.prototype.getByID = function (id, options, cb) {
        return this.getApi().then(function (api) { return api.getByID(id, options, cb); });
    };
    DefaultClient.prototype.getByIDs = function (ids, options, cb) {
        return this.getApi().then(function (api) { return api.getByIDs(ids, options, cb); });
    };
    DefaultClient.prototype.getByUID = function (type, uid, options, cb) {
        return this.getApi().then(function (api) { return api.getByUID(type, uid, options, cb); });
    };
    DefaultClient.prototype.getSingle = function (type, options, cb) {
        return this.getApi().then(function (api) { return api.getSingle(type, options, cb); });
    };
    DefaultClient.prototype.getBookmark = function (bookmark, options, cb) {
        return this.getApi().then(function (api) { return api.getBookmark(bookmark, options, cb); });
    };
    DefaultClient.prototype.previewSession = function (token, linkResolver, defaultUrl, cb) {
        return this.getApi().then(function (api) { return api.previewSession(token, linkResolver, defaultUrl, cb); });
    };
    DefaultClient.prototype.getPreviewResolver = function (token, documentId) {
        var _this = this;
        var getDocById = function (documentId, maybeOptions) { return _this.getApi().then(function (api) {
            return api.getByID(documentId, maybeOptions);
        }); };
        return createPreviewResolver(token, documentId, getDocById);
    };
    DefaultClient.getApi = function (url, options) {
        var api = new Api(url, options);
        return api.get();
    };
    return DefaultClient;
}());

/// <reference path="../types/cross-fetch.d.ts" />
var index = {
    experimentCookie: EXPERIMENT_COOKIE,
    previewCookie: PREVIEW_COOKIE,
    Predicates: Predicates,
    Experiments: Experiments,
    Api: Api,
    client: client,
    getApi: getApi,
    api: api,
};
function client(url, options) {
    return new DefaultClient(url, options);
}
function getApi(url, options) {
    return DefaultClient.getApi(url, options);
}
function api(url, options) {
    return getApi(url, options);
}

const apiEndpoint = "https://storywriter.cdn.prismic.io/api/v2";

const Client = index.client(apiEndpoint);

const linkResolver = (doc) => {
    if (doc.type === 'post') return `/blog/${doc.uid}`;
    if (doc.type === 'home') return '/blog';
    if (doc.type === 'about') return '/about';
    return '/';
};

export { Client as C, PrismicDOM as P, index as i, linkResolver as l };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpc21pYy1jb25maWcuMWY5YjA5Y2QuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcmlzbWljLWRvbS9kaXN0L3ByaXNtaWMtZG9tLm1pbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jcm9zcy1mZXRjaC9kaXN0L2Jyb3dzZXItcG9ueWZpbGwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHJpc21pYy1qYXZhc2NyaXB0L2VzbS9wcmlzbWljLWphdmFzY3JpcHQubWpzIiwiLi4vLi4vLi4vcHJpc21pYy1jb25maWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJQcmlzbWljRE9NXCIsW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5QcmlzbWljRE9NPXQoKTplLlByaXNtaWNET009dCgpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsKGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Z1bmN0aW9uIG4ocil7aWYodFtyXSlyZXR1cm4gdFtyXS5leHBvcnRzO3ZhciBvPXRbcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiBlW3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIG4ubT1lLG4uYz10LG4uZD1mdW5jdGlvbihlLHQscil7bi5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsZ2V0OnJ9KX0sbi5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbihlLHQpe2lmKDEmdCYmKGU9bihlKSksOCZ0KXJldHVybiBlO2lmKDQmdCYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihyKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZ0JiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIG8gaW4gZSluLmQocixvLGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfS5iaW5kKG51bGwsbykpO3JldHVybiByfSxuLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIG4uZCh0LFwiYVwiLHQpLHR9LG4ubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sbi5wPVwiXCIsbihuLnM9MSl9KFtmdW5jdGlvbihlLHQsbil7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGYsZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Z1bmN0aW9uIG4ocil7aWYodFtyXSlyZXR1cm4gdFtyXS5leHBvcnRzO3ZhciBvPXRbcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiBlW3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIG4ubT1lLG4uYz10LG4uZD1mdW5jdGlvbihlLHQscil7bi5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsZ2V0OnJ9KX0sbi5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbihlLHQpe2lmKDEmdCYmKGU9bihlKSksOCZ0KXJldHVybiBlO2lmKDQmdCYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihyKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZ0JiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIG8gaW4gZSluLmQocixvLGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfS5iaW5kKG51bGwsbykpO3JldHVybiByfSxuLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIG4uZCh0LFwiYVwiLHQpLHR9LG4ubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sbi5wPVwiXCIsbihuLnM9MCl9KFtmdW5jdGlvbihlLHQsbil7ZS5leHBvcnRzPW4oMSl9LGZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1uKDIpLG89bigzKTtlLmV4cG9ydHM9e0xpbms6cixEYXRlOm99fSxmdW5jdGlvbihlLHQsbil7ZS5leHBvcnRzPXt1cmw6ZnVuY3Rpb24oZSx0KXtpZihlJiZbZS5saW5rX3R5cGUsZS5fbGlua1R5cGUsZS5saW5rVHlwZV0uc29tZSgoZnVuY3Rpb24oZSl7cmV0dXJuIGUmJltcIkRvY3VtZW50XCIsXCJMaW5rLkRvY3VtZW50XCIsXCJMaW5rLmRvY3VtZW50XCJdLmluY2x1ZGVzKGUpfSkpJiZ0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0KXt2YXIgbj10KGUpO2lmKG4pcmV0dXJuIG59cmV0dXJuIGUmJmUudXJsP2UudXJsOlwiXCJ9fX0sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9ZnVuY3Rpb24oZSl7aWYoIWUpcmV0dXJuIG51bGw7dmFyIHQ9MjQ9PWUubGVuZ3RoP1wiXCIuY29uY2F0KGUuc3Vic3RyaW5nKDAsMjIpLFwiOlwiKS5jb25jYXQoZS5zdWJzdHJpbmcoMjIsMjQpKTplO3JldHVybiBuZXcgRGF0ZSh0KX19XSl9LGZ1bmN0aW9uKGUsdCxuKXtlLmV4cG9ydHM9bigyKX0sZnVuY3Rpb24oZSx0LG4pe3ZhciByPW4oMCksbz1uKDMpLGk9ci5EYXRlLHU9ci5MaW5rO2UuZXhwb3J0cz17RGF0ZTppLExpbms6dSxSaWNoVGV4dDpvfX0sZnVuY3Rpb24oZSx0LG4pe3ZhciByPW4oNCksbz1uKDApLkxpbmssaT1uKDUpLHU9ci5FbGVtZW50cztmdW5jdGlvbiBjKGUsdCxuLHIsYyl7c3dpdGNoKHQpe2Nhc2UgdS5oZWFkaW5nMTpyZXR1cm4gbChcImgxXCIsbixjKTtjYXNlIHUuaGVhZGluZzI6cmV0dXJuIGwoXCJoMlwiLG4sYyk7Y2FzZSB1LmhlYWRpbmczOnJldHVybiBsKFwiaDNcIixuLGMpO2Nhc2UgdS5oZWFkaW5nNDpyZXR1cm4gbChcImg0XCIsbixjKTtjYXNlIHUuaGVhZGluZzU6cmV0dXJuIGwoXCJoNVwiLG4sYyk7Y2FzZSB1LmhlYWRpbmc2OnJldHVybiBsKFwiaDZcIixuLGMpO2Nhc2UgdS5wYXJhZ3JhcGg6cmV0dXJuIGwoXCJwXCIsbixjKTtjYXNlIHUucHJlZm9ybWF0dGVkOnJldHVybiBmdW5jdGlvbihlKXtyZXR1cm5cIjxwcmVcIi5jb25jYXQoYShlKSxcIj5cIikuY29uY2F0KGkoZS50ZXh0KSxcIjwvcHJlPlwiKX0obik7Y2FzZSB1LnN0cm9uZzpyZXR1cm4gbChcInN0cm9uZ1wiLG4sYyk7Y2FzZSB1LmVtOnJldHVybiBsKFwiZW1cIixuLGMpO2Nhc2UgdS5saXN0SXRlbTpjYXNlIHUub0xpc3RJdGVtOnJldHVybiBsKFwibGlcIixuLGMpO2Nhc2UgdS5saXN0OnJldHVybiBsKFwidWxcIixuLGMpO2Nhc2UgdS5vTGlzdDpyZXR1cm4gbChcIm9sXCIsbixjKTtjYXNlIHUuaW1hZ2U6cmV0dXJuIGZ1bmN0aW9uKGUsdCl7dmFyIG49dC5saW5rVG8/by51cmwodC5saW5rVG8sZSk6bnVsbCxyPXQubGlua1RvJiZ0LmxpbmtUby50YXJnZXQ/J3RhcmdldD1cIicuY29uY2F0KHQubGlua1RvLnRhcmdldCwnXCIgcmVsPVwibm9vcGVuZXJcIicpOlwiXCIsaT1bdC5sYWJlbHx8XCJcIixcImJsb2NrLWltZ1wiXSx1PSc8aW1nIHNyYz1cIicuY29uY2F0KHQudXJsLCdcIiBhbHQ9XCInKS5jb25jYXQodC5hbHR8fFwiXCIsJ1wiIGNvcHlyaWdodD1cIicpLmNvbmNhdCh0LmNvcHlyaWdodHx8XCJcIiwnXCI+Jyk7cmV0dXJuJ1xcbiAgICA8cCBjbGFzcz1cIicuY29uY2F0KGkuam9pbihcIiBcIiksJ1wiPlxcbiAgICAgICcpLmNvbmNhdChuP1wiPGEgXCIuY29uY2F0KHIsJyBocmVmPVwiJykuY29uY2F0KG4sJ1wiPicpLmNvbmNhdCh1LFwiPC9hPlwiKTp1LFwiXFxuICAgIDwvcD5cXG4gIFwiKX0oZSxuKTtjYXNlIHUuZW1iZWQ6cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybidcXG4gICAgPGRpdiBkYXRhLW9lbWJlZD1cIicuY29uY2F0KGUub2VtYmVkLmVtYmVkX3VybCwnXCJcXG4gICAgICBkYXRhLW9lbWJlZC10eXBlPVwiJykuY29uY2F0KGUub2VtYmVkLnR5cGUsJ1wiXFxuICAgICAgZGF0YS1vZW1iZWQtcHJvdmlkZXI9XCInKS5jb25jYXQoZS5vZW1iZWQucHJvdmlkZXJfbmFtZSwnXCJcXG4gICAgICAnKS5jb25jYXQoYShlKSxcIj5cXG4gICAgICAgICAgXFxuICAgICAgXCIpLmNvbmNhdChlLm9lbWJlZC5odG1sLFwiXFxuICAgIDwvZGl2PlxcbiAgXCIpfShuKTtjYXNlIHUuaHlwZXJsaW5rOnJldHVybiBmdW5jdGlvbihlLHQsbil7dmFyIHI9dC5kYXRhLnRhcmdldD8ndGFyZ2V0PVwiJy5jb25jYXQodC5kYXRhLnRhcmdldCwnXCIgcmVsPVwibm9vcGVuZXJcIicpOlwiXCI7cmV0dXJuXCI8YSBcIi5jb25jYXQociwnIGhyZWY9XCInKS5jb25jYXQoby51cmwodC5kYXRhLGUpLCdcIj4nKS5jb25jYXQobi5qb2luKFwiXCIpLFwiPC9hPlwiKX0oZSxuLGMpO2Nhc2UgdS5sYWJlbDpyZXR1cm4gZnVuY3Rpb24oZSx0KXtyZXR1cm5cIjxzcGFuIFwiLmNvbmNhdChhKGUuZGF0YSksXCI+XCIpLmNvbmNhdCh0LmpvaW4oXCJcIiksXCI8L3NwYW4+XCIpfShuLGMpO2Nhc2UgdS5zcGFuOnJldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZT9pKGUpLnJlcGxhY2UoL1xcbi9nLFwiPGJyIC8+XCIpOlwiXCJ9KHIpO2RlZmF1bHQ6cmV0dXJuXCJcIn19ZnVuY3Rpb24gYShlKXtyZXR1cm4gZS5sYWJlbD8nIGNsYXNzPVwiJy5jb25jYXQoZS5sYWJlbCwnXCInKTpcIlwifWZ1bmN0aW9uIGwoZSx0LG4pe3JldHVyblwiPFwiLmNvbmNhdChlKS5jb25jYXQoYSh0KSxcIj5cIikuY29uY2F0KG4uam9pbihcIlwiKSxcIjwvXCIpLmNvbmNhdChlLFwiPlwiKX1lLmV4cG9ydHM9e2FzVGV4dDpmdW5jdGlvbihlLHQpe3JldHVybiByLmFzVGV4dChlLHQpfSxhc0h0bWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiByLnNlcmlhbGl6ZShlLGMuYmluZChudWxsLHQpLG4pLmpvaW4oXCJcIil9LEVsZW1lbnRzOnV9fSxmdW5jdGlvbihlLHQsbil7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGYsZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Z1bmN0aW9uIG4ocil7aWYodFtyXSlyZXR1cm4gdFtyXS5leHBvcnRzO3ZhciBvPXRbcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiBlW3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIG4ubT1lLG4uYz10LG4uZD1mdW5jdGlvbihlLHQscil7bi5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsZ2V0OnJ9KX0sbi5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbihlLHQpe2lmKDEmdCYmKGU9bihlKSksOCZ0KXJldHVybiBlO2lmKDQmdCYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihyKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZ0JiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIG8gaW4gZSluLmQocixvLGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfS5iaW5kKG51bGwsbykpO3JldHVybiByfSxuLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIG4uZCh0LFwiYVwiLHQpLHR9LG4ubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sbi5wPVwiXCIsbihuLnM9OSl9KFtmdW5jdGlvbihlLHQsbil7dmFyIHI9bigzKTtlLmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uIHQobil7cmV0dXJuIDA9PT1hcmd1bWVudHMubGVuZ3RofHxyKG4pP3Q6ZS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX0sZnVuY3Rpb24oZSx0LG4pe3ZhciByPW4oMCksbz1uKDMpO2UuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24gdChuLGkpe3N3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtjYXNlIDA6cmV0dXJuIHQ7Y2FzZSAxOnJldHVybiBvKG4pP3Q6cigoZnVuY3Rpb24odCl7cmV0dXJuIGUobix0KX0pKTtkZWZhdWx0OnJldHVybiBvKG4pJiZvKGkpP3Q6byhuKT9yKChmdW5jdGlvbih0KXtyZXR1cm4gZSh0LGkpfSkpOm8oaSk/cigoZnVuY3Rpb24odCl7cmV0dXJuIGUobix0KX0pKTplKG4saSl9fX19LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcjtmdW5jdGlvbiBvKGUsdCxuKXtyZXR1cm4gdCBpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOm4sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPW4sZX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LlBSSU9SSVRJRVM9dC5OT0RFX1RZUEVTPXZvaWQgMDt2YXIgaT17aGVhZGluZzE6XCJoZWFkaW5nMVwiLGhlYWRpbmcyOlwiaGVhZGluZzJcIixoZWFkaW5nMzpcImhlYWRpbmczXCIsaGVhZGluZzQ6XCJoZWFkaW5nNFwiLGhlYWRpbmc1OlwiaGVhZGluZzVcIixoZWFkaW5nNjpcImhlYWRpbmc2XCIscGFyYWdyYXBoOlwicGFyYWdyYXBoXCIscHJlZm9ybWF0dGVkOlwicHJlZm9ybWF0dGVkXCIsc3Ryb25nOlwic3Ryb25nXCIsZW06XCJlbVwiLGxpc3RJdGVtOlwibGlzdC1pdGVtXCIsb0xpc3RJdGVtOlwiby1saXN0LWl0ZW1cIixsaXN0OlwiZ3JvdXAtbGlzdC1pdGVtXCIsb0xpc3Q6XCJncm91cC1vLWxpc3QtaXRlbVwiLGltYWdlOlwiaW1hZ2VcIixlbWJlZDpcImVtYmVkXCIsaHlwZXJsaW5rOlwiaHlwZXJsaW5rXCIsbGFiZWw6XCJsYWJlbFwiLHNwYW46XCJzcGFuXCJ9O3QuTk9ERV9UWVBFUz1pO3ZhciB1PShvKHI9e30saS5oZWFkaW5nMSw0KSxvKHIsaS5oZWFkaW5nMiw0KSxvKHIsaS5oZWFkaW5nMyw0KSxvKHIsaS5oZWFkaW5nNCw0KSxvKHIsaS5oZWFkaW5nNSw0KSxvKHIsaS5oZWFkaW5nNiw0KSxvKHIsaS5wYXJhZ3JhcGgsMyksbyhyLGkucHJlZm9ybWF0dGVkLDUpLG8ocixpLnN0cm9uZyw2KSxvKHIsaS5lbSw2KSxvKHIsaS5vTGlzdCwxKSxvKHIsaS5saXN0LDEpLG8ocixpLmxpc3RJdGVtLDEpLG8ocixpLm9MaXN0SXRlbSwxKSxvKHIsaS5pbWFnZSwxKSxvKHIsaS5lbWJlZCwxKSxvKHIsaS5oeXBlcmxpbmssMyksbyhyLGkubGFiZWwsNCksbyhyLGkuc3Bhbiw3KSxyKTt0LlBSSU9SSVRJRVM9dX0sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWUmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiYhMD09PWVbXCJAQGZ1bmN0aW9uYWwvcGxhY2Vob2xkZXJcIl19fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5kZWZhdWx0PXZvaWQgMDt2YXIgcj1kKG4oMTIpKSxvPWQobigxNSkpLGk9ZChuKDE2KSksdT1kKG4oMTcpKSxjPWQobigyMSkpLGE9ZChuKDcpKSxsPW4oMjMpLGY9bigyKSxzPW4oOCk7ZnVuY3Rpb24gZChlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19ZnVuY3Rpb24gcChlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgcj10W25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLmtleSxyKX19ZnVuY3Rpb24gaChlKXtyZXR1cm4gZnVuY3Rpb24oZSx0KXtyZXR1cm4gdC5yZWR1Y2UoKGZ1bmN0aW9uKGUsdCl7dmFyIG49KDAsYy5kZWZhdWx0KShlKTtpZihuKXtpZihuLnNvbWUoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlzUGFyZW50T2YodCl9KSkpcmV0dXJuKDAsdS5kZWZhdWx0KShlKS5jb25jYXQoW24uY29uY2F0KHQpXSk7dmFyIHI9KDAsYy5kZWZhdWx0KShuKTtyZXR1cm4gciYmZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5lbmQ+PXQuc3RhcnR9KHIsdCk/KDAsdS5kZWZhdWx0KShlKS5jb25jYXQoW24uY29uY2F0KHQpXSk6ZS5jb25jYXQoW1t0XV0pfXJldHVybltbdF1dfSksW10pfSgwLCgwLGkuZGVmYXVsdCkoW2Z1bmN0aW9uKGUsdCl7cmV0dXJuIGUuc3RhcnQtdC5zdGFydH0sZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5lbmQtdC5lbmR9XSxlKSl9ZnVuY3Rpb24geShlKXtpZigwPT09ZS5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGVsZWN0IG5vZGUgb24gZW1wdHkgbGlzdFwiKTt2YXIgdD1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZX0oZSl8fGZ1bmN0aW9uKGUpe2lmKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoZSl8fFwiW29iamVjdCBBcmd1bWVudHNdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkpcmV0dXJuIEFycmF5LmZyb20oZSl9KGUpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpfSgpfShlLnNvcnQoKGZ1bmN0aW9uKGUsdCl7aWYoZS5pc1BhcmVudE9mKHQpKXJldHVybi0xO2lmKHQuaXNQYXJlbnRPZihlKSlyZXR1cm4gMTt2YXIgbj1mLlBSSU9SSVRJRVNbZS50eXBlXS1mLlBSSU9SSVRJRVNbdC50eXBlXTtyZXR1cm4gMD09PW4/ZS50ZXh0Lmxlbmd0aC10LnRleHQubGVuZ3RoOm59KSkpO3JldHVybntlbGVjdGVkOnRbMF0sb3RoZXJzOnQuc2xpY2UoMSl9fWZ1bmN0aW9uIHYoZSx0LG4pe2lmKHQubGVuZ3RoPjApcmV0dXJuIGZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdC5yZWR1Y2UoKGZ1bmN0aW9uKHIsbyxpKXt2YXIgdT1bXSxjPTA9PT1pJiZvLnN0YXJ0Pm4ubG93ZXIsYT1pPT09dC5sZW5ndGgtMSYmbi51cHBlcj5vLmVuZDtpZihjKXt2YXIgbD1uZXcgcy5UZXh0Tm9kZShuLmxvd2VyLG8uc3RhcnQsZS5zbGljZShuLmxvd2VyLG8uc3RhcnQpKTt1PXUuY29uY2F0KGwpfWVsc2V7dmFyIGY9dFtpLTFdO2lmKGYmJm8uc3RhcnQ+Zi5lbmQpe3ZhciBkPWUuc2xpY2UoZi5lbmQsby5zdGFydCkscD1uZXcgcy5UZXh0Tm9kZShmLmVuZCxvLnN0YXJ0LGQpO3U9dS5jb25jYXQocCl9fWlmKHU9dS5jb25jYXQobyksYSl7dmFyIGg9bmV3IHMuVGV4dE5vZGUoby5lbmQsbi51cHBlcixlLnNsaWNlKG8uZW5kLG4udXBwZXIpKTt1PXUuY29uY2F0KGgpfXJldHVybiByLmNvbmNhdCh1KX0pLFtdKX0oZSxtKGUsdCksbik7dmFyIHI9ZS5zbGljZShuLmxvd2VyLG4udXBwZXIpO3JldHVybltuZXcgcy5UZXh0Tm9kZShuLmxvd2VyLG4udXBwZXIscildfWZ1bmN0aW9uIG0oZSx0KXt2YXIgbj1oKCgwLG8uZGVmYXVsdCkoKGZ1bmN0aW9uKGUpe3JldHVybiBlLnN0YXJ0fSksdCkpLm1hcCh5KSxpPSgwLHIuZGVmYXVsdCkobi5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLHQpe3ZhciBuPXQub3RoZXJzLnJlZHVjZSgoZnVuY3Rpb24obixyKXt2YXIgbz1uLmlubmVyLGk9bi5vdXRlcix1PWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbi5zdGFydDx0LnN0YXJ0P3tpbm5lcjpzLlNwYW5Ob2RlLnNsaWNlKG4sdC5zdGFydCxuLmVuZCxlKSxvdXRlcjpzLlNwYW5Ob2RlLnNsaWNlKG4sbi5zdGFydCx0LnN0YXJ0LGUpfTpuLmVuZD50LmVuZD97aW5uZXI6cy5TcGFuTm9kZS5zbGljZShuLG4uc3RhcnQsdC5lbmQsZSksb3V0ZXI6cy5TcGFuTm9kZS5zbGljZShuLHQuZW5kLG4uZW5kLGUpfTp7aW5uZXI6bn19KGUsdC5lbGVjdGVkLHIpO3JldHVybntpbm5lcjpvLmNvbmNhdCh1LmlubmVyKSxvdXRlcjp1Lm91dGVyP2kuY29uY2F0KHUub3V0ZXIpOml9fSkse2lubmVyOltdLG91dGVyOltdfSkscj1uLmlubmVyLG89bi5vdXRlcjtyZXR1cm5bdC5lbGVjdGVkLnNldENoaWxkcmVuKHYoZSxyLHQuZWxlY3RlZC5ib3VuZGFyaWVzKCkpKV0uY29uY2F0KG0oZSxvKSl9KGUsdCl9KSkpO3JldHVybigwLG8uZGVmYXVsdCkoKGZ1bmN0aW9uKGUpe3JldHVybiBlLnN0YXJ0fSksaSl9dmFyIGI9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7IWZ1bmN0aW9uKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyxlKX12YXIgdCxuO3JldHVybiB0PWUsKG49W3trZXk6XCJmcm9tUmljaFRleHRcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm57a2V5OigwLGEuZGVmYXVsdCkoKSxjaGlsZHJlbjplLnJlZHVjZSgoZnVuY3Rpb24oZSx0LG4pe2lmKGwuUmljaFRleHRCbG9jay5pc0VtYmVkQmxvY2sodC50eXBlKXx8bC5SaWNoVGV4dEJsb2NrLmlzSW1hZ2VCbG9jayh0LnR5cGUpKXJldHVybiBlLmNvbmNhdChuZXcgcy5CbG9ja05vZGUodC50eXBlLHQpKTt2YXIgcj1mdW5jdGlvbihlKXt2YXIgdD1lLnNwYW5zLm1hcCgoZnVuY3Rpb24odCl7dmFyIG49ZS50ZXh0LnNsaWNlKHQuc3RhcnQsdC5lbmQpO3JldHVybiBuZXcgcy5TcGFuTm9kZSh0LnN0YXJ0LHQuZW5kLHQudHlwZSxuLFtdLHQpfSkpLG49e2xvd2VyOjAsdXBwZXI6ZS50ZXh0Lmxlbmd0aH07cmV0dXJuIHYoZS50ZXh0LHQsbil9KHQpLG89ZVtlLmxlbmd0aC0xXTtpZihsLlJpY2hUZXh0QmxvY2suaXNMaXN0SXRlbSh0LnR5cGUpJiZvJiZvIGluc3RhbmNlb2Ygcy5MaXN0QmxvY2tOb2RlKXt2YXIgaT1uZXcgcy5MaXN0SXRlbUJsb2NrTm9kZSh0LHIpLGM9by5hZGRDaGlsZChpKTtyZXR1cm4oMCx1LmRlZmF1bHQpKGUpLmNvbmNhdChjKX1pZihsLlJpY2hUZXh0QmxvY2suaXNPcmRlcmVkTGlzdEl0ZW0odC50eXBlKSYmbyYmbyBpbnN0YW5jZW9mIHMuT3JkZXJlZExpc3RCbG9ja05vZGUpe3ZhciBhPW5ldyBzLk9yZGVyZWRMaXN0SXRlbUJsb2NrTm9kZSh0LHIpLGY9by5hZGRDaGlsZChhKTtyZXR1cm4oMCx1LmRlZmF1bHQpKGUpLmNvbmNhdChmKX1pZihsLlJpY2hUZXh0QmxvY2suaXNMaXN0SXRlbSh0LnR5cGUpKXt2YXIgZD1uZXcgcy5MaXN0SXRlbUJsb2NrTm9kZSh0LHIpLHA9bmV3IHMuTGlzdEJsb2NrTm9kZShsLlJpY2hUZXh0QmxvY2suZW1wdHlMaXN0KCksW2RdKTtyZXR1cm4gZS5jb25jYXQocCl9aWYobC5SaWNoVGV4dEJsb2NrLmlzT3JkZXJlZExpc3RJdGVtKHQudHlwZSkpe3ZhciBoPW5ldyBzLk9yZGVyZWRMaXN0SXRlbUJsb2NrTm9kZSh0LHIpLHk9bmV3IHMuT3JkZXJlZExpc3RCbG9ja05vZGUobC5SaWNoVGV4dEJsb2NrLmVtcHR5T3JkZXJlZExpc3QoKSxbaF0pO3JldHVybiBlLmNvbmNhdCh5KX1yZXR1cm4gZS5jb25jYXQobmV3IHMuQmxvY2tOb2RlKHQudHlwZSx0LHIpKX0pLFtdKX19fV0pJiZwKHQsbiksZX0oKTt0LmRlZmF1bHQ9Yn0sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWUmJmUubGVuZ3RoPj0wJiZcIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSl9fSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm5cIltvYmplY3QgU3RyaW5nXVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpfX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuZGVmYXVsdD1mdW5jdGlvbigpe3ZhciBlPShuZXcgRGF0ZSkuZ2V0VGltZSgpO3JldHVyblwieHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4XCIucmVwbGFjZSgvW3h5XS9nLChmdW5jdGlvbih0KXt2YXIgbj0oZSsxNipNYXRoLnJhbmRvbSgpKSUxNnwwO3JldHVybiBlPU1hdGguZmxvb3IoZS8xNiksKFwieFwiPT10P246MyZufDgpLnRvU3RyaW5nKDE2KX0pKX19LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0Lkxpc3RCbG9ja05vZGU9dC5PcmRlcmVkTGlzdEJsb2NrTm9kZT10Lk9yZGVyZWRMaXN0SXRlbUJsb2NrTm9kZT10Lkxpc3RJdGVtQmxvY2tOb2RlPXQuQmxvY2tOb2RlPXQuVGV4dE5vZGU9dC5TcGFuTm9kZT10Lk5vZGU9dm9pZCAwO3ZhciByLG89KHI9big3KSkmJnIuX19lc01vZHVsZT9yOntkZWZhdWx0OnJ9LGk9bigyKTtmdW5jdGlvbiB1KGUpe3JldHVybih1PVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9KShlKX1mdW5jdGlvbiBjKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciByPXRbbl07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX1mdW5jdGlvbiBhKGUsdCxuKXtyZXR1cm4gdCYmYyhlLnByb3RvdHlwZSx0KSxuJiZjKGUsbiksZX1mdW5jdGlvbiBsKGUsdCl7cmV0dXJuIXR8fFwib2JqZWN0XCIhPT11KHQpJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0P2Z1bmN0aW9uKGUpe2lmKHZvaWQgMD09PWUpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiBlfShlKTp0fWZ1bmN0aW9uIGYoZSl7cmV0dXJuKGY9T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5nZXRQcm90b3R5cGVPZjpmdW5jdGlvbihlKXtyZXR1cm4gZS5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZihlKX0pKGUpfWZ1bmN0aW9uIHMoZSx0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZudWxsIT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7ZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0JiZ0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmUsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLHQmJmZ1bmN0aW9uKGUsdCl7KE9iamVjdC5zZXRQcm90b3R5cGVPZnx8ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5fX3Byb3RvX189dCxlfSkoZSx0KX0oZSx0KX1mdW5jdGlvbiBkKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX12YXIgcD1mdW5jdGlvbiBlKHQsbixyKXtkKHRoaXMsZSksdGhpcy5rZXk9KDAsby5kZWZhdWx0KSgpLHRoaXMudHlwZT10LHRoaXMuZWxlbWVudD1uLHRoaXMuY2hpbGRyZW49cn07dC5Ob2RlPXA7dmFyIGg9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChlLG4scixvLGksdSl7dmFyIGM7cmV0dXJuIGQodGhpcyx0KSwoYz1sKHRoaXMsZih0KS5jYWxsKHRoaXMscix1LGkpKSkuc3RhcnQ9ZSxjLmVuZD1uLGMudGV4dD1vLGMuY2hpbGRyZW49aSxjfXJldHVybiBzKHQscCksYSh0LFt7a2V5OlwiYm91bmRhcmllc1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJue2xvd2VyOnRoaXMuc3RhcnQsdXBwZXI6dGhpcy5lbmR9fX0se2tleTpcImlzUGFyZW50T2ZcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5zdGFydDw9ZS5zdGFydCYmdGhpcy5lbmQ+PWUuZW5kfX0se2tleTpcInNldENoaWxkcmVuXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyB0KHRoaXMuc3RhcnQsdGhpcy5lbmQsdGhpcy50eXBlLHRoaXMudGV4dCxlLHRoaXMuZWxlbWVudCl9fV0sW3trZXk6XCJzbGljZVwiLHZhbHVlOmZ1bmN0aW9uKGUsbixyLG8pe3JldHVybiBuZXcgdChuLHIsZS50eXBlLG8uc2xpY2UobixyKSxlLmNoaWxkcmVuLGUuZWxlbWVudCl9fV0pLHR9KCk7dC5TcGFuTm9kZT1oO3ZhciB5PWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoZSxuLHIpe2QodGhpcyx0KTt2YXIgbz17dHlwZTppLk5PREVfVFlQRVMuc3BhbixzdGFydDplLGVuZDpuLHRleHQ6cn07cmV0dXJuIGwodGhpcyxmKHQpLmNhbGwodGhpcyxlLG4saS5OT0RFX1RZUEVTLnNwYW4scixbXSxvKSl9cmV0dXJuIHModCxoKSx0fSgpO3QuVGV4dE5vZGU9eTt2YXIgdj1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KGUsbil7dmFyIHI9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOltdO3JldHVybiBkKHRoaXMsdCksbCh0aGlzLGYodCkuY2FsbCh0aGlzLGUsbixyKSl9cmV0dXJuIHModCxwKSx0fSgpO3QuQmxvY2tOb2RlPXY7dmFyIG09ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChlLG4pe3JldHVybiBkKHRoaXMsdCksbCh0aGlzLGYodCkuY2FsbCh0aGlzLGkuTk9ERV9UWVBFUy5saXN0SXRlbSxlLG4pKX1yZXR1cm4gcyh0LHYpLHR9KCk7dC5MaXN0SXRlbUJsb2NrTm9kZT1tO3ZhciBiPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoZSxuKXtyZXR1cm4gZCh0aGlzLHQpLGwodGhpcyxmKHQpLmNhbGwodGhpcyxpLk5PREVfVFlQRVMub0xpc3RJdGVtLGUsbikpfXJldHVybiBzKHQsdiksdH0oKTt0Lk9yZGVyZWRMaXN0SXRlbUJsb2NrTm9kZT1iO3ZhciBnPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoZSxuKXtyZXR1cm4gZCh0aGlzLHQpLGwodGhpcyxmKHQpLmNhbGwodGhpcyxpLk5PREVfVFlQRVMub0xpc3QsZSxuKSl9cmV0dXJuIHModCx2KSxhKHQsW3trZXk6XCJhZGRDaGlsZFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciBuPXRoaXMuY2hpbGRyZW4uY29uY2F0KGUpO3JldHVybiBuZXcgdCh0aGlzLmVsZW1lbnQsbil9fV0pLHR9KCk7dC5PcmRlcmVkTGlzdEJsb2NrTm9kZT1nO3ZhciB4PWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoZSxuKXtyZXR1cm4gZCh0aGlzLHQpLGwodGhpcyxmKHQpLmNhbGwodGhpcyxpLk5PREVfVFlQRVMubGlzdCxlLG4pKX1yZXR1cm4gcyh0LHYpLGEodCxbe2tleTpcImFkZENoaWxkXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIG49dGhpcy5jaGlsZHJlbi5jb25jYXQoZSk7cmV0dXJuIG5ldyB0KHRoaXMuZWxlbWVudCxuKX19XSksdH0oKTt0Lkxpc3RCbG9ja05vZGU9eH0sZnVuY3Rpb24oZSx0LG4pe2UuZXhwb3J0cz1uKDEwKX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3ZhciByPWMobigxMSkpLG89YyhuKDQpKSxpPWMobigyNCkpLHU9bigyKTtmdW5jdGlvbiBjKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1lLmV4cG9ydHM9e2FzVGV4dDpyLmRlZmF1bHQsYXNUcmVlOm8uZGVmYXVsdC5mcm9tUmljaFRleHQsc2VyaWFsaXplOmkuZGVmYXVsdCxFbGVtZW50czp1Lk5PREVfVFlQRVN9fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5kZWZhdWx0PXZvaWQgMCx0LmRlZmF1bHQ9ZnVuY3Rpb24oZSx0KXt2YXIgbj1cInN0cmluZ1wiPT10eXBlb2YgdD90OlwiIFwiO3JldHVybiBlLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUudGV4dH0pKS5qb2luKG4pfX0sZnVuY3Rpb24oZSx0LG4pe3ZhciByPW4oMCkobigxMykoITApKTtlLmV4cG9ydHM9cn0sZnVuY3Rpb24oZSx0LG4pe3ZhciByPW4oMTQpO2UuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24gdChuKXtmb3IodmFyIG8saSx1LGM9W10sYT0wLGw9bi5sZW5ndGg7YTxsOyl7aWYocihuW2FdKSlmb3IodT0wLGk9KG89ZT90KG5bYV0pOm5bYV0pLmxlbmd0aDt1PGk7KWNbYy5sZW5ndGhdPW9bdV0sdSs9MTtlbHNlIGNbYy5sZW5ndGhdPW5bYV07YSs9MX1yZXR1cm4gY319fSxmdW5jdGlvbihlLHQsbil7dmFyIHI9bigwKSxvPW4oNSksaT1uKDYpLHU9cigoZnVuY3Rpb24oZSl7cmV0dXJuISFvKGUpfHwhIWUmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiYhaShlKSYmKDE9PT1lLm5vZGVUeXBlPyEhZS5sZW5ndGg6MD09PWUubGVuZ3RofHxlLmxlbmd0aD4wJiZlLmhhc093blByb3BlcnR5KDApJiZlLmhhc093blByb3BlcnR5KGUubGVuZ3RoLTEpKX0pKTtlLmV4cG9ydHM9dX0sZnVuY3Rpb24oZSx0LG4pe3ZhciByPW4oMSkoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHQsMCkuc29ydCgoZnVuY3Rpb24odCxuKXt2YXIgcj1lKHQpLG89ZShuKTtyZXR1cm4gcjxvPy0xOnI+bz8xOjB9KSl9KSk7ZS5leHBvcnRzPXJ9LGZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1uKDEpKChmdW5jdGlvbihlLHQpe3JldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0LDApLnNvcnQoKGZ1bmN0aW9uKHQsbil7Zm9yKHZhciByPTAsbz0wOzA9PT1yJiZvPGUubGVuZ3RoOylyPWVbb10odCxuKSxvKz0xO3JldHVybiByfSkpfSkpO2UuZXhwb3J0cz1yfSxmdW5jdGlvbihlLHQsbil7dmFyIHI9bigxOCkoMCwtMSk7ZS5leHBvcnRzPXJ9LGZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1uKDE5KSxvPW4oMjApKHIoXCJzbGljZVwiLChmdW5jdGlvbihlLHQsbil7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG4sZSx0KX0pKSk7ZS5leHBvcnRzPW99LGZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1uKDUpO2UuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3JldHVybiBmdW5jdGlvbigpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg7aWYoMD09PW4pcmV0dXJuIHQoKTt2YXIgbz1hcmd1bWVudHNbbi0xXTtyZXR1cm4gcihvKXx8XCJmdW5jdGlvblwiIT10eXBlb2Ygb1tlXT90LmFwcGx5KHRoaXMsYXJndW1lbnRzKTpvW2VdLmFwcGx5KG8sQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDAsbi0xKSl9fX0sZnVuY3Rpb24oZSx0LG4pe3ZhciByPW4oMCksbz1uKDEpLGk9bigzKTtlLmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uIHQobix1LGMpe3N3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtjYXNlIDA6cmV0dXJuIHQ7Y2FzZSAxOnJldHVybiBpKG4pP3Q6bygoZnVuY3Rpb24odCxyKXtyZXR1cm4gZShuLHQscil9KSk7Y2FzZSAyOnJldHVybiBpKG4pJiZpKHUpP3Q6aShuKT9vKChmdW5jdGlvbih0LG4pe3JldHVybiBlKHQsdSxuKX0pKTppKHUpP28oKGZ1bmN0aW9uKHQscil7cmV0dXJuIGUobix0LHIpfSkpOnIoKGZ1bmN0aW9uKHQpe3JldHVybiBlKG4sdSx0KX0pKTtkZWZhdWx0OnJldHVybiBpKG4pJiZpKHUpJiZpKGMpP3Q6aShuKSYmaSh1KT9vKChmdW5jdGlvbih0LG4pe3JldHVybiBlKHQsbixjKX0pKTppKG4pJiZpKGMpP28oKGZ1bmN0aW9uKHQsbil7cmV0dXJuIGUodCx1LG4pfSkpOmkodSkmJmkoYyk/bygoZnVuY3Rpb24odCxyKXtyZXR1cm4gZShuLHQscil9KSk6aShuKT9yKChmdW5jdGlvbih0KXtyZXR1cm4gZSh0LHUsYyl9KSk6aSh1KT9yKChmdW5jdGlvbih0KXtyZXR1cm4gZShuLHQsYyl9KSk6aShjKT9yKChmdW5jdGlvbih0KXtyZXR1cm4gZShuLHUsdCl9KSk6ZShuLHUsYyl9fX19LGZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1uKDIyKSgtMSk7ZS5leHBvcnRzPXJ9LGZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1uKDEpLG89big2KSxpPXIoKGZ1bmN0aW9uKGUsdCl7dmFyIG49ZTwwP3QubGVuZ3RoK2U6ZTtyZXR1cm4gbyh0KT90LmNoYXJBdChuKTp0W25dfSkpO2UuZXhwb3J0cz1pfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5SaWNoVGV4dEJsb2NrPXZvaWQgMDt2YXIgcj1uKDIpO2Z1bmN0aW9uIG8oZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIHI9dFtuXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fXZhciBpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7IWZ1bmN0aW9uKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyxlKSx0aGlzLnR5cGU9dCx0aGlzLnRleHQ9bix0aGlzLnNwYW5zPXJ9dmFyIHQsbjtyZXR1cm4gdD1lLChuPVt7a2V5OlwiaXNFbWJlZEJsb2NrXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1yLk5PREVfVFlQRVMuZW1iZWR9fSx7a2V5OlwiaXNJbWFnZUJsb2NrXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1yLk5PREVfVFlQRVMuaW1hZ2V9fSx7a2V5OlwiaXNMaXN0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1yLk5PREVfVFlQRVMubGlzdH19LHtrZXk6XCJpc09yZGVyZWRMaXN0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1yLk5PREVfVFlQRVMub0xpc3R9fSx7a2V5OlwiaXNMaXN0SXRlbVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBlPT09ci5OT0RFX1RZUEVTLmxpc3RJdGVtfX0se2tleTpcImlzT3JkZXJlZExpc3RJdGVtXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1yLk5PREVfVFlQRVMub0xpc3RJdGVtfX0se2tleTpcImVtcHR5TGlzdFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJue3R5cGU6ci5OT0RFX1RZUEVTLmxpc3Qsc3BhbnM6W10sdGV4dDpcIlwifX19LHtrZXk6XCJlbXB0eU9yZGVyZWRMaXN0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm57dHlwZTpyLk5PREVfVFlQRVMub0xpc3Qsc3BhbnM6W10sdGV4dDpcIlwifX19XSkmJm8odCxuKSxlfSgpO3QuUmljaFRleHRCbG9jaz1pfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5kZWZhdWx0PXZvaWQgMDt2YXIgcixvPShyPW4oNCkpJiZyLl9fZXNNb2R1bGU/cjp7ZGVmYXVsdDpyfSxpPW4oOCk7dC5kZWZhdWx0PWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gby5kZWZhdWx0LmZyb21SaWNoVGV4dChlKS5jaGlsZHJlbi5tYXAoKGZ1bmN0aW9uKGUscil7cmV0dXJuIGZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiBmdW5jdGlvbiBlKG4sbyl7dmFyIHU9biBpbnN0YW5jZW9mIGkuU3Bhbk5vZGU/bi50ZXh0Om51bGwsYz1uLmNoaWxkcmVuLnJlZHVjZSgoZnVuY3Rpb24odCxuLHIpe3JldHVybiB0LmNvbmNhdChbZShuLHIpXSl9KSxbXSk7cmV0dXJuIHImJnIobi50eXBlLG4uZWxlbWVudCx1LGMsbyl8fHQobi50eXBlLG4uZWxlbWVudCx1LGMsbyl9KGUsbil9KGUsdCxyLG4pfSkpfX1dKX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO1xuLyohXG4gKiBlc2NhcGUtaHRtbFxuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxMyBUSiBIb2xvd2F5Y2h1a1xuICogQ29weXJpZ2h0KGMpIDIwMTUgQW5kcmVhcyBMdWJiZVxuICogQ29weXJpZ2h0KGMpIDIwMTUgVGlhbmNoZW5nIFwiVGltb3RoeVwiIEd1XG4gKiBNSVQgTGljZW5zZWRcbiAqL3ZhciByPS9bXCInJjw+XS87ZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3ZhciB0LG49XCJcIitlLG89ci5leGVjKG4pO2lmKCFvKXJldHVybiBuO3ZhciBpPVwiXCIsdT0wLGM9MDtmb3IodT1vLmluZGV4O3U8bi5sZW5ndGg7dSsrKXtzd2l0Y2gobi5jaGFyQ29kZUF0KHUpKXtjYXNlIDM0OnQ9XCImcXVvdDtcIjticmVhaztjYXNlIDM4OnQ9XCImYW1wO1wiO2JyZWFrO2Nhc2UgMzk6dD1cIiYjMzk7XCI7YnJlYWs7Y2FzZSA2MDp0PVwiJmx0O1wiO2JyZWFrO2Nhc2UgNjI6dD1cIiZndDtcIjticmVhaztkZWZhdWx0OmNvbnRpbnVlfWMhPT11JiYoaSs9bi5zdWJzdHJpbmcoYyx1KSksYz11KzEsaSs9dH1yZXR1cm4gYyE9PXU/aStuLnN1YnN0cmluZyhjLHUpOml9fV0pfSkpOyIsInZhciBfX3NlbGZfXyA9IChmdW5jdGlvbiAocm9vdCkge1xuZnVuY3Rpb24gRigpIHtcbnRoaXMuZmV0Y2ggPSBmYWxzZTtcbnRoaXMuRE9NRXhjZXB0aW9uID0gcm9vdC5ET01FeGNlcHRpb25cbn1cbkYucHJvdG90eXBlID0gcm9vdDtcbnJldHVybiBuZXcgRigpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMpO1xuKGZ1bmN0aW9uKHNlbGYpIHtcblxudmFyIGlycmVsZXZhbnQgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgdmFyIHN1cHBvcnQgPSB7XG4gICAgc2VhcmNoUGFyYW1zOiAnVVJMU2VhcmNoUGFyYW1zJyBpbiBzZWxmLFxuICAgIGl0ZXJhYmxlOiAnU3ltYm9sJyBpbiBzZWxmICYmICdpdGVyYXRvcicgaW4gU3ltYm9sLFxuICAgIGJsb2I6XG4gICAgICAnRmlsZVJlYWRlcicgaW4gc2VsZiAmJlxuICAgICAgJ0Jsb2InIGluIHNlbGYgJiZcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBuZXcgQmxvYigpO1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSkoKSxcbiAgICBmb3JtRGF0YTogJ0Zvcm1EYXRhJyBpbiBzZWxmLFxuICAgIGFycmF5QnVmZmVyOiAnQXJyYXlCdWZmZXInIGluIHNlbGZcbiAgfTtcblxuICBmdW5jdGlvbiBpc0RhdGFWaWV3KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgRGF0YVZpZXcucHJvdG90eXBlLmlzUHJvdG90eXBlT2Yob2JqKVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgdmlld0NsYXNzZXMgPSBbXG4gICAgICAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQ2NEFycmF5XSdcbiAgICBdO1xuXG4gICAgdmFyIGlzQXJyYXlCdWZmZXJWaWV3ID1cbiAgICAgIEFycmF5QnVmZmVyLmlzVmlldyB8fFxuICAgICAgZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgdmlld0NsYXNzZXMuaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSkgPiAtMVxuICAgICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUobmFtZSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPSBTdHJpbmcobmFtZSk7XG4gICAgfVxuICAgIGlmICgvW15hLXowLTlcXC0jJCUmJyorLl5fYHx+XS9pLnRlc3QobmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lJylcbiAgICB9XG4gICAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8vIEJ1aWxkIGEgZGVzdHJ1Y3RpdmUgaXRlcmF0b3IgZm9yIHRoZSB2YWx1ZSBsaXN0XG4gIGZ1bmN0aW9uIGl0ZXJhdG9yRm9yKGl0ZW1zKSB7XG4gICAgdmFyIGl0ZXJhdG9yID0ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGl0ZW1zLnNoaWZ0KCk7XG4gICAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHVuZGVmaW5lZCwgdmFsdWU6IHZhbHVlfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZXJhdG9yXG4gIH1cblxuICBmdW5jdGlvbiBIZWFkZXJzKGhlYWRlcnMpIHtcbiAgICB0aGlzLm1hcCA9IHt9O1xuXG4gICAgaWYgKGhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgdmFsdWUpO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGhlYWRlcnMpKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24oaGVhZGVyKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKGhlYWRlclswXSwgaGVhZGVyWzFdKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoaGVhZGVycykge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIGhlYWRlcnNbbmFtZV0pO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKTtcbiAgICB2YWx1ZSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLm1hcFtuYW1lXTtcbiAgICB0aGlzLm1hcFtuYW1lXSA9IG9sZFZhbHVlID8gb2xkVmFsdWUgKyAnLCAnICsgdmFsdWUgOiB2YWx1ZTtcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldO1xuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKTtcbiAgICByZXR1cm4gdGhpcy5oYXMobmFtZSkgPyB0aGlzLm1hcFtuYW1lXSA6IG51bGxcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmhhc093blByb3BlcnR5KG5vcm1hbGl6ZU5hbWUobmFtZSkpXG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMubWFwKSB7XG4gICAgICBpZiAodGhpcy5tYXAuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzLm1hcFtuYW1lXSwgbmFtZSwgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgIGl0ZW1zLnB1c2gobmFtZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaXRlbXMucHVzaCh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgIGl0ZW1zLnB1c2goW25hbWUsIHZhbHVlXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9O1xuXG4gIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXM7XG4gIH1cblxuICBmdW5jdGlvbiBjb25zdW1lZChib2R5KSB7XG4gICAgaWYgKGJvZHkuYm9keVVzZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKSlcbiAgICB9XG4gICAgYm9keS5ib2R5VXNlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgICAgfTtcbiAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpO1xuICAgICAgfTtcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc0FycmF5QnVmZmVyKGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpO1xuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKTtcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc1RleHQoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcik7XG4gICAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYik7XG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRBcnJheUJ1ZmZlckFzVGV4dChidWYpIHtcbiAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zik7XG4gICAgdmFyIGNoYXJzID0gbmV3IEFycmF5KHZpZXcubGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hhcnNbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHZpZXdbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gY2hhcnMuam9pbignJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1ZmZlckNsb25lKGJ1Zikge1xuICAgIGlmIChidWYuc2xpY2UpIHtcbiAgICAgIHJldHVybiBidWYuc2xpY2UoMClcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYuYnl0ZUxlbmd0aCk7XG4gICAgICB2aWV3LnNldChuZXcgVWludDhBcnJheShidWYpKTtcbiAgICAgIHJldHVybiB2aWV3LmJ1ZmZlclxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEJvZHkoKSB7XG4gICAgdGhpcy5ib2R5VXNlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5faW5pdEJvZHkgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5SW5pdCA9IGJvZHk7XG4gICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSAnJztcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keTtcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iICYmIEJsb2IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUJsb2IgPSBib2R5O1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmZvcm1EYXRhICYmIEZvcm1EYXRhLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlGb3JtRGF0YSA9IGJvZHk7XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKTtcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiBzdXBwb3J0LmJsb2IgJiYgaXNEYXRhVmlldyhib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5LmJ1ZmZlcik7XG4gICAgICAgIC8vIElFIDEwLTExIGNhbid0IGhhbmRsZSBhIERhdGFWaWV3IGJvZHkuXG4gICAgICAgIHRoaXMuX2JvZHlJbml0ID0gbmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pO1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSB8fCBpc0FycmF5QnVmZmVyVmlldyhib2R5KSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYm9keSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QmxvYiAmJiB0aGlzLl9ib2R5QmxvYi50eXBlKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgdGhpcy5ibG9iID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpO1xuICAgICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSkpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2InKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlUZXh0XSkpXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBjb25zdW1lZCh0aGlzKSB8fCBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUFycmF5QnVmZmVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpO1xuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRCbG9iQXNUZXh0KHRoaXMuX2JvZHlCbG9iKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZWFkQXJyYXlCdWZmZXJBc1RleHQodGhpcy5fYm9keUFycmF5QnVmZmVyKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyB0ZXh0JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gSFRUUCBtZXRob2RzIHdob3NlIGNhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBub3JtYWxpemVkXG4gIHZhciBtZXRob2RzID0gWydERUxFVEUnLCAnR0VUJywgJ0hFQUQnLCAnT1BUSU9OUycsICdQT1NUJywgJ1BVVCddO1xuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcbiAgICB2YXIgdXBjYXNlZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuICAgIHJldHVybiBtZXRob2RzLmluZGV4T2YodXBjYXNlZCkgPiAtMSA/IHVwY2FzZWQgOiBtZXRob2RcbiAgfVxuXG4gIGZ1bmN0aW9uIFJlcXVlc3QoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keTtcblxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIFJlcXVlc3QpIHtcbiAgICAgIGlmIChpbnB1dC5ib2R5VXNlZCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKVxuICAgICAgfVxuICAgICAgdGhpcy51cmwgPSBpbnB1dC51cmw7XG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0gaW5wdXQuY3JlZGVudGlhbHM7XG4gICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbnB1dC5oZWFkZXJzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubWV0aG9kID0gaW5wdXQubWV0aG9kO1xuICAgICAgdGhpcy5tb2RlID0gaW5wdXQubW9kZTtcbiAgICAgIHRoaXMuc2lnbmFsID0gaW5wdXQuc2lnbmFsO1xuICAgICAgaWYgKCFib2R5ICYmIGlucHV0Ll9ib2R5SW5pdCAhPSBudWxsKSB7XG4gICAgICAgIGJvZHkgPSBpbnB1dC5fYm9keUluaXQ7XG4gICAgICAgIGlucHV0LmJvZHlVc2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cmwgPSBTdHJpbmcoaW5wdXQpO1xuICAgIH1cblxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzIHx8IHRoaXMuY3JlZGVudGlhbHMgfHwgJ3NhbWUtb3JpZ2luJztcbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzIHx8ICF0aGlzLmhlYWRlcnMpIHtcbiAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycyk7XG4gICAgfVxuICAgIHRoaXMubWV0aG9kID0gbm9ybWFsaXplTWV0aG9kKG9wdGlvbnMubWV0aG9kIHx8IHRoaXMubWV0aG9kIHx8ICdHRVQnKTtcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGw7XG4gICAgdGhpcy5zaWduYWwgPSBvcHRpb25zLnNpZ25hbCB8fCB0aGlzLnNpZ25hbDtcbiAgICB0aGlzLnJlZmVycmVyID0gbnVsbDtcblxuICAgIGlmICgodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpICYmIGJvZHkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvZHkgbm90IGFsbG93ZWQgZm9yIEdFVCBvciBIRUFEIHJlcXVlc3RzJylcbiAgICB9XG4gICAgdGhpcy5faW5pdEJvZHkoYm9keSk7XG4gIH1cblxuICBSZXF1ZXN0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzLCB7Ym9keTogdGhpcy5fYm9keUluaXR9KVxuICB9O1xuXG4gIGZ1bmN0aW9uIGRlY29kZShib2R5KSB7XG4gICAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcbiAgICBib2R5XG4gICAgICAudHJpbSgpXG4gICAgICAuc3BsaXQoJyYnKVxuICAgICAgLmZvckVhY2goZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgICAgaWYgKGJ5dGVzKSB7XG4gICAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKTtcbiAgICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJyk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpO1xuICAgICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAvLyBSZXBsYWNlIGluc3RhbmNlcyBvZiBcXHJcXG4gYW5kIFxcbiBmb2xsb3dlZCBieSBhdCBsZWFzdCBvbmUgc3BhY2Ugb3IgaG9yaXpvbnRhbCB0YWIgd2l0aCBhIHNwYWNlXG4gICAgLy8gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzAjc2VjdGlvbi0zLjJcbiAgICB2YXIgcHJlUHJvY2Vzc2VkSGVhZGVycyA9IHJhd0hlYWRlcnMucmVwbGFjZSgvXFxyP1xcbltcXHQgXSsvZywgJyAnKTtcbiAgICBwcmVQcm9jZXNzZWRIZWFkZXJzLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6Jyk7XG4gICAgICB2YXIga2V5ID0gcGFydHMuc2hpZnQoKS50cmltKCk7XG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzonKS50cmltKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBoZWFkZXJzXG4gIH1cblxuICBCb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpO1xuXG4gIGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnO1xuICAgIHRoaXMuc3RhdHVzID0gb3B0aW9ucy5zdGF0dXMgPT09IHVuZGVmaW5lZCA/IDIwMCA6IG9wdGlvbnMuc3RhdHVzO1xuICAgIHRoaXMub2sgPSB0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDA7XG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gJ3N0YXR1c1RleHQnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1c1RleHQgOiAnT0snO1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycyk7XG4gICAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCAnJztcbiAgICB0aGlzLl9pbml0Qm9keShib2R5SW5pdCk7XG4gIH1cblxuICBCb2R5LmNhbGwoUmVzcG9uc2UucHJvdG90eXBlKTtcblxuICBSZXNwb25zZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKHRoaXMuX2JvZHlJbml0LCB7XG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgIHVybDogdGhpcy51cmxcbiAgICB9KVxuICB9O1xuXG4gIFJlc3BvbnNlLmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDAsIHN0YXR1c1RleHQ6ICcnfSk7XG4gICAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcic7XG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH07XG5cbiAgdmFyIHJlZGlyZWN0U3RhdHVzZXMgPSBbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdO1xuXG4gIFJlc3BvbnNlLnJlZGlyZWN0ID0gZnVuY3Rpb24odXJsLCBzdGF0dXMpIHtcbiAgICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IHtsb2NhdGlvbjogdXJsfX0pXG4gIH07XG5cbiAgZXhwb3J0cy5ET01FeGNlcHRpb24gPSBzZWxmLkRPTUV4Y2VwdGlvbjtcbiAgdHJ5IHtcbiAgICBuZXcgZXhwb3J0cy5ET01FeGNlcHRpb24oKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZXhwb3J0cy5ET01FeGNlcHRpb24gPSBmdW5jdGlvbihtZXNzYWdlLCBuYW1lKSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgIHZhciBlcnJvciA9IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgdGhpcy5zdGFjayA9IGVycm9yLnN0YWNrO1xuICAgIH07XG4gICAgZXhwb3J0cy5ET01FeGNlcHRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICAgIGV4cG9ydHMuRE9NRXhjZXB0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGV4cG9ydHMuRE9NRXhjZXB0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2goaW5wdXQsIGluaXQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGlucHV0LCBpbml0KTtcblxuICAgICAgaWYgKHJlcXVlc3Quc2lnbmFsICYmIHJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgZXhwb3J0cy5ET01FeGNlcHRpb24oJ0Fib3J0ZWQnLCAnQWJvcnRFcnJvcicpKVxuICAgICAgfVxuXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIGZ1bmN0aW9uIGFib3J0WGhyKCkge1xuICAgICAgICB4aHIuYWJvcnQoKTtcbiAgICAgIH1cblxuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB8fCAnJylcbiAgICAgICAgfTtcbiAgICAgICAgb3B0aW9ucy51cmwgPSAncmVzcG9uc2VVUkwnIGluIHhociA/IHhoci5yZXNwb25zZVVSTCA6IG9wdGlvbnMuaGVhZGVycy5nZXQoJ1gtUmVxdWVzdC1VUkwnKTtcbiAgICAgICAgdmFyIGJvZHkgPSAncmVzcG9uc2UnIGluIHhociA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgIHJlc29sdmUobmV3IFJlc3BvbnNlKGJvZHksIG9wdGlvbnMpKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmFib3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgZXhwb3J0cy5ET01FeGNlcHRpb24oJ0Fib3J0ZWQnLCAnQWJvcnRFcnJvcicpKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LnVybCwgdHJ1ZSk7XG5cbiAgICAgIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdvbWl0Jykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIgJiYgc3VwcG9ydC5ibG9iKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVxdWVzdC5zaWduYWwpIHtcbiAgICAgICAgcmVxdWVzdC5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydFhocik7XG5cbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIERPTkUgKHN1Y2Nlc3Mgb3IgZmFpbHVyZSlcbiAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgIHJlcXVlc3Quc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRYaHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgeGhyLnNlbmQodHlwZW9mIHJlcXVlc3QuX2JvZHlJbml0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiByZXF1ZXN0Ll9ib2R5SW5pdCk7XG4gICAgfSlcbiAgfVxuXG4gIGZldGNoLnBvbHlmaWxsID0gdHJ1ZTtcblxuICBpZiAoIXNlbGYuZmV0Y2gpIHtcbiAgICBzZWxmLmZldGNoID0gZmV0Y2g7XG4gICAgc2VsZi5IZWFkZXJzID0gSGVhZGVycztcbiAgICBzZWxmLlJlcXVlc3QgPSBSZXF1ZXN0O1xuICAgIHNlbGYuUmVzcG9uc2UgPSBSZXNwb25zZTtcbiAgfVxuXG4gIGV4cG9ydHMuSGVhZGVycyA9IEhlYWRlcnM7XG4gIGV4cG9ydHMuUmVxdWVzdCA9IFJlcXVlc3Q7XG4gIGV4cG9ydHMuUmVzcG9uc2UgPSBSZXNwb25zZTtcbiAgZXhwb3J0cy5mZXRjaCA9IGZldGNoO1xuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KHt9KSk7XG59KShfX3NlbGZfXyk7XG5kZWxldGUgX19zZWxmX18uZmV0Y2gucG9seWZpbGxcbmV4cG9ydHMgPSBfX3NlbGZfXy5mZXRjaCAvLyBUbyBlbmFibGU6IGltcG9ydCBmZXRjaCBmcm9tICdjcm9zcy1mZXRjaCdcbmV4cG9ydHMuZGVmYXVsdCA9IF9fc2VsZl9fLmZldGNoIC8vIEZvciBUeXBlU2NyaXB0IGNvbnN1bWVycyB3aXRob3V0IGVzTW9kdWxlSW50ZXJvcC5cbmV4cG9ydHMuZmV0Y2ggPSBfX3NlbGZfXy5mZXRjaCAvLyBUbyBlbmFibGU6IGltcG9ydCB7ZmV0Y2h9IGZyb20gJ2Nyb3NzLWZldGNoJ1xuZXhwb3J0cy5IZWFkZXJzID0gX19zZWxmX18uSGVhZGVyc1xuZXhwb3J0cy5SZXF1ZXN0ID0gX19zZWxmX18uUmVxdWVzdFxuZXhwb3J0cy5SZXNwb25zZSA9IF9fc2VsZl9fLlJlc3BvbnNlXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNcbiIsImltcG9ydCBjcm9zc0ZldGNoIGZyb20gJ2Nyb3NzLWZldGNoJztcblxuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbnZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XG5cbnZhciBWYXJpYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVmFyaWF0aW9uKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIFZhcmlhdGlvbi5wcm90b3R5cGUuaWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuaWQ7XG4gICAgfTtcbiAgICBWYXJpYXRpb24ucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5yZWY7XG4gICAgfTtcbiAgICBWYXJpYXRpb24ucHJvdG90eXBlLmxhYmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmxhYmVsO1xuICAgIH07XG4gICAgcmV0dXJuIFZhcmlhdGlvbjtcbn0oKSk7XG52YXIgRXhwZXJpbWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFeHBlcmltZW50KGRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMudmFyaWF0aW9ucyA9IChkYXRhLnZhcmlhdGlvbnMgfHwgW10pLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBWYXJpYXRpb24odik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBFeHBlcmltZW50LnByb3RvdHlwZS5pZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5pZDtcbiAgICB9O1xuICAgIEV4cGVyaW1lbnQucHJvdG90eXBlLmdvb2dsZUlkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmdvb2dsZUlkO1xuICAgIH07XG4gICAgRXhwZXJpbWVudC5wcm90b3R5cGUubmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5uYW1lO1xuICAgIH07XG4gICAgcmV0dXJuIEV4cGVyaW1lbnQ7XG59KCkpO1xudmFyIEV4cGVyaW1lbnRzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEV4cGVyaW1lbnRzKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZnRzID0gKGRhdGEuZHJhZnRzIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGV4cCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXhwZXJpbWVudChleHApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSAoZGF0YS5ydW5uaW5nIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGV4cCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXhwZXJpbWVudChleHApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgRXhwZXJpbWVudHMucHJvdG90eXBlLmN1cnJlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnJ1bm5pbmcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucnVubmluZ1swXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBFeHBlcmltZW50cy5wcm90b3R5cGUucmVmRnJvbUNvb2tpZSA9IGZ1bmN0aW9uIChjb29raWUpIHtcbiAgICAgICAgaWYgKCFjb29raWUgfHwgY29va2llLnRyaW0oKSA9PT0gJycpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIHNwbGl0dGVkID0gY29va2llLnRyaW0oKS5zcGxpdCgnICcpO1xuICAgICAgICBpZiAoc3BsaXR0ZWQubGVuZ3RoIDwgMilcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB2YXIgZXhwSWQgPSBzcGxpdHRlZFswXTtcbiAgICAgICAgdmFyIHZhckluZGV4ID0gcGFyc2VJbnQoc3BsaXR0ZWRbMV0sIDEwKTtcbiAgICAgICAgdmFyIGV4cCA9IHRoaXMucnVubmluZy5maWx0ZXIoZnVuY3Rpb24gKGV4cCkge1xuICAgICAgICAgICAgcmV0dXJuIGV4cC5nb29nbGVJZCgpID09PSBleHBJZCAmJiBleHAudmFyaWF0aW9ucy5sZW5ndGggPiB2YXJJbmRleDtcbiAgICAgICAgfSlbMF07XG4gICAgICAgIHJldHVybiBleHAgPyBleHAudmFyaWF0aW9uc1t2YXJJbmRleF0ucmVmKCkgOiBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIEV4cGVyaW1lbnRzO1xufSgpKTtcblxudmFyIExhenlTZWFyY2hGb3JtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExhenlTZWFyY2hGb3JtKGlkLCBhcGkpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmFwaSA9IGFwaTtcbiAgICAgICAgdGhpcy5maWVsZHMgPSB7fTtcbiAgICB9XG4gICAgTGF6eVNlYXJjaEZvcm0ucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZmllbGRzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBMYXp5U2VhcmNoRm9ybS5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoJ3JlZicsIHJlZik7XG4gICAgfTtcbiAgICBMYXp5U2VhcmNoRm9ybS5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KCdxJywgcXVlcnkpO1xuICAgIH07XG4gICAgTGF6eVNlYXJjaEZvcm0ucHJvdG90eXBlLnBhZ2VTaXplID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KCdwYWdlU2l6ZScsIHNpemUpO1xuICAgIH07XG4gICAgTGF6eVNlYXJjaEZvcm0ucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24gKGZpZWxkcykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1dhcm5pbmc6IFVzaW5nIEZldGNoIGlzIGRlcHJlY2F0ZWQuIFVzZSB0aGUgcHJvcGVydHkgYGdyYXBoUXVlcnlgIGluc3RlYWQuJyk7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCgnZmV0Y2gnLCBmaWVsZHMpO1xuICAgIH07XG4gICAgTGF6eVNlYXJjaEZvcm0ucHJvdG90eXBlLmZldGNoTGlua3MgPSBmdW5jdGlvbiAoZmllbGRzKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignV2FybmluZzogVXNpbmcgRmV0Y2hMaW5rcyBpcyBkZXByZWNhdGVkLiBVc2UgdGhlIHByb3BlcnR5IGBncmFwaFF1ZXJ5YCBpbnN0ZWFkLicpO1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoJ2ZldGNoTGlua3MnLCBmaWVsZHMpO1xuICAgIH07XG4gICAgTGF6eVNlYXJjaEZvcm0ucHJvdG90eXBlLmdyYXBoUXVlcnkgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KCdncmFwaFF1ZXJ5JywgcXVlcnkpO1xuICAgIH07XG4gICAgTGF6eVNlYXJjaEZvcm0ucHJvdG90eXBlLmxhbmcgPSBmdW5jdGlvbiAobGFuZ0NvZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KCdsYW5nJywgbGFuZ0NvZGUpO1xuICAgIH07XG4gICAgTGF6eVNlYXJjaEZvcm0ucHJvdG90eXBlLnBhZ2UgPSBmdW5jdGlvbiAocCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoJ3BhZ2UnLCBwKTtcbiAgICB9O1xuICAgIExhenlTZWFyY2hGb3JtLnByb3RvdHlwZS5hZnRlciA9IGZ1bmN0aW9uIChkb2N1bWVudElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCgnYWZ0ZXInLCBkb2N1bWVudElkKTtcbiAgICB9O1xuICAgIExhenlTZWFyY2hGb3JtLnByb3RvdHlwZS5vcmRlcmluZ3MgPSBmdW5jdGlvbiAob3JkZXJpbmdzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCgnb3JkZXJpbmdzJywgb3JkZXJpbmdzKTtcbiAgICB9O1xuICAgIExhenlTZWFyY2hGb3JtLnByb3RvdHlwZS51cmwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLmFwaS5nZXQoKS50aGVuKGZ1bmN0aW9uIChhcGkpIHtcbiAgICAgICAgICAgIHJldHVybiBMYXp5U2VhcmNoRm9ybS50b1NlYXJjaEZvcm0oX3RoaXMsIGFwaSkudXJsKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTGF6eVNlYXJjaEZvcm0ucHJvdG90eXBlLnN1Ym1pdCA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gdGhpcy5hcGkuZ2V0KCkudGhlbihmdW5jdGlvbiAoYXBpKSB7XG4gICAgICAgICAgICByZXR1cm4gTGF6eVNlYXJjaEZvcm0udG9TZWFyY2hGb3JtKF90aGlzLCBhcGkpLnN1Ym1pdChjYik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTGF6eVNlYXJjaEZvcm0udG9TZWFyY2hGb3JtID0gZnVuY3Rpb24gKGxhenlGb3JtLCBhcGkpIHtcbiAgICAgICAgdmFyIGZvcm0gPSBhcGkuZm9ybShsYXp5Rm9ybS5pZCk7XG4gICAgICAgIGlmIChmb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMobGF6eUZvcm0uZmllbGRzKS5yZWR1Y2UoZnVuY3Rpb24gKGZvcm0sIGZpZWxkS2V5KSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkVmFsdWUgPSBsYXp5Rm9ybS5maWVsZHNbZmllbGRLZXldO1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZEtleSA9PT0gJ3EnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmb3JtLnF1ZXJ5KGZpZWxkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChmaWVsZEtleSA9PT0gJ3BhZ2VTaXplJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9ybS5wYWdlU2l6ZShmaWVsZFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZmllbGRLZXkgPT09ICdmZXRjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvcm0uZmV0Y2goZmllbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZpZWxkS2V5ID09PSAnZmV0Y2hMaW5rcycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvcm0uZmV0Y2hMaW5rcyhmaWVsZFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZmllbGRLZXkgPT09ICdncmFwaFF1ZXJ5Jykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9ybS5ncmFwaFF1ZXJ5KGZpZWxkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChmaWVsZEtleSA9PT0gJ2xhbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmb3JtLmxhbmcoZmllbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZpZWxkS2V5ID09PSAncGFnZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvcm0ucGFnZShmaWVsZFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZmllbGRLZXkgPT09ICdhZnRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvcm0uYWZ0ZXIoZmllbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZpZWxkS2V5ID09PSAnb3JkZXJpbmdzJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9ybS5vcmRlcmluZ3MoZmllbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9ybS5zZXQoZmllbGRLZXksIGZpZWxkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGZvcm0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGFjY2VzcyB0byBmb3JtIFwiICsgbGF6eUZvcm0uaWQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTGF6eVNlYXJjaEZvcm07XG59KCkpO1xudmFyIFNlYXJjaEZvcm0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VhcmNoRm9ybShmb3JtLCBodHRwQ2xpZW50KSB7XG4gICAgICAgIHRoaXMuaHR0cENsaWVudCA9IGh0dHBDbGllbnQ7XG4gICAgICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gICAgICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgICAgICBmb3IgKHZhciBmaWVsZCBpbiBmb3JtLmZpZWxkcykge1xuICAgICAgICAgICAgaWYgKGZvcm0uZmllbGRzW2ZpZWxkXVsnZGVmYXVsdCddKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhW2ZpZWxkXSA9IFtmb3JtLmZpZWxkc1tmaWVsZF1bJ2RlZmF1bHQnXV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgU2VhcmNoRm9ybS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGZpZWxkLCB2YWx1ZSkge1xuICAgICAgICB2YXIgZmllbGREZXNjID0gdGhpcy5mb3JtLmZpZWxkc1tmaWVsZF07XG4gICAgICAgIGlmICghZmllbGREZXNjKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGZpZWxkICcgKyBmaWVsZCk7XG4gICAgICAgIHZhciBjaGVja2VkVmFsdWUgPSB2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiB2YWx1ZTtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHRoaXMuZGF0YVtmaWVsZF0gfHwgW107XG4gICAgICAgIGlmIChmaWVsZERlc2MubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IGNoZWNrZWRWYWx1ZSA/IHZhbHVlcy5jb25jYXQoW2NoZWNrZWRWYWx1ZV0pIDogdmFsdWVzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsdWVzID0gY2hlY2tlZFZhbHVlID8gW2NoZWNrZWRWYWx1ZV0gOiB2YWx1ZXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYXRhW2ZpZWxkXSA9IHZhbHVlcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIGEgcmVmIHRvIHF1ZXJ5IG9uIGZvciB0aGlzIFNlYXJjaEZvcm0uIFRoaXMgaXMgYSBtYW5kYXRvcnlcbiAgICAgKiBtZXRob2QgdG8gY2FsbCBiZWZvcmUgY2FsbGluZyBzdWJtaXQoKSwgYW5kIGFwaS5mb3JtKCdldmVyeXRoaW5nJykuc3VibWl0KClcbiAgICAgKiB3aWxsIG5vdCB3b3JrLlxuICAgICAqL1xuICAgIFNlYXJjaEZvcm0ucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KCdyZWYnLCByZWYpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyBhIHByZWRpY2F0ZS1iYXNlZCBxdWVyeSBmb3IgdGhpcyBTZWFyY2hGb3JtLiBUaGlzIGlzIHdoZXJlIHlvdVxuICAgICAqIHBhc3RlIHdoYXQgeW91IGNvbXBvc2UgaW4geW91ciBwcmlzbWljLmlvIEFQSSBicm93c2VyLlxuICAgICAqL1xuICAgIFNlYXJjaEZvcm0ucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcXVlcnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5xdWVyeShbcXVlcnldKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0KCdxJywgXCJbXCIgKyBxdWVyeS5qb2luKCcnKSArIFwiXVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcXVlcnkgOiBcIiArIHF1ZXJ5KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyBhIHBhZ2Ugc2l6ZSB0byBxdWVyeSBmb3IgdGhpcyBTZWFyY2hGb3JtLiBUaGlzIGlzIGFuIG9wdGlvbmFsIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIC0gVGhlIHBhZ2Ugc2l6ZVxuICAgICAqIEByZXR1cm5zIHtTZWFyY2hGb3JtfSAtIFRoZSBTZWFyY2hGb3JtIGl0c2VsZlxuICAgICAqL1xuICAgIFNlYXJjaEZvcm0ucHJvdG90eXBlLnBhZ2VTaXplID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KCdwYWdlU2l6ZScsIHNpemUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVzdHJpY3QgdGhlIHJlc3VsdHMgZG9jdW1lbnQgdG8gdGhlIHNwZWNpZmllZCBmaWVsZHNcbiAgICAgKi9cbiAgICBTZWFyY2hGb3JtLnByb3RvdHlwZS5mZXRjaCA9IGZ1bmN0aW9uIChmaWVsZHMpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdXYXJuaW5nOiBVc2luZyBGZXRjaCBpcyBkZXByZWNhdGVkLiBVc2UgdGhlIHByb3BlcnR5IGBncmFwaFF1ZXJ5YCBpbnN0ZWFkLicpO1xuICAgICAgICB2YXIgc3RyRmllbGRzID0gQXJyYXkuaXNBcnJheShmaWVsZHMpID8gZmllbGRzLmpvaW4oJywnKSA6IGZpZWxkcztcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KCdmZXRjaCcsIHN0ckZpZWxkcyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbmNsdWRlIHRoZSByZXF1ZXN0ZWQgZmllbGRzIGluIHRoZSBEb2N1bWVudExpbmsgaW5zdGFuY2VzIGluIHRoZSByZXN1bHRcbiAgICAgKi9cbiAgICBTZWFyY2hGb3JtLnByb3RvdHlwZS5mZXRjaExpbmtzID0gZnVuY3Rpb24gKGZpZWxkcykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1dhcm5pbmc6IFVzaW5nIEZldGNoTGlua3MgaXMgZGVwcmVjYXRlZC4gVXNlIHRoZSBwcm9wZXJ0eSBgZ3JhcGhRdWVyeWAgaW5zdGVhZC4nKTtcbiAgICAgICAgdmFyIHN0ckZpZWxkcyA9IEFycmF5LmlzQXJyYXkoZmllbGRzKSA/IGZpZWxkcy5qb2luKCcsJykgOiBmaWVsZHM7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCgnZmV0Y2hMaW5rcycsIHN0ckZpZWxkcyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBncmFwaHF1ZXJ5IHRvIHF1ZXJ5IGZvciB0aGlzIFNlYXJjaEZvcm0uIFRoaXMgaXMgYW4gb3B0aW9uYWwgbWV0aG9kLlxuICAgICAqL1xuICAgIFNlYXJjaEZvcm0ucHJvdG90eXBlLmdyYXBoUXVlcnkgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KCdncmFwaFF1ZXJ5JywgcXVlcnkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbGFuZ3VhZ2UgdG8gcXVlcnkgZm9yIHRoaXMgU2VhcmNoRm9ybS4gVGhpcyBpcyBhbiBvcHRpb25hbCBtZXRob2QuXG4gICAgICovXG4gICAgU2VhcmNoRm9ybS5wcm90b3R5cGUubGFuZyA9IGZ1bmN0aW9uIChsYW5nQ29kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoJ2xhbmcnLCBsYW5nQ29kZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwYWdlIG51bWJlciB0byBxdWVyeSBmb3IgdGhpcyBTZWFyY2hGb3JtLiBUaGlzIGlzIGFuIG9wdGlvbmFsIG1ldGhvZC5cbiAgICAgKi9cbiAgICBTZWFyY2hGb3JtLnByb3RvdHlwZS5wYWdlID0gZnVuY3Rpb24gKHApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KCdwYWdlJywgcCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWxsIHRoZSBkb2N1bWVudHMgZXhjZXB0IGZvciB0aG9zZSBhZnRlciB0aGUgc3BlY2lmaWVkIGRvY3VtZW50IGluIHRoZSBsaXN0LiBUaGlzIGlzIGFuIG9wdGlvbmFsIG1ldGhvZC5cbiAgICAgKi9cbiAgICBTZWFyY2hGb3JtLnByb3RvdHlwZS5hZnRlciA9IGZ1bmN0aW9uIChkb2N1bWVudElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCgnYWZ0ZXInLCBkb2N1bWVudElkKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIG9yZGVyaW5ncyB0byBxdWVyeSBmb3IgdGhpcyBTZWFyY2hGb3JtLiBUaGlzIGlzIGFuIG9wdGlvbmFsIG1ldGhvZC5cbiAgICAgKi9cbiAgICBTZWFyY2hGb3JtLnByb3RvdHlwZS5vcmRlcmluZ3MgPSBmdW5jdGlvbiAob3JkZXJpbmdzKSB7XG4gICAgICAgIGlmICghb3JkZXJpbmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldCgnb3JkZXJpbmdzJywgXCJbXCIgKyBvcmRlcmluZ3Muam9pbignLCcpICsgXCJdXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBCdWlsZCB0aGUgVVJMIHRvIHF1ZXJ5XG4gICAgICovXG4gICAgU2VhcmNoRm9ybS5wcm90b3R5cGUudXJsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdXJsID0gdGhpcy5mb3JtLmFjdGlvbjtcbiAgICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICAgICAgdmFyIHNlcCA9ICh1cmwuaW5kZXhPZignPycpID4gLTEgPyAnJicgOiAnPycpO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5kYXRhLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLmRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgKz0gc2VwICsga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VwID0gJyYnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdWJtaXRzIHRoZSBxdWVyeSwgYW5kIGNhbGxzIHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBTZWFyY2hGb3JtLnByb3RvdHlwZS5zdWJtaXQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5jYWNoZWRSZXF1ZXN0KHRoaXMudXJsKCkpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCByZXNwb25zZSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY2IgJiYgY2IoZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFNlYXJjaEZvcm07XG59KCkpO1xuXG52YXIgT1BFUkFUT1IgPSB7XG4gICAgYXQ6ICdhdCcsXG4gICAgbm90OiAnbm90JyxcbiAgICBtaXNzaW5nOiAnbWlzc2luZycsXG4gICAgaGFzOiAnaGFzJyxcbiAgICBhbnk6ICdhbnknLFxuICAgIGluOiAnaW4nLFxuICAgIGZ1bGx0ZXh0OiAnZnVsbHRleHQnLFxuICAgIHNpbWlsYXI6ICdzaW1pbGFyJyxcbiAgICBudW1iZXJHdDogJ251bWJlci5ndCcsXG4gICAgbnVtYmVyTHQ6ICdudW1iZXIubHQnLFxuICAgIG51bWJlckluUmFuZ2U6ICdudW1iZXIuaW5SYW5nZScsXG4gICAgZGF0ZUJlZm9yZTogJ2RhdGUuYmVmb3JlJyxcbiAgICBkYXRlQWZ0ZXI6ICdkYXRlLmFmdGVyJyxcbiAgICBkYXRlQmV0d2VlbjogJ2RhdGUuYmV0d2VlbicsXG4gICAgZGF0ZURheU9mTW9udGg6ICdkYXRlLmRheS1vZi1tb250aCcsXG4gICAgZGF0ZURheU9mTW9udGhBZnRlcjogJ2RhdGUuZGF5LW9mLW1vbnRoLWFmdGVyJyxcbiAgICBkYXRlRGF5T2ZNb250aEJlZm9yZTogJ2RhdGUuZGF5LW9mLW1vbnRoLWJlZm9yZScsXG4gICAgZGF0ZURheU9mV2VlazogJ2RhdGUuZGF5LW9mLXdlZWsnLFxuICAgIGRhdGVEYXlPZldlZWtBZnRlcjogJ2RhdGUuZGF5LW9mLXdlZWstYWZ0ZXInLFxuICAgIGRhdGVEYXlPZldlZWtCZWZvcmU6ICdkYXRlLmRheS1vZi13ZWVrLWJlZm9yZScsXG4gICAgZGF0ZU1vbnRoOiAnZGF0ZS5tb250aCcsXG4gICAgZGF0ZU1vbnRoQmVmb3JlOiAnZGF0ZS5tb250aC1iZWZvcmUnLFxuICAgIGRhdGVNb250aEFmdGVyOiAnZGF0ZS5tb250aC1hZnRlcicsXG4gICAgZGF0ZVllYXI6ICdkYXRlLnllYXInLFxuICAgIGRhdGVIb3VyOiAnZGF0ZS5ob3VyJyxcbiAgICBkYXRlSG91ckJlZm9yZTogJ2RhdGUuaG91ci1iZWZvcmUnLFxuICAgIGRhdGVIb3VyQWZ0ZXI6ICdkYXRlLmhvdXItYWZ0ZXInLFxuICAgIEdlb3BvaW50TmVhcjogJ2dlb3BvaW50Lm5lYXInLFxufTtcbmZ1bmN0aW9uIGVuY29kZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBcIlxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUuZ2V0VGltZSgpLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBcIltcIiArIHZhbHVlLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gZW5jb2RlKHYpOyB9KS5qb2luKCcsJykgKyBcIl1cIjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBlbmNvZGUgXCIgKyB2YWx1ZSArIFwiIG9mIHR5cGUgXCIgKyB0eXBlb2YgdmFsdWUpO1xuICAgIH1cbn1cbnZhciBnZW9wb2ludCA9IHtcbiAgICBuZWFyOiBmdW5jdGlvbiAoZnJhZ21lbnQsIGxhdGl0dWRlLCBsb25naXR1ZGUsIHJhZGl1cykge1xuICAgICAgICByZXR1cm4gXCJbXCIgKyBPUEVSQVRPUi5HZW9wb2ludE5lYXIgKyBcIihcIiArIGZyYWdtZW50ICsgXCIsIFwiICsgbGF0aXR1ZGUgKyBcIiwgXCIgKyBsb25naXR1ZGUgKyBcIiwgXCIgKyByYWRpdXMgKyBcIildXCI7XG4gICAgfSxcbn07XG52YXIgZGF0ZSA9IHtcbiAgICBiZWZvcmU6IGZ1bmN0aW9uIChmcmFnbWVudCwgYmVmb3JlKSB7XG4gICAgICAgIHJldHVybiBcIltcIiArIE9QRVJBVE9SLmRhdGVCZWZvcmUgKyBcIihcIiArIGZyYWdtZW50ICsgXCIsIFwiICsgZW5jb2RlKGJlZm9yZSkgKyBcIildXCI7XG4gICAgfSxcbiAgICBhZnRlcjogZnVuY3Rpb24gKGZyYWdtZW50LCBhZnRlcikge1xuICAgICAgICByZXR1cm4gXCJbXCIgKyBPUEVSQVRPUi5kYXRlQWZ0ZXIgKyBcIihcIiArIGZyYWdtZW50ICsgXCIsIFwiICsgZW5jb2RlKGFmdGVyKSArIFwiKV1cIjtcbiAgICB9LFxuICAgIGJldHdlZW46IGZ1bmN0aW9uIChmcmFnbWVudCwgYmVmb3JlLCBhZnRlcikge1xuICAgICAgICByZXR1cm4gXCJbXCIgKyBPUEVSQVRPUi5kYXRlQmV0d2VlbiArIFwiKFwiICsgZnJhZ21lbnQgKyBcIiwgXCIgKyBlbmNvZGUoYmVmb3JlKSArIFwiLCBcIiArIGVuY29kZShhZnRlcikgKyBcIildXCI7XG4gICAgfSxcbiAgICBkYXlPZk1vbnRoOiBmdW5jdGlvbiAoZnJhZ21lbnQsIGRheSkge1xuICAgICAgICByZXR1cm4gXCJbXCIgKyBPUEVSQVRPUi5kYXRlRGF5T2ZNb250aCArIFwiKFwiICsgZnJhZ21lbnQgKyBcIiwgXCIgKyBkYXkgKyBcIildXCI7XG4gICAgfSxcbiAgICBkYXlPZk1vbnRoQWZ0ZXI6IGZ1bmN0aW9uIChmcmFnbWVudCwgZGF5KSB7XG4gICAgICAgIHJldHVybiBcIltcIiArIE9QRVJBVE9SLmRhdGVEYXlPZk1vbnRoQWZ0ZXIgKyBcIihcIiArIGZyYWdtZW50ICsgXCIsIFwiICsgZGF5ICsgXCIpXVwiO1xuICAgIH0sXG4gICAgZGF5T2ZNb250aEJlZm9yZTogZnVuY3Rpb24gKGZyYWdtZW50LCBkYXkpIHtcbiAgICAgICAgcmV0dXJuIFwiW1wiICsgT1BFUkFUT1IuZGF0ZURheU9mTW9udGhCZWZvcmUgKyBcIihcIiArIGZyYWdtZW50ICsgXCIsIFwiICsgZGF5ICsgXCIpXVwiO1xuICAgIH0sXG4gICAgZGF5T2ZXZWVrOiBmdW5jdGlvbiAoZnJhZ21lbnQsIGRheSkge1xuICAgICAgICByZXR1cm4gXCJbXCIgKyBPUEVSQVRPUi5kYXRlRGF5T2ZXZWVrICsgXCIoXCIgKyBmcmFnbWVudCArIFwiLCBcIiArIGVuY29kZShkYXkpICsgXCIpXVwiO1xuICAgIH0sXG4gICAgZGF5T2ZXZWVrQWZ0ZXI6IGZ1bmN0aW9uIChmcmFnbWVudCwgZGF5KSB7XG4gICAgICAgIHJldHVybiBcIltcIiArIE9QRVJBVE9SLmRhdGVEYXlPZldlZWtBZnRlciArIFwiKFwiICsgZnJhZ21lbnQgKyBcIiwgXCIgKyBlbmNvZGUoZGF5KSArIFwiKV1cIjtcbiAgICB9LFxuICAgIGRheU9mV2Vla0JlZm9yZTogZnVuY3Rpb24gKGZyYWdtZW50LCBkYXkpIHtcbiAgICAgICAgcmV0dXJuIFwiW1wiICsgT1BFUkFUT1IuZGF0ZURheU9mV2Vla0JlZm9yZSArIFwiKFwiICsgZnJhZ21lbnQgKyBcIiwgXCIgKyBlbmNvZGUoZGF5KSArIFwiKV1cIjtcbiAgICB9LFxuICAgIG1vbnRoOiBmdW5jdGlvbiAoZnJhZ21lbnQsIG1vbnRoKSB7XG4gICAgICAgIHJldHVybiBcIltcIiArIE9QRVJBVE9SLmRhdGVNb250aCArIFwiKFwiICsgZnJhZ21lbnQgKyBcIiwgXCIgKyBlbmNvZGUobW9udGgpICsgXCIpXVwiO1xuICAgIH0sXG4gICAgbW9udGhCZWZvcmU6IGZ1bmN0aW9uIChmcmFnbWVudCwgbW9udGgpIHtcbiAgICAgICAgcmV0dXJuIFwiW1wiICsgT1BFUkFUT1IuZGF0ZU1vbnRoQmVmb3JlICsgXCIoXCIgKyBmcmFnbWVudCArIFwiLCBcIiArIGVuY29kZShtb250aCkgKyBcIildXCI7XG4gICAgfSxcbiAgICBtb250aEFmdGVyOiBmdW5jdGlvbiAoZnJhZ21lbnQsIG1vbnRoKSB7XG4gICAgICAgIHJldHVybiBcIltcIiArIE9QRVJBVE9SLmRhdGVNb250aEFmdGVyICsgXCIoXCIgKyBmcmFnbWVudCArIFwiLCBcIiArIGVuY29kZShtb250aCkgKyBcIildXCI7XG4gICAgfSxcbiAgICB5ZWFyOiBmdW5jdGlvbiAoZnJhZ21lbnQsIHllYXIpIHtcbiAgICAgICAgcmV0dXJuIFwiW1wiICsgT1BFUkFUT1IuZGF0ZVllYXIgKyBcIihcIiArIGZyYWdtZW50ICsgXCIsIFwiICsgeWVhciArIFwiKV1cIjtcbiAgICB9LFxuICAgIGhvdXI6IGZ1bmN0aW9uIChmcmFnbWVudCwgaG91cikge1xuICAgICAgICByZXR1cm4gXCJbXCIgKyBPUEVSQVRPUi5kYXRlSG91ciArIFwiKFwiICsgZnJhZ21lbnQgKyBcIiwgXCIgKyBob3VyICsgXCIpXVwiO1xuICAgIH0sXG4gICAgaG91ckJlZm9yZTogZnVuY3Rpb24gKGZyYWdtZW50LCBob3VyKSB7XG4gICAgICAgIHJldHVybiBcIltcIiArIE9QRVJBVE9SLmRhdGVIb3VyQmVmb3JlICsgXCIoXCIgKyBmcmFnbWVudCArIFwiLCBcIiArIGhvdXIgKyBcIildXCI7XG4gICAgfSxcbiAgICBob3VyQWZ0ZXI6IGZ1bmN0aW9uIChmcmFnbWVudCwgaG91cikge1xuICAgICAgICByZXR1cm4gXCJbXCIgKyBPUEVSQVRPUi5kYXRlSG91ckFmdGVyICsgXCIoXCIgKyBmcmFnbWVudCArIFwiLCBcIiArIGhvdXIgKyBcIildXCI7XG4gICAgfSxcbn07XG52YXIgbnVtYmVyID0ge1xuICAgIGd0OiBmdW5jdGlvbiAoZnJhZ21lbnQsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBcIltcIiArIE9QRVJBVE9SLm51bWJlckd0ICsgXCIoXCIgKyBmcmFnbWVudCArIFwiLCBcIiArIHZhbHVlICsgXCIpXVwiO1xuICAgIH0sXG4gICAgbHQ6IGZ1bmN0aW9uIChmcmFnbWVudCwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFwiW1wiICsgT1BFUkFUT1IubnVtYmVyTHQgKyBcIihcIiArIGZyYWdtZW50ICsgXCIsIFwiICsgdmFsdWUgKyBcIildXCI7XG4gICAgfSxcbiAgICBpblJhbmdlOiBmdW5jdGlvbiAoZnJhZ21lbnQsIGJlZm9yZSwgYWZ0ZXIpIHtcbiAgICAgICAgcmV0dXJuIFwiW1wiICsgT1BFUkFUT1IubnVtYmVySW5SYW5nZSArIFwiKFwiICsgZnJhZ21lbnQgKyBcIiwgXCIgKyBiZWZvcmUgKyBcIiwgXCIgKyBhZnRlciArIFwiKV1cIjtcbiAgICB9LFxufTtcbnZhciBQcmVkaWNhdGVzID0ge1xuICAgIGF0OiBmdW5jdGlvbiAoZnJhZ21lbnQsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBcIltcIiArIE9QRVJBVE9SLmF0ICsgXCIoXCIgKyBmcmFnbWVudCArIFwiLCBcIiArIGVuY29kZSh2YWx1ZSkgKyBcIildXCI7XG4gICAgfSxcbiAgICBub3Q6IGZ1bmN0aW9uIChmcmFnbWVudCwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFwiW1wiICsgT1BFUkFUT1Iubm90ICsgXCIoXCIgKyBmcmFnbWVudCArIFwiLCBcIiArIGVuY29kZSh2YWx1ZSkgKyBcIildXCI7XG4gICAgfSxcbiAgICBtaXNzaW5nOiBmdW5jdGlvbiAoZnJhZ21lbnQpIHtcbiAgICAgICAgcmV0dXJuIFwiW1wiICsgT1BFUkFUT1IubWlzc2luZyArIFwiKFwiICsgZnJhZ21lbnQgKyBcIildXCI7XG4gICAgfSxcbiAgICBoYXM6IGZ1bmN0aW9uIChmcmFnbWVudCkge1xuICAgICAgICByZXR1cm4gXCJbXCIgKyBPUEVSQVRPUi5oYXMgKyBcIihcIiArIGZyYWdtZW50ICsgXCIpXVwiO1xuICAgIH0sXG4gICAgYW55OiBmdW5jdGlvbiAoZnJhZ21lbnQsIHZhbHVlcykge1xuICAgICAgICByZXR1cm4gXCJbXCIgKyBPUEVSQVRPUi5hbnkgKyBcIihcIiArIGZyYWdtZW50ICsgXCIsIFwiICsgZW5jb2RlKHZhbHVlcykgKyBcIildXCI7XG4gICAgfSxcbiAgICBpbjogZnVuY3Rpb24gKGZyYWdtZW50LCB2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIFwiW1wiICsgT1BFUkFUT1IuaW4gKyBcIihcIiArIGZyYWdtZW50ICsgXCIsIFwiICsgZW5jb2RlKHZhbHVlcykgKyBcIildXCI7XG4gICAgfSxcbiAgICBmdWxsdGV4dDogZnVuY3Rpb24gKGZyYWdtZW50LCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gXCJbXCIgKyBPUEVSQVRPUi5mdWxsdGV4dCArIFwiKFwiICsgZnJhZ21lbnQgKyBcIiwgXCIgKyBlbmNvZGUodmFsdWUpICsgXCIpXVwiO1xuICAgIH0sXG4gICAgc2ltaWxhcjogZnVuY3Rpb24gKGRvY3VtZW50SWQsIG1heFJlc3VsdHMpIHtcbiAgICAgICAgcmV0dXJuIFwiW1wiICsgT1BFUkFUT1Iuc2ltaWxhciArIFwiKFxcXCJcIiArIGRvY3VtZW50SWQgKyBcIlxcXCIsIFwiICsgbWF4UmVzdWx0cyArIFwiKV1cIjtcbiAgICB9LFxuICAgIGRhdGU6IGRhdGUsXG4gICAgZGF0ZUJlZm9yZTogZGF0ZS5iZWZvcmUsXG4gICAgZGF0ZUFmdGVyOiBkYXRlLmFmdGVyLFxuICAgIGRhdGVCZXR3ZWVuOiBkYXRlLmJldHdlZW4sXG4gICAgZGF5T2ZNb250aDogZGF0ZS5kYXlPZk1vbnRoLFxuICAgIGRheU9mTW9udGhBZnRlcjogZGF0ZS5kYXlPZk1vbnRoQWZ0ZXIsXG4gICAgZGF5T2ZNb250aEJlZm9yZTogZGF0ZS5kYXlPZk1vbnRoQmVmb3JlLFxuICAgIGRheU9mV2VlazogZGF0ZS5kYXlPZldlZWssXG4gICAgZGF5T2ZXZWVrQWZ0ZXI6IGRhdGUuZGF5T2ZXZWVrQWZ0ZXIsXG4gICAgZGF5T2ZXZWVrQmVmb3JlOiBkYXRlLmRheU9mV2Vla0JlZm9yZSxcbiAgICBtb250aDogZGF0ZS5tb250aCxcbiAgICBtb250aEJlZm9yZTogZGF0ZS5tb250aEJlZm9yZSxcbiAgICBtb250aEFmdGVyOiBkYXRlLm1vbnRoQWZ0ZXIsXG4gICAgeWVhcjogZGF0ZS55ZWFyLFxuICAgIGhvdXI6IGRhdGUuaG91cixcbiAgICBob3VyQmVmb3JlOiBkYXRlLmhvdXJCZWZvcmUsXG4gICAgaG91ckFmdGVyOiBkYXRlLmhvdXJBZnRlcixcbiAgICBudW1iZXI6IG51bWJlcixcbiAgICBndDogbnVtYmVyLmd0LFxuICAgIGx0OiBudW1iZXIubHQsXG4gICAgaW5SYW5nZTogbnVtYmVyLmluUmFuZ2UsXG4gICAgbmVhcjogZ2VvcG9pbnQubmVhcixcbiAgICBnZW9wb2ludDogZ2VvcG9pbnQsXG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gU29tZSBwb3J0aW9ucyBvZiBjb2RlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2pzaHR0cC9jb29raWVcbnZhciBkZWNvZGUgPSBkZWNvZGVVUklDb21wb25lbnQ7XG5mdW5jdGlvbiB0cnlEZWNvZGUoc3RyLCBkZWNvZGUpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlKHN0cik7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxufVxuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IHN0ciBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgfVxuICAgIHZhciBvYmogPSB7fTtcbiAgICB2YXIgb3B0ID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgcGFpcnMgPSBzdHIuc3BsaXQoLzsgKi8pO1xuICAgIHZhciBkZWMgPSBvcHQuZGVjb2RlIHx8IGRlY29kZTtcbiAgICBwYWlycy5mb3JFYWNoKGZ1bmN0aW9uIChwYWlyKSB7XG4gICAgICAgIHZhciBlcV9pZHggPSBwYWlyLmluZGV4T2YoJz0nKTtcbiAgICAgICAgLy8gc2tpcCB0aGluZ3MgdGhhdCBkb24ndCBsb29rIGxpa2Uga2V5PXZhbHVlXG4gICAgICAgIGlmIChlcV9pZHggPCAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGtleSA9IHBhaXIuc3Vic3RyKDAsIGVxX2lkeCkudHJpbSgpO1xuICAgICAgICB2YXIgdmFsID0gcGFpci5zdWJzdHIoKytlcV9pZHgsIHBhaXIubGVuZ3RoKS50cmltKCk7XG4gICAgICAgIC8vIHF1b3RlZCB2YWx1ZXNcbiAgICAgICAgaWYgKCdcIicgPT0gdmFsWzBdKSB7XG4gICAgICAgICAgICB2YWwgPSB2YWwuc2xpY2UoMSwgLTEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIG9ubHkgYXNzaWduIG9uY2VcbiAgICAgICAgaWYgKHVuZGVmaW5lZCA9PSBvYmpba2V5XSkge1xuICAgICAgICAgICAgb2JqW2tleV0gPSB0cnlEZWNvZGUodmFsLCBkZWMpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iajtcbn1cbnZhciBDb29raWVzID0geyBwYXJzZTogcGFyc2UgfTtcblxuZnVuY3Rpb24gY3JlYXRlUHJldmlld1Jlc29sdmVyKHRva2VuLCBkb2N1bWVudElkLCBnZXREb2NCeUlEKSB7XG4gICAgdmFyIHJlc29sdmUgPSBmdW5jdGlvbiAobGlua1Jlc29sdmVyLCBkZWZhdWx0VXJsLCBjYikge1xuICAgICAgICBpZiAoZG9jdW1lbnRJZCAmJiBnZXREb2NCeUlEKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RG9jQnlJRChkb2N1bWVudElkLCB7IHJlZjogdG9rZW4gfSkudGhlbihmdW5jdGlvbiAoZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRlZmF1bHRVcmwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdFVybDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSAobGlua1Jlc29sdmVyICYmIGxpbmtSZXNvbHZlcihkb2N1bWVudCkpIHx8IGRvY3VtZW50LnVybCB8fCBkZWZhdWx0VXJsO1xuICAgICAgICAgICAgICAgICAgICBjYiAmJiBjYihudWxsLCB1cmwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShkZWZhdWx0VXJsKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHsgdG9rZW46IHRva2VuLCBkb2N1bWVudElkOiBkb2N1bWVudElkLCByZXNvbHZlOiByZXNvbHZlIH07XG59XG5cbnZhciBQUkVWSUVXX0NPT0tJRSA9ICdpby5wcmlzbWljLnByZXZpZXcnO1xudmFyIEVYUEVSSU1FTlRfQ09PS0lFID0gJ2lvLnByaXNtaWMuZXhwZXJpbWVudCc7XG52YXIgUmVzb2x2ZWRBcGkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzb2x2ZWRBcGkoZGF0YSwgaHR0cENsaWVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLm1hc3RlclJlZiA9IGRhdGEucmVmcy5maWx0ZXIoZnVuY3Rpb24gKHJlZikgeyByZXR1cm4gcmVmLmlzTWFzdGVyUmVmOyB9KVswXTtcbiAgICAgICAgdGhpcy5leHBlcmltZW50cyA9IG5ldyBFeHBlcmltZW50cyhkYXRhLmV4cGVyaW1lbnRzKTtcbiAgICAgICAgdGhpcy5ib29rbWFya3MgPSBkYXRhLmJvb2ttYXJrcztcbiAgICAgICAgdGhpcy5odHRwQ2xpZW50ID0gaHR0cENsaWVudDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5yZWZzID0gZGF0YS5yZWZzO1xuICAgICAgICB0aGlzLnRhZ3MgPSBkYXRhLnRhZ3M7XG4gICAgICAgIHRoaXMudHlwZXMgPSBkYXRhLnR5cGVzO1xuICAgICAgICB0aGlzLmxhbmd1YWdlcyA9IGRhdGEubGFuZ3VhZ2VzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgdXNlYWJsZSBmb3JtIGZyb20gaXRzIGlkLCBhcyBkZXNjcmliZWQgaW4gdGhlIFJFU1RmdWwgZGVzY3JpcHRpb24gb2YgdGhlIEFQSS5cbiAgICAgKiBGb3IgaW5zdGFuY2U6IGFwaS5mb3JtKFwiZXZlcnl0aGluZ1wiKSB3b3JrcyBvbiBldmVyeSByZXBvc2l0b3J5IChhcyBcImV2ZXJ5dGhpbmdcIiBleGlzdHMgYnkgZGVmYXVsdClcbiAgICAgKiBZb3UgY2FuIHRoZW4gY2hhaW4gdGhlIGNhbGxzOiBhcGkuZm9ybShcImV2ZXJ5dGhpbmdcIikucXVlcnkoJ1tbOmQgPSBhdChkb2N1bWVudC5pZCwgXCJVa0wwZ011dnpZVUFOQ3BmXCIpXV0nKS5yZWYocmVmKS5zdWJtaXQoKVxuICAgICAqL1xuICAgIFJlc29sdmVkQXBpLnByb3RvdHlwZS5mb3JtID0gZnVuY3Rpb24gKGZvcm1JZCkge1xuICAgICAgICB2YXIgZm9ybSA9IHRoaXMuZGF0YS5mb3Jtc1tmb3JtSWRdO1xuICAgICAgICBpZiAoZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTZWFyY2hGb3JtKGZvcm0sIHRoaXMuaHR0cENsaWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBSZXNvbHZlZEFwaS5wcm90b3R5cGUuZXZlcnl0aGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGYgPSB0aGlzLmZvcm0oJ2V2ZXJ5dGhpbmcnKTtcbiAgICAgICAgaWYgKCFmKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGV2ZXJ5dGhpbmcgZm9ybScpO1xuICAgICAgICByZXR1cm4gZjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoZSBJRCBvZiB0aGUgbWFzdGVyIHJlZiBvbiB0aGlzIHByaXNtaWMuaW8gQVBJLlxuICAgICAqIERvIG5vdCB1c2UgbGlrZSB0aGlzOiBzZWFyY2hGb3JtLnJlZihhcGkubWFzdGVyKCkpLlxuICAgICAqIEluc3RlYWQsIHNldCB5b3VyIHJlZiBvbmNlIGluIGEgdmFyaWFibGUsIGFuZCBjYWxsIGl0IHdoZW4geW91IG5lZWQgaXQ7IHRoaXMgd2lsbCBhbGxvdyB0byBjaGFuZ2UgdGhlIHJlZiB5b3UncmUgdmlld2luZyBlYXNpbHkgZm9yIHlvdXIgZW50aXJlIHBhZ2UuXG4gICAgICovXG4gICAgUmVzb2x2ZWRBcGkucHJvdG90eXBlLm1hc3RlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFzdGVyUmVmLnJlZjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHJlZiBJRCBmb3IgYSBnaXZlbiByZWYncyBsYWJlbC5cbiAgICAgKiBEbyBub3QgdXNlIGxpa2UgdGhpczogc2VhcmNoRm9ybS5yZWYoYXBpLnJlZihcIkZ1dHVyZSByZWxlYXNlIGxhYmVsXCIpKS5cbiAgICAgKiBJbnN0ZWFkLCBzZXQgeW91ciByZWYgb25jZSBpbiBhIHZhcmlhYmxlLCBhbmQgY2FsbCBpdCB3aGVuIHlvdSBuZWVkIGl0OyB0aGlzIHdpbGwgYWxsb3cgdG8gY2hhbmdlIHRoZSByZWYgeW91J3JlIHZpZXdpbmcgZWFzaWx5IGZvciB5b3VyIGVudGlyZSBwYWdlLlxuICAgICAqL1xuICAgIFJlc29sdmVkQXBpLnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbiAobGFiZWwpIHtcbiAgICAgICAgdmFyIHJlZiA9IHRoaXMuZGF0YS5yZWZzLmZpbHRlcihmdW5jdGlvbiAocmVmKSB7IHJldHVybiByZWYubGFiZWwgPT09IGxhYmVsOyB9KVswXTtcbiAgICAgICAgcmV0dXJuIHJlZiA/IHJlZi5yZWYgOiBudWxsO1xuICAgIH07XG4gICAgUmVzb2x2ZWRBcGkucHJvdG90eXBlLmN1cnJlbnRFeHBlcmltZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leHBlcmltZW50cy5jdXJyZW50KCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBRdWVyeSB0aGUgcmVwb3NpdG9yeVxuICAgICAqL1xuICAgIFJlc29sdmVkQXBpLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChxLCBvcHRpb25zT3JDYWxsYmFjaywgY2IpIHtcbiAgICAgICAgaWYgKGNiID09PSB2b2lkIDApIHsgY2IgPSBmdW5jdGlvbiAoKSB7IH07IH1cbiAgICAgICAgdmFyIF9hID0gdHlwZW9mIG9wdGlvbnNPckNhbGxiYWNrID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICA/IHsgb3B0aW9uczoge30sIGNhbGxiYWNrOiBvcHRpb25zT3JDYWxsYmFjayB9XG4gICAgICAgICAgICA6IHsgb3B0aW9uczogb3B0aW9uc09yQ2FsbGJhY2sgfHwge30sIGNhbGxiYWNrOiBjYiB9LCBvcHRpb25zID0gX2Eub3B0aW9ucywgY2FsbGJhY2sgPSBfYS5jYWxsYmFjaztcbiAgICAgICAgdmFyIGZvcm0gPSB0aGlzLmV2ZXJ5dGhpbmcoKTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGZvcm0gPSBmb3JtLnNldChrZXksIG9wdGlvbnNba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvcHRpb25zLnJlZikge1xuICAgICAgICAgICAgLy8gTG9vayBpbiBjb29raWVzIGlmIHdlIGhhdmUgYSByZWYgKHByZXZpZXcgb3IgZXhwZXJpbWVudClcbiAgICAgICAgICAgIHZhciBjb29raWVTdHJpbmcgPSAnJztcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVxKSB7IC8vIE5vZGVKU1xuICAgICAgICAgICAgICAgIGNvb2tpZVN0cmluZyA9IHRoaXMub3B0aW9ucy5yZXEuaGVhZGVyc1snY29va2llJ10gfHwgJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHsgLy8gQnJvd3NlclxuICAgICAgICAgICAgICAgIGNvb2tpZVN0cmluZyA9IHdpbmRvdy5kb2N1bWVudC5jb29raWUgfHwgJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY29va2llcyA9IENvb2tpZXMucGFyc2UoY29va2llU3RyaW5nKTtcbiAgICAgICAgICAgIHZhciBwcmV2aWV3UmVmID0gY29va2llc1tQUkVWSUVXX0NPT0tJRV07XG4gICAgICAgICAgICB2YXIgZXhwZXJpbWVudFJlZiA9IHRoaXMuZXhwZXJpbWVudHMucmVmRnJvbUNvb2tpZShjb29raWVzW0VYUEVSSU1FTlRfQ09PS0lFXSk7XG4gICAgICAgICAgICBmb3JtID0gZm9ybS5yZWYocHJldmlld1JlZiB8fCBleHBlcmltZW50UmVmIHx8IHRoaXMubWFzdGVyUmVmLnJlZik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHEpIHtcbiAgICAgICAgICAgIGZvcm0ucXVlcnkocSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvcm0uc3VibWl0KGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlIHRoZSBkb2N1bWVudCByZXR1cm5lZCBieSB0aGUgZ2l2ZW4gcXVlcnlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xhcnJheXxQcmVkaWNhdGV9IHRoZSBxdWVyeVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhZGRpdGlvbmFsIHBhcmFtZXRlcnMuIEluIE5vZGVKUywgcGFzcyB0aGUgcmVxdWVzdCBhcyAncmVxJy5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayhlcnIsIGRvYylcbiAgICAgKi9cbiAgICBSZXNvbHZlZEFwaS5wcm90b3R5cGUucXVlcnlGaXJzdCA9IGZ1bmN0aW9uIChxLCBvcHRpb25zT3JDYWxsYmFjaywgY2IpIHtcbiAgICAgICAgdmFyIF9hID0gdHlwZW9mIG9wdGlvbnNPckNhbGxiYWNrID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICA/IHsgb3B0aW9uczoge30sIGNhbGxiYWNrOiBvcHRpb25zT3JDYWxsYmFjayB9XG4gICAgICAgICAgICA6IHsgb3B0aW9uczogb3B0aW9uc09yQ2FsbGJhY2sgfHwge30sIGNhbGxiYWNrOiBjYiB8fCAoZnVuY3Rpb24gKCkgeyB9KSB9LCBvcHRpb25zID0gX2Eub3B0aW9ucywgY2FsbGJhY2sgPSBfYS5jYWxsYmFjaztcbiAgICAgICAgb3B0aW9ucy5wYWdlID0gMTtcbiAgICAgICAgb3B0aW9ucy5wYWdlU2l6ZSA9IDE7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5KHEsIG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB2YXIgZG9jdW1lbnQgPSByZXNwb25zZSAmJiByZXNwb25zZS5yZXN1bHRzICYmIHJlc3BvbnNlLnJlc3VsdHNbMF07XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCBkb2N1bWVudCk7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0cmlldmUgdGhlIGRvY3VtZW50IHdpdGggdGhlIGdpdmVuIGlkXG4gICAgICovXG4gICAgUmVzb2x2ZWRBcGkucHJvdG90eXBlLmdldEJ5SUQgPSBmdW5jdGlvbiAoaWQsIG1heWJlT3B0aW9ucywgY2IpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBtYXliZU9wdGlvbnMgPyBfX2Fzc2lnbih7fSwgbWF5YmVPcHRpb25zKSA6IHt9O1xuICAgICAgICBpZiAoIW9wdGlvbnMubGFuZylcbiAgICAgICAgICAgIG9wdGlvbnMubGFuZyA9ICcqJztcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlGaXJzdChQcmVkaWNhdGVzLmF0KCdkb2N1bWVudC5pZCcsIGlkKSwgb3B0aW9ucywgY2IpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0cmlldmUgbXVsdGlwbGUgZG9jdW1lbnRzIGZyb20gYW4gYXJyYXkgb2YgaWRcbiAgICAgKi9cbiAgICBSZXNvbHZlZEFwaS5wcm90b3R5cGUuZ2V0QnlJRHMgPSBmdW5jdGlvbiAoaWRzLCBtYXliZU9wdGlvbnMsIGNiKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gbWF5YmVPcHRpb25zID8gX19hc3NpZ24oe30sIG1heWJlT3B0aW9ucykgOiB7fTtcbiAgICAgICAgaWYgKCFvcHRpb25zLmxhbmcpXG4gICAgICAgICAgICBvcHRpb25zLmxhbmcgPSAnKic7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5KFByZWRpY2F0ZXMuaW4oJ2RvY3VtZW50LmlkJywgaWRzKSwgb3B0aW9ucywgY2IpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0cmlldmUgdGhlIGRvY3VtZW50IHdpdGggdGhlIGdpdmVuIHVpZFxuICAgICAqL1xuICAgIFJlc29sdmVkQXBpLnByb3RvdHlwZS5nZXRCeVVJRCA9IGZ1bmN0aW9uICh0eXBlLCB1aWQsIG1heWJlT3B0aW9ucywgY2IpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBtYXliZU9wdGlvbnMgPyBfX2Fzc2lnbih7fSwgbWF5YmVPcHRpb25zKSA6IHt9O1xuICAgICAgICBpZiAob3B0aW9ucy5sYW5nID09PSAnKicpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGT1JCSURERU4uIFlvdSBjYW4ndCB1c2UgZ2V0QnlVSUQgd2l0aCAqLCB1c2UgdGhlIHByZWRpY2F0ZXMgaW5zdGVhZC5cIik7XG4gICAgICAgIGlmICghb3B0aW9ucy5wYWdlKVxuICAgICAgICAgICAgb3B0aW9ucy5wYWdlID0gMTtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlGaXJzdChQcmVkaWNhdGVzLmF0KFwibXkuXCIgKyB0eXBlICsgXCIudWlkXCIsIHVpZCksIG9wdGlvbnMsIGNiKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlIHRoZSBzaW5nbGV0b24gZG9jdW1lbnQgd2l0aCB0aGUgZ2l2ZW4gdHlwZVxuICAgICAqL1xuICAgIFJlc29sdmVkQXBpLnByb3RvdHlwZS5nZXRTaW5nbGUgPSBmdW5jdGlvbiAodHlwZSwgbWF5YmVPcHRpb25zLCBjYikge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IG1heWJlT3B0aW9ucyA/IF9fYXNzaWduKHt9LCBtYXliZU9wdGlvbnMpIDoge307XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5Rmlyc3QoUHJlZGljYXRlcy5hdCgnZG9jdW1lbnQudHlwZScsIHR5cGUpLCBvcHRpb25zLCBjYik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZSB0aGUgZG9jdW1lbnQgd2l0aCB0aGUgZ2l2ZW4gYm9va21hcmtcbiAgICAgKi9cbiAgICBSZXNvbHZlZEFwaS5wcm90b3R5cGUuZ2V0Qm9va21hcmsgPSBmdW5jdGlvbiAoYm9va21hcmssIG1heWJlT3B0aW9ucywgY2IpIHtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5kYXRhLmJvb2ttYXJrc1tib29rbWFya107XG4gICAgICAgIGlmIChpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QnlJRChpZCwgbWF5YmVPcHRpb25zLCBjYik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ0Vycm9yIHJldHJpZXZpbmcgYm9va21hcmtlZCBpZCcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZXNvbHZlZEFwaS5wcm90b3R5cGUuZ2V0UHJldmlld1Jlc29sdmVyID0gZnVuY3Rpb24gKHRva2VuLCBkb2N1bWVudElkKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVQcmV2aWV3UmVzb2x2ZXIodG9rZW4sIGRvY3VtZW50SWQsIHRoaXMuZ2V0QnlJRC5iaW5kKHRoaXMpKTtcbiAgICB9O1xuICAgIFJlc29sdmVkQXBpLnByb3RvdHlwZS5wcmV2aWV3U2Vzc2lvbiA9IGZ1bmN0aW9uICh0b2tlbiwgbGlua1Jlc29sdmVyLCBkZWZhdWx0VXJsLCBjYikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjb25zb2xlLndhcm4oJ3ByZXZpZXdTZXNzaW9uIGZ1bmN0aW9uIGlzIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgZ2V0UHJldmlld1Jlc29sdmVyIGZ1bmN0aW9uLicpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgX3RoaXMuaHR0cENsaWVudC5yZXF1ZXN0KHRva2VuLCBmdW5jdGlvbiAoZSwgcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2IgJiYgY2IoZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0Lm1haW5Eb2N1bWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGVmYXVsdFVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRlZmF1bHRVcmwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmdldEJ5SUQocmVzdWx0Lm1haW5Eb2N1bWVudCwgeyByZWY6IHRva2VuIH0pLnRoZW4oZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkZWZhdWx0VXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkZWZhdWx0VXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSAobGlua1Jlc29sdmVyICYmIGxpbmtSZXNvbHZlcihkb2N1bWVudCkpIHx8IGRvY3VtZW50LnVybCB8fCBkZWZhdWx0VXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYiAmJiBjYihudWxsLCB1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBSZXNvbHZlZEFwaTtcbn0oKSk7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG4vKipcbiogQSBkb3VibHkgbGlua2VkIGxpc3QtYmFzZWQgTGVhc3QgUmVjZW50bHkgVXNlZCAoTFJVKSBjYWNoZS4gV2lsbCBrZWVwIG1vc3RcbiogcmVjZW50bHkgdXNlZCBpdGVtcyB3aGlsZSBkaXNjYXJkaW5nIGxlYXN0IHJlY2VudGx5IHVzZWQgaXRlbXMgd2hlbiBpdHMgbGltaXRcbiogaXMgcmVhY2hlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgTUlULiBDb3B5cmlnaHQgKGMpIDIwMTAgUmFzbXVzIEFuZGVyc3NvbiA8aHR0cDovL2h1bmNoLnNlLz5cbiogVHlwZXNjcmlwdC1pZmllZCBieSBPbGVrc2FuZHIgTmlraXRpbiA8aHR0cHM6Ly90dm9yaS5pbmZvPlxuKlxuKiBJbGx1c3RyYXRpb24gb2YgdGhlIGRlc2lnbjpcbipcbiogICAgICAgZW50cnkgICAgICAgICAgICAgZW50cnkgICAgICAgICAgICAgZW50cnkgICAgICAgICAgICAgZW50cnlcbiogICAgICAgX19fX19fICAgICAgICAgICAgX19fX19fICAgICAgICAgICAgX19fX19fICAgICAgICAgICAgX19fX19fXG4qICAgICAgfCBoZWFkIHwubmV3ZXIgPT4gfCAgICAgIHwubmV3ZXIgPT4gfCAgICAgIHwubmV3ZXIgPT4gfCB0YWlsIHxcbiogICAgICB8ICBBICAgfCAgICAgICAgICB8ICBCICAgfCAgICAgICAgICB8ICBDICAgfCAgICAgICAgICB8ICBEICAgfFxuKiAgICAgIHxfX19fX198IDw9IG9sZGVyLnxfX19fX198IDw9IG9sZGVyLnxfX19fX198IDw9IG9sZGVyLnxfX19fX198XG4qXG4qICByZW1vdmVkICA8LS0gIDwtLSAgPC0tICA8LS0gIDwtLSAgPC0tICA8LS0gIDwtLSAgPC0tICA8LS0gIDwtLSAgYWRkZWRcbiovXG5mdW5jdGlvbiBNYWtlTFJVQ2FjaGUobGltaXQpIHtcbiAgICByZXR1cm4gbmV3IExSVUNhY2hlKGxpbWl0KTtcbn1cbmZ1bmN0aW9uIExSVUNhY2hlKGxpbWl0KSB7XG4gICAgLy8gQ3VycmVudCBzaXplIG9mIHRoZSBjYWNoZS4gKFJlYWQtb25seSkuXG4gICAgdGhpcy5zaXplID0gMDtcbiAgICAvLyBNYXhpbXVtIG51bWJlciBvZiBpdGVtcyB0aGlzIGNhY2hlIGNhbiBob2xkLlxuICAgIHRoaXMubGltaXQgPSBsaW1pdDtcbiAgICB0aGlzLl9rZXltYXAgPSB7fTtcbn1cbi8qKlxuICogUHV0IDx2YWx1ZT4gaW50byB0aGUgY2FjaGUgYXNzb2NpYXRlZCB3aXRoIDxrZXk+LiBSZXR1cm5zIHRoZSBlbnRyeSB3aGljaCB3YXNcbiAqIHJlbW92ZWQgdG8gbWFrZSByb29tIGZvciB0aGUgbmV3IGVudHJ5LiBPdGhlcndpc2UgdW5kZWZpbmVkIGlzIHJldHVybmVkXG4gKiAoaS5lLiBpZiB0aGVyZSB3YXMgZW5vdWdoIHJvb20gYWxyZWFkeSkuXG4gKi9cbkxSVUNhY2hlLnByb3RvdHlwZS5wdXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIHZhciBlbnRyeSA9IHsga2V5OiBrZXksIHZhbHVlOiB2YWx1ZSB9O1xuICAgIC8vIE5vdGU6IE5vIHByb3RlY3Rpb24gYWdhaW5zIHJlcGxhY2luZywgYW5kIHRodXMgb3JwaGFuIGVudHJpZXMuIEJ5IGRlc2lnbi5cbiAgICB0aGlzLl9rZXltYXBba2V5XSA9IGVudHJ5O1xuICAgIGlmICh0aGlzLnRhaWwpIHtcbiAgICAgICAgLy8gbGluayBwcmV2aW91cyB0YWlsIHRvIHRoZSBuZXcgdGFpbCAoZW50cnkpXG4gICAgICAgIHRoaXMudGFpbC5uZXdlciA9IGVudHJ5O1xuICAgICAgICBlbnRyeS5vbGRlciA9IHRoaXMudGFpbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIHdlJ3JlIGZpcnN0IGluIC0tIHlheVxuICAgICAgICB0aGlzLmhlYWQgPSBlbnRyeTtcbiAgICB9XG4gICAgLy8gYWRkIG5ldyBlbnRyeSB0byB0aGUgZW5kIG9mIHRoZSBsaW5rZWQgbGlzdCAtLSBpdCdzIG5vdyB0aGUgZnJlc2hlc3QgZW50cnkuXG4gICAgdGhpcy50YWlsID0gZW50cnk7XG4gICAgaWYgKHRoaXMuc2l6ZSA9PT0gdGhpcy5saW1pdCkge1xuICAgICAgICAvLyB3ZSBoaXQgdGhlIGxpbWl0IC0tIHJlbW92ZSB0aGUgaGVhZFxuICAgICAgICByZXR1cm4gdGhpcy5zaGlmdCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gaW5jcmVhc2UgdGhlIHNpemUgY291bnRlclxuICAgICAgICB0aGlzLnNpemUrKztcbiAgICB9XG59O1xuLyoqXG4gKiBQdXJnZSB0aGUgbGVhc3QgcmVjZW50bHkgdXNlZCAob2xkZXN0KSBlbnRyeSBmcm9tIHRoZSBjYWNoZS4gUmV0dXJucyB0aGVcbiAqIHJlbW92ZWQgZW50cnkgb3IgdW5kZWZpbmVkIGlmIHRoZSBjYWNoZSB3YXMgZW1wdHkuXG4gKlxuICogSWYgeW91IG5lZWQgdG8gcGVyZm9ybSBhbnkgZm9ybSBvZiBmaW5hbGl6YXRpb24gb2YgcHVyZ2VkIGl0ZW1zLCB0aGlzIGlzIGFcbiAqIGdvb2QgcGxhY2UgdG8gZG8gaXQuIFNpbXBseSBvdmVycmlkZS9yZXBsYWNlIHRoaXMgZnVuY3Rpb246XG4gKlxuICogICB2YXIgYyA9IG5ldyBMUlVDYWNoZSgxMjMpO1xuICogICBjLnNoaWZ0ID0gZnVuY3Rpb24oKSB7XG4gKiAgICAgdmFyIGVudHJ5ID0gTFJVQ2FjaGUucHJvdG90eXBlLnNoaWZ0LmNhbGwodGhpcyk7XG4gKiAgICAgZG9Tb21ldGhpbmdXaXRoKGVudHJ5KTtcbiAqICAgICByZXR1cm4gZW50cnk7XG4gKiAgIH1cbiAqL1xuTFJVQ2FjaGUucHJvdG90eXBlLnNoaWZ0ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIHRvZG86IGhhbmRsZSBzcGVjaWFsIGNhc2Ugd2hlbiBsaW1pdCA9PSAxXG4gICAgdmFyIGVudHJ5ID0gdGhpcy5oZWFkO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgICBpZiAodGhpcy5oZWFkLm5ld2VyKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV3ZXI7XG4gICAgICAgICAgICB0aGlzLmhlYWQub2xkZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhlYWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIGxhc3Qgc3Ryb25nIHJlZmVyZW5jZSB0byA8ZW50cnk+IGFuZCByZW1vdmUgbGlua3MgZnJvbSB0aGUgcHVyZ2VkXG4gICAgICAgIC8vIGVudHJ5IGJlaW5nIHJldHVybmVkOlxuICAgICAgICBlbnRyeS5uZXdlciA9IGVudHJ5Lm9sZGVyID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyBkZWxldGUgaXMgc2xvdywgYnV0IHdlIG5lZWQgdG8gZG8gdGhpcyB0byBhdm9pZCB1bmNvbnRyb2xsYWJsZSBncm93dGg6XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9rZXltYXBbZW50cnkua2V5XTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ3B1cmdpbmcgJywgZW50cnkua2V5KTtcbiAgICByZXR1cm4gZW50cnk7XG59O1xuLyoqXG4gKiBHZXQgYW5kIHJlZ2lzdGVyIHJlY2VudCB1c2Ugb2YgPGtleT4uIFJldHVybnMgdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCA8a2V5PlxuICogb3IgdW5kZWZpbmVkIGlmIG5vdCBpbiBjYWNoZS5cbiAqL1xuTFJVQ2FjaGUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXksIHJldHVybkVudHJ5KSB7XG4gICAgLy8gRmlyc3QsIGZpbmQgb3VyIGNhY2hlIGVudHJ5XG4gICAgdmFyIGVudHJ5ID0gdGhpcy5fa2V5bWFwW2tleV07XG4gICAgaWYgKGVudHJ5ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybjsgLy8gTm90IGNhY2hlZC4gU29ycnkuXG4gICAgLy8gQXMgPGtleT4gd2FzIGZvdW5kIGluIHRoZSBjYWNoZSwgcmVnaXN0ZXIgaXQgYXMgYmVpbmcgcmVxdWVzdGVkIHJlY2VudGx5XG4gICAgaWYgKGVudHJ5ID09PSB0aGlzLnRhaWwpIHtcbiAgICAgICAgLy8gQWxyZWFkeSB0aGUgbW9zdCByZWNlbnRseSB1c2VkIGVudHJ5LCBzbyBubyBuZWVkIHRvIHVwZGF0ZSB0aGUgbGlzdFxuICAgICAgICByZXR1cm4gcmV0dXJuRW50cnkgPyBlbnRyeSA6IGVudHJ5LnZhbHVlO1xuICAgIH1cbiAgICAvLyBIRUFELS0tLS0tLS0tLS0tLS1UQUlMXG4gICAgLy8gICA8Lm9sZGVyICAgLm5ld2VyPlxuICAgIC8vICA8LS0tIGFkZCBkaXJlY3Rpb24gLS1cbiAgICAvLyAgIEEgIEIgIEMgIDxEPiAgRVxuICAgIGlmIChlbnRyeS5uZXdlcikge1xuICAgICAgICBpZiAoZW50cnkgPT09IHRoaXMuaGVhZClcbiAgICAgICAgICAgIHRoaXMuaGVhZCA9IGVudHJ5Lm5ld2VyO1xuICAgICAgICBlbnRyeS5uZXdlci5vbGRlciA9IGVudHJ5Lm9sZGVyOyAvLyBDIDwtLSBFLlxuICAgIH1cbiAgICBpZiAoZW50cnkub2xkZXIpXG4gICAgICAgIGVudHJ5Lm9sZGVyLm5ld2VyID0gZW50cnkubmV3ZXI7IC8vIEMuIC0tPiBFXG4gICAgZW50cnkubmV3ZXIgPSB1bmRlZmluZWQ7IC8vIEQgLS14XG4gICAgZW50cnkub2xkZXIgPSB0aGlzLnRhaWw7IC8vIEQuIC0tPiBFXG4gICAgaWYgKHRoaXMudGFpbClcbiAgICAgICAgdGhpcy50YWlsLm5ld2VyID0gZW50cnk7IC8vIEUuIDwtLSBEXG4gICAgdGhpcy50YWlsID0gZW50cnk7XG4gICAgcmV0dXJuIHJldHVybkVudHJ5ID8gZW50cnkgOiBlbnRyeS52YWx1ZTtcbn07XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGb2xsb3dpbmcgY29kZSBpcyBvcHRpb25hbCBhbmQgY2FuIGJlIHJlbW92ZWQgd2l0aG91dCBicmVha2luZyB0aGUgY29yZVxuLy8gZnVuY3Rpb25hbGl0eS5cbi8qKlxuICogQ2hlY2sgaWYgPGtleT4gaXMgaW4gdGhlIGNhY2hlIHdpdGhvdXQgcmVnaXN0ZXJpbmcgcmVjZW50IHVzZS4gRmVhc2libGUgaWZcbiAqIHlvdSBkbyBub3Qgd2FudCB0byBjaGFnZSB0aGUgc3RhdGUgb2YgdGhlIGNhY2hlLCBidXQgb25seSBcInBlZWtcIiBhdCBpdC5cbiAqIFJldHVybnMgdGhlIGVudHJ5IGFzc29jaWF0ZWQgd2l0aCA8a2V5PiBpZiBmb3VuZCwgb3IgdW5kZWZpbmVkIGlmIG5vdCBmb3VuZC5cbiAqL1xuTFJVQ2FjaGUucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleW1hcFtrZXldO1xufTtcbi8qKlxuICogVXBkYXRlIHRoZSB2YWx1ZSBvZiBlbnRyeSB3aXRoIDxrZXk+LiBSZXR1cm5zIHRoZSBvbGQgdmFsdWUsIG9yIHVuZGVmaW5lZCBpZlxuICogZW50cnkgd2FzIG5vdCBpbiB0aGUgY2FjaGUuXG4gKi9cbkxSVUNhY2hlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIHZhciBvbGR2YWx1ZTtcbiAgICB2YXIgZW50cnkgPSB0aGlzLmdldChrZXksIHRydWUpO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgICBvbGR2YWx1ZSA9IGVudHJ5LnZhbHVlO1xuICAgICAgICBlbnRyeS52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgb2xkdmFsdWUgPSB0aGlzLnB1dChrZXksIHZhbHVlKTtcbiAgICAgICAgaWYgKG9sZHZhbHVlKVxuICAgICAgICAgICAgb2xkdmFsdWUgPSBvbGR2YWx1ZS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9sZHZhbHVlO1xufTtcbi8qKlxuICogUmVtb3ZlIGVudHJ5IDxrZXk+IGZyb20gY2FjaGUgYW5kIHJldHVybiBpdHMgdmFsdWUuIFJldHVybnMgdW5kZWZpbmVkIGlmIG5vdFxuICogZm91bmQuXG4gKi9cbkxSVUNhY2hlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGVudHJ5ID0gdGhpcy5fa2V5bWFwW2tleV07XG4gICAgaWYgKCFlbnRyeSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGRlbGV0ZSB0aGlzLl9rZXltYXBbZW50cnkua2V5XTsgLy8gbmVlZCB0byBkbyBkZWxldGUgdW5mb3J0dW5hdGVseVxuICAgIGlmIChlbnRyeS5uZXdlciAmJiBlbnRyeS5vbGRlcikge1xuICAgICAgICAvLyByZWxpbmsgdGhlIG9sZGVyIGVudHJ5IHdpdGggdGhlIG5ld2VyIGVudHJ5XG4gICAgICAgIGVudHJ5Lm9sZGVyLm5ld2VyID0gZW50cnkubmV3ZXI7XG4gICAgICAgIGVudHJ5Lm5ld2VyLm9sZGVyID0gZW50cnkub2xkZXI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGVudHJ5Lm5ld2VyKSB7XG4gICAgICAgIC8vIHJlbW92ZSB0aGUgbGluayB0byB1c1xuICAgICAgICBlbnRyeS5uZXdlci5vbGRlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gbGluayB0aGUgbmV3ZXIgZW50cnkgdG8gaGVhZFxuICAgICAgICB0aGlzLmhlYWQgPSBlbnRyeS5uZXdlcjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZW50cnkub2xkZXIpIHtcbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBsaW5rIHRvIHVzXG4gICAgICAgIGVudHJ5Lm9sZGVyLm5ld2VyID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyBsaW5rIHRoZSBuZXdlciBlbnRyeSB0byBoZWFkXG4gICAgICAgIHRoaXMudGFpbCA9IGVudHJ5Lm9sZGVyO1xuICAgIH1cbiAgICBlbHNlIHsgLy8gaWYoZW50cnkub2xkZXIgPT09IHVuZGVmaW5lZCAmJiBlbnRyeS5uZXdlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuaGVhZCA9IHRoaXMudGFpbCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy5zaXplLS07XG4gICAgcmV0dXJuIGVudHJ5LnZhbHVlO1xufTtcbi8qKiBSZW1vdmVzIGFsbCBlbnRyaWVzICovXG5MUlVDYWNoZS5wcm90b3R5cGUucmVtb3ZlQWxsID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFRoaXMgc2hvdWxkIGJlIHNhZmUsIGFzIHdlIG5ldmVyIGV4cG9zZSBzdHJvbmcgcmVmcmVuY2VzIHRvIHRoZSBvdXRzaWRlXG4gICAgdGhpcy5oZWFkID0gdGhpcy50YWlsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgdGhpcy5fa2V5bWFwID0ge307XG59O1xuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgY29udGFpbmluZyBhbGwga2V5cyBvZiBlbnRyaWVzIHN0b3JlZCBpbiB0aGUgY2FjaGUgb2JqZWN0LCBpblxuICogYXJiaXRyYXJ5IG9yZGVyLlxuICovXG5pZiAodHlwZW9mIE9iamVjdC5rZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgTFJVQ2FjaGUucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9rZXltYXApOyB9O1xufVxuZWxzZSB7XG4gICAgTFJVQ2FjaGUucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBrZXlzID0gW107XG4gICAgICAgIGZvciAodmFyIGsgaW4gdGhpcy5fa2V5bWFwKVxuICAgICAgICAgICAga2V5cy5wdXNoKGspO1xuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9O1xufVxuLyoqXG4gKiBDYWxsIGBmdW5gIGZvciBlYWNoIGVudHJ5LiBTdGFydGluZyB3aXRoIHRoZSBuZXdlc3QgZW50cnkgaWYgYGRlc2NgIGlzIGEgdHJ1ZVxuICogdmFsdWUsIG90aGVyd2lzZSBzdGFydHMgd2l0aCB0aGUgb2xkZXN0IChoZWFkKSBlbnJ0eSBhbmQgbW92ZXMgdG93YXJkcyB0aGVcbiAqIHRhaWwuXG4gKlxuICogYGZ1bmAgaXMgY2FsbGVkIHdpdGggMyBhcmd1bWVudHMgaW4gdGhlIGNvbnRleHQgYGNvbnRleHRgOlxuICogICBgZnVuLmNhbGwoY29udGV4dCwgT2JqZWN0IGtleSwgT2JqZWN0IHZhbHVlLCBMUlVDYWNoZSBzZWxmKWBcbiAqL1xuTFJVQ2FjaGUucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoZnVuLCBjb250ZXh0LCBkZXNjKSB7XG4gICAgdmFyIGVudHJ5O1xuICAgIGlmIChjb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICAgIGRlc2MgPSB0cnVlO1xuICAgICAgICBjb250ZXh0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgY29udGV4dCAhPT0gJ29iamVjdCcpXG4gICAgICAgIGNvbnRleHQgPSB0aGlzO1xuICAgIGlmIChkZXNjKSB7XG4gICAgICAgIGVudHJ5ID0gdGhpcy50YWlsO1xuICAgICAgICB3aGlsZSAoZW50cnkpIHtcbiAgICAgICAgICAgIGZ1bi5jYWxsKGNvbnRleHQsIGVudHJ5LmtleSwgZW50cnkudmFsdWUsIHRoaXMpO1xuICAgICAgICAgICAgZW50cnkgPSBlbnRyeS5vbGRlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZW50cnkgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHdoaWxlIChlbnRyeSkge1xuICAgICAgICAgICAgZnVuLmNhbGwoY29udGV4dCwgZW50cnkua2V5LCBlbnRyeS52YWx1ZSwgdGhpcyk7XG4gICAgICAgICAgICBlbnRyeSA9IGVudHJ5Lm5ld2VyO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8qKiBSZXR1cm5zIGEgSlNPTiAoYXJyYXkpIHJlcHJlc2VudGF0aW9uICovXG4vL0xSVUNhY2hlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4vLyAgICB2YXIgczogSUVudHJ5W10gPSBbXSwgZW50cnkgPSB0aGlzLmhlYWQ7XG4vLyAgICB3aGlsZSAoZW50cnkpIHtcbi8vICAgICAgICBzLnB1c2goeyBrZXk6IGVudHJ5LmtleS50b0pTT04oKSwgdmFsdWU6IGVudHJ5LnZhbHVlLnRvSlNPTigpIH0pO1xuLy8gICAgICAgIGVudHJ5ID0gZW50cnkubmV3ZXI7XG4vLyAgICB9XG4vLyAgICByZXR1cm4gcztcbi8vfTtcbi8qKiBSZXR1cm5zIGEgU3RyaW5nIHJlcHJlc2VudGF0aW9uICovXG5MUlVDYWNoZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHMgPSAnJywgZW50cnkgPSB0aGlzLmhlYWQ7XG4gICAgd2hpbGUgKGVudHJ5KSB7XG4gICAgICAgIHMgKz0gU3RyaW5nKGVudHJ5LmtleSkgKyAnOicgKyBlbnRyeS52YWx1ZTtcbiAgICAgICAgZW50cnkgPSBlbnRyeS5uZXdlcjtcbiAgICAgICAgaWYgKGVudHJ5KVxuICAgICAgICAgICAgcyArPSAnIDwgJztcbiAgICB9XG4gICAgcmV0dXJuIHM7XG59O1xuLy8gRXhwb3J0IG91cnNlbHZlc1xuLy9pZiAodHlwZW9mIHRoaXMgPT09ICdvYmplY3QnKSB0aGlzLkxSVUNhY2hlID0gTFJVQ2FjaGU7XG5cbnZhciBEZWZhdWx0QXBpQ2FjaGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGVmYXVsdEFwaUNhY2hlKGxpbWl0KSB7XG4gICAgICAgIGlmIChsaW1pdCA9PT0gdm9pZCAwKSB7IGxpbWl0ID0gMTAwMDsgfVxuICAgICAgICB0aGlzLmxydSA9IE1ha2VMUlVDYWNoZShsaW1pdCk7XG4gICAgfVxuICAgIERlZmF1bHRBcGlDYWNoZS5wcm90b3R5cGUuaXNFeHBpcmVkID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmxydS5nZXQoa2V5LCBmYWxzZSk7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmV4cGlyZWRJbiAhPT0gMCAmJiB2YWx1ZS5leHBpcmVkSW4gPCBEYXRlLm5vdygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEZWZhdWx0QXBpQ2FjaGUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXksIGNiKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMubHJ1LmdldChrZXksIGZhbHNlKTtcbiAgICAgICAgaWYgKHZhbHVlICYmICF0aGlzLmlzRXhwaXJlZChrZXkpKSB7XG4gICAgICAgICAgICBjYihudWxsLCB2YWx1ZS5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEZWZhdWx0QXBpQ2FjaGUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCB0dGwsIGNiKSB7XG4gICAgICAgIHRoaXMubHJ1LnJlbW92ZShrZXkpO1xuICAgICAgICB0aGlzLmxydS5wdXQoa2V5LCB7XG4gICAgICAgICAgICBkYXRhOiB2YWx1ZSxcbiAgICAgICAgICAgIGV4cGlyZWRJbjogdHRsID8gKERhdGUubm93KCkgKyAodHRsICogMTAwMCkpIDogMCxcbiAgICAgICAgfSk7XG4gICAgICAgIGNiICYmIGNiKG51bGwpO1xuICAgIH07XG4gICAgRGVmYXVsdEFwaUNhY2hlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5LCBjYikge1xuICAgICAgICB0aGlzLmxydS5yZW1vdmUoa2V5KTtcbiAgICAgICAgY2IgJiYgY2IobnVsbCk7XG4gICAgfTtcbiAgICBEZWZhdWx0QXBpQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHRoaXMubHJ1LnJlbW92ZUFsbCgpO1xuICAgICAgICBjYiAmJiBjYihudWxsKTtcbiAgICB9O1xuICAgIHJldHVybiBEZWZhdWx0QXBpQ2FjaGU7XG59KCkpO1xuXG5mdW5jdGlvbiBmZXRjaFJlcXVlc3QodXJsLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciBmZXRjaE9wdGlvbnMgPSB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgIH07XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5wcm94eUFnZW50KSB7XG4gICAgICAgIGZldGNoT3B0aW9ucy5hZ2VudCA9IG9wdGlvbnMucHJveHlBZ2VudDtcbiAgICB9XG4gICAgLy8gY2FuJ3QgdXNlIG51bWJlciBiZWNhdXNlIG9mIE5vZGVKUyBnbG9iYWxzIGluY2x1ZGVkXG4gICAgdmFyIHRpbWVvdXRJZDtcbiAgICB2YXIgZmV0Y2hQcm9taXNlID0gY3Jvc3NGZXRjaCh1cmwsIGZldGNoT3B0aW9ucyk7XG4gICAgdmFyIHByb21pc2UgPSBvcHRpb25zLnRpbWVvdXRJbk1zID8gUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgZmV0Y2hQcm9taXNlLFxuICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAoXywgcmVqZWN0KSB7XG4gICAgICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IodXJsICsgXCIgcmVzcG9uc2UgdGltZW91dFwiKSk7IH0sIG9wdGlvbnMudGltZW91dEluTXMpO1xuICAgICAgICB9KVxuICAgIF0pIDogZmV0Y2hQcm9taXNlO1xuICAgIHByb21pc2UudGhlbihmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgaWYgKH5+KHJlc3Auc3RhdHVzIC8gMTAwICE9PSAyKSkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAqIGRyYWluIHRoZSByZXNwIGJlZm9yZSB0aHJvd2luZyBhbiBlcnJvciB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuICAgICAgICAgICAgICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2JpdGlubi9ub2RlLWZldGNoL2lzc3Vlcy84M1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXR1cm4gcmVzcC50ZXh0KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIHN0YXR1cyBjb2RlIFtcIiArIHJlc3Auc3RhdHVzICsgXCJdIG9uIFVSTCBcIiArIHVybCk7XG4gICAgICAgICAgICAgICAgZS5zdGF0dXMgPSByZXNwLnN0YXR1cztcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3AuanNvbigpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgdmFyIGNhY2hlQ29udHJvbCA9IHJlc3AuaGVhZGVycy5nZXQoJ2NhY2hlLWNvbnRyb2wnKTtcbiAgICAgICAgICAgIHZhciBwYXJzZWRDYWNoZUNvbnRyb2wgPSBjYWNoZUNvbnRyb2wgPyAvbWF4LWFnZT0oXFxkKykvLmV4ZWMoY2FjaGVDb250cm9sKSA6IG51bGw7XG4gICAgICAgICAgICB2YXIgdHRsID0gcGFyc2VkQ2FjaGVDb250cm9sID8gcGFyc2VJbnQocGFyc2VkQ2FjaGVDb250cm9sWzFdLCAxMCkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQsIHJlc3AsIHR0bCk7XG4gICAgICAgIH0pO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgfSk7XG59XG52YXIgRGVmYXVsdFJlcXVlc3RIYW5kbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERlZmF1bHRSZXF1ZXN0SGFuZGxlcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgfVxuICAgIERlZmF1bHRSZXF1ZXN0SGFuZGxlci5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uICh1cmwsIGNhbGxiYWNrKSB7XG4gICAgICAgIGZldGNoUmVxdWVzdCh1cmwsIHRoaXMub3B0aW9ucywgY2FsbGJhY2spO1xuICAgIH07XG4gICAgcmV0dXJuIERlZmF1bHRSZXF1ZXN0SGFuZGxlcjtcbn0oKSk7XG5cbnZhciBIdHRwQ2xpZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEh0dHBDbGllbnQocmVxdWVzdEhhbmRsZXIsIGNhY2hlLCBwcm94eUFnZW50LCB0aW1lb3V0SW5Ncykge1xuICAgICAgICB0aGlzLnJlcXVlc3RIYW5kbGVyID0gcmVxdWVzdEhhbmRsZXIgfHwgbmV3IERlZmF1bHRSZXF1ZXN0SGFuZGxlcih7IHByb3h5QWdlbnQ6IHByb3h5QWdlbnQsIHRpbWVvdXRJbk1zOiB0aW1lb3V0SW5NcyB9KTtcbiAgICAgICAgdGhpcy5jYWNoZSA9IGNhY2hlIHx8IG5ldyBEZWZhdWx0QXBpQ2FjaGUoKTtcbiAgICB9XG4gICAgSHR0cENsaWVudC5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uICh1cmwsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMucmVxdWVzdEhhbmRsZXIucmVxdWVzdCh1cmwsIGZ1bmN0aW9uIChlcnIsIHJlc3VsdCwgeGhyLCB0dGwpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhlcnIsIG51bGwsIHhociwgdHRsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKG51bGwsIHJlc3VsdCwgeGhyLCB0dGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZldGNoIGEgVVJMIGNvcnJlc3BvbmRpbmcgdG8gYSBxdWVyeSwgYW5kIHBhcnNlIHRoZSByZXNwb25zZSBhcyBhIFJlc3BvbnNlIG9iamVjdFxuICAgICAqL1xuICAgIEh0dHBDbGllbnQucHJvdG90eXBlLmNhY2hlZFJlcXVlc3QgPSBmdW5jdGlvbiAodXJsLCBtYXliZU9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBtYXliZU9wdGlvbnMgfHwge307XG4gICAgICAgIHZhciBydW4gPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIHZhciBjYWNoZUtleSA9IG9wdGlvbnMuY2FjaGVLZXkgfHwgdXJsO1xuICAgICAgICAgICAgX3RoaXMuY2FjaGUuZ2V0KGNhY2hlS2V5LCBmdW5jdGlvbiAoY2FjaGVHZXRFcnJvciwgY2FjaGVHZXRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChjYWNoZUdldEVycm9yIHx8IGNhY2hlR2V0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2IoY2FjaGVHZXRFcnJvciwgY2FjaGVHZXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXF1ZXN0KHVybCwgZnVuY3Rpb24gKGZldGNoRXJyb3IsIGZldGNoVmFsdWUsIF8sIHR0bFJlcSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZldGNoRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYihmZXRjaEVycm9yLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0dGwgPSB0dGxSZXEgfHwgb3B0aW9ucy50dGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR0bCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jYWNoZS5zZXQoY2FjaGVLZXksIGZldGNoVmFsdWUsIHR0bCwgY2IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYihudWxsLCBmZXRjaFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBydW4oZnVuY3Rpb24gKGVyciwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKVxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEh0dHBDbGllbnQ7XG59KCkpO1xuXG5mdW5jdGlvbiBzZXBhcmF0b3IodXJsKSB7XG4gICAgcmV0dXJuIHVybC5pbmRleE9mKCc/JykgPiAtMSA/ICcmJyA6ICc/Jztcbn1cbnZhciBBcGkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXBpKHVybCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hY2Nlc3NUb2tlbikge1xuICAgICAgICAgICAgdmFyIGFjY2Vzc1Rva2VuUGFyYW0gPSBcImFjY2Vzc190b2tlbj1cIiArIHRoaXMub3B0aW9ucy5hY2Nlc3NUb2tlbjtcbiAgICAgICAgICAgIHRoaXMudXJsICs9IHNlcGFyYXRvcih1cmwpICsgYWNjZXNzVG9rZW5QYXJhbTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJvdXRlcykge1xuICAgICAgICAgICAgdGhpcy51cmwgKz0gc2VwYXJhdG9yKHVybCkgKyAoXCJyb3V0ZXM9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkodGhpcy5vcHRpb25zLnJvdXRlcykpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFwaURhdGFUVEwgPSB0aGlzLm9wdGlvbnMuYXBpRGF0YVRUTCB8fCA1O1xuICAgICAgICB0aGlzLmh0dHBDbGllbnQgPSBuZXcgSHR0cENsaWVudCh0aGlzLm9wdGlvbnMucmVxdWVzdEhhbmRsZXIsIHRoaXMub3B0aW9ucy5hcGlDYWNoZSwgdGhpcy5vcHRpb25zLnByb3h5QWdlbnQsIHRoaXMub3B0aW9ucy50aW1lb3V0SW5Ncyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZldGNoZXMgZGF0YSB1c2VkIHRvIGNvbnN0cnVjdCB0aGUgYXBpIGNsaWVudCwgZnJvbSBjYWNoZSBpZiBpdCdzXG4gICAgICogcHJlc2VudCwgb3RoZXJ3aXNlIGZyb20gY2FsbGluZyB0aGUgcHJpc21pYyBhcGkgZW5kcG9pbnQgKHdoaWNoIGlzXG4gICAgICogdGhlbiBjYWNoZWQpLlxuICAgICAqL1xuICAgIEFwaS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuY2FjaGVkUmVxdWVzdCh0aGlzLnVybCwgeyB0dGw6IHRoaXMuYXBpRGF0YVRUTCB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICB2YXIgcmVzb2x2ZWRBcGkgPSBuZXcgUmVzb2x2ZWRBcGkoZGF0YSwgX3RoaXMuaHR0cENsaWVudCwgX3RoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCByZXNvbHZlZEFwaSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZWRBcGk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY2IgJiYgY2IoZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEFwaTtcbn0oKSk7XG5cbnZhciBEZWZhdWx0Q2xpZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERlZmF1bHRDbGllbnQodXJsLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuYXBpID0gbmV3IEFwaSh1cmwsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBEZWZhdWx0Q2xpZW50LnByb3RvdHlwZS5nZXRBcGkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwaS5nZXQoKTtcbiAgICB9O1xuICAgIERlZmF1bHRDbGllbnQucHJvdG90eXBlLmV2ZXJ5dGhpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm0oJ2V2ZXJ5dGhpbmcnKTtcbiAgICB9O1xuICAgIERlZmF1bHRDbGllbnQucHJvdG90eXBlLmZvcm0gPSBmdW5jdGlvbiAoZm9ybUlkKSB7XG4gICAgICAgIHJldHVybiBuZXcgTGF6eVNlYXJjaEZvcm0oZm9ybUlkLCB0aGlzLmFwaSk7XG4gICAgfTtcbiAgICBEZWZhdWx0Q2xpZW50LnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChxLCBvcHRpb25zT3JDYWxsYmFjaywgY2IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXBpKCkudGhlbihmdW5jdGlvbiAoYXBpKSB7IHJldHVybiBhcGkucXVlcnkocSwgb3B0aW9uc09yQ2FsbGJhY2ssIGNiKTsgfSk7XG4gICAgfTtcbiAgICBEZWZhdWx0Q2xpZW50LnByb3RvdHlwZS5xdWVyeUZpcnN0ID0gZnVuY3Rpb24gKHEsIG9wdGlvbnNPckNhbGxiYWNrLCBjYikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBcGkoKS50aGVuKGZ1bmN0aW9uIChhcGkpIHsgcmV0dXJuIGFwaS5xdWVyeUZpcnN0KHEsIG9wdGlvbnNPckNhbGxiYWNrLCBjYik7IH0pO1xuICAgIH07XG4gICAgRGVmYXVsdENsaWVudC5wcm90b3R5cGUuZ2V0QnlJRCA9IGZ1bmN0aW9uIChpZCwgb3B0aW9ucywgY2IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXBpKCkudGhlbihmdW5jdGlvbiAoYXBpKSB7IHJldHVybiBhcGkuZ2V0QnlJRChpZCwgb3B0aW9ucywgY2IpOyB9KTtcbiAgICB9O1xuICAgIERlZmF1bHRDbGllbnQucHJvdG90eXBlLmdldEJ5SURzID0gZnVuY3Rpb24gKGlkcywgb3B0aW9ucywgY2IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXBpKCkudGhlbihmdW5jdGlvbiAoYXBpKSB7IHJldHVybiBhcGkuZ2V0QnlJRHMoaWRzLCBvcHRpb25zLCBjYik7IH0pO1xuICAgIH07XG4gICAgRGVmYXVsdENsaWVudC5wcm90b3R5cGUuZ2V0QnlVSUQgPSBmdW5jdGlvbiAodHlwZSwgdWlkLCBvcHRpb25zLCBjYikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBcGkoKS50aGVuKGZ1bmN0aW9uIChhcGkpIHsgcmV0dXJuIGFwaS5nZXRCeVVJRCh0eXBlLCB1aWQsIG9wdGlvbnMsIGNiKTsgfSk7XG4gICAgfTtcbiAgICBEZWZhdWx0Q2xpZW50LnByb3RvdHlwZS5nZXRTaW5nbGUgPSBmdW5jdGlvbiAodHlwZSwgb3B0aW9ucywgY2IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXBpKCkudGhlbihmdW5jdGlvbiAoYXBpKSB7IHJldHVybiBhcGkuZ2V0U2luZ2xlKHR5cGUsIG9wdGlvbnMsIGNiKTsgfSk7XG4gICAgfTtcbiAgICBEZWZhdWx0Q2xpZW50LnByb3RvdHlwZS5nZXRCb29rbWFyayA9IGZ1bmN0aW9uIChib29rbWFyaywgb3B0aW9ucywgY2IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXBpKCkudGhlbihmdW5jdGlvbiAoYXBpKSB7IHJldHVybiBhcGkuZ2V0Qm9va21hcmsoYm9va21hcmssIG9wdGlvbnMsIGNiKTsgfSk7XG4gICAgfTtcbiAgICBEZWZhdWx0Q2xpZW50LnByb3RvdHlwZS5wcmV2aWV3U2Vzc2lvbiA9IGZ1bmN0aW9uICh0b2tlbiwgbGlua1Jlc29sdmVyLCBkZWZhdWx0VXJsLCBjYikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBcGkoKS50aGVuKGZ1bmN0aW9uIChhcGkpIHsgcmV0dXJuIGFwaS5wcmV2aWV3U2Vzc2lvbih0b2tlbiwgbGlua1Jlc29sdmVyLCBkZWZhdWx0VXJsLCBjYik7IH0pO1xuICAgIH07XG4gICAgRGVmYXVsdENsaWVudC5wcm90b3R5cGUuZ2V0UHJldmlld1Jlc29sdmVyID0gZnVuY3Rpb24gKHRva2VuLCBkb2N1bWVudElkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBnZXREb2NCeUlkID0gZnVuY3Rpb24gKGRvY3VtZW50SWQsIG1heWJlT3B0aW9ucykgeyByZXR1cm4gX3RoaXMuZ2V0QXBpKCkudGhlbihmdW5jdGlvbiAoYXBpKSB7XG4gICAgICAgICAgICByZXR1cm4gYXBpLmdldEJ5SUQoZG9jdW1lbnRJZCwgbWF5YmVPcHRpb25zKTtcbiAgICAgICAgfSk7IH07XG4gICAgICAgIHJldHVybiBjcmVhdGVQcmV2aWV3UmVzb2x2ZXIodG9rZW4sIGRvY3VtZW50SWQsIGdldERvY0J5SWQpO1xuICAgIH07XG4gICAgRGVmYXVsdENsaWVudC5nZXRBcGkgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBhcGkgPSBuZXcgQXBpKHVybCwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBhcGkuZ2V0KCk7XG4gICAgfTtcbiAgICByZXR1cm4gRGVmYXVsdENsaWVudDtcbn0oKSk7XG5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBlcy9jcm9zcy1mZXRjaC5kLnRzXCIgLz5cbnZhciBpbmRleCA9IHtcbiAgICBleHBlcmltZW50Q29va2llOiBFWFBFUklNRU5UX0NPT0tJRSxcbiAgICBwcmV2aWV3Q29va2llOiBQUkVWSUVXX0NPT0tJRSxcbiAgICBQcmVkaWNhdGVzOiBQcmVkaWNhdGVzLFxuICAgIEV4cGVyaW1lbnRzOiBFeHBlcmltZW50cyxcbiAgICBBcGk6IEFwaSxcbiAgICBjbGllbnQ6IGNsaWVudCxcbiAgICBnZXRBcGk6IGdldEFwaSxcbiAgICBhcGk6IGFwaSxcbn07XG5mdW5jdGlvbiBjbGllbnQodXJsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBEZWZhdWx0Q2xpZW50KHVybCwgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBnZXRBcGkodXJsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIERlZmF1bHRDbGllbnQuZ2V0QXBpKHVybCwgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBhcGkodXJsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGdldEFwaSh1cmwsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByaXNtaWMtamF2YXNjcmlwdC5tanMubWFwXG4iLCJpbXBvcnQgUHJpc21pYyBmcm9tICdwcmlzbWljLWphdmFzY3JpcHQnXG5cbmV4cG9ydCBjb25zdCBhcGlFbmRwb2ludCA9IFwiaHR0cHM6Ly9zdG9yeXdyaXRlci5jZG4ucHJpc21pYy5pby9hcGkvdjJcIjtcblxuZXhwb3J0IGNvbnN0IENsaWVudCA9IFByaXNtaWMuY2xpZW50KGFwaUVuZHBvaW50KTtcblxuZXhwb3J0IGNvbnN0IGxpbmtSZXNvbHZlciA9IChkb2MpID0+IHtcbiAgICBpZiAoZG9jLnR5cGUgPT09ICdwb3N0JykgcmV0dXJuIGAvYmxvZy8ke2RvYy51aWR9YDtcbiAgICBpZiAoZG9jLnR5cGUgPT09ICdob21lJykgcmV0dXJuICcvYmxvZyc7XG4gICAgaWYgKGRvYy50eXBlID09PSAnYWJvdXQnKSByZXR1cm4gJy9hYm91dCc7XG4gICAgcmV0dXJuICcvJztcbn07XG4iXSwibmFtZXMiOlsidGhpcyIsImNyb3NzRmV0Y2giLCJQcmlzbWljIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFtRCxjQUFjLENBQUMsQ0FBQyxHQUFtSSxDQUFDLENBQUMsV0FBVyxFQUFFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQ0EsY0FBSSxFQUFFLFVBQVUsQ0FBQyxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxPQUFPLE1BQU0sRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBZ0MsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxNQUFNLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU0sMEJBQTBCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLDZCQUE2QixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLE9BQU0sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQWdDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLE9BQU8sTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQWMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsMEJBQTBCLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFjLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFNLElBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLHNEQUFzRCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU0sSUFBRyxDQUFDLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxHQUFHLENBQUMsSUFBRyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxJQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxJQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQWMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLE9BQU0sc0NBQXNDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBYyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFVBQVUsRUFBRSxPQUFPLE1BQU0sRUFBRSxDQUFDLENBQUMsV0FBVyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxFQUFFLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLGNBQWMsQ0FBQywyREFBMkQsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEVBQUUsT0FBTyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLG9EQUFvRCxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQWMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBYyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQWMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBYyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDcHhsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FB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VyxDQUFDO0FBQ3ZCLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxZQUFZLENBQUMsS0FBSyxFQUFFO0FBQzdCLElBQUksT0FBTyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBQ0QsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFO0FBQ3pCO0FBQ0EsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUNsQjtBQUNBLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDdkIsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUN0QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLFVBQVUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUMvQyxJQUFJLElBQUksS0FBSyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFDM0M7QUFDQSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQzlCLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQ25CO0FBQ0EsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDaEMsUUFBUSxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDaEMsS0FBSztBQUNMLFNBQVM7QUFDVDtBQUNBLFFBQVEsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7QUFDMUIsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztBQUN0QixJQUFJLElBQUksSUFB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
