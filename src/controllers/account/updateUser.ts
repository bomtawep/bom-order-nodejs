import conPool = require('../../database')

const updateUserPool = (request: any, response: any) => {
    const { id } = request.params
    const { username, password } = request.body
    if(id == null || id == "") {
        response.status(503).send(`Please put id in your request to update id: $id .`)
    } else {
        conPool.query('UPDATE bomorder.accounts SET username = ($1), password = ($2) where id = ($3)', [username, password, id], (error: any, results: any) => {
            if (error) {
                throw error
            } else {
                response.status(200).send("Updated account")
            }
        })
    }
    
}
module.exports = {
    updateUserPool
}