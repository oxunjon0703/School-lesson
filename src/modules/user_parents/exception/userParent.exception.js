export class UserParentNotFoundException extends Error {
  constructor() {
    super("UserParent not found By Id");

    this.statusCode = 404;
  }
}

export class UserParentException extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}