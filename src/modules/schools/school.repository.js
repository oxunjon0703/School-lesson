import { Postgres } from "../../lib/pg.js";

export class SchoolRepository extends Postgres {
  async getAll() {
    return await this.fetchAll("select * from schools");
  }
  async getOneById(id) {
    return await this.fetch("select * from schools where id = $1", id);
  }
  async create(dto) {
    return await this.fetch(
      "INSERT INTO schools(name, brand_id) VALUES ($1, $2) RETURNING * ;",
      dto.name,
      dto.brand_id
      );
    }
    async update(dto) {
    return await this.fetch(
      "UPDATE schools SET name = $1, brand_id= $2 WHERE id = $3 RETURNING *",
      dto.name,
      dto.brandId,
      dto.id
    );
  }
  async delete(id) {
    return await this.fetch("DELETE FROM schools WHERE id = $1;", id);
  }
}

// ko'p qiymatlar default bo'lgani un faqat not nall lari un tekshirdim
