import { LessonRepository } from "./lessons.repository.js";
import { ResData } from "./../../common/resData.js";
import { LessonNotFoundException } from "./exception/lessons.exception.js";
import { LessonsEntity } from "./entity/lessons.entity.js";

export class LessonService {
  #repository;
  constructor() {
    this.#repository = new LessonRepository();
  }

  async getAll() {
    const lessons = await this.#repository.getAll();

    const resData = new ResData("Get all lessons", 200, lessons);

    return resData;
  }

  async getById(id) {
    const lessonid = await this.#repository.getById(id);

    if (!lessonid) {
      throw new LessonNotFoundException();
    }

    const resData = new ResData("get by id lesson", 200, lessonid);

    return resData;
  }

  async create(dto) {
    const newLesson = new LessonsEntity(dto);

    const Lessons = await this.#repository.create(newLesson);

    const resData = new ResData("lesson created", 200, Lessons);

    return resData;
  }

  async update(dto) {
    const updateLesson = await this.#repository.update(dto);

    const resData = new ResData("updated by id", 200, updateLesson);

    return resData;
  }

  async delete(id) {
    const lessonid = await this.#repository.getById(id);

    if (!lessonid) {
      throw new LessonNotFoundException();
    }

    const deleteLesson = await this.#repository.delete(id);

    const resData = new ResData("delete by id lesson", 200, lessonid);

    return resData;
  }
}
