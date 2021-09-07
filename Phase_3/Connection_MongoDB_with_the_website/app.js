// load all modules 
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
let menuRouter = require("./router/menu.router")
let courseRouter = require("./router/course.router")

// create the reference of express 
let app = express();

// add middleware 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//url database 
let url = "mongodb://localhost:27017/tcsmean"

// connect the database 
mongoose.connect(url).then(res=>console.log("connected")).catch(error=>console.log(error));

//http://localhost:9090/api/course/getMenu  
app.use("/api/course", menuRouter);
app.use("/api/course", courseRouter)


app.listen(9090,()=>console.log("Server running on port number 9090"))