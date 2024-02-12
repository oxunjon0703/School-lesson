import { ResData } from "../../common/resData.js";
import { LessonException } from "./exception/lessons.exception.js";
import { LessonSchema } from "./validation/lessons.schema.js";

export class LessonController {
  #lessonService;
  constructor(lessonService) {
    this.#lessonService = lessonService;
  }

  async getAll(req, res) {
    try {
      const resData = await this.#lessonService.getAll();

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async getById(req, res) {
    try {
      const Id = req.params.id;

      const resData = await this.#lessonService.getById(Id);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async create(req, res) {
    try {
      const dto = req.body[0];
      console.log(1);

      const validated = LessonSchema.validate(dto);


      if (validated.error) {
        throw new LessonException(validated.error.message);
      }

      const resData = await this.#lessonService.create(dto);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async update(req, res) {
    try {
      const Id = Number(req.params?.id);
      const dto = req.body[0];

      const data = {
        teacher_id: dto.teacherId,
        subject_id: dto.subjectId,
        group_id: dto.groupId,
        room_id: dto.roomId,
        start_time: dto.startTime,
        end_time: dto.endTime,
        started_time: dto.startedTime,
        ended_time: dto.endedTime,
        id: Id,
      };

      const validated = LessonSchema.validate(dto);

      if (validated.error) {
        throw new LessonException(validated.error.message);
      }

      const resData = await this.#lessonService.update(data);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async delete(req, res) {
    try {
      const Id = req.params.id;

      const resData = await this.#lessonService.delete(Id);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }
}
