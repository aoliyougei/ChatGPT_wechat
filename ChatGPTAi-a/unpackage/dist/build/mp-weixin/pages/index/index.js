(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"07c5":function(t,n,e){"use strict";(function(t,n){var o=e("4ea4");e("238f");o(e("66fd"));var i=o(e("eb0f"));t.__webpack_require_UNI_MP_PLUGIN__=e,n(i.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},"20b7":function(t,n,e){"use strict";e.r(n);var o=e("b0d6"),i=e.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},"4fc2":function(t,n,e){},"5d3d":function(t,n,e){"use strict";var o=e("4fc2"),i=e.n(o);i.a},b0d6:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("88d4"),i={components:{mpHtml:function(){Promise.all([e.e("common/vendor"),e.e("components/mp-html/mp-html")]).then(function(){return resolve(e("d05f"))}.bind(null,e)).catch(e.oe)}},data:function(){return{canvas:!1,input:"",scrollInto:"",data:[],tagStyle:{p:"font-size: 26rpx;padding-top: 8px;padding-bottom: 8px;margin: 0;line-height: 26px;color: white",h1:"margin-top: 30px;margin-bottom: 15px;font-weight: bold;font-size: 34rpx;color: white",h2:"margin-top: 30px;margin-bottom: 15px;font-weight: bold;font-size: 32rpx;color: white",h3:"margin-top: 30px;margin-bottom: 15px;font-weight: bold;font-size: 30rpx;color: white",h4:"margin-top: 30px;margin-bottom: 15px;font-weight: bold;font-size: 28rpx;color: white",h5:"margin-top: 30px;margin-bottom: 15px;font-weight: bold;font-size: 26rpx;color: white",h6:"margin-top: 30px;margin-bottom: 15px;font-weight: bold;font-size: 26rpx;color: white",ol:"margin-top: 8px;margin-bottom: 8px;padding-left: 25px;color: black;color: white",ul:"margin-top: 8px;margin-bottom: 8px;padding-left: 25px;color: black;color: white",li:"margin-top: 5px;margin - bottom: 5 px;line - height: 26 px;color: white"}}},onLoad:function(){(0,o.getEnable)().length>0&&(0,o.getDataGPT)().length>0&&(this.data=(0,o.getDataGPT)(),this.canvas=!0)},methods:{sendMessage:function(){var t=this;if(this.canvas=!0,this.input.length<=0)this.data.push({me:"",gpt:"你好 你需要什么帮助?"});else if("cache"!==this.input.trim())if("remove"!==this.input.trim()){var n=this.input;this.data.push({me:n,gpt:""}),this.input="";var e=this.data.length-1;this.scrollInto="id-m-"+e,this.$store.dispatch("gpt/sendMessage",{text:n}).then((function(n){t.data[e].gpt=n.text,t.persistenceData(),t.scrollInto="id-g-"+e}))}else this.removeCache();else this.cacheData()},writeInputText:function(t){this.input=t},cacheData:function(){(0,o.setEnable)("true"),this.input="",0===this.data.length?this.canvas=!1:this.persistenceData(),t.showToast({icon:"none",duration:3e3,title:"回显历史数据已开启"})},removeCache:function(){this.canvas=!1,this.data=[],this.input="",(0,o.removeEnable)(),(0,o.removeDataGPT)(),t.showToast({icon:"none",duration:3e3,title:"已关闭数据持久化 数据缓存已清除"})},persistenceData:function(){(0,o.getEnable)().length>0&&(0,o.setDataGPT)(this.data)}}};n.default=i}).call(this,e("543d")["default"])},c596:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var o={mpHtml:function(){return Promise.all([e.e("common/vendor"),e.e("components/mp-html/mp-html")]).then(e.bind(null,"d05f"))}},i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.data,(function(n,e){var o=t.__get_orig(n),i=n.me.length,a=n.gpt.length,r=n.gpt.length;return{$orig:o,g0:i,g1:a,g2:r}})));t.$mp.data=Object.assign({},{$root:{l0:e}})},a=[]},eb0f:function(t,n,e){"use strict";e.r(n);var o=e("c596"),i=e("20b7");for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("5d3d");var r=e("f0c5"),c=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=c.exports}},[["07c5","common/runtime","common/vendor"]]]);