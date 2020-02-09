require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path")
// var db = require("./models");
// var mysql = require("mysql")
var app = express();
// var port = process.env.PORT || 3000;
var port = 3000;

//Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//app.set('views',path.join(__dirname,'views'));
app.set("view engine", "handlebars");

app.get("/a", function(req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

//Routes
//require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


//error handler
app.use(function(err,req,res,next){
  //set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err: {};

  //render the error page
  res.status(err.status || 500);
})

app.listen(port, function(err){
  if(err) {
    console.log(err)
  } else {
    console.log('Server is live')
  }
})

module.exports = app;