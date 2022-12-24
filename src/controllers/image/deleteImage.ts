import conPool = require('../../database')

const deleteImagePool = (request: any, response: any) => {
    const { id } = request.body
    if(id == null || id == "") {
        response.status(503).send(`Please put id in your request to delete.`)
    } else {
        conPool.query('DELETE FROM bomorder.image where id = ($1)', [id], (error: any, results: any) => {
            if (error) {
                throw error
            }
            response.status(201).send(`Image are deleted`)
        })
    }
    
}
module.exports = {
    deleteImagePool
}