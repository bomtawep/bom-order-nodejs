import conPool = require('../../database')

const createProductTypePool = (request: any, response: any) => {
    const { name } = request.body
    const sysDate = new Date();
    if(name == null || name == ""){
        response.status(503).send(`Please put name of type in your request.`)
    } else {
        conPool.query('INSERT INTO bomorder.product_type (name, created, updated) VALUES ($1, $2, $2)', [name, sysDate], (error: any, results: any) => {
            if (error) {
                throw error
            }
            response.status(201)
            .send('Created')
        })
    }
}
module.exports = {
    createProductTypePool
}