let express = require("express");

let router = express.Router();
let courseController = require("../controller/course.controller");


router.post("/addCourse",courseController.addCourse);
//since it works with html form, and put is invalid
//in this case will use post as its the safest than get
router.post("/updateCourse",courseController.updateCourse);
router.get("/fetchCourses",courseController.fetchCourse);
//since it works with html form, and delete is invalid
//in this case will use post as its the safest than get
router.post("/deleteCourse",courseController.deleteCouse);

module.exports = router;