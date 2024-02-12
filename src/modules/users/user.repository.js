import { Postgres } from "../../lib/pg.js";

export class UserRepository extends Postgres {
  async getAll() {
    return await this.fetchAll("select * from users");
  }
  async getByLogin(login) {
    return await this.fetch("select * from users where login = $1", login);
  }
  async getById(id) {
    return await this.fetch("select * from users where id = $1", id);
  }
  async create(userEntity) {
    return await this.fetch(
      `insert into users
    (login, password, role, sex, first_name, last_name, phone, brand_id)
    values ($1, $2, $3, $4, $5, $6, $7, $8) returning *
    `,
      userEntity.login,
      userEntity.password,
      userEntity.role,
      userEntity.sex,
      userEntity.first_name,
      userEntity.last_name,
      userEntity.phone,
      userEntity.brand_id
    );
  }
  async delete(id) {
    return await this.fetch("DELETE FROM users WHERE id = $1;", id);
  }
}
