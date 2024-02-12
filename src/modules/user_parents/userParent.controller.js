import { ResData } from "../../common/resData.js";
import { UserParentException } from "./exception/userParent.exception.js";
import { UserParentSchema } from "./validation/userParent.schema.js";

export class UserParentController {
  #userParentService;
  constructor(userParentService) {
    this.#userParentService = userParentService;
  }

  async getAll(req, res) {
    try {
      const resData = await this.#userParentService.getAll();

      return res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      return res.status(400).json(resData);
    }
  }

  async getById(req, res) {
    try {
      const Id = req.params.id;

      const resData = await this.#userParentService.getById(Id);

      return res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      return res.status(400).json(resData);
    }
  }

  async create(req, res) {
    try {
      const dto = req.body[0];

      const validated = UserParentSchema.validate(dto);

      if (validated.error) {
        throw new UserParentException(validated.error.message);
      }

      const resData = await this.#userParentService.create(dto);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      return res.status(400).json(resData);
    }
  }

  async update(req, res) {
    try {
      const Id = Number(req.params?.id);
      const dto = req.body[0];

      const data = { child_id: dto.childId, parent_id: dto.parentId, id: Id };

      const resData = await this.#userParentService.update(data);

      return res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      return res.status(400).json(resData);
    }
  }

  async delete(req, res) {
    try {
      const Id = req.params.id;

      const resData = await this.#userParentService.delete(Id);

      return res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      return res.status(400).json(resData);
    }
  }
}
