import conPool = require('../../database')

const createProductPool = (request: any, response: any) => {
    const { type_id, img_id, name, price, detail } = request.body
    const sysDate = new Date();
    if(detail == null || detail == ""){
        response.status(503).send(`Please put name of type in your request.`)
    } else {
        conPool.query('INSERT INTO bomorder.product (type_id, img_id, name, price, detail, created, updated) VALUES ($1, $2, $3, $4, $5, $6, $6)',
            [type_id, img_id, name, price, detail, sysDate], (error: any, results: any) => {
                if (error) {
                    throw error
                }
                response.status(201).send('Product are created')
        })
    }
    
}
module.exports = {
    createProductPool
}