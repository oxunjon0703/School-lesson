import { Router } from "express";
import { RoomService } from "./rooms.service.js";
import { RoomController } from "./rooms.controller.js";

const router = Router();

const roonService = new RoomService();
const roomController = new RoomController(roonService);

router.get("/", (req, res) => {
  roomController.getAll(req, res);
});

router.get("/:id", (req, res) => {
  roomController.getById(req, res);
});

router.post("/", (req, res) => {
  roomController.create(req, res);
});

router.put("/:id", (req, res) => {
  roomController.update(req, res);
});

router.delete("/:id", (req, res) => {
  roomController.delete(req, res);
});

export default { router };
