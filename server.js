var express = require("express");
var harp = require("harp");
var app = express();

app.use(express.static(__dirname + "/"));
app.use(express.static(__dirname + "/bower_components"))
app.use(harp.mount(__dirname + "/"));

app.listen(9000,function(){console.log("running");});

app.get('/hello', function(req,res){
  res.send('hello world');
});
