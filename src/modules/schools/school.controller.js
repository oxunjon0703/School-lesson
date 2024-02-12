import { ResData } from "../../common/resData.js";
import { SchoolException } from "./exception/school.exception.js";
import { SchoolSchema } from "./validation/school.schema.js";

export class SchoolController {
  #schoolService;
  constructor(schoolService) {
    this.#schoolService = schoolService;
  }

  async getAll(req, res) {
    try {
      const resData = await this.#schoolService.getAll();

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async getById(req, res) {
    try {
      const Id = req.params?.id;

      const resData = await this.#schoolService.getById(Id);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async create(req, res) {
    try {
      const dto = req.body[0];

      const validated = SchoolSchema.validate(dto);

      if (validated.error) {
        throw new SchoolException(validated.error.message);
      }

      const resData = await this.#schoolService.create(dto);

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

      const data = {name: dto.name, brandId: dto.brandId, id: Id};

      const validated = SchoolSchema.validate(dto);

      if (validated.error) {
        throw new SchoolException(validated.error.message);
      }

      const resData = await this.#schoolService.update(data);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async delete(req, res) {
    try {
      const Id = req.params?.id;

      const resData = await this.#schoolService.delete(Id);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }
}

