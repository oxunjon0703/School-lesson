import { Postgres } from "../../lib/pg.js";

export class BrandRepository extends Postgres {
  async getAll() {
    return await this.fetchAll("select * from brands");
  }
  async getOneById(id) {
    return await this.fetch("select * from brands where id = $1", id);
  }
  async create(dto) {
    return await this.fetch(
      "INSERT INTO brands(name, is_public) VALUES ($1, $2) RETURNING * ;",
      dto.name,
      dto.is_public
    );
  }
  async update(dto) {
    return await this.fetch(
      "UPDATE brands SET name = $1, is_public = $2 WHERE id = $3 RETURNING *",
      dto.name,
      dto.is_public,
      dto.id
    );
  }
  async delete(id) {
    return await this.fetch("DELETE FROM brands WHERE id = $1;", id);
  }
}
