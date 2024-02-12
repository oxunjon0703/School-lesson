import { Router } from "express";
import { TeacherSubjectService } from "./teacherSubject.service.js";
import { TeacherSubjectController } from "./teacherSubject.controller.js";

const router = Router();
const teacherSubjectService = new TeacherSubjectService();
const teacherSubjectController = new TeacherSubjectController(
  teacherSubjectService
);

router.get("/", (req, res) => {
  teacherSubjectController.getAll(req, res);
});

router.get("/:id", (req, res) => {
  teacherSubjectController.getById(req, res);
});

router.post("/", (req, res) => {
  teacherSubjectController.create(req, res);
});

router.put("/:id", (req, res) => {
  teacherSubjectController.update(req, res);
});

router.delete("/:id", (req, res) => {
  teacherSubjectController.delete(req, res);
});

export default {router}