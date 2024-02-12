import { RoomRepository } from "./rooms.repository.js";
import { ResData } from "./../../common/resData.js";
import { RoomNotFoundException } from "./exception/rooms.exception.js";
import { RoomEntity } from "./entity/rooms.entity.js";

export class RoomService {
  #repository;
  constructor() {
    this.#repository = new RoomRepository();
  }

  async getAll() {
    const rooms = await this.#repository.getAll();

    const resData = new ResData("rooms get all", 200, rooms);

    return resData;
  }

  async getById(id) {
    const roomId = await this.#repository.getOneById(id);

    if (!roomId) {
      throw new RoomNotFoundException();
    }

    const resData = new ResData("Room  by id", 201, roomId);

    return resData;
  }

  async create(dto) {
    const newRoom = new RoomEntity(dto);

    const rooms = await this.#repository.create(newRoom);

    const resData = new ResData("room created", 200, rooms);

    return resData;
  }

  async update(dto) {
    console.log("dto:", dto);

    const updateRoom = await this.#repository.update(dto)

    const resData = new ResData("updated by id", 200, updateRoom);

    return resData;
  }

  async delete(id) {
    const roomId = await this.#repository.getOneById(id);

    if (!roomId) {
      throw new RoomNotFoundException();
    }

    const deleteRoom = await this.#repository.delete(id);

    const resData = new ResData("Delete By Id room", 204, roomId);

    return resData;
  }
}
