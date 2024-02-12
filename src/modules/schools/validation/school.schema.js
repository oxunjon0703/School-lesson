import Joi from "joi";

export const SchoolSchema = Joi.object({
  name: Joi.string().max(128).required(),
  brandId: Joi.number().required(),
});
