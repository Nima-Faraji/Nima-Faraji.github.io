(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27fdd48a"],{"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var a=i("fe6c"),s=i("58df");function o(t,e=[]){return Object(s["a"])(Object(a["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},"3c02":function(t,e,i){},"5bcb":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{attrs:{id:"home-footer",color:"black",dark:"","min-height":"72"}},[i("v-container",{attrs:{id:"Contact"}},[i("v-row",[i("v-col",{attrs:{cols:"12",md:"6"}},[i("div",{staticClass:"d-flex flex-wrap justify-md-start justify-center justify-md-none"},[t._l(t.social,(function(e,a){return[i("a",{key:e.name,staticClass:"white--text pa-1 pa-md-0",attrs:{href:e.link},domProps:{textContent:t._s(e.name)}}),a<t.social.length-1?i("v-responsive",{key:"divider-"+e,staticClass:"mx-4 shrink hidden-sm-and-down",attrs:{"max-height":"24"}},[i("v-divider",{attrs:{vertical:""}})],1):t._e()]}))],2)]),i("v-col",{staticClass:"text-center text-md-right",attrs:{cols:"12",md:"6"}},[t._v(" Copyright © "+t._s((new Date).getFullYear())+" Nima Faraji ")])],1)],1)],1)},s=[],o={name:"HomeFooter",data:()=>({social:[{name:"LinkedIn",link:"https://www.linkedin.com/in/nima-faraji-95452716a/"},{name:"GitHub",link:"https://github.com/Nima-Faraji"},{name:"Email",link:"mailto: nimafaraji81@gmail.com"}]})},n=o,r=(i("99c0"),i("0c7c")),c=i("6544"),l=i.n(c),p=i("62ad"),d=i("a523"),h=i("ce7e"),u=(i("b5b6"),i("8dd9")),f=i("3a66"),m=i("d10f"),v=i("58df"),b=i("80d2"),g=Object(v["a"])(u["a"],Object(f["a"])("footer",["height","inset"]),m["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty(){return this.inset?"insetFooter":"footer"},classes(){return{...u["a"].options.computed.classes.call(this),"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset}},computedBottom(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned(){return Boolean(this.absolute||this.fixed||this.app)},styles(){const t=parseInt(this.height);return{...u["a"].options.computed.styles.call(this),height:isNaN(t)?t:Object(b["f"])(t),left:Object(b["f"])(this.computedLeft),right:Object(b["f"])(this.computedRight),bottom:Object(b["f"])(this.computedBottom)}}},methods:{updateApplication(){const t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render(t){const e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),y=i("6b53"),w=i("0fd9"),j=Object(r["a"])(n,a,s,!1,null,null,null);e["default"]=j.exports;l()(j,{VCol:p["a"],VContainer:d["a"],VDivider:h["a"],VFooter:g,VResponsive:y["a"],VRow:w["a"]})},"99c0":function(t,e,i){"use strict";i("3c02")},b5b6:function(t,e,i){},d10f:function(t,e,i){"use strict";var a=i("2b0e");e["a"]=a["a"].extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame(()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0})}})}}]);
//# sourceMappingURL=chunk-27fdd48a.d3e465e4.js.map