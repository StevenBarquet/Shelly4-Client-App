// ---Dependencys
import Joi from 'joi';
// ---Other
import { tabMenu } from 'Others/global-data'

// ------------------------------------------------MODEL DATA JOI VALIDATORS------------------------------------------
export function validateSearchParams( data: unknown ) : Joi.ValidationResult {

  const validCategories = tabMenu.map( element => element.value )

  const schema = Joi.object({
    pageNumber: Joi.number().integer(),
    pageSize: Joi.number().integer(),
    searchedValue: Joi.string().min(3).max(18),
    categoria: Joi.string().valid(...validCategories).required(),
    descuento: Joi.string().valid('true', 'false'),
    marca: Joi.number().integer()
        .min(-1)
        .max(1),
    nombre: Joi.number().integer()
      .min(-1)
      .max(1),
    precioOnline: Joi.number().integer()
      .min(-1)
      .max(1),
    countVisits: Joi.number().integer()
      .min(-1)
      .max(1),
    countQuestions: Joi.number().integer()
      .min(-1)
      .max(1),
    countPurchases: Joi.number().integer()
      .min(-1)
      .max(1)
  })
  return schema.validate(data)
}