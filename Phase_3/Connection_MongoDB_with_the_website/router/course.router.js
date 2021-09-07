let express = require("express");

let router = express.Router();
let courseController = require("../controller/course.controller");


router.post("/addCourse",courseController.addCourse);
router.post("/updateCourse",courseController.updateCourse);
router.get("/fetchCourses",courseController.fetchCourse);
router.post("/deleteCourse",courseController.deleteCouse);

module.exports = router;