import conPool = require('../../database')

const updatePrivilegePool = (request: any, response: any) => {
    const { id } = request.params
    const { name, pri_num } = request.body
    if(id == null || id == "") {
        response.status(503).send(`Please put id in your request to update id: $id .`)
    } else {
        conPool.query('UPDATE bomorder.privilege SET name = ($1), pri_num = ($2) where id = ($3)', [name, pri_num, id], (error: any, results: any) => {
            if (error) {
                throw error
            } else {
                response.status(200).send("Point are updated")
            }
        })
    }
    
}
module.exports = {
    updatePrivilegePool
}