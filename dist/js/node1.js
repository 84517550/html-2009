"use strict";var fs=require("fs"),http=require("http"),a=http.createServer(function(e,n){"/index.html"==e.url&&fs.readFile("./index.html","utf8",function(e,t){e?console.log(e):n.end(t)})});a.listen(8080,function(){console.log("aa")});