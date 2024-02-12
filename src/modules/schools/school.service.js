import { SchoolRepository } from "./school.repository.js";
import { ResData } from "./../../common/resData.js";
import { SchoolNotFoundException } from "./exception/school.exception.js";
import { SchoolEntity } from "./entity/school.entity.js";

export class SchoolService {
  #repository;
  constructor() {
    this.#repository = new SchoolRepository();
  }

  async getAll() {
    const schools = await this.#repository.getAll();

    const resData = new ResData("Get all schools", 200, schools);

    return resData;
  }

  async getById(Id) {
    const schoolId = await this.#repository.getOneById(Id);

    if (!schoolId) {
      throw new SchoolNotFoundException();
    }

    const resData = new ResData("Get school by id", 200, schoolId);

    return resData;
  }

  async create(dto) {
    const newSchool = new SchoolEntity(dto);

    const school = await this.#repository.create(newSchool);

    const resData = new ResData("School created", 200, school);

    return resData;
  }

  async update(dto) {
    const updateSchool = await this.#repository.update(dto);

    const resData = new ResData("School updated by id", 200, updateSchool);

    return resData;
  }

  async delete(Id) {
    const schoolId = await this.#repository.getOneById(Id);

    if (!schoolId) {
      throw new SchoolNotFoundException();
    }

    const deleteSchool = await this.#repository.delete(Id);

    const resData = new ResData("School deleted by id", 200, schoolId);

    return resData;
  }
}
