import { GroppRepository } from "./groups.repository.js";
import { ResData } from "./../../common/resData.js";
import { GroupNotFoundException } from "./exception/groups.exception.js";
import { GroupEntity } from './entity/groups.entity.js';

export class GroupService {
  #repository;
  constructor() {
    this.#repository = new GroppRepository();
  }

  async getAll() {
    const groups = await this.#repository.getAll();

    const resData = new ResData("Get all groups", 200, groups);

    return resData;
  }

  async getById(id) {
    const groupId = await this.#repository.getById(id);

    if (!groupId) {
      throw new GroupNotFoundException();
    }

    const resData = new ResData("Get by id groups", 200, groupId);

    return resData;
  }

  async create(dto) {
    const newGroup = new GroupEntity(dto);

    const group = await this.#repository.create(newGroup);

    const resData = new ResData("Success", 201, group);

    return resData;
  }

  async update(dto) {

    const groupId = await this.#repository.getById(dto.id);

    if (!groupId) {
      throw new GroupNotFoundException();
    }

    const updatedGroup = await this.#repository.update(dto);

    const resData =  new ResData("updated bi id group", 200, updatedGroup);

    return resData;
  }

  async delete(id) {
    const groupId = await this.#repository.getById(id);

    if (!groupId) {
      throw new GroupNotFoundException();
    }

    const deleteGroup = await this.#repository.delete(id);

    const resData = new ResData("Get by id groups", 200, groupId);

    return resData;
  }
}
