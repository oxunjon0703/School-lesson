import { ResData } from "../../common/resData.js";
import { TeacherSubjectsException } from "./exception/teacherSubject.exception.js";
import { TeacherSubjectSchema } from "./validation/teacherSubject.schema.js";

export class TeacherSubjectController {
  #teacherSubjectservice;
  constructor(teacherSubjectservice) {
    this.#teacherSubjectservice = teacherSubjectservice;
  }

  async getAll(req, res) {
    try {
      console.log(res.status);
      const resData = await this.#teacherSubjectservice.getAll();

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async getById(req, res) {
    try {
      const Id = req.params?.id;

      const resData = await this.#teacherSubjectservice.getById(Id);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async create(req, res) {
    try {
      const dto = req.body[0];

      const validated = TeacherSubjectSchema.validate(dto);

      if (validated.error) {
        throw new TeacherSubjectsException(validated.error.message);
      }

      const resData = await this.#teacherSubjectservice.create(dto);

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
        id: Id,
      };

      const validated = TeacherSubjectSchema.validate(dto);

      if (validated.error) {
        throw new TeacherSubjectsException(validated.error.message);
      }

      const resData = await this.#teacherSubjectservice.update(data);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async delete(req, res) {
    try {
      const Id = req.params?.id;

      const resData = await this.#teacherSubjectservice.delete(Id);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }
}
