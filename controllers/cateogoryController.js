const asyncHandler = require('express-async-handler')
const Category = require('../models/category');
const { ObjectId } = require('mongodb');

const index = asyncHandler(async (req, res) => {
    const categories = await Category.find().exec()
    res.render('index', {categories})
})
const createPage = (req, res) => {
    res.render('new-category')
}

const create = asyncHandler(async (req, res) => {
    await Category.create(req.body)
    res.redirect('/');
})

const updatePage = asyncHandler(async (req, res) => {
    const category = await Category.findById(new ObjectId(req.params.id));
    res.render('update-category', {category})
})

const update = asyncHandler(async (req, res) => {
    await Category.updateOne({_id : new ObjectId(req.params.id)}, {$set : req.body})
    res.redirect('/');
})

const deleteOne = asyncHandler(async (req,res) => {
    if(ObjectId.isValid(req.params.id)) {
        await Category.deleteOne({_id : new ObjectId(req.params.id)})
    }
    res.redirect('/')
})

module.exports = {
    index,
    createPage,
    create,
    deleteOne,
    updatePage,
    update
}