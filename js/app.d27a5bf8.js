(function(t){function e(e){for(var i,l,r=e[0],u=e[1],o=e[2],d=0,m=[];d<r.length;d++)l=r[d],a[l]&&m.push(a[l][0]),a[l]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);c&&c(e);while(m.length)m.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,r=1;r<s.length;r++){var u=s[r];0!==a[u]&&(i=!1)}i&&(n.splice(e--,1),t=l(l.s=s[0]))}return t}var i={},a={app:0},n=[];function l(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=i,l.d=function(t,e,s){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(s,i,function(e){return t[e]}.bind(null,i));return s},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var c=u;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"088a":function(t,e,s){},"3d4f":function(t,e,s){},"3f0f":function(t,e,s){"use strict";var i=s("088a"),a=s.n(i);a.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var i=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"window"},[0===t.page?s("div",{staticClass:"frame"},[s("div",{staticClass:"main"},[t._m(0),s("div",{staticClass:"cell"},[s("v-text-field",{attrs:{label:"總電費",postfix:"元"},model:{value:t.totalAmount,callback:function(e){t.totalAmount=e},expression:"totalAmount"}})],1),s("div",{staticClass:"cell"},[s("v-text-field",{attrs:{label:"度數",postfix:"元"},model:{value:t.totalConsumed,callback:function(e){t.totalConsumed=e},expression:"totalConsumed"}})],1),s("div",{staticClass:"cell"},[s("v-radio-btn",{attrs:{label:"夏季電費",items:t.summerItems},model:{value:t.summer,callback:function(e){t.summer=e},expression:"summer"}})],1),s("div",{staticClass:"cell"},[s("v-radio-btn",{attrs:{label:"公共區域",items:t.publicAreaItems},model:{value:t.publicArea,callback:function(e){t.publicArea=e},expression:"publicArea"}})],1),s("div",{staticClass:"cell-spacer"}),s("div",{staticClass:"cell"},[s("div",{staticClass:"submit-btn",on:{click:function(e){t.page++}}},[s("div",{staticClass:"submit-btn__strip"}),s("div",{staticClass:"submit-btn__inner"},[t._v("\n              輸入每間房間度數 >\n            ")]),s("div",{staticClass:"submit-btn__strip"})])])])]):t._e(),1===t.page?s("div",{staticClass:"frame"},[s("div",{staticClass:"main"},[t._m(1),s("div",{staticClass:"cell"},[s("v-radio-btn",{attrs:{label:"輸入方式",items:t.inputTypeItems},model:{value:t.inputType,callback:function(e){t.inputType=e},expression:"inputType"}})],1),s("div",{staticClass:"cell"},[s("v-counter",{attrs:{label:t.roomConsumed.length+"間房間",min:1},on:{increment:function(e){return t.roomConsumed.push(0)},decrement:function(e){return t.roomConsumed.pop()}},model:{value:t.roomNumber,callback:function(e){t.roomNumber=e},expression:"roomNumber"}})],1),s("div",{staticClass:"cell-spacer"}),t._l(t.roomConsumed,function(e,i){return[s("div",{key:i,staticClass:"cell"},["BeforeAfter"===t.inputType?s("v-text-field2",{attrs:{label:"房"+(i+1),type:t.inputType},model:{value:t.roomConsumed[i],callback:function(e){t.$set(t.roomConsumed,i,e)},expression:"roomConsumed[index]"}}):"OnlyNow"===t.inputType?s("v-text-field",{attrs:{label:"房"+(i+1),postfix:"度"},model:{value:t.roomConsumed[i],callback:function(e){t.$set(t.roomConsumed,i,e)},expression:"roomConsumed[index]"}}):t._e()],1)]}),s("div",{staticClass:"cell-spacer"}),s("div",{staticClass:"cell"},[s("v-counter",{attrs:{label:t.roomConsumed.length+"間房間",min:1},on:{increment:function(e){return t.roomConsumed.push(0)},decrement:function(e){return t.roomConsumed.pop()}},model:{value:t.roomNumber,callback:function(e){t.roomNumber=e},expression:"roomNumber"}})],1),s("div",{staticClass:"cell-spacer"}),s("div",{staticClass:"cell"},[s("div",{staticClass:"layout"},[s("div",{staticClass:"flex xs4",staticStyle:{"border-right":"1px solid rgb(255, 183, 0)"}},[s("div",{staticClass:"submit-btn",on:{click:function(e){t.page--}}},[s("div",{staticClass:"submit-btn__strip"}),s("div",{staticClass:"submit-btn__inner"},[t._v("< 返回")]),s("div",{staticClass:"submit-btn__strip"})])]),s("div",{staticClass:"flex xs8"},[s("div",{staticClass:"submit-btn",on:{click:function(e){t.page++,t.loadSplitResult()}}},[s("div",{staticClass:"submit-btn__strip"}),s("div",{staticClass:"submit-btn__inner"},[t._v("開始分帳 >")]),s("div",{staticClass:"submit-btn__strip"})])])])])],2)]):t._e(),2===t.page?s("div",{staticClass:"frame"},[s("div",{staticClass:"main"},[t._m(2),t.publicArea?s("div",{staticClass:"cell"},[s("v-radio-btn",{attrs:{label:"公共區域",items:t.publicAreaSplitItems},model:{value:t.publicAreaSplit,callback:function(e){t.publicAreaSplit=e},expression:"publicAreaSplit"}})],1):t._e(),t.publicArea?s("div",{staticClass:"cell"},[s("v-radio-btn",{attrs:{label:"四捨五入",items:t.roundingItems},model:{value:t.rounding,callback:function(e){t.rounding=e},expression:"rounding"}})],1):t._e(),s("div",{staticClass:"cell-spacer"}),t._l(t.adjustedAmount,function(e,i){return[s("div",{key:i,staticClass:"cell"},[s("div",{staticClass:"result"},[s("div",{staticClass:"result-wrapper layout"},[s("div",{staticClass:"label flex xs3"},[t._v("房"+t._s(i+1))]),s("div",{staticClass:"memo flex xs5"},[t._v("\n                  "+t._s(t.sum(t.consumed[i]))+"度\n                  "),t.publicArea&&"EquallyDivision"===t.publicAreaSplit?s("span",[t._v("\n                    +公共區域"+t._s(t.amountPublic/t.roomNumber)+"元\n                  ")]):t._e()]),s("div",{staticClass:"amount flex xs4"},[t._v(t._s(e)+"元")])])])])]}),t.publicArea?s("div",{staticClass:"cell"},[s("div",{staticClass:"result"},[s("div",{staticClass:"result-wrapper layout"},[s("div",{staticClass:"label flex xs3"},[t._v("公共")]),s("div",{staticClass:"memo flex xs5"},[t._v("\n                "+t._s(t.sum(t.consumed[t.consumed.length-1]))+"度\n              ")]),s("div",{staticClass:"amount flex xs4"},[t._v(t._s(t.amountPublic)+"元")])])])]):t._e(),s("div",{staticClass:"cell"},[s("div",{staticClass:"result"},[s("div",{staticClass:"result-wrapper layout"},[s("div",{staticClass:"label flex xs3"},[t._v("總電費")]),s("div",{staticClass:"memo flex xs5"}),s("div",{staticClass:"amount flex xs4"},[t._v(t._s(t.sum(t.amount))+"元")])])])]),s("div",{staticClass:"cell-spacer"}),s("div",{staticClass:"cell"},[s("div",{staticClass:"layout"},[s("div",{staticClass:"flex xs4",staticStyle:{"border-right":"2px solid rgb(255, 183, 0)"}},[s("div",{staticClass:"submit-btn",on:{click:function(e){t.page--}}},[s("div",{staticClass:"submit-btn__strip"}),s("div",{staticClass:"submit-btn__inner"},[t._v("< 返回")]),s("div",{staticClass:"submit-btn__strip"})])]),s("div",{staticClass:"flex xs8"},[s("div",{staticClass:"submit-btn",on:{click:function(t){}}},[s("div",{staticClass:"submit-btn__strip"}),s("div",{staticClass:"submit-btn__inner"},[t._v("複製結果")]),s("div",{staticClass:"submit-btn__strip"})])])])]),s("div",{staticClass:"cell-spacer"}),t._m(3)],2)]):t._e()])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cell-header"},[s("div",{staticClass:"header-wrapper"},[s("div",{staticClass:"text"},[t._v("租屋電費分帳小幫手")]),s("div",{staticClass:"underline"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cell-header"},[s("div",{staticClass:"header-wrapper"},[s("div",{staticClass:"text"},[t._v("每房度數")]),s("div",{staticClass:"underline"}),s("p",[t._v("\n              輸入每個房間的小電表度數\n            ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cell-header"},[s("div",{staticClass:"header-wrapper"},[s("div",{staticClass:"text"},[t._v("分帳結果")]),s("div",{staticClass:"underline"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cell"},[s("a",{attrs:{href:""}},[t._v("瞭解分帳方式")]),s("a",{attrs:{href:""}},[t._v("GitHub")]),s("a",{attrs:{href:""}},[t._v("回饋")])])}],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-field"},[s("div",{staticClass:"text-field-wrapper"},[t.label?s("label",{staticClass:"label"},[t._v("\n      "+t._s(t.label)+"\n    ")]):t._e(),s("div",{staticClass:"input"},[s("input",{attrs:{type:"number"},domProps:{value:t.value},on:{change:function(e){t.$emit("input",parseInt(e.target.value))}}})]),t.postfix?s("div",{staticClass:"postfix"},[t._v("\n      "+t._s(t.postfix)+"\n    ")]):t._e()])])},r=[],u=(s("c5f6"),{name:"VTextField",props:{label:{type:String,default:""},value:[String,Number],postfix:{type:String,default:""}}}),o=u,c=(s("aba4"),s("2877")),d=Object(c["a"])(o,l,r,!1,null,"16b9cd2c",null),m=d.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:"text-field"+(t.warning?" warning":"")},[s("div",{staticClass:"text-field-wrapper"},[t.label?s("label",{staticClass:"label"},[t._v("\n      "+t._s(t.label)+"\n    ")]):t._e(),s("div",{staticClass:"input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.beforeConsumed,expression:"beforeConsumed"}],attrs:{type:"number",placeholder:"前期度數"},domProps:{value:t.beforeConsumed},on:{input:function(e){e.target.composing||(t.beforeConsumed=e.target.value)}}})]),s("div",{staticClass:"postfix",staticStyle:{"margin-right":"8px"}},[t._v("度")]),s("div",{staticClass:"input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.afterConsumed,expression:"afterConsumed"}],attrs:{type:"number",placeholder:"本期度數"},domProps:{value:t.afterConsumed},on:{input:function(e){e.target.composing||(t.afterConsumed=e.target.value)}}})]),s("div",{staticClass:"postfix"},[t._v("\n      度\n    ")])])])},p=[],f=(s("7cdf"),{name:"VTextField2",props:{label:{type:String,default:""},value:[String,Number],type:{type:String,default:"BeforeAfter"}},data:function(){return{beforeConsumed:"",afterConsumed:"",warning:!1}},watch:{afterConsumed:function(){this.update()},beforeConsumed:function(){this.update()}},methods:{update:function(){if(this.beforeConsumed&&this.afterConsumed){var t=parseInt(this.beforeConsumed),e=parseInt(this.afterConsumed);Number.isInteger(t)&&Number.isInteger(e)?e-t<0||e<0||t<0?this.warning=!0:(this.$emit("input",e-t),this.warning=!1):this.warning=!0}else this.warning=!0}},mounted:function(){this.value&&(this.afterConsumed=this.value)}}),b=f,C=(s("ca35"),Object(c["a"])(b,v,p,!1,null,"008f9e22",null)),h=C.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"radio-btn"},[s("div",{staticClass:"radio-btn-wrapper"},[t.label?s("div",{staticClass:"label"},[t._v("\n      "+t._s(t.label)+"\n    ")]):t._e(),t.items?s("div",{staticClass:"items"},[t._l(t.items,function(e,i){return[s("div",{key:i,staticClass:"item",on:{click:function(s){return t.$emit("input",e.value)}}},[s("div",{staticClass:"item-wrapper"},[e.value===t.value?s("div",{staticClass:"radiobox"},[t._v("\n              ✔\n            ")]):t._e(),t._v("\n            "+t._s(e.label)+"\n          ")])])]})],2):t._e()])])},x=[],g={name:"VRadioBtn",props:{label:{type:String,default:""},value:[String,Number,Boolean],items:{type:Array}}},y=g,A=(s("3f0f"),Object(c["a"])(y,_,x,!1,null,"168f587d",null)),w=A.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"counter"},[s("div",{staticClass:"counter-wrapper layout"},[s("div",{staticClass:"btn flex xs3",on:{click:t.decrement}},[t._v("\n      -\n    ")]),s("div",{staticClass:"label flex xs6"},[t._v(t._s(t.label))]),s("div",{staticClass:"btn flex xs3",on:{click:t.increment}},[t._v("+")])])])},k=[],N={name:"VCounter",props:{label:{type:String,default:""},value:{type:Number,default:0},max:{type:Number,default:100},min:{type:Number,default:0}},methods:{increment:function(){this.value<this.max&&(this.$emit("input",this.value+1),this.$emit("increment",this.value+1))},decrement:function(){this.value>this.min&&(this.$emit("input",this.value-1),this.$emit("decrement",this.value-1))}}},$=N,I=(s("d888"),Object(c["a"])($,S,k,!1,null,"3641634c",null)),O=I.exports,T={name:"app",components:{VTextField:m,VTextField2:h,VRadioBtn:w,VCounter:O},data:function(){return{totalAmount:0,totalConsumed:0,summer:!1,summerItems:[{label:"夏季 (6~9月)",value:!0},{label:"非夏季",value:!1}],publicArea:!0,publicAreaItems:[{label:"有",value:!0},{label:"沒有",value:!1}],inputTypeItems:[{label:"前後期",value:"BeforeAfter"},{label:"本期度數",value:"OnlyNow"}],inputType:"BeforeAfter",roomNumber:4,roomConsumed:[0,0,0,0],publicAreaConsumed:0,publicAreaSplit:"EquallyDivision",publicAreaSplitItems:[{label:"平均分攤",value:"EquallyDivision"},{label:"獨立計算",value:"Identical"}],unitCost:{summer:[1.63,2.38,3.52,4.8,5.66,6.41],notSummer:[1.63,2.1,2.89,3.94,4.6,5.03]},consumed:[[40,80,0,0,0,0],[40,40,0,0,0,0],[40,60,0,0,0,0]],amount:[],rounding:!0,roundingItems:[{label:"開啟",value:!0},{label:"關閉",value:!1}],page:0}},computed:{adjustedAmount:function(){if(!this.amount)return[];if(this.publicArea){var t=this.amount.slice(0,this.amount.length-1);if("EquallyDivision"===this.publicAreaSplit)for(var e=this.amountPublic/this.roomNumber,s=0;s<t.length;s++)t[s]+=e;for(var i=0;i<t.length;i++)t[i]=t[i].toFixed(1);return t}for(var a=this.amount.slice(0),n=0;n<a.length;n++)a[n]=a[n].toFixed(1);return a},amountPublic:function(){return this.amount&&this.publicArea?this.amount[this.amount.length-1].toFixed(1):0}},methods:{sum:function(t){return t?t.reduce(function(t,e){return t+e},0):0},loadSplitResult:function(){var t=this.roomNumber,e=this.roomConsumed.slice(0),s=this.sum(e),i=this.totalConsumed,a=Math.max(i,s);this.publicArea&&(t+=1,e.push(i>s?i-s:0));var n=this.calculateSplitResult(t,e,a);this.$set(this,"consumed",n),this.loadAmount()},calculateSplitResult:function(t,e,s){for(var i=[120,210,170,200,300,1e13],a=[],n=0;n<t;n++){a.push([]);for(var l=0;l<i.length;l++)a[n].push(0)}for(var r=function(t,e){for(var s=[Math.min(t[0],e)],i=1;i<t.length;i++)s.push(Math.min(t[i],e-s[i-1]));return s},u=function(t){for(var e=0,s=0;s<t.length;s++)0===t[s]&&(e+=1);return e},o=r(i,s),c=e.slice(0),d=0;d<i.length;d++){var m=!1,v=!1,p=o[d],f=10;while(!v){for(var b=p/(t-u(c)),C=0;C<t;C++)if(0!==c[C]){var h=Math.min(b,c[C]);a[C][d]+=h,c[C]-=h,p-=h}if(v=0===p,u(c)===t){m=!0;break}if(f--<=0){m=!0;break}}if(m)break}return a},loadAmount:function(){var t=this.calculateAmount(this.consumed,this.summer?this.unitCost.summer:this.unitCost.notSummer);this.$set(this,"amount",t)},calculateAmount:function(t,e){for(var s=[],i=0;i<t.length;i++){for(var a=0,n=0;n<e.length;n++)a+=t[i][n]*e[n];s.push(a)}return s}}},j=T,E=(s("5c0b"),Object(c["a"])(j,a,n,!1,null,null,null)),P=E.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(P)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var i=s("5e27"),a=s.n(i);a.a},"5e27":function(t,e,s){},"84cc":function(t,e,s){},"8a2d":function(t,e,s){},aba4:function(t,e,s){"use strict";var i=s("3d4f"),a=s.n(i);a.a},ca35:function(t,e,s){"use strict";var i=s("8a2d"),a=s.n(i);a.a},d888:function(t,e,s){"use strict";var i=s("84cc"),a=s.n(i);a.a}});
//# sourceMappingURL=app.d27a5bf8.js.map