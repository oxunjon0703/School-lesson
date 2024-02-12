import Joi from "joi";

export const BrandSchema = Joi.object({
  name: Joi.string().required(),
  isPublic: Joi.boolean()
});

