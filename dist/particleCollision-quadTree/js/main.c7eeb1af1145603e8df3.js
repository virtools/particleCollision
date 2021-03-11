!function(t){var i={};function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var o in t)e.d(n,o,function(i){return t[i]}.bind(null,o));return n},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=8)}([function(t,i,e){"use strict";e.d(i,"a",(function(){return a})),e.d(i,"b",(function(){return h}));var n=e(1),o=e.n(n),s=e(2),r=e.n(s),a=function(){function t(){o()(this,t)}return r()(t,null,[{key:"rotate",value:function(t,i){var e=Math.cos(i),n=Math.sin(i);return[t[0]*e-t[1]*n,t[1]*e+t[0]*n]}},{key:"dot",value:function(t,i){return t[0]*i[0]+t[1]*i[1]}},{key:"cross",value:function(t,i){return t[0]*i[1]-t[1]*i[0]}},{key:"add",value:function(t,i){return[t[0]+i[0],t[1]+i[1]]}},{key:"sub",value:function(t,i){return[t[0]-i[0],t[1]-i[1]]}},{key:"projection",value:function(i,e){var n=t.dot(i,e)/t.dot(e,e);return[e[0]*n,e[1]*n]}},{key:"length",value:function(i){return Math.sqrt(t.dot(i,i))}},{key:"scale",value:function(t,i){return[t[0]*i,t[1]*i]}},{key:"collisionCalc",value:function(i,e,n,o){return t.scale(t.add(t.scale(i,n-o),t.scale(e,2*o)),1/(n+o))}}]),t}(),h=function(){function t(){o()(this,t)}return r()(t,null,[{key:"add",value:function(t,i){return t[0]+=i[0],t[1]+=i[1],t}},{key:"sub",value:function(t,i){return t[0]-=i[0],t[1]-=i[1],t}},{key:"scale",value:function(t,i){return t[0]*=i,t[1]*=i,t}}]),t}()},function(t,i){t.exports=function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}},function(t,i){function e(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}},function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"a",(function(){return h}));var n=e(1),o=e.n(n),s=e(2),r=e.n(s),a=function(){function t(i,e,n,s){o()(this,t),this.x=i,this.y=e,this.width=n,this.height=s}return r()(t,[{key:"constains",value:function(t){return t[0]>=this.x&&t[0]<=this.x+this.width&&t[1]>=this.y&&t[1]<=this.y+this.height}},{key:"intersect",value:function(t){return!(t.x>this.x+this.width||t.x+t.width<this.x||t.y>this.y+this.height||t.y+t.height<this.y)}}]),t}(),h=function(){function t(i){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;o()(this,t),this.corner=["northwest","northeast","southeast","southwest"],this.reset(i,e,n,s,r)}return r()(t,[{key:"reset",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;this.clear(),this.boundary=t,this.center=[t.x+.5*t.width,t.y+.5*t.height],this.minRange=i,this.maxPoints=e,this.maxLevel=n,this.level=o,this.points=[],this.divided=!1}},{key:"subdivide",value:function(){var i=this,e=.5*this.boundary.width,n=.5*this.boundary.height,o=[[0,0],[e,0],[e,n],[0,n]];this.corner.forEach((function(s,r){i[s]=new t(new a(i.boundary.x+o[r][0],i.boundary.y+o[r][1],e,n),i.minRange,i.maxPoints,i.maxLevel,i.level+1)}))}},{key:"insertOrientation",value:function(t){t.point[0]<this.center[0]?t.point[1]<this.center[1]?this.northwest.insert(t):this.southwest.insert(t):t.point[1]<this.center[1]?this.northeast.insert(t):this.southeast.insert(t)}},{key:"insert",value:function(t){if(this.divided)this.insertOrientation(t);else if(this.points.length<this.maxPoints||this.level>this.maxLevel||this.boundary.width<=this.minRange||this.boundary.height<=this.minRange)this.points.push(t);else{this.divided=!0,this.subdivide();for(var i=0;i<this.points.length;i++)this.insertOrientation(this.points[i]);this.points=[],this.insertOrientation(t)}}},{key:"query",value:function(t,i){var e=this;if(i||(i=[]),!this.boundary.intersect(t))return i;if(this.divided)this.corner.forEach((function(n){e[n].query(t,i)}));else for(var n=0;n<this.points.length;n++)t.constains(this.points[n].point)&&i.push(this.points[n]);return i}},{key:"clear",value:function(){var t=this;this.points=[],this.divided&&(this.corner.forEach((function(i){t[i].clear(),t[i]=void 0})),this.divided=!1)}},{key:"render",value:function(t){var i=this;t.strokeStyle="#ffffff",t.beginPath(),t.strokeRect(this.boundary.x,this.boundary.y,this.boundary.width,this.boundary.height),t.stroke(),this.divided&&this.corner.forEach((function(e){i[e].render(t)}))}}]),t}()},function(t,i,e){"use strict";e.d(i,"a",(function(){return n})),e.d(i,"b",(function(){return a}));for(var n=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,e=null;return function(){var n=this,o=arguments;clearTimeout(e),e=setTimeout((function(){t.apply(n,o)}),i)}},o=new Array(200),s=0,r=o.length;s<r;s++)o[s]=1-2*Math.random();var a=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},function(t,i,e){"use strict";e.d(i,"a",(function(){return u}));var n=e(1),o=e.n(n),s=e(2),r=e.n(s),a=e(0),h=function(){function t(){o()(this,t)}return r()(t,null,[{key:"toPosRate",value:function(t,i,e){return[t[0]*(1-e)+i[0]*e,t[1]*(1-e)+i[1]*e]}},{key:"cross",value:function(t,i,e){return(t[0]-i[0])*(e[1]-i[1])-(e[0]-i[0])*(t[1]-i[1])}},{key:"getCenter",value:function(t,i){return[.5*(t[0]+i[0]),.5*(t[1]+i[1])]}},{key:"getVector",value:function(t,i){return[i[0]-t[0],i[1]-t[1]]}},{key:"addVector",value:function(t,i){return[t[0]+i[0],t[1]+i[1]]}},{key:"distance",value:function(i,e){return a.a.length(t.getVector(i,e))}}]),t}(),u=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#000000",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:10,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;o()(this,t),this.options={color:i,pos:e,velocity:n,direct:s,radius:r,mass:a},this.init()}return r()(t,[{key:"init",value:function(){this.pos=this.options.pos.slice(),this.velocity=[Math.cos(this.options.direct)*this.options.velocity,Math.sin(this.options.direct)*this.options.velocity],this.radius=this.options.radius,this.mass=this.options.mass,this.collision=!1,this.velocity0=[0,0]}},{key:"setVelocity",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.velocity[0]=Math.cos(i)*t,this.velocity[1]=Math.sin(i)*t}},{key:"addVelocity",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.velocity[0]+=Math.cos(i)*t,this.velocity[1]+=Math.sin(i)*t}},{key:"setPos",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.pos[0]=t,this.pos[1]=i}},{key:"setRadius",value:function(t){this.radius=t}},{key:"setMass",value:function(t){this.mass=t}},{key:"update",value:function(){this.pos[0]+=this.velocity[0],this.pos[1]+=this.velocity[1]}},{key:"render",value:function(t){t.fillStyle=this.options.color,t.beginPath(),t.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI),t.fill()}},{key:"boundaryCheck",value:function(t,i){this.pos[0]-this.radius<0&&this.velocity[0]<0?(this.velocity[0]*=-1,this.pos[0]=0+this.radius):this.pos[0]+this.radius>t&&this.velocity[0]>0?(this.velocity[0]*=-1,this.pos[0]=t-this.radius):this.pos[1]-this.radius<0&&this.velocity[1]<0?(this.velocity[1]*=-1,this.pos[1]=0+this.radius):this.pos[1]+this.radius>i&&this.velocity[1]>0&&(this.velocity[1]*=-1,this.pos[1]=i-this.radius)}},{key:"collisionCheck",value:function(t){for(var i=0;i<t.length;i++){var e=t[i];if(this===e)return;var n=this.pos,o=e.pos,s=h.distance(n,o);if(s>0&&s<this.radius+e.radius){var r=h.getVector(n,o);a.b.scale(r,this.radius/s);var u=h.getVector(o,n);a.b.scale(u,e.radius/s);var c=h.toPosRate(n,o,this.radius/(this.radius+e.radius)),l=h.getVector(h.addVector(n,r),c);a.b.scale(l,.5);var d=h.getVector(h.addVector(o,u),c);a.b.scale(d,.5),a.b.add(n,l),a.b.add(o,d);var v=a.a.sub(this.velocity,e.velocity);if(a.a.dot(v,r)>=0){var f=a.a.projection(this.velocity,r),y=a.a.projection(e.velocity,u);a.b.sub(this.velocity,f),a.b.sub(e.velocity,y);var p=a.a.collisionCalc(f,y,this.mass,e.mass),g=a.a.collisionCalc(y,f,e.mass,this.mass);a.b.add(this.velocity,p),a.b.add(e.velocity,g)}}}}}]),t}()},,,function(t,i,e){"use strict";e.r(i);var n,o=e(5),s=e(3),r=e(4),a=e(0),h=document.getElementById("canvas"),u=h.getContext("2d"),c=h.width,l=h.height,d=new s.b(0,0,c,l),v=new s.a(d,10),f=function(){h.width=c=window.innerWidth,h.height=l=window.innerHeight,d.width=c,d.height=l,v.reset(d,10),n=new Array(Math.ceil(c*l/1e3));for(var t=0;t<n.length;t++){var i=5+5*Math.random();n[t]=new o.a("hsl(".concat(Math.floor(360*Math.random()),",100%,50%)")),n[t].setPos(i+(c-2*i)*Math.random(),i+(l-2*i)*Math.random()),n[t].setVelocity(2,2*Math.PI*Math.random()),n[t].setRadius(i),n[t].setMass(i/5)}};window.addEventListener("resize",Object(r.a)(f)),f(),h.addEventListener("click",(function(t){var i=[t.pageX,t.pageY],e=100,o=new s.b(i[0]-e,i[1]-e,200,200);v.query(o).forEach((function(t){var o=a.a.sub(t.point,i),s=a.a.length(o);s<=e&&(n[t.key].addVelocity(Math.min(s?1e3/s:0,10),Math.atan2(o[1],o[0])),n[t.key].setRadius(n[t.key].radius))}))}));var y=function(){u.fillStyle="#000000",u.fillRect(0,0,c,l);for(var t=0;t<n.length;t++)n[t].update();for(var i=0;i<n.length;i++)n[i].boundaryCheck(c,l);v.clear();for(var e=0;e<n.length;e++)v.insert({key:e,point:n[e].pos});for(var o=0;o<n.length;o++){for(var r=[],a=n[o].radius+10,h=n[o].radius+10,d=new s.b(n[o].pos[0]-a,n[o].pos[1]-h,2*a,2*h),f=v.query(d),y=0;y<f.length;y++)r.push(n[f[y].key]);n[o].collisionCheck(r)}for(var p=0;p<n.length;p++)n[p].render(u)};y();var p=Date.now();!function t(){requestAnimationFrame(t);var i=Date.now(),e=(i-p)/1e3;p=i,y(),u.font="18px Noto Sans TC",u.textAlign="start",u.textBaseline="hanging",u.fillStyle="#ffffff",u.fillText((1/e).toFixed(1),10,10)}()}]);