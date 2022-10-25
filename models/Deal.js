const { Schema, model, Types } = require(`mongoose`)

const URL_PATTERN = /https?:\/\/./i;

const dealSchema = new Schema({
    name: {type: String, minglength: [6 , `Name must be at least 6 characters long`]},
    year: {type: Number, min:[1850, `Must be newer than 1850`], max: [2021, `2021 is the maximum accepted year`]},
    city: {type: String, minlength : [4, `City name must be longer`]},
    imageUrl: {type: String, validate: {
        validator: (value) => {URL_PATTERN.test },
        message: `Invalid URL`
    }},
    description: {type: String, maxlength: [60, `Description is too long`]},
    pieces: {type: Number, min:0, max: [10, `10 is the maximum available pieces`] },
    type: {type: String, enum:[`Apartment`, `Villa`, `House`]},
    renters: {type: [Types.ObjectId], ref: `User`, default: []},
    owner: {type: Types.ObjectId, ref: `User`}
})


dealSchema.index({name: 1}, {
    collation: {
        locale: `en`,
        strength: 2
    }
})

const Deal = model(`Deal`, dealSchema)

module.exports = {Deal}