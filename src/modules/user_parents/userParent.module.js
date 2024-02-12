import { Router } from "express";
import { UserParentService } from "./userParent.service.js";
import { UserParentController } from "./userParent.controller.js";

const router = Router();

const userParentService = new UserParentService();
const userParentController = new UserParentController(userParentService);

router.get("/", (req, res) => {
  userParentController.getAll(req, res);
});

router.get("/:id", (req, res) => {
  userParentController.getById(req, res);
});

router.post("/", (req, res) => {
  userParentController.create(req, res);
});

router.put("/:id", (req, res) => {
  userParentController.update(req, res);
});

router.delete("/:id", (req, res) => {
  userParentController.delete(req, res);
});

export default { router };
