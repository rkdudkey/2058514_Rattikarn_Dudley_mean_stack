let express = require("express");

let router = express.Router();

let courseController = require("../controller/menuCourse.controller");

router.get("/getMenu", courseController.getMenu);
router.get("/addCourse", courseController.getAddCourseMenu);
router.get("/updateCourse", courseController.getUpdateMenu);
router.get("/deleteCourse", courseController.getDeleteMenu);

module.exports = router;