import { Joi } from 'express-validation';
import joiObjectId from 'joi-objectid';

Joi.objectId = joiObjectId(Joi);

export const getFetchUserById = {
  params: Joi.object({
    id: Joi.objectId().required(),
  }).required(),
};

export const postCreateUser = {
  body: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    participation: Joi.number().required(),
  }).required(),
};

export const putUpdateUser = {
  params: Joi.object({
    id: Joi.objectId().required(),
  }).required(),

  body: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    participation: Joi.number().required(),
  }).required(),
};

export const deleteUser = {
  params: Joi.object({
    id: Joi.objectId().required(),
  }).required(),
};
