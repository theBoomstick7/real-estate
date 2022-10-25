const { Schema, model} = require(`mongoose`)

const fullNameValidator = /^([a-zA-Z]+)\s([a-zA-Z]+)$/i
//TODO add User properties and validation from assignment
const userSchema = new Schema ({
    username: {type: String, required: true, unique: true, minlength: [5,`Username must be at least 5 characters long`]},
    hashedPassword: { type: String, required: true, minlength: [4, `Password must be longer`]},
    fullName: {type: String, required: true, validate: {
        validator: (value) => (fullNameValidator.test(value)),
        message: `Invalid full name`
    } }
})

userSchema.index({username:1}, {
    collation: {
        locale: `en`,
        strength: 2
    }
})
const User = model(`User`,userSchema)

module.exports= User