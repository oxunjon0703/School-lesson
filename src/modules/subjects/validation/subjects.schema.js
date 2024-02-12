import Joi from "joi";

export const SubjectSchema = Joi.object({
  name: Joi.string().required(),
	brandId: Joi.number().required()
});

