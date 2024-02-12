export class SchoolNotFoundException extends Error {
    constructor() {
      super("school not found By Id");
  
      this.statusCode = 404;
    }
  }
  
  export class SchoolException extends Error {
    constructor(message) {
      super(message);
      this.statusCode = 400;
    }
  }