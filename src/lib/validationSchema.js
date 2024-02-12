import { BadRequestException } from "../common/exception/exception.js";

export const validationSchema = (schema, dto) => {
  const { error } = schema.validate(dto);

  if (error) {
    throw new BadRequestException(error.message);
  }
};
