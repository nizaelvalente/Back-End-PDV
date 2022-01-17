const productController =require('../controllers/product.controller')
const express = require("express");
const router = express.Router()

router.post('/', productController.create )
router.get('/', productController.get )
router.get('/:codeBar', productController.getCodeBar )
router.delete('/:id', productController.delete )

module.exports = router