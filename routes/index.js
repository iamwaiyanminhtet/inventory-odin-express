const express = require('express');
const router = express.Router();
const cateogoryController = require('../controllers/cateogoryController');
const itemController = require('../controllers/itemController');

/* GET home page. */
router.get('/', cateogoryController.index);

router.get('/category/create', cateogoryController.createPage)
router.post('/category/create', cateogoryController.create)
router.get('/category/:id/update', cateogoryController.updatePage)
router.post('/category/:id/update', cateogoryController.update)
router.get('/category/:id/delete', cateogoryController.deleteOne)

router.get('/product/:categoryId', itemController.itemsByCategory)
router.get('/product/:category/:productId')
router.get('/prodcut/create', itemController.createPage)
router.post('/product/create', itemController.create)
router.get('/product/:id/updatePage', itemController.updatePage)
router.post('/product/:id/update', itemController.update)
router.get('/product/:id/delete', itemController.deleteOne)

module.exports = router;
