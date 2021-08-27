/* eslint-disable quotes */
// ---Dependencys
import Joi from 'joi';
// ---Other
import { tabMenu } from 'Others/global-data'

// ------------------------------------------------MODEL DATA JOI VALIDATORS------------------------------------------
export function validateSearchParams( data: unknown ) : Joi.ValidationResult {

  const validCategories = tabMenu.map( element => element.value )

  const validSorts = [
    "{ \"nombre \": 1 }",
    "{ \"nombre \": -1 }",
    "{ \"marca\": 1 }",
    "{ \"marca\": -1 }",
    "{ \"precioOnline\": -1 }",
    "{ \"precioOnline\": 1 }",
    "{ \"countVisits\": 1 }",
    "{ \"countVisits\": -1 }",
    "{ \"countQuestions\": 1 }",
    "{ \"countQuestions\": -1 }",
    "{ \"countPurchases\": 1 }",
    "{ \"countPurchases\": -1 }"
  ]

  const schema = Joi.object({
    pageNumber: Joi.number().integer(),
    pageSize: Joi.number().integer(),
    searchedValue: Joi.string().min(3).max(18),
    categoria: Joi.string().valid(...validCategories).required(),
    descuento: Joi.string().valid('true', 'false'),
    sortBy: Joi.string().valid(...validSorts),
  })
  return schema.validate(data)
}