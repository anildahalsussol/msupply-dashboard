(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{gcd9:function(t,n,a){"use strict";a.r(n);var r=a("mrSG"),e=a("LvDl"),o=a.n(e),i=function(){function t(t,n,a){this.backendSrv=t,this.$q=n,this.templateSrv=a}return t.$inject=["backendSrv","$q","templateSrv"],t.prototype.query=function(t){return this.backendSrv.get("/api/tsdb/testdata/random-walk",{from:t.range.from.valueOf(),to:t.range.to.valueOf(),intervalMs:t.intervalMs,maxDataPoints:t.maxDataPoints}).then(function(t){var n=[];return t.results&&o.a.forEach(t.results,function(t){var a,e;try{for(var o=Object(r.__values)(t.series),i=o.next();!i.done;i=o.next()){var s=i.value;n.push({target:s.name,datapoints:s.points})}}catch(t){a={error:t}}finally{try{i&&!i.done&&(e=o.return)&&e.call(o)}finally{if(a)throw a.error}}}),{data:n}})},t.prototype.metricFindQuery=function(t){return this.$q.when({data:[]})},t.prototype.annotationQuery=function(t){var n,a,e,i,s={from:t.range.from.valueOf(),to:t.range.to.valueOf(),limit:t.annotation.limit,tags:t.annotation.tags,matchAny:t.annotation.matchAny};if("dashboard"===t.annotation.type){if(!t.dashboard.id)return this.$q.when([]);s.dashboardId=t.dashboard.id,delete s.tags}else{if(!o.a.isArray(t.annotation.tags)||0===t.annotation.tags.length)return this.$q.when([]);var l=[];try{for(var u=Object(r.__values)(s.tags),c=u.next();!c.done;c=u.next()){var d=c.value,f=this.templateSrv.replace(d,{},function(t){return"string"==typeof t?t:t.join("__delimiter__")});try{for(var h=(e=void 0,Object(r.__values)(f.split("__delimiter__"))),v=h.next();!v.done;v=h.next()){var p=v.value;l.push(p)}}catch(t){e={error:t}}finally{try{v&&!v.done&&(i=h.return)&&i.call(h)}finally{if(e)throw e.error}}}}catch(t){n={error:t}}finally{try{c&&!c.done&&(a=u.return)&&a.call(u)}finally{if(n)throw n.error}}s.tags=l}return this.backendSrv.get("/api/annotations",s)},t}(),s=a("LzXI");a.d(n,"QueryCtrl",function(){return l}),a.d(n,"AnnotationsQueryCtrl",function(){return u}),a.d(n,"GrafanaDatasource",function(){return i}),a.d(n,"Datasource",function(){return i});var l=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return Object(r.__extends)(n,t),n.templateUrl="partials/query.editor.html",n}(s.QueryCtrl),u=function(){function t(){this.types=[{text:"Dashboard",value:"dashboard"},{text:"Tags",value:"tags"}],this.annotation.type=this.annotation.type||"tags",this.annotation.limit=this.annotation.limit||100}return t.templateUrl="partials/annotations.editor.html",t}()}}]);
//# sourceMappingURL=grafanaPlugin.a103838c74b64146e9ae.js.map