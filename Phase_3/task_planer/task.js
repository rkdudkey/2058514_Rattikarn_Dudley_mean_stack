let http = require("http");
let url = require("url");
let fs = require("fs");

let taskPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>task planer</title>
</head>
<body>
    <div>
        <h2>Add Task</h2>
        <form action="addTask">
            <label for="empid">Emp Id: </label>
            <input type="text" name="empId" /> <br />
            <label for="taskId">Task Id: </label>
            <input type="text" name="taskId" /> <br />
            <label for="task">Task: </label>
            <input type="text" name="task" /> <br />
            <label for="Deadline">Deadline: </label>
            <input type="date" name="date" /> <br />
            <input type="submit" value="submit" />
        </form>
    </div>
    <div>
        <h2>Delete Task</h2>
        <form action="deleteTask">
            <label for="task_id">Task Id: </label>
            <input type="text" name="taskId" /> <br />
            <input type="submit" value="Delete" />
        </form>
    </div>
    <div>
    <h2>List all tasks</h2>
    <form action="listTask">
        <input type="submit" name="list" value="ListAllTask">
    </form>
</div>
      
</body>
</html>`;

let server = http.createServer((req, res) => {
    let urlInfo = url.parse(req.url, true);
    if (urlInfo.path != "/fevicon.ico") {
        if (urlInfo.path == "/") {
            res.write(taskPage);
        } else if (urlInfo.pathname == "/addTask") {
            let task = urlInfo.query;
            res.writeHead(200, { "content-type": "text/html" })

            fs.readFile("planer.json", (err, data) => {
                if (!err) {
                    let taskData = data.toString();
                    let empJson = JSON.parse(taskData);
                    let found = empJson.find(item => item.taskId == task.taskId);
                    if (found == undefined) {
                        empJson.push(task);
                        fs.writeFileSync("planer.json", JSON.stringify(empJson));
                        res.write("Task Created successfully!");
                        res.write(taskPage);
                    } else {
                        res.write("task id must be unique");
                        res.write(taskPage);
                    }
                } else {
                    let arrayTemp = [];
                    arrayTemp.push(task);
                    fs.writeFileSync("planer.json", JSON.stringify(arrayTemp));
                    res.write("Task Created successfully!");
                    res.write(taskPage);
                }

            })


        } else if (urlInfo.pathname == "/deleteTask") {
            res.writeHead(200, { "content-type": "text/html" });
            let user = urlInfo.query;

            fs.readFile("planer.json", (err, data) => {
                if (!err) {
                    let taskData = data.toString();
                    let taskJson = JSON.parse(taskData);
                    let id = taskJson.find(item => item.taskId == user.taskId);
                    if (id == undefined) {
                        res.write("Cannot find user")
                    } else {
                        //find index of the id
                        let index = taskJson.indexOf(id);
                        //delete by index of id
                        taskJson.splice(index, 1);
                        fs.writeFileSync("planer.json", JSON.stringify(taskJson));
                        res.write("Task id " + user.taskId + " has been deleted ");
                        res.write(taskPage);
                    }
                }

            })

        }
        else if (urlInfo.pathname == "/listTask") {
            res.writeHead(200, { "content-type": "text/html" });
            let div = '';
            let head = `<table border="1">
                        <tr>
                            <th>Emp Id</th>
                            <th>Task Id</th>
                            <th>Task</th>
                            <th>Deadline</th>
                        </tr>` ;
            let tail = `</table >`;

            //read from json file
            fs.readFile("planer.json", (err, data) => {
                if (!err) {
                    let empString = data.toString();
                    let empJson = JSON.parse(empString);
                    empJson.forEach(item => {
                        div += `
                        <tr>
                          <td>${item.empId}</td>
                          <td>${item.taskId}</td>
                          <td>${item.task}</td>
                          <td>${item.date}</td>
                        </tr> `
                    })
                    res.write(taskPage + head + div + tail);
                }
            })
        }
    } else {
        res.end()
    }
})

server.listen(9090, () => console.log("server is listening on port 9090"))