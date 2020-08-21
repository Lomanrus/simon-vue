(function(t){function e(e){for(var a,s,i=e[0],u=e[1],c=e[2],f=0,m=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"0aa5":function(t,e,n){"use strict";var a=n("16b9"),r=n.n(a);r.a},"16b9":function(t,e,n){},"36cf":function(t,e,n){"use strict";var a=n("a448"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("2f62"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("game")],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game"},[n("buttons-holder",[n("game-button",{attrs:{color:"#FF5643",buttonkey:0,sound:"1.mp3"}}),n("game-button",{attrs:{color:"#1E90FF",buttonkey:1,sound:"2.mp3"}}),n("game-button",{attrs:{color:"#FEEF33",buttonkey:2,sound:"3.mp3"}}),n("game-button",{attrs:{color:"#BEDE15",buttonkey:3,sound:"4.mp3"}})],1),n("game-over"),n("game-controls")],1)},u=[],c=(n("4160"),n("159b"),n("2909")),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"buttons-holder"},[t._t("default")],2)},f=[],m={name:"buttonsHolder"},d=m,p=(n("36cf"),n("2877")),v=Object(p["a"])(d,l,f,!1,null,"7f2b5b76",null),h=v.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game-button"},[n("button",{ref:"btn",style:{backgroundColor:t.color},attrs:{"data-key":t.buttonkey,disabled:"gameover"===this.$store.state.gameState},on:{click:t.click}})])},b=[],y={name:"gameButton",props:["color","sound","buttonkey"],methods:{click:function(t){if("listening"===this.$store.state.gameState||t&&!t.isTrusted){var e=this.$refs.btn;e.style.opacity=1,setTimeout((function(){e.style.opacity=.6}),200),this.playSound(n("c3e4")("./".concat(this.sound))),this.checkSequence(this.buttonkey)}else;},playSound:function(t){var e=new Audio(t);e.play()},checkSequence:function(t){var e=this;if("listening"===this.$store.state.gameState){var n=this.$store.state.userSequence.shift();t===n?this.$store.state.userSequence.length||setTimeout((function(){"gameover"!==e.$store.state.gameState&&(e.$store.state.gameState="waiting",window.$game.levelUp())}),1e3):this.$store.state.gameState="gameover"}}}},$=y,w=(n("79b1"),Object(p["a"])($,g,b,!1,null,"1f516bce",null)),_=w.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"controls-wrapper"},[n("div",{staticClass:"level"},[t._v("Уровень: "+t._s(this.$store.state.level))]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.difficulty,expression:"$store.state.difficulty"}],attrs:{name:"difficulty",id:"difficulty-select"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.$store.state,"difficulty",e.target.multiple?n:n[0])}}},t._l(this.$store.state.difficultyLevels,(function(e){return n("option",{key:e.id},[t._v(t._s(e))])})),0),n("button",{on:{click:t.gameStart}},[t._v("Старт")])])},O=[],k={name:"gameControls",methods:{gameStart:function(){var t=this;setTimeout((function(){t.restartGame()}),500)},restartGame:function(){this.$store.state.started||(this.started=!0,window.$game.restart())}}},x=k,j=(n("0aa5"),Object(p["a"])(x,S,O,!1,null,"376ca992",null)),E=j.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"gameover"===this.$store.state.gameState?n("div",{staticClass:"gameover-wrapper"},[n("h2",[t._v("Игра окончена")]),n("button",{on:{click:t.gameReset}},[t._v("Повторить")])]):t._e()},T=[],C={name:"gameOver",methods:{gameReset:function(){window.$game.restart()}}},F=C,M=(n("7acc"),Object(p["a"])(F,q,T,!1,null,"74ad5f32",null)),P=M.exports,N={name:"game",components:{buttonsHolder:h,gameOver:P,gameButton:_,gameControls:E},methods:{play:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.$store.state.gameState="waiting",e.forEach((function(n,a){setTimeout((function(){document.querySelectorAll("[data-key]")[n].click(),a===e.length-1&&(t.$store.state.gameState="listening")}),t.getTimeout()*a)}))},levelUp:function(){this.$store.state.level++,this.$store.state.sequence.push(this.generateNumber(0,3)),this.$store.state.userSequence=Object(c["a"])(this.$store.state.sequence),this.play(this.$store.state.sequence)},generateNumber:function(t,e){return Math.floor(Math.random()*(e-t+1))+t},gameOver:function(){this.$store.state.gameState="gameover"},restart:function(){this.$store.state.gameState="waiting",this.$store.state.sequence=[],this.$store.state.level=0,this.$store.state.userSequence=[],setTimeout((function(){window.$game.levelUp()}),500)},getTimeout:function(){switch(this.$store.state.difficulty){case"easy":return 1500;case"medium":return 1e3;case"hard":return 400}}},mounted:function(){window.$game=this}},U=N,A=(n("606c"),Object(p["a"])(U,i,u,!1,null,"69c9824e",null)),B=A.exports,D={name:"App",components:{game:B}},L=D,G=(n("034f"),Object(p["a"])(L,o,s,!1,null,null,null)),H=G.exports;a["a"].use(r["a"]);var J=new r["a"].Store({state:{level:0,sequence:[],userSequence:[],started:!1,difficultyLevels:["easy","medium","hard"],difficulty:"easy",gameState:"waiting"}});a["a"].config.productionTip=!1,a["a"].use(r["a"]),new a["a"]({store:J,render:function(t){return t(H)}}).$mount("#app")},"606c":function(t,e,n){"use strict";var a=n("7017"),r=n.n(a);r.a},7017:function(t,e,n){},"79b1":function(t,e,n){"use strict";var a=n("db33"),r=n.n(a);r.a},"7acc":function(t,e,n){"use strict";var a=n("dbd5"),r=n.n(a);r.a},"7c8b":function(t,e,n){t.exports=n.p+"media/3.c1c96b44.mp3"},"85ec":function(t,e,n){},"8b91":function(t,e,n){t.exports=n.p+"media/1.99e50f7d.mp3"},a448:function(t,e,n){},a536:function(t,e,n){t.exports=n.p+"media/2.d2c4a2c4.mp3"},c3e4:function(t,e,n){var a={"./1.mp3":"8b91","./2.mp3":"a536","./3.mp3":"7c8b","./4.mp3":"cb7a"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="c3e4"},cb7a:function(t,e,n){t.exports=n.p+"media/4.36d5a722.mp3"},db33:function(t,e,n){},dbd5:function(t,e,n){}});
//# sourceMappingURL=app.cead1968.js.map