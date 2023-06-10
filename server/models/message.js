const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const Joi = require("joi")
const passwordComplexity = require("joi-password-complexity")
const messageSchema = new mongoose.Schema({
    userID: { type: mongoose.Mongoose.Schema.Types.ObjectID, required: true },
    publicationDate: { type: Date, required: true },
    content: { type: String, required: true },
})

messageSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    })
    return token
}

const Message = mongoose.model("Message", messageSchema)

const validate = (data) => {
    const schema = Joi.object({
      userID: Joi.string().required(),
      publicationDate: Joi.date().required(),
      content: Joi.string().required().label("Message"),
    });
    return schema.validate(data);
  };
  

module.exports = { Message, validate }
    