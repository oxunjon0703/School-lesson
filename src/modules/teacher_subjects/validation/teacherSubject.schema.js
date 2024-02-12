import Joi from "joi";

export const TeacherSubjectSchema = Joi.object({
	teacherId: Joi.number().required(),
	subjectId: Joi.number().required()
})
