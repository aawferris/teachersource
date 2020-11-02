const { Router } = require("express");
const controllers = require("../controllers/lessons");

const router = Router();

router.get("/lessons", controllers.getLessons);
router.get("/lessons/:id", controllers.getLesson);
router.post("/lessons", controllers.createLesson);
router.put("/lessons/:id", controllers.updateLesson);
router.delete("/lessons/:id", controllers.deleteLesson);

module.exports = router;
