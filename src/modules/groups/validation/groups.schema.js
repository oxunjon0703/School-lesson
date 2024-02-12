import Joi from "joi";

export const GroupSchema = Joi.object({
	name: Joi.string().required(),
	brandId: Joi.number().required(),
	headTeacherId: Joi.number().required(),
	roomId: Joi.number().required()
})