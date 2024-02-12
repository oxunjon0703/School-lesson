import { ResData } from "../../common/resData.js";
import { TeacherSubjectsNotFoundException } from "./exception/teacherSubject.exception.js";
import { TeacherSubjectRepository } from "./teacherSubject.repository.js";
import { TeacherSubjectsEntity } from './entity/teacherSubject.entity.js';

export class TeacherSubjectService {
  #repository;
  constructor() {
    this.#repository = new TeacherSubjectRepository();
  }

  async getAll() {
    const teacherSubjects = await this.#repository.getAll();

    const resData = new ResData(
      "get all teacher subjects",
      200,
      teacherSubjects
    );

    return resData;
  }

  async getById(Id) {
    const teacherSubjectId = await this.#repository.getById(Id);

    if (!teacherSubjectId) {
      throw new TeacherSubjectsNotFoundException();
    }

    const resData = new ResData(
      "get all teacher subject",
      200,
      teacherSubjectId
    );

    return resData;
  }

  async create(dto) {
    const newTeacherSubject = new TeacherSubjectsEntity(dto);

    const teacherSubject = await this.#repository.create(newTeacherSubject);

    const resData = new ResData(
      "teacher subjects created",
      200,
      teacherSubject
    );

    return resData;
  }

  async update(dto) {
    const teacherSubjectId = await this.#repository.getById(dto.id);

    if (!teacherSubjectId) {
      throw new TeacherSubjectsNotFoundException();
    }

    const updatedTeacherSubject = await this.#repository.update(dto);

    const resData = new ResData("updated by id", 200, updatedTeacherSubject);

    return resData;
  }

  async delete(Id) {
    const teacherSubjectId = await this.#repository.getById(Id);

    if (!teacherSubjectId) {
      throw new TeacherSubjectsNotFoundException();
    }

    const deleteTeacherSubject = await this.#repository.delete(Id);

    const resData = new ResData("deleted Id", 200, teacherSubjectId);

    return resData;
  }
}
