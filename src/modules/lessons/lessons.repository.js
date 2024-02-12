import { Postgres } from "../../lib/pg.js";

export class LessonRepository extends Postgres {
  async getAll() {
    return await this.fetchAll("select * from lessons");
  }

  async getById(id) {
    return await this.fetch("select * from lessons where id = $1", id);
  }

  async create(dto) {
    return await this.fetch(
      "INSERT INTO lessons(teacher_id, subject_id, group_id, room_id, start_time, end_time, started_time, ended_time) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING * ;",
      dto.teacher_id,
      dto.subject_id,
      dto.group_id,
      dto.room_id,
      dto.start_time,
      dto.end_time,
      dto.started_time,
      dto.ended_time
    );
  }

  async update(dto) {
    return await this.fetch(
      "UPDATE lessons SET teacher_id = $1, subject_id = $2, group_id = $3, room_id = $4, start_time = $5, end_time = $6, started_time = $7, ended_time = $8 WHERE id = $9 RETURNING *",
      dto.teacher_id,
      dto.subject_id,
      dto.group_id,
      dto.room_id,
      dto.start_time,
      dto.end_time,
      dto.started_time,
      dto.ended_time,
      dto.id
    );
  }

  async delete(id) {
    return await this.fetch("delete from lessons where id = $1", id);
  }
}
