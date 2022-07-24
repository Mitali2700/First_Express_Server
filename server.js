//jshint esversion:6
const express = require("express");
const app = express();
app.listen(3000, function(){
    console.log("Server started on port 3000");
});

//<h1 align="center">First Express Server</h1>
/* Now you can see that they've got this command ‘npm install express - - save’. Now, as they explain
down here, what ‘ - - save’ basically does is it adds Express into your packages.json under the
dependencies.*/
