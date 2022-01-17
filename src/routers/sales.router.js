const saleController =require('../controllers/sales.controller.js')
const express = require("express");
const router = express.Router()

router.post('/', saleController.create )
router.get('/', saleController.get )
router.get('/:id', saleController.getId )
router.put('/:id', saleController.updade )
router.delete('/:id', saleController.delete )

module.exports = router