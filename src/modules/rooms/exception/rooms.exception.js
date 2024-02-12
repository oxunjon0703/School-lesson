export class RoomNotFoundException extends Error {
  constructor() {
    super("Room not found By Id");

    this.statusCode = 404;
  }
}

export class RoomException extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}