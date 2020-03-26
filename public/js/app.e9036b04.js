(function(e){function t(t){for(var n,a,s=t[0],l=t[1],c=t[2],u=0,f=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var l=r[s];0!==i[l]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},i={app:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),i=r.n(n);i.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"px-0",staticStyle:{height:"100vh"},attrs:{id:"app"}},[e.loading?r("preloader"):r("client-list",{on:{error:e.showErrorMessage}}),r("client-form",{on:{error:e.showErrorMessage}})],1)},o=[],a=(r("d3b7"),r("5530")),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"pt-md-5 px-0"},[r("b-row",{staticClass:"bg-secondary w-100 px-md-2 py-2 px-3 text-white mx-auto",attrs:{"align-h":"between","align-v":"center"}},[r("strong",[e._v("Clients")]),r("b-btn",{attrs:{size:"sm"},on:{click:function(t){return e.$bvModal.show("form")}}},[r("b-icon-person-plus-fill")],1)],1),r("b-table",{attrs:{fields:e.fields,items:e.clients,"primary-key":"name",stacked:"md",outlined:"",id:"client-list"},scopedSlots:e._u([{key:"cell(name)",fn:function(t){return[e._v(e._s(t.item.name))]}},{key:"cell(email)",fn:function(t){return[e._v(e._s(t.item.email))]}},{key:"cell(phone)",fn:function(t){return[e._v(e._s(t.item.phone))]}},{key:"cell(providers)",fn:function(t){return e._l(t.item.providers,(function(t){return r("span",{key:t.id},[e._v(e._s(t.name+", "))])}))}},{key:"cell(actions)",fn:function(t){return[r("b-button-group",{attrs:{size:"sm"}},[r("b-btn",{attrs:{variant:"light"},on:{click:function(r){return e.startClientUpdating(t.item)}}},[r("b-icon-pencil",{staticClass:"bg-secodary"})],1),r("b-btn",{attrs:{variant:"light"},on:{click:function(r){return e.deleteClient(t.item)}}},[r("b-icon-trash",{staticClass:"bg-secodary"})],1)],1)]}}])})],1)},l=[],c=(r("b0c0"),r("2f62")),d=r("bc3a"),u=r.n(d),f="/api/client",m={get:function(e){return new Promise((function(t,r){u.a.get(f,{params:e}).then((function(e){return t(e.data)})).catch((function(e){return r(e)}))}))},create:function(e){return new Promise((function(t,r){u.a.post(f,e).then((function(e){return t(e.data)})).catch((function(e){return r(e.response)}))}))},update:function(e){return new Promise((function(t,r){u.a.put(f,e.client,{params:e.params}).then((function(e){return t(e.data)})).catch((function(e){return r(e.response)}))}))},delete:function(e){return new Promise((function(t,r){u.a.delete(f,{params:e}).then((function(){return t()})).catch((function(e){return r(e.response)}))}))}},h=m,p={},v="/api/provider";p.get=function(e){return new Promise((function(t,r){u.a.get(v,{params:e}).then((function(e){return t(e.data)})).catch((function(e){return r(e.response)}))}))},p.create=function(e){return new Promise((function(t,r){if(!e)return r({reason:"No name provided!"});u.a.post(v,{name:e}).then((function(e){return t(e.data)})).catch((function(e){return r(e.response)}))}))},p.update=function(e){return new Promise((function(t,r){if(!e||!e.name||!e.id)return r({reason:"Some options are missing"});var n={id:e.id};u.a.put(v,{name:e.name},{params:n}).then((function(){return t()})).catch((function(e){return r(e.response)}))}))},p.delete=function(e){return new Promise((function(t,r){u.a.delete(v,{params:e}).then((function(){return t()})).catch((function(e){return r(e.response)}))}))};var b=p,g={name:"ClientList",data:function(){return{isBusy:!1,fields:[{key:"Name",sortable:!0},{key:"Email",sortable:!0},{key:"Phone",sortable:!0},{key:"Providers",sortable:!0},{key:"Actions"}],hovered:!1}},computed:Object(a["a"])({},Object(c["b"])(["clients"])),methods:Object(a["a"])({deleteClient:function(e){var t=this,r="Are you sure you want to delete ".concat(e.name,"?"),n={title:"Please confirm!",buttonSize:"sm",okVariant:"danger",okTitle:"Delete"};this.$bvModal.msgBoxConfirm(r,n).then((function(r){r&&h.delete({id:e._id}).then((function(){return t.removeCLientFromStore(e._id)})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))},startClientUpdating:function(e){this.rememberClient(e),this.$bvModal.show("form")}},Object(c["c"])(["removeCLientFromStore","rememberClient"]))},k=g,y=r("2877"),_=Object(y["a"])(k,s,l,!1,null,null,null),P=_.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-modal",{attrs:{id:"form",centered:"",size:"md"},on:{show:e.resetForm,hide:e.forgetClient},scopedSlots:e._u([{key:"modal-header",fn:function(){return[r("h4",{staticClass:"text-primary"},[e._v(e._s(e.client?"Update Client":"New Client"))])]},proxy:!0},{key:"default",fn:function(){return[r("b-form",{staticClass:"sm-px-5"},[e._l(e.form,(function(t){return r("b-form-group",{key:t.label,attrs:{label:t.label,description:""===t.error?t.desc:""}},[r("b-row",[r("b-col",[r("b-form-input",{attrs:{size:"sm",spellcheck:"false",autocomplete:"off",state:t.valid},on:{input:function(r){return e.validate(t)}},model:{value:t.model,callback:function(r){e.$set(t,"model","string"===typeof r?r.trim():r)},expression:"item.model"}})],1),"Provider"==t.label?r("b-col",{attrs:{cols:"6",sm:"4"}},[e.updatedProvider?r("b-button-group",{attrs:{size:"sm"}},[r("b-btn",{attrs:{disabled:!e.form.provider.valid},on:{click:e.updateProvider}},[r("b-icon-person-check-fill")],1),r("b-btn",{on:{click:e.cancelProviderUpdating}},[r("b-icon-x-circle-fill")],1)],1):r("b-btn",{attrs:{size:"sm",disabled:!e.form.provider.valid},on:{click:e.addProvider}},[e._v("Add Provider")])],1):e._e()],1),r("b-form-invalid-feedback",{staticClass:"px-1",attrs:{state:t.valid}},[e._v(e._s(t.error))])],1)})),r("b-container",{staticClass:"px-0 pt-3"},[r("b-checkbox-group",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},e._l(e.providers,(function(t){return r("b-row",{key:t._id,staticClass:"mb-1",attrs:{"align-h":"start"}},[r("b-col",[r("b-checkbox",{attrs:{value:t._id}},[e._v(e._s(t.name))])],1),r("b-col",[r("b-button-group",{attrs:{size:"sm"}},[r("b-btn",{on:{click:function(r){return e.startProviderUpdating(t)}}},[r("b-icon-pencil")],1),r("b-btn",{on:{click:function(r){return e.deleteProvider(t)}}},[r("b-icon-trash")],1)],1)],1)],1)})),1),e.checked.length?e._e():r("p",{staticClass:"pt-3 text-danger"},[e._v("At least one provider should be selected!")])],1)],2)]},proxy:!0},{key:"modal-footer",fn:function(){return[r("b-row",[r("b-btn",{attrs:{size:"sm"},on:{click:function(t){return e.$bvModal.hide("form")}}},[e._v("Cancel")]),e.client?r("b-btn",{staticClass:"ml-2",attrs:{size:"sm",disabled:!e.readyToUpdate},on:{click:e.submitUpdate}},[e._v("Update")]):r("b-btn",{staticClass:"ml-2",attrs:{size:"sm",disabled:!e.readyToSubmit},on:{click:e.submit}},[e._v("Add Client")])],1)]},proxy:!0}])})},w=[],x=(r("99af"),r("4160"),r("159b"),{name:"Form",data:function(){return{form:{name:{label:"Name",model:"",valid:null,desc:"From 3 to 20 latin characters, spaces or digits.",error:"",pattern:/^[a-z\s\d]{3,20}$/i},email:{label:"Email",model:"",valid:null,desc:"Valid email address!",error:"",pattern:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i},phone:{label:"Phone",model:"",valid:null,desc:"Minimum 6 digits",error:"",pattern:/^[\d-+]{6,20}$/},provider:{label:"Provider",model:"",valid:null,desc:"From 3 to 20 latin characters, spaces or digits.",error:"",pattern:/^[a-z\s\d]{3,20}$/i,origin:""}},checked:[],updatedProvider:null}},computed:Object(a["a"])({},Object(c["b"])(["client","providers"]),{readyToSubmit:function(){return this.form.name.valid&&this.form.email.valid&&this.form.phone.valid&&this.checked.length},readyToUpdate:function(){var e=this,t=[];if(this.form.name.model!=this.client.name&&t.push("name"),this.form.email.model!=this.client.email&&t.push("email"),this.form.phone.model!=this.client.phone&&t.push("phone"),t.forEach((function(t){if(!e.form[t].valid)return!1})),t.length&&this.checked.length)return!0;if(this.checked.length&&this.checked.length!=this.client.providers.length)return!0;for(var r=0;r<this.checked.length;r++)for(var n=0;n<this.client.providers.length;n++)if(this.checked!=this.client.providers[n]._id)return!0;return!1}}),methods:Object(a["a"])({validate:function(e){var t=this;if(e.model==e.origin)return e.valid=null;if(!e.pattern.test(e.model))return this.setError(e,"");var r={},n="Provider"===e.label?b:h,i="Provider"===e.label?"name":e.label.toLowerCase();r[i]=e.model,n.get(r).then((function(r){if(r)return t.setError(e,"".concat(e.label," ").concat(e.model," is already in use"));e.valid=!0,e.error=""})).catch((function(){return t.setError(e,"Internal server error")}))},setError:function(e,t){e.valid=!1,e.error=t},resetForm:function(){var e=this;for(var t in this.form)this.resetField(this.form[t]);this.checked=[],this.client&&(this.form.name.model=this.client.name,this.form.name.origin=this.client.name,this.form.email.model=this.client.email,this.form.email.origin=this.client.email,this.form.phone.model=this.client.phone,this.form.phone.origin=this.client.phone,this.client.providers.forEach((function(t){return e.checked.push(t._id)})))},resetField:function(e){e.model="",e.error="",e.origin="",e.valid=null},submit:function(){var e=this,t={name:this.form.name.model,email:this.form.email.model,phone:this.form.phone.model,providers:this.checked};h.create(t).then((function(t){e.addClientToStore(t),e.$bvModal.msgBoxOk("Client was successfully created!"),e.resetForm()})).catch((function(){return e.$emit("error")}))},submitUpdate:function(){var e=this,t={params:{id:this.client._id},client:{name:this.form.name.model,email:this.form.email.model,phone:this.form.phone.model,providers:this.checked}};h.update(t).then((function(t){e.updateClientAtStore(t),e.$bvModal.hide("form"),e.$root.$emit("bv::refresh::table","client-list")})).catch((function(t){return e.$emit("error")}))},addProvider:function(){var e=this;b.create(this.form.provider.model).then((function(t){e.addProviderToStore(t),e.$bvModal.msgBoxOk("Provider was successfully created!"),e.resetField(e.form.provider)}))},startProviderUpdating:function(e){this.updatedProvider=e._id,this.form.provider.model=e.name,this.form.provider.valid=null,this.form.provider.error=""},updateProvider:function(){var e=this,t={id:this.updatedProvider,name:this.form.provider.model};b.update(t).then((function(){e.updateProviderAtStore(t),e.resetField(e.form.provider),e.updatedProvider=null})).catch((function(e){return console.log(e)}))},cancelProviderUpdating:function(){this.resetField(this.form.provider),this.updatedProvider=null},deleteProvider:function(e){var t=this,r="Are you sure you want to delete '".concat(e.name,"' provider?"),n={title:"Please confirm!",buttonSize:"sm",okVariant:"danger",okTitle:"Delete"};this.$bvModal.msgBoxConfirm(r,n).then((function(r){r&&b.delete({id:e._id}).then((function(){return t.removeProviderFromStore(e._id)})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))}},Object(c["c"])(["removeProviderFromStore","resetClient","addClientToStore","addProviderToStore","updateProviderAtStore","updateClientAtStore","forgetClient"]))}),S=x,O=Object(y["a"])(S,C,w,!1,null,null,null),j=O.exports,$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"h-100 d-flex align-items-center justify-content-center"},[r("b-row",{attrs:{"align-v":"center"}},[r("b-spinner",{attrs:{type:"grow",small:""}}),r("h2",{staticClass:"text-secondary mx-2"},[e._v("Loading")]),r("b-spinner",{attrs:{type:"grow",small:""}})],1)],1)},F=[],M={},E=Object(y["a"])(M,$,F,!1,null,null,null),T=E.exports,z={name:"App",components:{ClientForm:j,ClientList:P,Preloader:T},data:function(){return{loading:!0,clientToUpdate:null}},methods:Object(a["a"])({},Object(c["c"])(["saveClients","saveProviders"]),{showErrorMessage:function(){console.log("Ok");var e="It seems like something went wrong. Please try again later...",t={title:"Error occured!",buttonSize:"sm",headerClass:"text-danger",centered:!0,okVariant:"danger"};this.$bvModal.msgBoxOk(e,t)}}),created:function(){var e=this;b.get().then((function(t){return e.saveProviders(t)})).catch((function(e){return console.log(e)})),h.get().then((function(t){return e.saveClients(t)})).catch((function(e){return console.log(e)})).finally((function(){return e.loading=!1}))}},A=z,U=(r("034f"),Object(y["a"])(A,i,o,!1,null,null,null)),L=U.exports;r("a434");n["a"].use(c["a"]);var B=new c["a"].Store({state:{clients:[],providers:[],client:null},getters:{clients:function(e){return e.clients},client:function(e){return e.client},providers:function(e){return e.providers}},mutations:{saveClients:function(e,t){return e.clients=t},saveProviders:function(e,t){return e.providers=t},removeCLientFromStore:function(e,t){for(var r=0;r<e.clients.length;r++)if(e.clients[r]._id==t)return void e.clients.splice(r,1)},addClientToStore:function(e,t){return e.clients.push(t)},addProviderToStore:function(e,t){return e.providers.push(t)},removeProviderFromStore:function(e,t){for(var r=0;r<e.providers.length;r++)if(e.providers[r]._id==t)return void e.providers.splice(r,1)},updateClientAtStore:function(e,t){for(var r=0;r<e.clients.length;r++)if(e.clients[r]._id===t._id)return e.clients[r]=Object(a["a"])({},t)},updateProviderAtStore:function(e,t){for(var r=0;r<e.providers.length;r++)if(e.providers[r]._id===t.id)return e.providers[r].name=t.name},rememberClient:function(e,t){return e.client=t},forgetClient:function(e){return e.client=null}},actions:{}}),N=r("01e3"),V=r("1f1a"),D=r("498a"),I=r("b1e0"),J=r("7049"),q=r("dbbe"),G=r("cbd0"),H=r("b1fc"),K=r("1073"),Q=r("3d31"),R=r("bf67"),W=r("8b3d");r("ab8b"),r("2dd8"),r("0cdd");n["a"].component("b-spinner",N["a"]),n["a"].use(V["a"]),n["a"].use(D["a"]),n["a"].use(I["a"]),n["a"].use(J["a"]),n["a"].use(q["a"]),n["a"].use(G["a"]),n["a"].use(H["a"]),n["a"].use(K["a"]),n["a"].use(Q["a"]),n["a"].use(R["a"]),n["a"].use(W["a"]),n["a"].config.productionTip=!1,new n["a"]({store:B,render:function(e){return e(L)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.e9036b04.js.map