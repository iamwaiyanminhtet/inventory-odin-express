const { default: mongoose, SchemaType } = require("mongoose");

const {Schema} = mongoose;

const categorySchema = Schema({
    title : String,
    description : String
})

const Category = new mongoose.model('Category', categorySchema)
module.exports = Category;