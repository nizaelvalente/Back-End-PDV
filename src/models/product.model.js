const mongoose = require('mongoose')
const productSchema = mongoose.model('Product')
module.exports = {
    async create({ body }) {
        try {
            const data = await productSchema.create(body)
            return { status: 200, data }
        } catch (error) {
            return { status: 400, data: error }
        }

    },
    async get() {
        try {
            const data = await productSchema.find({ deleted: false })
            return { status: 200, data }
        } catch (error) {
            return { status: 400, data: { message: 'Nenhum produto encontrado' } }
        }
    },
    async getCodeBar(codeBar) {
        try {
            const data = await productSchema.findOne({ codeBar: codeBar })
            if (data) {
                return { status: 200, data }
            }
            return { status: 400, data: { message: 'Nenhum produto encontrado.' } }

        } catch (error) {
            return { status: 400, data: { message: 'Erro ao acessar o banco de dados.' } }
        }
    },
    async delete({ user, params }) {
        try {
            await productSchema.findByIdAndUpdate(params.id, { deleted: true })
            return { status: 200, data: { message: 'Nenhum produto encontrado' } }
        } catch (error) {
            return { status: 400, data: 'Nenhum produto encontrado' }
        }
    }
}           