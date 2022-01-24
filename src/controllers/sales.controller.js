const saleModels = require('../models/sales.model.js')
module.exports = {
    async create (req, res) {
        const {status, data} = await saleModels.create(req)
        console.log(data)
        return res.status(status).send(data)

    },

    async get (req, res) {
        const {status, data} = await saleModels.get(req.query)
        return res.status(status).send(data)

    }, 

    async getId (req, res) {
        const {status, data} = await saleModels.getId(req.params.id)
        return res.status(status).send(data)

    },
    async updade (req, res) {
        const {status, data} = await saleModels.updade(req)
        return res.status(status).send(data)

    },
    async delete (req, res) {
        const {status, data} = await saleModels.delete(req)
        return res.status(status).send(data)

    }
}