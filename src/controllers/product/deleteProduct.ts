import conPool = require('../../database')

const deleteProductPool = (request: any, response: any) => {
    const { id } = request.body
    if(id == null || id == "") {
        response.status(503).send(`Please put id in your request to delete.`)
    } else {
        conPool.query('DELETE FROM bomorder.product where id = ($1)', [id], (error: any, results: any) => {
            if (error) {
                throw error
            }
            console.log(request)
            response.status(201).send(`Product deleted with ID: ${id}`)
        })
    }
    
}
module.exports = {
    deleteProductPool
}