!function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e,n,i,r,o,a){try{var c=t[o](a),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(i,r)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){i(a,r,o,c,s,"next",t)}function s(t){i(a,r,o,c,s,"throw",t)}c(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0/6H":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("A36C"),r=n("iWo5"),o=n("qULd"),a=function(t,e){var n,a,c=function(t,i,r){if("undefined"!=typeof document){var o=document.elementFromPoint(t,i);o&&e(o)?o!==n&&(u(),s(o,r)):u()}},s=function(t,e){n=t,a||(a=n);var r=n;Object(i.f)((function(){return r.classList.add("ion-activated")})),e()},u=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(n){var e=n;Object(i.f)((function(){return e.classList.remove("ion-activated")})),t&&a!==n&&n.click(),n=void 0}};return Object(r.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return c(t.currentX,t.currentY,o.a)},onMove:function(t){return c(t.currentX,t.currentY,o.b)},onEnd:function(){u(!0),Object(o.e)(),a=void 0}})}},"74mu":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return s}));var i=function(t,e){return null!==e.closest(t)},o=function(t,e){return"string"==typeof t&&t.length>0?Object.assign((r=!0,(i="ion-color-"+t)in(n={"ion-color":!0})?Object.defineProperty(n,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[i]=r,n),e):e;var n,i,r},a=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},c=/^[a-z][a-z0-9+\-.]*:/,s=function(){var t=r(regeneratorRuntime.mark((function t(e,n,i,r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e||"#"===e[0]||c.test(e)){t.next=4;break}if(!(o=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=n&&n.preventDefault(),o.push(e,i,r)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}}),t)})));return function(e,n,i,r){return t.apply(this,arguments)}}()},D453:function(t,i,r){"use strict";r.r(i),r.d(i,"AddPageModule",(function(){return y}));var o=r("ofXK"),a=r("3Pt+"),c=r("TEn/"),s=r("tyNb"),u=function t(e){n(this,t),this.description=e,this.completed=!1},l=r("fXoL"),f=r("LzXR");function d(t,e){1&t&&(l.Kb(0,"ion-list-header",1),l.Kb(1,"ion-label"),l.fc(2," To Do... "),l.Jb(),l.Jb())}function b(t,e){if(1&t){var n=l.Lb();l.Kb(0,"ion-item-sliding",8),l.Kb(1,"ion-item",1),l.Kb(2,"ion-checkbox",9),l.Sb("ngModelChange",(function(t){return l.bc(n),e.$implicit.completed=t}))("ionChange",(function(){return l.bc(n),l.Ub().checkChange()})),l.Jb(),l.Kb(3,"ion-label"),l.fc(4),l.Jb(),l.Jb(),l.Kb(5,"ion-item-options",10),l.Kb(6,"ion-item-option",11),l.Sb("click",(function(){l.bc(n);var t=e.index;return l.Ub().deleteItem(t)})),l.Ib(7,"ion-icon",12),l.Jb(),l.Jb(),l.Jb()}if(2&t){var i=e.$implicit;l.xb(2),l.Zb("ngModel",i.completed),l.xb(2),l.gc(i.description)}}var p,m,h,v=[{path:"",component:(p=function(){function t(e,i){n(this,t),this.wishesService=e,this.activatedRoute=i;var r=this.activatedRoute.snapshot.paramMap.get("taskId");this.taskActive=this.wishesService.getTask(r)}return e(t,[{key:"ngOnInit",value:function(){}},{key:"addItem",value:function(){if(0!==this.itemModel.length){var t=new u(this.itemModel);this.taskActive.itemList.push(t),this.itemModel="",this.wishesService.saveStorage()}}},{key:"checkChange",value:function(){0===this.taskActive.itemList.filter((function(t){return!t.completed})).length?(this.taskActive.completedAt=new Date,this.taskActive.completed=!0):(this.taskActive.completedAt=null,this.taskActive.completed=!1),this.wishesService.saveStorage()}},{key:"deleteItem",value:function(t){this.taskActive.itemList.splice(t,1),this.wishesService.saveStorage()}}]),t}(),p.\u0275fac=function(t){return new(t||p)(l.Hb(f.a),l.Hb(s.a))},p.\u0275cmp=l.Bb({type:p,selectors:[["app-add"]],decls:15,vars:4,consts:[[1,"ion-no-border"],["color","dark"],["slot","start"],["color","tertiary","defaultHref","/"],["position","floating"],["type","text",3,"ngModel","ngModelChange","keyup.enter"],["color","dark",4,"ngIf"],["class","animated fadeInDown",4,"ngFor","ngForOf"],[1,"animated","fadeInDown"],["slot","start","color","tertiary",3,"ngModel","ngModelChange","ionChange"],["side","end"],["color","danger",3,"click"],["slot","icon-only","name","close"]],template:function(t,e){1&t&&(l.Kb(0,"ion-header",0),l.Kb(1,"ion-toolbar",1),l.Kb(2,"ion-buttons",2),l.Ib(3,"ion-back-button",3),l.Jb(),l.Kb(4,"ion-title"),l.fc(5),l.Jb(),l.Jb(),l.Jb(),l.Kb(6,"ion-content",1),l.Kb(7,"ion-list",1),l.Kb(8,"ion-item",1),l.Kb(9,"ion-label",4),l.fc(10,"New Item"),l.Jb(),l.Kb(11,"ion-input",5),l.Sb("ngModelChange",(function(t){return e.itemModel=t}))("keyup.enter",(function(){return e.addItem()})),l.Jb(),l.Jb(),l.Jb(),l.Kb(12,"ion-list"),l.ec(13,d,3,0,"ion-list-header",6),l.ec(14,b,8,2,"ion-item-sliding",7),l.Jb(),l.Jb()),2&t&&(l.xb(5),l.gc(e.taskActive.title),l.xb(6),l.Zb("ngModel",e.itemModel),l.xb(2),l.Zb("ngIf",0==e.taskActive.itemList.length),l.xb(1),l.Zb("ngForOf",e.taskActive.itemList))},directives:[c.k,c.A,c.f,c.d,c.e,c.z,c.h,c.s,c.n,c.r,c.m,c.E,a.d,a.e,o.i,o.h,c.t,c.q,c.g,c.b,c.p,c.o,c.l],encapsulation:2}),p)}],g=((h=function t(){n(this,t)}).\u0275mod=l.Fb({type:h}),h.\u0275inj=l.Eb({factory:function(t){return new(t||h)},imports:[[s.i.forChild(v)],s.i]}),h),y=((m=function t(){n(this,t)}).\u0275mod=l.Fb({type:m}),m.\u0275inj=l.Eb({factory:function(t){return new(t||m)},imports:[[o.b,a.a,c.B,g]]}),m)},LzXR:function(t,i,r){"use strict";r.d(i,"a",(function(){return s}));var o,a=function t(e){n(this,t),this.title=e,this.completed=!1,this.createdAt=new Date,this.id=(new Date).getTime(),this.itemList=[]},c=r("fXoL"),s=((o=function(){function t(){n(this,t),this.taskList=[],this.loadStorage()}return e(t,[{key:"createTask",value:function(t){var e=new a(t);return this.taskList.push(e),this.saveStorage(),e.id}},{key:"getTask",value:function(t){var e=Number(t);return this.taskList.find((function(t){return t.id===e}))}},{key:"deleteTask",value:function(t){this.taskList=this.taskList.filter((function(e){return e.id!==t.id})),this.saveStorage()}},{key:"saveStorage",value:function(){localStorage.setItem("data",JSON.stringify(this.taskList))}},{key:"loadStorage",value:function(){localStorage.getItem("data")&&(this.taskList=JSON.parse(localStorage.getItem("data")))}}]),t}()).\u0275fac=function(t){return new(t||o)},o.\u0275prov=c.Db({token:o,factory:o.\u0275fac,providedIn:"root"}),o)},"N+2n":function(t,i,r){"use strict";r.d(i,"a",(function(){return m}));var o,a=r("mrSG"),c=r("TEn/"),s=r("fXoL"),u=r("LzXR"),l=r("tyNb"),f=r("ofXK"),d=((o=function(){function t(){n(this,t)}return e(t,[{key:"transform",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.filter((function(t){return t.completed===e}))}}]),t}()).\u0275fac=function(t){return new(t||o)},o.\u0275pipe=s.Gb({name:"completedFilter",type:o,pure:!1}),o);function b(t,e){if(1&t){var n=s.Lb();s.Kb(0,"ion-item-sliding",1),s.Kb(1,"ion-item",2),s.Sb("click",(function(){s.bc(n);var t=e.$implicit;return s.Ub().selectedTask(t)})),s.Kb(2,"ion-label"),s.fc(3),s.Jb(),s.Kb(4,"ion-note",3),s.fc(5),s.Jb(),s.Jb(),s.Kb(6,"ion-item-options",4),s.Kb(7,"ion-item-option",5),s.Sb("click",(function(){s.bc(n);var t=e.$implicit;return s.Ub().editTask(t)})),s.Ib(8,"ion-icon",6),s.Jb(),s.Jb(),s.Kb(9,"ion-item-options",7),s.Kb(10,"ion-item-option",8),s.Sb("click",(function(){s.bc(n);var t=e.$implicit;return s.Ub().deleteTask(t)})),s.Ib(11,"ion-icon",9),s.Jb(),s.Jb(),s.Jb()}if(2&t){var i=e.$implicit;s.xb(3),s.hc(" ",i.title," "),s.xb(2),s.hc("",i.itemList.length," Items")}}var p,m=((p=function(){function t(e,i,r){n(this,t),this.wishesService=e,this.router=i,this.alertCtrl=r,this.completed=!0}return e(t,[{key:"ngOnInit",value:function(){}},{key:"selectedTask",value:function(t){this.router.navigateByUrl(!0===this.completed?"/tabs/tab2/add/"+t.id:"/tabs/tab1/add/"+t.id)}},{key:"deleteTask",value:function(t){this.wishesService.deleteTask(t)}},{key:"editTask",value:function(t){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertCtrl.create({header:"Edit Task",inputs:[{name:"title",type:"text",value:t.title,placeholder:"Task name"}],buttons:[{text:"Cancel",role:"cancel",handler:function(){console.log("Cancel"),n.task.closeSlidingItems()}},{text:"Update",handler:function(e){console.log(e),0!==e.title.length&&(t.title=e.title,n.wishesService.saveStorage(),n.task.closeSlidingItems())}}]});case 2:e.sent.present();case 3:case"end":return e.stop()}}),e,this)})))}}]),t}()).\u0275fac=function(t){return new(t||p)(s.Hb(u.a),s.Hb(l.g),s.Hb(c.a))},p.\u0275cmp=s.Bb({type:p,selectors:[["app-tasks"]],viewQuery:function(t,e){var n;1&t&&s.ic(c.s,!0),2&t&&s.ac(n=s.Tb())&&(e.task=n.first)},inputs:{completed:"completed"},decls:3,vars:4,consts:[["class","animated fadeInDown",4,"ngFor","ngForOf"],[1,"animated","fadeInDown"],["color","dark","detail","",3,"click"],["slot","end","color","tertiary"],["side","start"],[3,"click"],["name","create","slot","icon-only"],["side","end"],["color","danger",3,"click"],["slot","icon-only","name","close-outline"]],template:function(t,e){1&t&&(s.Kb(0,"ion-list"),s.ec(1,b,12,2,"ion-item-sliding",0),s.Vb(2,"completedFilter"),s.Jb()),2&t&&(s.xb(1),s.Zb("ngForOf",s.Wb(2,1,e.wishesService.taskList,e.completed)))},directives:[c.s,f.h,c.q,c.n,c.r,c.u,c.p,c.o,c.l],pipes:[d],encapsulation:2}),p)},ZaV5:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var i=function(){var t=r(regeneratorRuntime.mark((function t(e,n,i,r,o){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",e.attachViewToDom(n,i,o,r));case 2:if("string"==typeof i||i instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:if(a="string"==typeof i?n.ownerDocument&&n.ownerDocument.createElement(i):i,r&&r.forEach((function(t){return a.classList.add(t)})),o&&Object.assign(a,o),n.appendChild(a),t.t0=a.componentOnReady,!t.t0){t.next=12;break}return t.next=12,a.componentOnReady();case 12:return t.abrupt("return",a);case 13:case"end":return t.stop()}}),t)})));return function(e,n,i,r,o){return t.apply(this,arguments)}}(),o=function(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},h3R7:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i={bubbles:{dur:1e3,circles:9,fn:function(t,e,n){var i=t*e/n-t+"ms",r=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:function(t,e,n){var i=e/n,r=t*i-t+"ms",o=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,e){return{r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(t,e,n){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":t*e/n-t+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,e,n){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":t*e/n-t+"ms"}}}}}},j1ZV:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var r,o,a=i("ofXK"),c=i("TEn/"),s=i("fXoL"),u=((o=function t(){n(this,t)}).\u0275mod=s.Fb({type:o}),o.\u0275inj=s.Eb({factory:function(t){return new(t||o)}}),o),l=((r=function t(){n(this,t)}).\u0275mod=s.Fb({type:r}),r.\u0275inj=s.Eb({factory:function(t){return new(t||r)},imports:[[a.b,c.B,u]]}),r)},qULd:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return c}));var i={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var e=this.getEngine();if(e){var n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})}},notification:function(t){var e=this.getEngine();if(e){var n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},r=function(){i.selection()},o=function(){i.selectionStart()},a=function(){i.selectionChanged()},c=function(){i.selectionEnd()},s=function(t){i.impact(t)}},qtYk:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var r=i("ofXK"),o=i("3Pt+"),a=i("TEn/"),c=i("fXoL"),s=function(){var t=function t(){n(this,t)};return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(e){return new(e||t)},imports:[[r.b,o.a,a.B]]}),t}()}}])}();