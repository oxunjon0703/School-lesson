export class TeacherSubjectsNotFoundException extends Error {
  constructor() {
    super("Teacher Subject not found By Id");

    this.statusCode = 404;
  }
}

export class TeacherSubjectsException extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}