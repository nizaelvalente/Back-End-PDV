const mongoose = require('mongoose')
const saleSchema = mongoose.model('Sale')
module.exports = {
    async create({ body }) {
        try {
            
            const data = await saleSchema.create(body) 
            console.log(data)
            return { status: 200, data }

        } catch (error) {
            return { status: 400, data: error }
        }

    },
    async get(filter) {
        try {
            const data = await saleSchema.find(filter)
            return { status: 200, data }
        } catch (error) {
            return { status: 400, data: { message: 'Nenhum produto encontrado' } }
        }
    },
    async getId(id) {
        try {
            const data = await saleSchema.findOne({ code_bar: id }).populate('products.product')
            return { status: 200, data }
        } catch (error) {
            return { status: 400, data: { message: 'Nenhum produto encontrado' } }
        }
    },
    async updade({ user, params, body }) {
        try {
            await saleSchema.findOneAndUpdate(params.id, body)
            return { status: 200, data: { message: 'Venda cancelada com sucesso.' } }
        } catch (error) {
            return { status: 400, data: { message: 'Venda não encontrada' } }
        }
    },
    async delete({ user, params }) {
        try {
            await saleSchema.findOneAndUpdate(params.id, { calledOff: true })
            return { status: 200, data: { message: 'Venda cancelada com sucesso.' } }
        } catch (error) {
            return { status: 400, data: { message: 'Venda não encontrada' } }
        }
    }
}           