export class BrandNotFoundException extends Error {
  constructor() {
    super("Brand not found By Id");

    this.statusCode = 404;
  }
}

export class BrandException extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}