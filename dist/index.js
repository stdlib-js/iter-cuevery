"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=c(function(g,o){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=require('@stdlib/assert-is-function/dist'),m=require('@stdlib/assert-is-iterator-like/dist'),n=require('@stdlib/symbol-iterator/dist'),x=require('@stdlib/error-tools-fmtprodmsg/dist');function v(e){var r,u,i;if(!m(e))throw new TypeError(x('null3w',e));return r=!0,u={},a(u,"next",s),a(u,"return",l),n&&q(e[n])&&a(u,n,d),u;function s(){var t;return i?{done:!0}:(t=e.next(),t.done?(i=!0,t):(t.value||(r=!1),{value:r,done:!1}))}function l(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function d(){return v(e[n]())}}o.exports=v
});var y=f();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
