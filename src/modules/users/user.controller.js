import { ResData } from "../../common/resData.js";
import {
  UserBadRequestException,
  UserLoginAlreadyExistException,
} from "./exception/user.exception.js";
import { validationSchema } from "../../lib/validationSchema.js";
import {
  userRegisterSchema,
  UserLoginSchema,
} from "./validation/user.schema.js";

export class UserController {
  #userService;
  #brandService;
  constructor(userService, brandService) {
    this.#userService = userService;
    this.#brandService = brandService;
  }

  async getAll(req, res) {
    try {
      const resData = await this.#userService.getAll();

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async getById(req, res) {
    try {
      const Id = req.params.id;

      const resData = await this.#userService.getById(Id);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);
      res.status(400).json(resData);
    }
  }

  async register(req, res) {
    try {
      const dto = req.body;

      validationSchema(userRegisterSchema, dto);

      const resDataGetByLogin = await this.#userService.findByLogin(dto.login);

      if (resDataGetByLogin.data) {
        throw new UserLoginAlreadyExistException();
      }

      await this.#brandService.getById(dto.brandId);

      const resData = await this.#userService.create(dto);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async login(req, res) {
    try {
      const dto = req.body;

      const validated = UserLoginSchema.validate(dto);

      if (validated.error) {
        throw new UserBadRequestException(validated.error.message);
      }

      const resData = await this.#userService.login(dto);

      return res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);
      res.status(400).json(resData);
    }
  }

  async delete(req, res) {
    try {
      const Id = req.params.id;

      const resData = await this.#userService.delete(Id);

      return res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);
      res.status(400).json(resData);
    }
  }
}
