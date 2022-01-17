const express = require("express");
const router = express.Router()

router.use('/products', require('./product.router') )
router.use('/sales', require('./sales.router.js') )

module.exports = router