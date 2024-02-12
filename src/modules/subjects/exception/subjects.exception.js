export class SubjectNotFoundException extends Error {
  constructor() {
    super("Subject not found By Id");

    this.statusCode = 404;
  }
}

export class SubjectException extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}