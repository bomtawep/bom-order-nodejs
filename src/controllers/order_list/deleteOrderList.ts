import conPool = require('../../database')

const deleteOrderListPool = (request: any, response: any) => {
    const { id } = request.body
    if(id == null || id == "") {
        response.status(503).send(`Please put id in your request to delete.`)
    } else {
        conPool.query('DELETE FROM bomorder.order_list where id = ($1)', [id], (error: any, results: any) => {
            if (error) {
                throw error
            }
            response.status(201).send(`Product type are deleted`)
        })
    }
    
}
module.exports = {
    deleteOrderListPool
}