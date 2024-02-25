const asyncHandler = require('express-async-handler')
const Category = require('../models/category');
const Item = require('../models/item');
const { ObjectId } = require('mongodb');

const itemsByCategory = asyncHandler( async (req, res) => {
    const items = await Item.find({category : new ObjectId(req.params.categoryId)}).populate('category').exec();

    res.render('items-by-category', {items})
})
const createPage = asyncHandler(async (req, res) => {
    const categories = await Category.find().exec();
    res.render('new-item', {categories})
})

const create = asyncHandler(async (req, res) => {
    await Item.create(req.body)
    res.redirect('/');
})

const updatePage = asyncHandler(async (req, res) => {
    const categories = await Category.find().exec();
    const item = await Item.findById(new ObjectId(req.params.id));
    res.render('update-item', {categories, item})
})

const update = asyncHandler(async (req, res) => {
    let curItem = await Item.findById(new ObjectId(req.params.id))
    const myProp = 'category';
    if(!(myProp in req.body)) {
        req.body.category = curItem.category
    } {
        req.body.category = new ObjectId(req.body.category)
    }
    await Item.updateOne({_id : new ObjectId(req.params.id)}, {$set : req.body})
    res.redirect('/');
})

const deleteOne = asyncHandler(async (req,res) => {
    if(ObjectId.isValid(req.params.id)) {
        await Item.deleteOne({_id : new ObjectId(req.params.id)})
    }
    res.redirect('/')
})

module.exports = {
    itemsByCategory,
    createPage,
    create,
    deleteOne,
    updatePage,
    update
}