(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-wallet-recharge"],{"013c":function(t,n,e){"use strict";e("c975"),e("a9e3"),e("acd8"),e("ac1f"),e("5319"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={type:"scrolldone",target:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},currentTarget:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},detail:{}},i={props:{backgroundTextStyle:{type:String,default:"dark",validator:function(t){return-1!==["dark","light"].indexOf(t)}},backgroundColor:{type:String,default:"#ffffff"},backgroundColorTop:{type:String,default:"#ffffff"},backgroundColorBottom:{type:String,default:"#ffffff"},scrollTop:{type:String,default:""},scrollDuration:{type:Number,default:300},pageStyle:{type:String,default:""},enablePullDownRefresh:{type:[Boolean,String],default:!1},rootFontSize:{type:String,default:""}},created:function(){var t=this,n=getCurrentPages()[0];this.$pageVm=n.$vm||n,uni.onWindowResize((function(n){t.$emit("resize",n)})),this.$pageVm.$on("hook:onPageScroll",(function(n){t.$emit("scroll",n)})),this.$watch("backgroundTextStyle",(function(){t.setBackgroundTextStyle()})),this.$watch((function(){return[t.rootFontSize,t.pageStyle]}),(function(){t.setPageMeta()})),this.$watch((function(){return[t.backgroundColor,t.backgroundColorTop,t.backgroundColorBottom]}),(function(){t.setBackgroundColor()})),this.$watch((function(){return[t.scrollTop,t.scrollDuration]}),(function(){t.pageScrollTo()}))},beforeMount:function(){this.setBackgroundColor(),(this.rootFontSize||this.pageStyle)&&this.setPageMeta(),this.backgroundTextStyle&&this.setBackgroundTextStyle(),this.scrollTop&&this.pageScrollTo()},methods:{setPullDownRefresh:function(t,n){t.setStyle({pullToRefresh:{support:n,style:"Android"===plus.os.name?"circle":"default"}})},setPageMeta:function(){uni.setPageMeta({pageStyle:this.pageStyle,rootFontSize:this.rootFontSize})},setBackgroundTextStyle:function(){},setBackgroundColor:function(){},pageScrollTo:function(){var t=this,n=String(this.scrollTop);if(-1!==n.indexOf("rpx")&&(n=uni.upx2px(n.replace("rpx",""))),n=parseFloat(n),!isNaN(n)){var e=function e(i){i.scrollTop===n&&(t.$pageVm.$off("hook:onPageScroll",e),t.$emit("scrolldone",o))};uni.pageScrollTo({scrollTop:n,duration:this.scrollDuration,success:function(){t.$pageVm.$on("hook:onPageScroll",e)}})}}}};n.default=i},"12fb":function(t,n,e){"use strict";var o=e("cfdc"),i=e.n(o);i.a},"39d3":function(t,n,e){"use strict";e("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={props:{title:{type:String,default:""},titleIcon:{type:String,default:""},titleIconRadius:{type:String,default:""},subtitleText:{type:String,default:""},subtitleSize:{type:String,default:""},subtitleColor:{type:String,default:""},subtitleOverflow:{type:String,default:""},titleAlign:{type:String,default:""},backgroundImage:{type:String,default:""},backgroundRepeat:{type:String,default:""},blurEffect:{type:String,default:""},loading:{type:Boolean,default:!1},frontColor:{type:String,default:"#ffffff"},backgroundColor:{type:String,default:"#000000"},colorAnimationDuration:{type:Number,default:0},colorAnimationTimingFunc:{type:String,default:"linear"}},created:function(){var t=this,n=getCurrentPages(),e=n[n.length-1];this.__$page=e,this.$watch("title",(function(){t.setNavigationBarTitle()})),this.$watch("loading",(function(){t.setNavigationBarLoading()})),this.$watch((function(){return[t.frontColor,t.backgroundColor,t.colorAnimationDuration,t.colorAnimationTimingFunc]}),(function(){t.setNavigationBarColor()}))},beforeMount:function(){this.title&&this.setNavigationBarTitle(),this.setNavigationBarLoading(),this.setNavigationBarColor()},methods:{setNavigationBarTitle:function(){uni.setNavigationBarTitle({__page__:this.__$page,title:this.title})},setNavigationBarLoading:function(){uni[(this.loading?"show":"hide")+"NavigationBarLoading"]({__page__:this.__$page})},setNavigationBarColor:function(){uni.setNavigationBarColor({__page__:this.__$page,frontColor:this.frontColor,backgroundColor:this.backgroundColor,animation:{duration:this.colorAnimationDuration,timingFunc:this.colorAnimationTimingFunc}})},setTitleNView:function(t){var n=this.__$webview,e=n.getStyle();e&&e.titleNView&&n.setStyle({titleNView:t})}}};n.default=o},"4c4f":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var o={pageMeta:e("6d42").default,navigationBar:e("9832").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-meta",[e("navigation-bar",{attrs:{title:t.$t("xf_20"),"front-color":t.$colors.white,"background-color":t.$colors.mainColor}})],1),e("v-uni-view",{staticClass:"page-box"},[e("v-uni-view",{staticClass:"balance-box row-center"},[t._v(t._s(t.danwei())+"："+t._s(t.userInfo.balance))]),e("v-uni-view",{staticClass:"parities-box column-center"},["sw_pro"!==t.environment?e("v-uni-text",{style:"color:"+t.$colors.button2},[t._v(t._s(t.$t("v_hvlijisr"))+" 1 USDT = "+t._s(t.danwei())+t._s(t.$utils.toThousands(t.userInfo.usdt)))]):t._e(),e("v-uni-text",[t._v(t._s(t.$t("xf_20")))]),e("v-uni-text",[t._v(t._s(t.danwei())+t._s(t.$utils.toThousands(t.moneyM))+" ="),e("v-uni-text",{staticClass:"money-u"},[t._v(t._s(t.$utils.toThousands(t.moneyU)))]),t._v("USDT")],1)],1),e("v-uni-view",{staticClass:"input-box"},[e("v-uni-text",{staticClass:"small-title"},[t._v(t._s(t.$t("v_igviynoe")))]),e("v-uni-view",{staticClass:"ipt-box flex",style:"color:"+t.$colors.mainColor+";border-color:"+t.$colors.button2},[t._v(t._s(t.danwei())),e("v-uni-input",{attrs:{type:"number"},on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.onChange.apply(void 0,arguments)}},model:{value:t.moneyM,callback:function(n){t.moneyM=n},expression:"moneyM"}})],1),e("v-uni-text",[t._v(t._s(t.$t("v_isvizvxc"))+t._s(t.danwei())+t._s(t.$utils.toThousands(t.userInfo.min_recharge))+", "+t._s(t.$t("v_zvda"))+" "+t._s(t.danwei())+t._s(t.$utils.toThousands(t.userInfo.max_recharge)))])],1),e("v-uni-view",{staticClass:"small-title small-title2"},[t._v(t._s(t.$t("v_tvjm")))]),e("v-uni-view",{staticClass:"money-btn flex"},t._l(t.moneyList,(function(n,o){return e("v-uni-view",{key:o,staticClass:"xf-btn",style:"color:"+t.$colors.mainColor+";border-color:"+t.$colors.button2+(t.moneyM===n.amount?";color:"+t.$colors.white+";background-color:"+t.$colors.mainColor:""),attrs:{"hover-class":"btn-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.moneyM=n.amount}}},[t._v(t._s(t.$utils.toThousands(n.amount)))])})),1),"ko_pro"===t.environment&&t.moneyList.length>0?e("v-uni-view",{staticClass:"wenan"},["ko"===t.language?e("v-uni-view",[e("v-uni-view",[t._v("충전 시 주의 사항(USDT 입금 권장)：")]),e("v-uni-view",[t._v("①USDT 충전은 trc20 결제만 가능하며, 다른 결제 수단은 사용하지 마세요.(국제 환율 참고)")]),e("v-uni-view",[t._v("②최소입금액은 "+t._s(t.minAmount)+"$이며, 최대입금액은 "+t._s(t.maxAmount)+"$입니다.")]),e("v-uni-view",[t._v("③결제 과정에서 문제가 발생하면 가능한 빨리 저희에게 연락하십시오.")])],1):e("v-uni-view",[e("v-uni-view",[t._v("Recharge Note(Recommended deposit in usdt):")]),e("v-uni-view",[t._v("① The minimum deposit is 30usdt and the maximum deposit is 50000usdt.")]),e("v-uni-view",[t._v("② Usdt recharge only supports trc20 payment method, please do not use other payment methods. (refer to international exchange rate)")]),e("v-uni-view",[t._v("③ If you encounter any problems in the process of payment, please contact us as soon as possible.")])],1)],1):t._e(),e("v-uni-view",{staticClass:"recharge-btn"},[e("v-uni-button",{staticClass:"xf-btn",style:"background-color:"+t.$colors.button2,on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onrecharge.apply(void 0,arguments)}}},[t._v(t._s(t.$t("xf_20")))])],1)],1)],1)},a=[]},6854:function(t,n,e){"use strict";e.r(n);var o=e("39d3"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},"6d42":function(t,n,e){"use strict";e.r(n);var o=e("ccae"),i=e("8f28");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);var r,s=e("f0c5"),u=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);n["default"]=u.exports},"725a":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{moneyM:0,moneyList:[],minAmount:"0",maxAmount:"0"}},onLoad:function(){var t=this;"ja_pro"===this.environment&&(this.moneyM=""),this.$http.get("recharge_amount").then((function(n,e){n&&n.data&&200===n.data.code&&(t.moneyList=n.data.data.list,t.minAmount=t.$utils.toThousands(t.moneyList[0].amount),t.maxAmount=t.$utils.toThousands(t.moneyList[t.moneyList.length-1].amount))}))},computed:{moneyU:function(){return Math.floor(this.moneyM/this.userInfo.usdt*100)/100}},methods:{onrecharge:function(){if(!this.moneyM)return this.openShowToast(this.$t("v_uurujnoe"));this.onJumpPage("./rechargeSuc?money=".concat(this.moneyM))},danwei:function(){return"sw_pro"===this.environment?this.$t("xf_usdt"):"mcl_pro"===this.environment?"$":this.$t("xf_rmb")},onChange:function(t){}}};n.default=o},"74ea":function(t,n,e){"use strict";var o=e("d4e3"),i=e.n(o);i.a},"8f28":function(t,n,e){"use strict";e.r(n);var o=e("013c"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},9832:function(t,n,e){"use strict";e.r(n);var o=e("e0e1"),i=e("6854");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);var r,s=e("f0c5"),u=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);n["default"]=u.exports},bd10:function(t,n,e){"use strict";e.r(n);var o=e("725a"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},cb72:function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-28ed8719]{background-color:#fff}.balance-box[data-v-28ed8719]{width:100%;height:50px;font-weight:700;color:#f8aa00;background-color:#fef7e5}.parities-box[data-v-28ed8719]{font-size:14px}.parities-box uni-text[data-v-28ed8719]{margin-top:8px;color:#537277}.parities-box uni-text[data-v-28ed8719]:first-child{color:#e92b2b}.parities-box uni-text[data-v-28ed8719]:last-child{font-size:18px;color:#f8aa00}.parities-box uni-text .money-u[data-v-28ed8719]{color:#333}.input-box[data-v-28ed8719]{font-size:14px;padding:30px 15px 0}.input-box .ipt-box[data-v-28ed8719]{position:relative;color:#b30101;padding:10px 15px;margin:8px 0;border-radius:44px;border:1px solid #e92b2b}.input-box .ipt-box uni-input[data-v-28ed8719]{flex:1;font-weight:700;text-align:right;padding:0 5px;margin-left:5px;background-color:#e7effc}.input-box .ipt-box .money-handle[data-v-28ed8719]{position:absolute;right:%?38?%;top:%?25?%;font-weight:700}.input-box uni-text[data-v-28ed8719]:last-child{color:#8f9396}.small-title[data-v-28ed8719]{font-size:14px;font-weight:700;color:#447481}.small-title2[data-v-28ed8719]{margin:15px 0 0 15px}.money-btn[data-v-28ed8719]{flex-wrap:wrap;padding:0 10px}.money-btn .xf-btn[data-v-28ed8719]{width:%?214?%;font-weight:700;color:#b30101;margin:10px 5px 0;border-radius:45px;background-color:#fff;border:1px solid #b30101}.money-btn .active-btn[data-v-28ed8719]{background-color:#b30101;color:#fff}.wenan[data-v-28ed8719]{font-size:12px;padding:5px 15px;color:#e92b2b}.recharge-btn[data-v-28ed8719]{padding:40px 15px}.recharge-btn .xf-btn[data-v-28ed8719]{width:100%;height:50px;font-size:16px;border-radius:45px}body.?%PAGE?%[data-v-28ed8719]{background-color:#fff}',""]),t.exports=n},ccae:function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticStyle:{display:"none"}},[t._t("default")],2)},a=[]},cfdc:function(t,n,e){var o=e("fac6");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("153f6413",o,!0,{sourceMap:!1,shadowMode:!1})},d4e3:function(t,n,e){var o=e("cb72");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("4011f258",o,!0,{sourceMap:!1,shadowMode:!1})},e0e1:function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticStyle:{display:"none"}})},a=[]},ec23:function(t,n,e){"use strict";e.r(n);var o=e("4c4f"),i=e("bd10");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("12fb"),e("74ea");var r,s=e("f0c5"),u=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"28ed8719",null,!1,o["a"],r);n["default"]=u.exports},fac6:function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-page-head .uni-page-head__title .uni-btn-icon[data-v-28ed8719]{color:#fff!important}',""]),t.exports=n}}]);