import conPool = require('../../database')

const getProductTypePool = (request: any, response: any) => {
    const { id } = request.params
    const rawResp = (rawData: any) => {
        const {id, name, is_active, created, updated} = rawData
        const rawDataResp = {
            id: id,
            name: name,
            is_active: is_active,
            created: created.toISOString().replace(/T/, ' ').replace(/\..+/, ''),
            updated: updated.toISOString().replace(/T/, ' ').replace(/\..+/, '')
        }
        return {data: rawDataResp}
    }
    if(id == null || id == "") {
        response.status(503).send(`Please put id in your request to get result.`)
    } else {
        conPool.query('SELECT * FROM bomorder.product_type where id = ($1)', [id], (error: any, results: any) => {
            if (error) {
                throw error
            } else {
                response.status(200).json(rawResp(results.rows[0]))
            }
        })
    }
    
}
module.exports = {
    getProductTypePool
}