import { Postgres } from "../../lib/pg.js";

export class UserParentRepository extends Postgres {
  async getAll() {
    return await this.fetchAll("select * from user_parents");
  }
  async getById(id) {
    return await this.fetch("select * from user_parents where id = $1", id);
  }
  async create(dto) {
    return await this.fetch(
      "INSERT INTO user_parents(child_id, parent_id) VALUES($1, $2) RETURNING *",
      dto.child_id,
      dto.parent_id
    );
  }

  async update(dto) {
    return await this.fetch(
      "UPDATE user_parents SET child_id=$1, parent_id=$2 WHERE id = $3 RETURNING *",
      dto.child_id,
      dto.parent_id,
      dto.id
    );
  }

  async delete(id) {
    return await this.fetch("DELETE FROM user_parents WHERE id = $1;", id);
  }
}
