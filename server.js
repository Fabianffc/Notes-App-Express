var express = require ("express");
var app = express();

var PORT = process.env.PORT || 8000;
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());



var api = require("./routes/api")
var html = require("./routes/html")

app.use(api)
app.use(html)
app.listen(PORT, function(){
    console.log("App is listening on PORT" + PORT);
})