"use strict";angular.module("techRadarApp",[]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("techRadarApp").value("localStorage",window.localStorage),angular.module("techRadarApp").factory("localStorageWatcher",["$log","$rootScope","localStorage",function(a,b,c){var d;return d=function(a,d){var e,f,g;return e=d?d:{},g=c[a],f=g?JSON.parse(g):e,b.$watch(function(){return f},function(){return c[a]=JSON.stringify(f)},!0),f},{syncWithLocalStorage:d}}]),angular.module("techRadarApp").factory("radarService",["$log","$timeout","localStorageWatcher",function(a,b,c){function d(a){this.data=a?a:[{label:"Adopt",categories:[{label:"Tools",technologies:[]},{label:"Techniques",technologies:[]},{label:"Platforms",technologies:[]},{label:"Languages & Frameworks",technologies:[]}]},{label:"Trial",categories:[{label:"Tools",technologies:[]},{label:"Techniques",technologies:[]},{label:"Platforms",technologies:[]},{label:"Languages & Frameworks",technologies:[]}]},{label:"Assess",categories:[{label:"Tools",technologies:[]},{label:"Techniques",technologies:[]},{label:"Platforms",technologies:[]},{label:"Languages & Frameworks",technologies:[]}]},{label:"Hold",categories:[{label:"Tools",technologies:[]},{label:"Techniques",technologies:[]},{label:"Platforms",technologies:[]},{label:"Languages & Frameworks",technologies:[]}]}]}function e(){var a=_.pluck(j.data,"categories");return _.pluck(a,"label")}function f(){return _.pluck(j.data,"label")}var g="sadc.technologyRadarData";d.prototype.getTechnologies=function(){var a=_.pluck(this.data,"categories");return _.flatten(_.pluck(_.flatten(a),"technologies"))};var h=[{label:"Adopt",categories:[{label:"Tools",technologies:[{label:"Infrastructure as code"},{label:"Embedded servlet containers"},{label:"Jasmine paired with Node.js"},{label:"Immutable servers"}]},{label:"Techniques",technologies:[{label:"Health check pages"},{label:"Windows infrastructure automation"},{label:"Work-in-Progress limits"},{label:"Automated deployment pipeline"},{label:"In process acceptance testing"},{label:"Advanced analytics"}]},{label:"Platforms",technologies:[{label:"Care about hardware"}]},{label:"Languages & Frameworks",technologies:[{label:"Clojure"},{label:"Scala"},{label:"SASS, SCSS, LESS, and Stylus"}]}]},{label:"Trial",categories:[{label:"Tools",technologies:[{label:"Gradle"},{label:"JavaScript micro frameworks"},{label:"Jade"},{label:"D3"},{label:"SaaS performance testing tools"},{label:"Dependency Structure Matrices"}]},{label:"Techniques",technologies:[{label:"Polyglot Persistence"},{label:"Performance testing as a first-class citizen"},{label:"Out-of-container functional testing"},{label:"Micro-services"},{label:"Infrastructure automation of development workstations"},{label:"Logs as data"},{label:"Responsive web design"},{label:"Declarative provisioning"}]},{label:"Platforms",technologies:[{label:"Node.js"},{label:"Riak"},{label:"Domain-specific PaaS"},{label:"Linux containers"},{label:"Private clouds"},{label:"Hybrid clouds"},{label:"MongoDB"},{label:"Continuous integration in the cloud"},{label:"Couchbase"},{label:"Single threaded servers with asynchronous I/O"}]},{label:"Languages & Frameworks",technologies:[{label:"Domain-Specific Languages"},{label:"Scratch, Alice, and Kodu"},{label:"Twitter Bootstrap"},{label:"AngularJS and Knockout"},{label:"Require.js"}]}]},{label:"Assess",categories:[{label:"Tools",technologies:[{label:"Light Table"},{label:"Riemann"}]},{label:"Techniques",technologies:[{label:"Deployment and scripting test tools"}]},{label:"Platforms",technologies:[{label:"Azure"},{label:"Open source IaaS"},{label:"BigQuery"},{label:"Windows Phone"}]},{label:"Languages & Frameworks",technologies:[{label:"JavaScript as a platform"}]}]},{label:"Hold",categories:[{label:"Tools",technologies:[{label:"Enterprise service bus"},{label:"VCS with implicit workflow"}]},{label:"Techniques",technologies:[{label:"Database based integration"},{label:"Feature branching"},{label:"Test recorders"},{label:"Exhaustive browser-based testing"}]},{label:"Platforms",technologies:[{label:"WS-*"},{label:"Java portal servers"},{label:"Meteor.js"}]},{label:"Languages & Frameworks",technologies:[{label:"Backbone.js"},{label:"Logic in stored procedures"},{label:"Component-based frameworks"}]}]}],i=c.syncWithLocalStorage(g,h),j=new d(i);return{radar:j,categories:e(),statuses:f()}}]),angular.module("techRadarApp").controller("MainCtrl",["$scope","radarService",function(a,b){a.radarData=b.radar.data,a.setActive=function(b){_.each(a.radarData,function(a){a.active=!1}),b.active=!0},a.setActive(a.radarData[0]),a.addTech=function(a,b){b&&(a.technologies.push({label:b}),delete a["new"])},a.removeTech=function(a,b){a.technologies=_.without(a.technologies,b)},a.$watch("radarData",function(b){b&&(a.activeCategory=_.findWhere(_.flatten(_.pluck(b,"categories")),{active:!0}),a.activeStatus=_.find(b,function(b){return _.indexOf(b.categories,a.activeCategory)>=0}))},!0)}]),angular.module("techRadarApp").directive("radarDiagram",["$log","radarService",function(a,b){return{restrict:"E",templateUrl:"views/radar.html",replace:!0,link:function(c,d,e){function f(a,b,c){function d(a,b){var c=(Math.PI*Math.pow(a,2)*Math.pow(e,2)-b)/Math.PI;return c>0?Math.sqrt(c):0}for(var e=1,f=Math.PI*Math.pow(a,2),g=f/b,h=b-1,i=a;h-->c;)i=d(i,g);return Math.max(0,d(i,g))}function g(a){var c=.15*s,d=.045*s,e=!1;return _.each(b.radar.getTechnologies(),function(b){a!==b&&a.x&&a.y&&b.x&&b.y&&Math.abs(a.x-b.x)<c&&Math.abs(a.y-b.y)<d&&(e=!0)}),e}function h(a,b){e=a.innerRadius+F,f=a.outerRadius-F;var c=Math.random()*(f-e)+e,d=Math.atan(F/c),e=a.startAngle+d,f=a.endAngle-d,g=Math.random()*(f-e)+e;b.x=c*Math.cos(g-Math.PI/2),b.y=c*Math.sin(g-Math.PI/2)}function i(a){return a.length<=L?a:a.substring(0,L-1)+"..."}function j(){I=K.selectAll("g").data(function(a){return a.technologies},function(a){return a.label}),a.info("Redrawing");var b=I.enter().append("g").attr("class","tech-label").on("mouseover",function(a){a.active=!0,m()}).on("mouseout",function(a){a.active=!1,m()});b.append("text").datum(function(a){for(var b=d3.select(this.parentNode.parentNode).datum();!a.x||!a.y||g(a);)h(b.arc,a);return a}).text(function(a){return i(a.label)}).attr("x",function(a){return a.x+D+5}).attr("y",function(a){return a.y+3.5}),b.append("circle").attr("r",D).style("stroke","grey").style("fill","whitesmoke").attr("cx",function(a){return a.x}).attr("cy",function(a){return a.y}),I.exit().remove()}function k(a,b){return function(c){return 0==c?i(a):a.substring(0,Math.round((a.length-b)*c)+b)}}function l(a,b){return function(c){var d=c*(a.length-b);return 1==c?i(a):a.substring(0,a.length-d)}}function m(){c.$apply(),I.selectAll("text").transition().duration(150).tween("text",function(a){var b=a.active?k:l,c=b(a.label,Math.min(this.textContent.length,L));return c(1)!==this.textContent?function(a){this.textContent=c(a)}:void 0}),I.selectAll("circle").transition().duration(500).attr("r",function(a){return a.active?E:a.radius?a.radius:D})}var n=b.categories.length,o=[];_(n).times(function(){o.push(100/n)});var p=e.width,q=e.height,r=30,s=Math.min(e.width,e.height)/2-r,t=d3.scale.category20c().domain(_.range(20)),u=d3.scale.category20c().copy(),v=_.groupBy(t.range(),function(a,b){return Math.floor(b/4)});u.range(_.flatten(_.map(v,function(a){var b=[];return _.each(a,function(a,c,d){b.push(a),c<d.length-1&&b.push(d3.interpolateRgb(a,d[c+1])(.5))}),b}))),u.domain(_.range(35));var w=d3.layout.pie().sort(null),x=w(o),y={Tools:x[0],Techniques:x[1],Platforms:x[2],"Languages & Frameworks":x[3]},z=d3.svg.arc(),A=d3.select(d[0]).append("svg").attr("width",p).attr("height",q),B=A.append("g").attr("transform","translate("+(p/2-r)+","+(q/2-r)+")"),C=A.append("g").attr("transform","translate("+(p/2-r)+","+(q/2-r)+")"),D=5,E=7,F=10,G=B.selectAll("g").data(b.radar.data).enter().append("g").attr("class","ring"),H=G.selectAll("path").data(function(a){return a.categories}).enter().append("g").attr("class","slice");H.append("path").attr("fill",function(a,b,c){return u(7*b+c+3)}).attr("stroke","grey").attr("stroke-width","1px").attr("stroke-opacity",".25").datum(function(a,c,d){var e=_.size(b.statuses);return a.arc={innerRadius:f(s,e,d),outerRadius:d==e-1?s:f(s,e,d+1)},_.extend(a.arc,y[a.label]),a}).attr("d",function(a){return z.innerRadius(a.arc.innerRadius).outerRadius(a.arc.outerRadius)(a.arc)}).on("mouseover",function(a){a.active=!0,m()}).on("mouseout",function(a){a.active=!1,m()});var I,J=C.selectAll("g").data(b.radar.data).enter().append("g").attr("class","tech"),K=J.selectAll("g").data(function(a){return a.categories}).enter().append("g").datum(function(a,b){return a.color=u(7*b+6),a}).attr("class","category"),L=10;c.radarData=b.radar.data,c.$watch("radarData",function(){j()},!0),j()}}}]);