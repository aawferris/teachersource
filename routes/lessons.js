const { Router } = require("express");
const controllers = require("../controllers/lessons");

const router = Router();

router.get("/lessons", controllers.getLessons);
router.get("/lessons/:id", controllers.getLessons);
router.post("/lessons", controllers.createLessons);
router.put("/lessons/:id", controllers.updateLessons);
router.delete("/lessons/:id", controllers.deleteLessons);

module.exports = router;
