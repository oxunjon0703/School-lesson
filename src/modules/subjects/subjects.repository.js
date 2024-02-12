import { Postgres } from "../../lib/pg.js";

export class SubjectRepository extends Postgres {
  async getAll() {
    return await this.fetchAll("select * from subjects");
  }
  async getOneById(id) {
    return await this.fetch("select * from subjects where id = $1", id);
  }
  async create(dto) {
    return await this.fetch(
      "INSERT INTO subjects(name, brand_id) VALUES ($1, $2) RETURNING * ;",
      dto.name,
      dto.brand_id
    );
  }
  async update(dto) {
    return await this.fetch(
      "UPDATE subjects SET name = $1, brand_id = $2 WHERE id = $3 RETURNING *",
      dto.name,
      dto.brand_id,
      dto.id
    );
  }
  async delete(id) {
    return await this.fetch("DELETE FROM subjects WHERE id = $1;", id);
  }
}
