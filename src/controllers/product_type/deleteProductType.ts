import conPool = require('../../database')

const deleteProductTypePool = (request: any, response: any) => {
    const { id } = request.body
    if(id == null || id == "") {
        response.status(503).send(`Please put id in your request to delete.`)
    } else {
        let reqBody: string = ''
        id.forEach((element: any) => {
            reqBody = reqBody + element + ','
        });
        conPool.query(`DELETE FROM bomorder.product_type where id in (${reqBody.slice(0, -1)})`, (error: any, results: any) => {
            if (error) {
                throw error
            }
            response.status(201).send(`Product type are deleted`)
        })
    }
    
}
module.exports = {
    deleteProductTypePool
}