import { Postgres } from "../../lib/pg.js";

export class TeacherSubjectRepository extends Postgres {
  async getAll() {
    return await this.fetchAll("select * from teacher_subjects");
  }
  async getById(id) {
    return await this.fetch("select * from teacher_subjects where id = $1", id);
  }
  async create(dto) {
    return await this.fetch(
      "INSERT INTO teacher_subjects(teacher_id, subject_id) VALUES ($1, $2) RETURNING * ;",
      dto.teacher_id,
      dto.subject_id
    );

  }
  async update(dto) {
    return await this.fetch(
      "UPDATE teacher_subjects SET teacher_id = $1, subject_id = $2 WHERE id = $3 RETURNING *",
      dto.teacher_id,
      dto.subject_id,
      dto.id
    );
  }
  async delete(id) {
    return await this.fetch("DELETE FROM teacher_subjects WHERE id = $1;", id);
  }
}
