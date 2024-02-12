import { ResData } from "../../common/resData.js";
import { BrandException } from "./exception/brand.exception.js";
import { BrandSchema } from "./validation/brand.schema.js";

export class BrandController {
  #brandService;
  constructor(brandService) {
    this.#brandService = brandService;
  }

  async getAll(req, res) {
    try {
      console.log(res.status);
      const resData = await this.#brandService.getAll();

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async getById(req, res) {
    try {
      const Id = req.params?.id;

      const resData = await this.#brandService.getById(Id);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async create(req, res) {
    try {
      const dto = req.body[0];

      const validated = BrandSchema.validate(dto);

      if (validated.error) {
        throw new BrandException(validated.error.message);
      }

      const resData = await this.#brandService.create(dto);

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

      const data = { name: dto.name, is_public: dto.isPublic, id: Id };

      const validated = BrandSchema.validate(dto);

      if (validated.error) {
        throw new BrandException(validated.error.message);
      }

      const resData = await this.#brandService.update(data);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async delete(req, res) {
    try {
      const Id = req.params?.id;

      const resData = await this.#brandService.delete(Id);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }
}
