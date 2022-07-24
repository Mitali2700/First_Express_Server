//jshint esversion:6
const express = require("express");
const app = express();

app.get("/", function(request,response){
    console.log(request);
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