import {ResData} from "../../common/resData.js";
import { SubjectException } from "./exception/subjects.exception.js";
import { SubjectSchema } from "./validation/subjects.schema.js";

export class SubjectController {
	#subjectService;
	constructor(subjectService) {
		this.#subjectService = subjectService
	}
    async getAll(req, res) {
        try {
          const resData = await this.#subjectService.getAll();
    
          res.status(resData.statusCode).json(resData);
        } catch (error) {
          const resData = new ResData(error.message, error.statusCode, null, error);
    
          res.status(resData.statusCode).json(resData);
        }
      }
    
      async getById(req, res) {
        try {
          const Id = req.params?.id;
    
          const resData = await this.#subjectService.getById(Id);
    
          res.status(resData.statusCode).json(resData);
        } catch (error) {
          const resData = new ResData(error.message, error.statusCode, null, error);
    
          res.status(resData.statusCode).json(resData);
        }
      }
    
      async create(req, res) {
        try {
          const dto = req.body[0];
    
          const validated = SubjectSchema.validate(dto);
    
          if (validated.error) {
            throw new SubjectException(validated.error.message);
          }
    
          const resData = await this.#subjectService.create(dto);
    
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
    
          const data = { name: dto.name, brand_id: dto.brandId, id: Id };
    
          const validated = SubjectSchema.validate(dto);
    
          if (validated.error) {
            throw new SubjectException(validated.error.message);
          }
    
          const resData = await this.#subjectService.update(data);
    
          res.status(resData.statusCode).json(resData);
        } catch (error) {
          const resData = new ResData(error.message, error.statusCode, null, error);
    
          res.status(resData.statusCode).json(resData);
        }
      }
    
      async delete(req, res) {
        try {
          const Id = req.params?.id;
    
          const resData = await this.#subjectService.delete(Id);
    
          res.status(resData.statusCode).json(resData);
        } catch (error) {
          const resData = new ResData(error.message, error.statusCode, null, error);
    
          res.status(resData.statusCode).json(resData);
        }
      }
}