//jshint esversion:6
const express = require("express");
const app = express();

app.get("/", function(request,response){
    //console.log(request);
    response.send("<h1>Hello World!!</h1>");
});

app.get("/contact", function(request,response){
    //console.log(request);
    response.send("Contact me at: mitalicwa@gmail.com");
});

app.get("/about", function(request,response){
    //console.log(request);
    response.send("<h3>I am Mitali Gupta a passionate front end developer from India</h3>");
});

app.get("/hobbies", function(request,response){
    //console.log(request);
    response.send("<ul><li> Painting</li> <li>Singing </li> <li>Art & Craft</li>");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});




//<h1 align="center">First Express Server</h1>
/* Now you can see that they've got this command ‘npm install express - - save’. Now, as they explain
down here, what ‘ - - save’ basically does is it adds Express into your packages.json under the
dependencies.*/

/*
Well, it means that when our browser is trying to get in touch with our server on the port 3000, it's
not able to get anything back.
Now we have to figure out how can we write some code so that our server responds when a browser is making
a request to our server.
We have to send the browser some information, right, to display.
*/

/*
***************************** nodemon.io*******************************
Now if you head over to nodemon.io, this is a utility that you can install using NPM that will
monitor for changes in your source code, and it will automatically restart your server when it detects
any changes in your code.
So this will save us from insanity, and all you have to do is just go into your Hyper Terminal, and type
these commands ‘npm install -g nodemon’.Now it doesn't matter where you install this.
It doesn't have to be inside your package.It can be in your root or in your home directory.
Once you've installed it, it will be available across all of your projects.
*/