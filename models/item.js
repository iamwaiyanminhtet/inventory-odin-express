const { default: mongoose, SchemaType } = require("mongoose");

const {Schema} = mongoose;

const itemsSchema = Schema({
    title : String,
    description : String,
    category : {
        type : Schema.Types.ObjectId,
        ref : 'Category'
    },
    price : Number,
    number_in_stock : Number
})

const Item = new mongoose.model('Item', itemsSchema)
module.exports = Item;