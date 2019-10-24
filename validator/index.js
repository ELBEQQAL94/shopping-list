const Joi = require('@hapi/joi');

const validator = (info) => {

    const { username, email, password } = info;

    const schema = Joi.object({
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
    
        password: Joi.string()
            .pattern(/^[a-zA-Z0-9]{3,30}$/),
    
        email: Joi.string()
            .email({ 
                minDomainSegments: 2, 
                tlds: { allow: ['com', 'net'] } })
    });
    
        return schema.validate({ 
            username, 
            password, 
            email
        });
}

module.exports = validator;