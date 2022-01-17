const productModels = require('../models/product.model')
module.exports = {
    async create (req, res) {
        const {status, data} = await productModels.create(req)
        return res.status(status).send(data)

    },

    async get (req, res) {
        const {status, data} = await productModels.get()
        return res.status(status).send(data)

    }, 

    async getCodeBar (req, res) {
        const {status, data} = await productModels.getCodeBar(req.params.codeBar)
        return res.status(status).send(data)

    },
    async delete (req, res) {
        const {status, data} = await productModels.delete(req)
        return res.status(status).send(data)

    }
}