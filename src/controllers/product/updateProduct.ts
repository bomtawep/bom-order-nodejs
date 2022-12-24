import conPool = require('../../database')

const updateProductPool = (request: any, response: any) => {
    const { type_id, img_id, name, price, detail } = request.body
    const { id } = request.params
    const sysDate = new Date();
    if(detail == null || detail == ""){
        response.status(503).send(`Please put name of type in your request.`)
    } else {
        conPool.query('UPDATE bomorder.product SET type_id = $1, img_id =  $2, name = $3, price = $4, detail = $5, updated = $6 where id = $7',
            [type_id, img_id, name, price, detail, sysDate, id], (error: any, results: any) => {
                if (error) { 
                    throw error
                }
                response.status(201).send('Product are updated')
        })
    }
    
}
module.exports = {
    updateProductPool
}