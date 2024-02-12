import Joi from "joi";
import { roles, sex } from "../../../common/enums/roles.js";

const rolesArray = Object.values(roles);
const sexArray = Object.values(sex);

export const userRegisterSchema = Joi.object({
  login: Joi.string().max(32).min(4).required(),
  password: Joi.string().max(32).min(4).required(),
  role: Joi.string()
    .valid(...rolesArray)
    .required(),
  sex: Joi.string()
    .valid(...sexArray)
    .required(),
  firstName: Joi.string().max(32).min(4).required(),
  lastName: Joi.string().max(32).min(4).required(),
  phone: Joi.array()
    .items(Joi.number().min(100000000).max(999999999))
    .required(),
  brandId: Joi.number().integer().min(1).required(),
  repeatPassword: Joi.ref("password"),
});

export const UserLoginSchema = Joi.object({
  login: Joi.string().required(),
  password: Joi.string().required(),
});
