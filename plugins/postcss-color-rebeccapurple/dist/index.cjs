"use strict";var e=require("postcss-value-parser");const creator=r=>{const s=Object.assign({preserve:!1},r);return{postcssPlugin:"postcss-color-rebeccapurple",Declaration(r){if(!r.value.toLowerCase().includes("rebeccapurple"))return;const o=e(r.value);o.walk((e=>{"word"===e.type&&"rebeccapurple"===e.value.toLowerCase()&&(e.value="#639")}));const c=String(o);c!==r.value&&(r.cloneBefore({value:c}),s.preserve||r.remove())}}};creator.postcss=!0,module.exports=creator;
