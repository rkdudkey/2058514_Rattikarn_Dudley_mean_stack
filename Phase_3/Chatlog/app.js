//load express module
let express = require("express");
let mongoose = require("mongoose");

//url
let url = "mongodb://localhost:27017/tcsmean";
mongoose.pluralize(null); //// to avoid lower case collection creation and adding.

// connect the database it return promise object 
mongoose.connect(url).then(res => console.log("connected")).catch(err => console.log(err));

let msgSchema = mongoose.Schema({
    _id: {type: Number},
    name: String,
    message: String
})


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
        console.log(msg.date + " :" + msg.name + " : " + msg.message);

        let msgObj = {
            name: msg.name,
            message: msg.message
        }

        let msgModel = mongoose.model("Message", msgSchema);
       
        msgModel.insertMany(msgObj, (err, result) => {
            if (!err) {
                console.log("adding msg successfully");
            } else {
                console.log(err);
            }
            
        })

        console.log(`${date}: Server response: ${serverArray[Math.floor(Math.random() * 5)]}`);
        //sending data to the client
        socket.emit("obj1", `${date}: Server response: ${serverArray[Math.floor(Math.random() * 5)]} <br/>`);
    })



})



http.listen(9090, () => console.log("Server running on port 9090"));

