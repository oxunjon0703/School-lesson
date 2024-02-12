import { Router } from "express";
import { LessonService } from "./lessons.service.js";
import { LessonController } from "./lessons.controller.js";

const router = Router();

const lessonService = new LessonService();
const lessonController = new LessonController(lessonService);

router.get("/", (req, res) => {
  lessonController.getAll(req, res);
});

router.get("/:id", (req, res) => {
  lessonController.getById(req, res);
});
router.post("/", (req, res) => {
  lessonController.create(req, res);
});
router.put("/:id", (req, res) => {
  lessonController.update(req, res);
});

router.delete("/:id", (req, res) => {
  lessonController.delete(req, res);
});

export default { router };
