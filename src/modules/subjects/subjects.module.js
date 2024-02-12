import { Router } from "express";
import { SubjectService } from "./subjects.service.js";
import { SubjectController } from "./subjects.controller.js";

const router = Router();
const subjectService = new SubjectService();
const subjectController = new SubjectController(subjectService);

router.get("/", (req, res) => {
  subjectController.getAll(req, res);
});

router.get("/:id", (req, res) => {
  subjectController.getById(req, res);
});

router.post("/", (req, res) => {
  subjectController.create(req, res);
});

router.put("/:id", (req, res) => {
  subjectController.update(req, res);
});

router.delete("/:id", (req, res) => {
  subjectController.delete(req, res);
});

export default { router };
