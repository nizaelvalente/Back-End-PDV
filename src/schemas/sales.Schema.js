const mongoose = require('mongoose'), { ObjectId } = mongoose.Types;

const saleSchema = new mongoose.Schema({
    products: {type: Array, required: true},
    seller: { type: String, required: true },
    customer: { type: String},
    typeTransaction: {type: String, required: true},
    totalPay: { type: Number, required: true },
    totalReturn: { type: Number, required: true },
    dateDelivery:{type: Date, required: true},
    typePay: { type: String, enum: ["Dinheiro", "Cartão de crédito", "Cartão de débito", "Pix", "Crediário"], required: true },
    amountReceived: { type: Number, required: true },
    calledOff: { type: Boolean, default: false },
},
    {   
        timestamps: true
    }
)

mongoose.model('Sale', saleSchema)
