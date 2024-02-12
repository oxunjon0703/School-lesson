import { Postgres } from "../../lib/pg.js";

export class RoomRepository extends Postgres {
  async getAll() {
    return await this.fetchAll("select * from rooms");
  }

  async getOneById(id) {
    return await this.fetch("select * from rooms where id = $1", id);
  }

  async create(dto) {
    return await this.fetch(
      "INSERT INTO rooms(number, name, floor, capacity, school_id) VALUES ($1, $2, $3, $4, $5) RETURNING * ;",
      dto.number,
      dto.name,
      dto.floor,
      dto.capacity,
      dto.school_id
    );
  }

  async update(dto) {
    return await this.fetch(
      "UPDATE rooms SET number = $1, name = $2, floor = $3, capacity = $4, school_id = $5 WHERE id = $6 RETURNING *",
      dto.number,
      dto.name,
      dto.floor,
      dto.capacity,
      dto.school_id,
      dto.id
    );
  }

  async delete(id) {
    return await this.fetch("delete from rooms where id = $1", id);
  }
}
