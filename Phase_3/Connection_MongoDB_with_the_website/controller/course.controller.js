let courseModel = require("../model/course.model");

let addCourse = (req, res) => {
    let course = req.body;
    courseModel.insertMany(course, (err, result) => {
        if(!err){
            res.send("Successfully added course");
        } else {
            res.send(err);
        }
    })
}

let updateCourse = (req, res) => {
    let course = req.body;
    
    courseModel.updateOne({_id:course._id}, {$set:{amount:course.amount}}, (err, result)=> {
        if(!err){
            res.send("update successfully");
        }else {
            res.send(err);
        }
    })
}

let fetchCourse = (req, res) => {
    let div = "";
    courseModel.find({},(err,data)=> {
        if(!err){
            data.forEach(item =>{
                div += `<tr>
                        <td> ${item._id} </td>
                        <td> ${item.courseName}</td>
                        <td> ${item.description}</td>
                        <td> ${item.amount}</td>
                        </tr>`;
            })
            
            let head = `<table border="1">
            <tr>
              <th>Course ID</th>
              <th>Course name</th>
              <th>Description</th>
              <th>Amount </th>
            </tr>`
            let tail = `</table>`
            res.send(head + div + tail);
            
        }else {
             res.json(err);   
        }
    })
}

let deleteCouse = (req, res) => {
    let course = req.body;

    courseModel.deleteOne({_id:course._id}, (err, result)=> {
        if(!err){
            res.send("Delete successfully");
        } else {
            res.send(err);
        }
    })

}

module.exports = {addCourse, updateCourse, fetchCourse, deleteCouse};