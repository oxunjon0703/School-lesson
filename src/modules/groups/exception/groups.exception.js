export class GroupNotFoundException extends Error {
  constructor() {
    super("Groups not found By Id");

    this.statusCode = 404;
  }
}

export class GroupException extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}
