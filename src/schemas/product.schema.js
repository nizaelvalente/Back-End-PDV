const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    codeBar: { type: Number, required: true, unique: true},
    name: { type: String, required: true },
    purchasePrice: { type: Number, required: true },
    salePrice: { type: Number, required: true },
    stock: { type: Number, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true },
    provider: { type: String, required: true },
    deleted: {type: Boolean, default: false}
},
    {
        timestamps: true
    }
)

mongoose.model('Product', ProductSchema)
