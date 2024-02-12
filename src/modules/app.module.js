import { Router } from "express";
import brand from "./brands/brand.module.js";
import school from "./schools/school.module.js";
import user from "./users/user.module.js";
import userParent from "./user_parents/userParent.module.js";
import room from "./rooms/rooms.module.js";
import subject from "./subjects/subjects.module.js";
import group from "./groups/groups.module.js";
import teacherSubject from "./teacher_subjects/teacherSubject.module.js";
import lesson from "./lessons/lessons.module.js";

const router = Router();

router.use("/brand", brand.router);
router.use("/school", school.router);
router.use("/user", user.router);
router.use("/userParent", userParent.router);
router.use("/room", room.router);
router.use("/subject", subject.router);
router.use("/group", group.router);
router.use("/teacherSubject", teacherSubject.router);
router.use("/lesson", lesson.router);

export default { router };
