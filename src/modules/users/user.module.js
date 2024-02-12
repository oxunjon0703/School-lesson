import { Router } from "express";
import { UserController } from "./user.controller.js";
import { UserService } from "./user.service.js";

const router = Router();

const userService = new UserService();
const userController = new UserController(userService);

router.get("/", (req, res) => {
  userController.getAll(req, res);
});
router.get("/:id", (req, res) => {
  userController.getById(req, res);
});
router.post("/register", (req, res) => {
  userController.register(req, res);
});
router.post("/login", (req, res) => {
  userController.login(req, res);
});
router.delete("/:id", (req, res) => {
  userController.delete(req, res);
});

export default { router };
