import Joi from "joi";

export const RoomSchema = Joi.object({
  number: Joi.number().min(1),
  name: Joi.string(),
  floor: Joi.number(),
  capacity: Joi.number(),
  schoolId: Joi.number().required(),
});
