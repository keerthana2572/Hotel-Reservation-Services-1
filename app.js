const express = require("express");

const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');


app.use(express.static("public"));
//add the middleware code here to load static images, css files etc
app.use('/public/images', express.static(__dirname + '/public/images'));
app.use('/public/css', express.static(__dirname + '/public/css'));


//added nodemon it auto restarts the server when you make changes
//added it as a development dependency
//you can use 'npm start' to run the app
//you can remove if you don't want to use nodemon
//npm uninstall nodemon


app.get("/",function(req,res){
  res.render('home');
});


app.get("/tableReservation", function(req,res){
  res.render("tableReservation");
});



app.get("/convention",function(req,res){
  res.render("convention");
});








app.listen(3000,function(req,res){
  console.log("listening on port 3000");
})
