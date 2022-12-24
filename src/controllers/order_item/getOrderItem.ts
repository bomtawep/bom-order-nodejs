import conPool = require('../../database')

const getOrderItemPool = (request: any, response: any) => {
    const { id } = request.params
    const rawResp = (rawData: any) => {
        const {id, order_id, item_num, created, updated} = rawData
        const rawDataResp = {
            id: id,
            order_id: order_id,
            item_num: item_num,
            created: created.toISOString().replace(/T/, ' ').replace(/\..+/, ''),
            updated: updated.toISOString().replace(/T/, ' ').replace(/\..+/, '')
        }
        return {data: rawDataResp}
    }
    if(id == null || id == "") {
        response.status(503).send(`Please put id in your request to get result.`)
    } else {
        conPool.query('SELECT * FROM bomorder.order_item where id = ($1)', [id], (error: any, results: any) => {
            if (error) {
                throw error
            } else {
                response.status(200).json(rawResp(results.rows[0]))
            }
        })
    }
    
}
module.exports = {
    getOrderItemPool
}