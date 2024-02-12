export class LessonNotFoundException extends Error {
  constructor() {
    super("Lessons not found By Id");

    this.statusCode = 404;
  }
}

export class LessonException extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}