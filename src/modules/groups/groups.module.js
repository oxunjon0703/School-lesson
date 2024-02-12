import { Router } from "express";
import { GroupService } from "./groups.service.js";
import { GroupController } from "./groups.controller.js";

const router = Router();

const groupService = new GroupService();
const groupController = new GroupController(groupService);

router.get("/", (req, res) => {
  groupController.getAll(req, res);
});

router.get("/:id", (req, res) => {
  groupController.getById(req, res);
});
router.post("/", (req, res) => {
  groupController.create(req, res);
});
router.put("/:id", (req, res) => {
  groupController.update(req, res);
});

router.delete("/:id", (req, res) => {
  groupController.delete(req, res);
});

export default { router };
