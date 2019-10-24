const Joi = require('@hapi/joi');

const validatorSignIn = (info) => {

    const { email, password } = info;

    const schema = Joi.object({
    
        password: Joi.string()
            .pattern(/^[a-zA-Z0-9]{3,30}$/),
    
        email: Joi.string()
            .email({ 
                minDomainSegments: 2, 
                tlds: { allow: ['com', 'net'] } })
    });
    
        return schema.validate({ 
            password, 
            email
        }); 
}

module.exports = validatorSignIn;