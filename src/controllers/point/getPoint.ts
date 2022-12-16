import conPool = require('../../database')

const getPointPool = (request: any, response: any) => {
    const { id } = request.params
    if(id == null || id == "") {
        response.status(503).send(`Please put id in your request to get result.`)
    } else {
        conPool.query('SELECT * FROM accounts where id = ($1)', [id], (error: any, results: any) => {
            if (error) {
                throw error
            } else {
                console.log(request)
                response.status(200).json(results.rows)
            }
        })
    }
    
}
module.exports = {
    getPointPool
}