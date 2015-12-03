!function(e){function t(u){if(n[u])return n[u].exports;var r=n[u]={exports:{},id:u,loaded:!1};return e[u].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){e.exports=n(3)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={height:20,width:14,cellSize:25,colors:["#b58900","#cb4b16","#dc322f","#d33682","#6c71c4","#268bd2","#2aa198","#859900"]};t["default"]=n,e.exports=t["default"]},function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){function n(t){e.blocks.forEach(function(e,n){e.setRenderables(t[n])})}var u={};return e.listening=!0,e.blocks=[],e.blocks.push((0,a["default"])(t.center.x,t.center.y,t.color)),t.mold.forEach(function(n){e.blocks.push((0,a["default"])(n.x,n.y,t.color))}),{giveRenderables:function(){return e.blocks.map(function(e){return Object.assign({domElement:e.domElement},e.getRenderables())})},addCallback:function(e){u[e.name]=e},moveRight:function(){var t=e.blocks.map(function(e){var t=e.getRenderables();return t.x+=1,t});u.moveRequest(t).isLegal&&n(t)},moveLeft:function(){var t=e.blocks.map(function(e){var t=e.getRenderables();return t.x-=1,t});u.moveRequest(t).isLegal&&n(t)},moveDown:function(){var t=e.blocks.map(function(e){var t=e.getRenderables();return t.y+=1,t});u.moveRequest(t).isLegal?n(t):u.freeze()},rotateRight:function(){var t=e.blocks[0].getRenderables(),r=t.x,o=t.y,a=e.blocks.map(function(e){var t=e.getRenderables(),n=t.x,u=t.y,a=r-n,c=o-u;return{x:r+c,y:o-a}});u.moveRequest(a).isLegal&&n(a)},rotateLeft:function(){var t=e.blocks[0].getRenderables(),r=t.x,o=t.y,a=e.blocks.map(function(e){var t=e.getRenderables(),n=t.x,u=t.y,a=r-n,c=o-u;return{x:r-c,y:o+a}});u.moveRequest(a).isLegal&&n(a)},attach:function(t){e.blocks.forEach(function(e){t.appendChild(e.domElement)})}}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var o=n(10),a=u(o),c=n(1);u(c);e.exports=t["default"]},function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}function r(e){e.checkTime(),e.checkRows();var t=e.getRenderables();t.forEach(function(e){(0,a["default"])(e)}),setTimeout(r,1e3/60,e)}var o=n(13),a=u(o),c=n(20),l=u(c);(0,l["default"])(r)},function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){function n(e){e.activeShape=(0,a["default"])(1,2),e.activeShape.attach(e.background),e.activeShape.addCallback(u),e.activeShape.addCallback(c),t.setActiveShapeCallback(e.activeShape)}function u(e){var t=r(e),n={isLegal:!0};return o(e)&&(n.isLegal=!1),t.lowest.y>=l["default"].height&&(n.isLegal=!1),t.rightMost.x>=l["default"].width&&(n.isLegal=!1),t.leftMost.x<0&&(n.isLegal=!1),n}function r(e){return e.reduce(function(e,t){return t.x<e.leftMost.x&&(e.leftMost=t),t.x>e.rightMost.x&&(e.rightMost=t),t.y>e.lowest.y&&(e.lowest=t),e},{leftMost:e[0],rightMost:e[0],lowest:e[0]})}function o(t){return t.some(function(t){return e.frozenBlocks.some(function(e){return t.x===e.x&&t.y===e.y})})}function c(){f()}function f(){e.activeShape.giveRenderables().forEach(function(t){e.frozenBlocks.push(t)}),n(e)}return t.getActiveShape=function(){return e.activeShape.giveRenderables()},n(e),{}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var o=n(12),a=u(o),c=n(1),l=u(c);e.exports=t["default"]},function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}function r(){var e=a["default"].height,t=a["default"].width,n=a["default"].cellSize,u=document.createElement("div");return u.id="levelBackground",u.style.position="relative",u.style.backgroundColor="#002b36",u.style.height=e*n+"px",u.style.width=t*n+"px",document.body.appendChild(u),u}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var o=n(1),a=u(o);e.exports=t["default"]},function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=u(r),a=n(4),c=u(a),l=n(9),f=u(l),i=n(7),s=u(i),d=n(8),v=u(d);t["default"]=function(e){var t={background:(0,o["default"])(),frozenBlocks:[],score:0},n={setActiveShapeCallback:e};return Object.assign({getRenderables:function(){return t.frozenBlocks.concat(n.getActiveShape())}},(0,f["default"])(t),(0,c["default"])(t,n),(0,s["default"])(t,n),(0,v["default"])(t,n))},e.exports=t["default"]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(1);t["default"]=function(e,t){function n(e){return e.reduce(function(e,t){var n=t.y;return e[n]||(e[n]=[]),e[n].push(t),e},[])}return{checkRows:function(){var r=n(e.frozenBlocks),o=r.reduceRight(function(t,n){return n?n.length>=u.width?(t.currentShift+=1,n.forEach(function(t){e.background.removeChild(t.domElement)}),t):(t.blocks=t.blocks.concat(n.map(function(e){return e.y+=t.currentShift,e})),t):t},{currentShift:0,blocks:[]}),a=o.blocks,c=o.currentShift;e.frozenBlocks=a,t.updateScore(c)}}},e.exports=t["default"]},function(e,t){"use strict";function n(e,t){function n(t){var n=u(t);e.score+=n,r.innerText="Score: "+e.score}function u(e){return 1===e?100:2===e?250:3===e?300:4===e?500:0}var r=document.createElement("div");return document.body.appendChild(r),t.updateScore=n,{}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]},function(e,t){"use strict";function n(e){function t(){e.activeShape.moveDown(),e.lastGameTick=Date.now()}return e.lastGameTick=Date.now(),e.tickTime=1500,{checkTime:function(){Date.now()-e.lastGameTick>=e.tickTime&&t()}}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]},function(e,t){"use strict";function n(e,t,n){var u={backgroundColor:n||"blue",x:e,y:t},r=document.createElement("div");return r.style.position="absolute",r.style.backgroundColor=n||"blue",{domElement:r,getRenderables:function(){return{x:u.x,y:u.y,backgroundColor:u.backgroundColor}},setRenderables:function(e){u.x=e.x,u.y=e.y,u.backgroundColor=e.backgroundColor||u.backgroundColor}}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]},function(e,t){"use strict";function n(){var e;return{listener:function(t){var n=t.keyCode,u={a:function(){e.moveLeft()},d:function(){e.moveRight()},s:function(){e.moveDown()},e:function(){e.rotateRight()},q:function(){e.rotateLeft()}};switch(n){case 65:t.preventDefault(),u.a();break;case 68:t.preventDefault(),u.d();break;case 69:t.preventDefault(),u.e();break;case 81:t.preventDefault(),u.q();break;case 83:t.preventDefault(),u.s()}},setNewActiveShape:function(t){e=t}}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]},function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){var n=(0,f["default"])(c.colors),u=(0,f["default"])(a["default"]);return u(e,t,n)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var o=n(14),a=u(o),c=n(1),l=n(21),f=u(l);e.exports=t["default"]},function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=a["default"].cellSize,n=e.domElement;n.style.backgroundColor=e.backgroundColor,n.style.left=t*e.x+"px",n.style.top=t*e.y+"px",n.style.height=t+"px",n.style.width=t+"px"}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var o=n(1),a=u(o);e.exports=t["default"]},function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(15),o=u(r),a=n(16),c=u(a),l=n(17),f=u(l),i=n(18),s=u(i),d=n(19),v=u(d);t["default"]={corner:o["default"],l:c["default"],line:f["default"],square:s["default"],z:v["default"]},e.exports=t["default"]},function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}function r(e,t,n){var u={},r=[{x:e+1,y:t},{x:e,y:t+1}];return Object.assign({},(0,a["default"])(u,{center:{x:e,y:t},mold:r,color:n}))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var o=n(2),a=u(o);e.exports=t["default"]},function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}function r(e,t,n){var u={},r=[{x:e+1,y:t},{x:e+2,y:t},{x:e,y:t-1}];return Object.assign({},(0,a["default"])(u,{center:{x:e,y:t},mold:r,color:n}))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var o=n(2),a=u(o);e.exports=t["default"]},function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}function r(e,t,n){var u={},r=[{x:e-1,y:t},{x:e+1,y:t},{x:e+2,y:t}];return Object.assign({},(0,a["default"])(u,{center:{x:e,y:t},mold:r,color:n}))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var o=n(2),a=u(o);e.exports=t["default"]},function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}function r(e,t,n){var u={},r=[{x:e+1,y:t},{x:e,y:t+1},{x:e+1,y:t+1}];return Object.assign({},(0,a["default"])(u,{center:{x:e,y:t},mold:r,color:n}))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var o=n(2),a=u(o);e.exports=t["default"]},function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}function r(e,t,n){var u={},r=[{x:e,y:t-1},{x:e+1,y:t-1},{x:e-1,y:t}];return Object.assign({},(0,a["default"])(u,{center:{x:e,y:t},mold:r,color:n}))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var o=n(2),a=u(o);e.exports=t["default"]},function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=(0,a["default"])(),n=(0,l["default"])(t.setNewActiveShape);document.onkeydown=t.listener,e(n)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var o=n(11),a=u(o),c=n(6),l=u(c);e.exports=t["default"]},function(e,t){"use strict";function n(e){var t=Object.keys(e),n=Math.round(Math.random()*(t.length-1));return e[t[n]]}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]}]);