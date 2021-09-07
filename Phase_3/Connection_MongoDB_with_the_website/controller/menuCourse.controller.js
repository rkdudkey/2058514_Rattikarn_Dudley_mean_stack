
let getMenu = (req, res) => {
    res.sendFile( __dirname + "/public/" + "index.html" );
}

let getAddCourseMenu = async (req, res) => {
    res.sendFile(__dirname+ "/public/" + "addcourse.html");
}

let getUpdateMenu = (req, res) => {
    res.sendFile(__dirname+ "/public/" + "updateCourse.html")
}

let getDeleteMenu = (req, res) => {
    res.sendFile(__dirname+ "/public/" + "deleteCourse.html")
}

let getFetchMenu = (req, res) => {
    res.sendFile(__dirname+ "/public/" + "fetchCourse.html")
}

module.exports = {getMenu, getAddCourseMenu, getUpdateMenu, getDeleteMenu, getFetchMenu};