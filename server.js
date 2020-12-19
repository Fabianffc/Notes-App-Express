//Dependency
var express = require ("express");

//Setting up the app to express server and creating our port 
var app = express();
var PORT = process.env.PORT || 8000;

//Set up for our static and parsing
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


//Setting up our routes
var api = require("./routes/api")
var html = require("./routes/html")

app.use(api)
app.use(html)

//Start the app in the desire port and logging a message to let us know
app.listen(PORT, function(){
    console.log("App is listening on PORT" + PORT);
})