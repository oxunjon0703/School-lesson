export class TeacherSubjectsEntity {
  constructor(dto) {
		this.teacher_id = dto.teacherId
		this.subject_id = dto.subjectId
  }
}
