import { Postgres } from "../../lib/pg.js";

export class GroppRepository extends Postgres {
  async getAll() {
    return await this.fetchAll("select * from groups");
  }

  async getById(Id) {
    return await this.fetch("select * from groups where id = $1", Id);
  }

  async create(dto) {
    return await this.fetch(
      "insert into groups(name, brand_id, head_teacher_id, room_id) VALUES($1, $2, $3, $4) RETURNING *",
      dto.name,
      dto.brand_id,
      dto.head_teacher_id,
      dto.room_id
    );
  }

  async update(dto) {
    return await this.fetch(
      "UPDATE groups SET name = $1, brand_id = $2, head_teacher_id = $3, room_id = $4 WHERE id = $5 RETURNING *",
      dto.name,
      dto.brand_id,
      dto.head_teacher_id,
      dto.room_id,
      dto.id
    );
  }

  async delete(Id) {
    return await this.fetch("DELETE from groups where id = $1", Id);
  }
}
