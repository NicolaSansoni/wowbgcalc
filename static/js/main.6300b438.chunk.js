(this.webpackJsonpwowbgcalc=this.webpackJsonpwowbgcalc||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var s=i(0),n=i(1),c=i.n(n),l=i(5),r=i.n(l),a=(i(14),i(7)),o=i(3),u=i(2),d=i(8),h=i(6),b=(i(15),function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(o.a)(this,e),this.color=t,this.value=i,this.faces=8,this.id=e._generateId()}return Object(u.a)(e,null,[{key:"_generateId",value:function(){return e._count++,e._count-1}}]),Object(u.a)(e,[{key:"roll",value:function(){var e=Math.ceil(Math.random()*this.faces);this.value=e}}]),e}());b._count=0;var j=b;i(16);var v=function(e){return Object(s.jsx)("div",{className:"Dice "+e.dice.color,children:e.dice.value})};i(17);var f=function(e){var t="black";"color"in e.items&&(t=e.items.color);var i=e.items.list.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)(v,{dice:e})},e.id)}));return Object(s.jsxs)("div",{className:"DiceList "+t,children:[Object(s.jsxs)("div",{className:"DiceList-buttons",children:[Object(s.jsx)("button",{onClick:function(){return e.addDice()},children:" + "}),Object(s.jsx)("button",{onClick:function(){return e.removeDice()},children:" - "})]}),Object(s.jsx)("ul",{children:i})]})},O=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var s;return Object(o.a)(this,i),(s=t.call(this,e)).state={listBlue:{list:Array(0),color:"blue"},listRed:{list:Array(0),color:"red"},listGreen:{list:Array(0),color:"green"}},s}return Object(u.a)(i,[{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("div",{className:"App-page",children:[Object(s.jsx)(f,{items:this.state.listBlue,addDice:function(){return e.addDice(e.state.listBlue)},removeDice:function(){return e.removeDice(e.state.listBlue)}}),Object(s.jsx)(f,{items:this.state.listRed,addDice:function(){return e.addDice(e.state.listRed)},removeDice:function(){return e.removeDice(e.state.listRed)}}),Object(s.jsx)(f,{items:this.state.listGreen,addDice:function(){return e.addDice(e.state.listGreen)},removeDice:function(){return e.removeDice(e.state.listGreen)}}),Object(s.jsx)("button",{id:"roll",onClick:function(){return e.roll()},children:" roll "})]})})}},{key:"addDice",value:function(e){var t=e.list.length;if(7!==t){var i,s={list:e.list.slice(),color:e.color};switch(s.list.push(new j(s.color,t+1)),e.color){case"blue":i=Object.assign({},this.state,{listBlue:s});break;case"red":i=Object.assign({},this.state,{listRed:s});break;case"green":i=Object.assign({},this.state,{listGreen:s});break;default:alert("not colored lists are not implemented")}this.setState(i)}else alert("lista piena!")}},{key:"removeDice",value:function(e){if(0!==e.list.length){var t,i={list:e.list.slice(),color:e.color};switch(i.list.pop(),e.color){case"blue":t=Object.assign({},this.state,{listBlue:i});break;case"red":t=Object.assign({},this.state,{listRed:i});break;case"green":t=Object.assign({},this.state,{listGreen:i});break;default:alert("not colored lists are not implemented")}this.setState(t)}else alert("lista vuota!")}},{key:"roll",value:function(){for(var e=[this.state.listBlue.list.slice(),this.state.listRed.list.slice(),this.state.listGreen.list.slice()],t=0,i=e;t<i.length;t++){var s,n=i[t],c=Object(a.a)(n);try{for(c.s();!(s=c.n()).done;){s.value.roll()}}catch(r){c.e(r)}finally{c.f()}n.sort((function(e,t){return t.value-e.value}))}var l=Object.assign({},this.state);l.listBlue.list=e[0],l.listRed.list=e[1],l.listGreen.list=e[2],this.setState(l)}}]),i}(c.a.Component),m=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,19)).then((function(t){var i=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,l=t.getTTFB;i(e),s(e),n(e),c(e),l(e)}))};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root")),m()}],[[18,1,2]]]);
//# sourceMappingURL=main.6300b438.chunk.js.map