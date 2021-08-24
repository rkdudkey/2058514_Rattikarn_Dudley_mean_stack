let readLine = require("readline-sync");
let fs = require("fs");
let dateFormat = require('dateformat');
//array to hold the the adding data
let recordArray = [];

function addRecord() {

    //get the user info from the readline input
    let firstName = readLine.question("Enter your first name: ");
    let lastName = readLine.question("Enter your last name: ");
    let gender = readLine.question("Enter your gender: ");
    let emai = readLine.questionEMail("Enter your email: ");
    //get current data and time 
    debugger;
    let now = new Date();
    let current = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");

    recordArray = {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        email: emai,
        date: current
    }
    debugger;

    let logs = JSON.parse(fs.readFileSync("log.json").toString());
    logs.push(recordArray);
    fs.writeFileSync("log.json",JSON.stringify(logs));
    console.log("New storead store")
    debugger;
        
}
let exit = 0 ;
while (exit != 4){
    addRecord();
    debugger;
    exit= readLine.questionInt("Enter any number to continue , Press 4 to exit");
}


