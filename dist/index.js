"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var f=c(function(g,o){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=require('@stdlib/assert-is-function/dist'),m=require('@stdlib/assert-is-iterator-like/dist'),n=require('@stdlib/symbol-iterator/dist'),x=require('@stdlib/error-tools-fmtprodmsg/dist');function v(e){var r,t,i;if(!m(e))throw new TypeError(x('23N3w',e));return r=!0,t={},a(t,"next",s),a(t,"return",l),n&&q(e[n])&&a(t,n,d),t;function s(){var u;return i?{done:!0}:(u=e.next(),u.done?(i=!0,u):(u.value||(r=!1),{value:r,done:!1}))}function l(u){return i=!0,arguments.length?{value:u,done:!0}:{done:!0}}function d(){return v(e[n]())}}o.exports=v
});var y=f();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
