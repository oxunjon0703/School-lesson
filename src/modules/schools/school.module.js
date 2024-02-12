import { Router } from "express";
import { SchoolService } from "./school.service.js";
import { SchoolController } from "./school.controller.js";

const router = Router();

const schoolService = new SchoolService();
const schoolController = new SchoolController(schoolService);

router.get("/", (req, res) => {
  schoolController.getAll(req, res);
});

router.get("/:id", (req, res) => {
  schoolController.getById(req, res);
});

router.post("/", (req, res) => {
  schoolController.create(req, res);
});

router.put("/:id", (req, res) => {
  schoolController.update(req, res);
});

router.delete("/:id", (req, res) => {
  schoolController.delete(req, res);
});

export default { router };
