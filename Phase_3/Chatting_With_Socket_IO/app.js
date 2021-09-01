//load express module
let express = require("express");

//create a reference
let app = express();

//load http module and connected to express
let http = require("http").Server(app);

//load htto module with IIFE
let io = require('socket.io')(http);

//use get to connect with html
app.get("/", (req, res) => {
    res.sendFile(__dirname + "\\index.html");
})




io.on("connection", socket => {
    let serverArray = ["hiiiiiiiii", "how are you ?", "how have you been ?", "I am doing great", "Very well, thank you"];
    let timestamp = new Date();
    let date = timestamp.toLocaleString();

    console.log("server side connected ...")
  
    //retrive the message from the client side
    socket.on("obj", msg => {
        console.log(msg);
        console.log(`${date}: Server response: ${serverArray[Math.floor(Math.random() * 5)]}`); 
          //sending data to the client
        socket.emit("obj1", `${date}: Server response: ${serverArray[Math.floor(Math.random() * 5)]} <br/>`);
    })
 
})

http.listen(9090, () => console.log("Server running on port 9090"));

