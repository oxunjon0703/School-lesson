import { ResData } from "../../common/resData.js";
import { UserParentEntity } from "./entity/userParent.entity.js";
import { UserParentNotFoundException } from "./exception/userParent.exception.js";
import { UserParentRepository } from "./userParent.repository.js";

export class UserParentService {
  #repository;
  constructor() {
    this.#repository = new UserParentRepository();
  }

  async getAll() {
    const UserParents = await this.#repository.getAll();

    const resData =  new ResData("get all User Parents", 200, UserParents);

    return resData;
  }

  async getById(id) {
    const UserParentId = await this.#repository.getById(id);

    if (!UserParentId) {
      throw new UserParentNotFoundException();
    }
    
    const resData = new ResData("get by id user parent", 200, UserParentId);

    return resData;
  }

  async create(dto) {
    const newUserParent = new UserParentEntity(dto);

    const UserParent = await this.#repository.create(newUserParent);

    const resData =  new ResData("Success", 201, UserParent);

    return resData;
  }

  async update(dto) {
    const UserParentId = await this.#repository.getById(dto.id);

    if (!UserParentId) {
      throw new UserParentNotFoundException();
    }

    const updatedUserParent = await this.#repository.update(dto)

    const resData = new ResData("updated by id", 200, updatedUserParent);

    return resData;
  }

  async delete(id) {

    const UserParentId = await this.#repository.getById(id);

    if (!UserParentId) {
      throw new UserParentNotFoundException();
    }

    const deletedUserParent = await this.#repository.delete(id);

    const resData =  new ResData("deleted by id user parent", 200, UserParentId);

    return resData;
  }
}
