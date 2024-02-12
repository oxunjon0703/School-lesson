import { ResData } from "../../common/resData.js";
import { GroupException } from "./exception/groups.exception.js";
import { GroupSchema } from './validation/groups.schema.js';

export class GroupController {
  #groupService;
  constructor(groupService) {
    this.#groupService = groupService;
  }

  async getAll(req, res) {
    try {
      const resData = await this.#groupService.getAll();

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async getById(req, res) {
    try {
      const Id = req.params.id;

      const resData = await this.#groupService.getById(Id);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async create(req, res) {
    try {
      const dto = req.body[0];

      const validated = GroupSchema.validate(dto);

      if (validated.error) {
        throw new GroupException(validated.error.message);
      }

      const resData = await this.#groupService.create(dto);

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

      const data = { name: dto.name, brand_id: dto.brandId, head_teacher_id: dto.headTeacherId, room_id: dto.roomId, id: Id };

      const validated = GroupSchema.validate(dto);

      if (validated.error) {
        throw new GroupException(validated.error.message);
      }

      const resData = await this.#groupService.update(data);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async delete(req, res) {
    try {
      const Id = req.params.id;

      const resData = await this.#groupService.delete(Id);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }
}
