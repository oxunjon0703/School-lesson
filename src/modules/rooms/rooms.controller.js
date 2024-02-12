import { ResData } from "../../common/resData.js";
import { RoomException } from "./exception/rooms.exception.js";
import { RoomSchema } from './validation/rooms.schema.js';

export class RoomController {
  #roomService;
  constructor(roomService) {
    this.#roomService = roomService;
  }

  async getAll(req, res) {
    try {
      const resData = await this.#roomService.getAll();

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async getById(req, res) {
    try {
      const Id = req.params.id;

      const resData = await this.#roomService.getById(Id);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async create(req, res) {
    try {
      const dto = req.body[0];

      const validated = RoomSchema.validate(dto);

      if (validated.error) {
        throw new RoomException(validated.error.message);
      }

      const resData = await this.#roomService.create(dto);

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
      
      const data = { number: dto.number, name: dto.name, floor: dto.floor, capacity: dto.capacity, school_id: dto.schoolId, id: Id };
      
      const validated = RoomSchema.validate(dto);
      console.log(1);

      if (validated.error) {
        throw new RoomException(validated.error.message);
      }

      const resData = await this.#roomService.update(data);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async delete(req, res) {
    try {
      const Id = req.params?.id;

      const resData = await this.#roomService.delete(Id);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }
}
