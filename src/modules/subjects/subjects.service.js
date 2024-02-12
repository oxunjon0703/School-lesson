import {ResData} from "../../common/resData.js";
import { SubjectEntity } from "./entity/subjects.entity.js";
import { SubjectNotFoundException } from "./exception/subjects.exception.js";
import { SubjectRepository } from "./subjects.repository.js";

export class SubjectService {
	#repository;
	constructor() {
		this.#repository = new SubjectRepository()
	}

    async getAll() {
        const subjects = await this.#repository.getAll();
    
        const resData = new ResData("get all subjects", 200, subjects);
    
        return resData;
      }
    
      async getById(Id) {
        const subjectId = await this.#repository.getOneById(Id);
    
        if (!subjectId) {
          throw new SubjectNotFoundException();
        }
    
        const resData = new ResData("get all subject", 200, subjectId);
    
        return resData;
      }
    
      async create(dto) {
        const newSubject = new SubjectEntity(dto);
    
        const subject = await this.#repository.create(newSubject);
    
        const resData = new ResData("subject created", 200, subject);
    
        return resData;
      }
    
      async update(dto) {
    
        const updateSubject = await this.#repository.update(dto)
    
        const resData = new ResData("updated by id", 200, updateSubject);
    
        return resData;
      }
    
      async delete(Id) {
        const subjectId = await this.#repository.getOneById(Id);
    
        if (!subjectId) {
          throw new SubjectNotFoundException();
        }
    
        const deleteSubject = await this.#repository.delete(Id);
    
        const resData = new ResData("deleted Id", 200, subjectId);
    
        return resData;
      }
}