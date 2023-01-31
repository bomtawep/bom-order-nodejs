import conPool = require('../../database')

const createProductTypePool = (request: any, response: any) => {
    const { name, is_active } = request.body
    const sysDate = new Date();
    if(name == null || name == ""){
        response.status(503).send(`Please put name of type in your request.`)
    } else {
        conPool.query('INSERT INTO bomorder.product_type (name, is_active, created, updated) VALUES ($1, $2, $3, $3)', 
        [name, is_active, sysDate], (error: any, results: any) => {
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