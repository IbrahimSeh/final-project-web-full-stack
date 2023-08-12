import Joi from "joi";

import validation from "./validation";

const createCarSchema = Joi.object({
    manufacturer: Joi.string().pattern(new RegExp("^[A-Z][a-z0-9-\\s]{0,}$", "i")).min(2).max(256).required(),
    type: Joi.string().pattern(new RegExp("^[A-Z][a-z0-9-\\s]{0,}$", "i")).min(2).max(256).required(),
    subType: Joi.string().max(256).allow(null, ''),
    yearOfProduction: Joi.number().min(2).max(3000).required(),
    previousOwners: Joi.number().min(2).max(3000).required(),
    kilometers: Joi.number().allow(null, ''),
    engineType: Joi.string().max(256).allow(null, ''),
    fuelType: Joi.string().max(256).required(),
    phone: Joi.string()
        .pattern(new RegExp("^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$", "i"))
        .min(9).max(14).required(),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .min(6).max(256),
    url: Joi.string().pattern(new RegExp("/(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})/", "i")).allow(null, ''),
    alt: Joi.string().min(2).max(256).allow(null, ''),
    state: Joi.string().min(2).max(256).allow(null, ''),
    country: Joi.string().min(2).max(256).required(),
    city: Joi.string().min(2).max(256).required(),
    street: Joi.string().min(2).max(256).required(),

});

const CreateCarValidation = (userInput) => {
    validation(createCarSchema, userInput);
    console.log('userInput = ', userInput);
}

export default CreateCarValidation;
