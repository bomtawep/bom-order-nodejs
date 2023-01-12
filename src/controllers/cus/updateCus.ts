import conPool = require('../../database')

const updateCusPool = (request: any, response: any) => {
    const { id } = request.params
    const { pri_id, acc_id, fname, lname, gender, birthdate, regisdate } = request.body
    const sysDate = new Date();
    if(id == null || id == "") {
        response.status(503).send(`Please put id in your request to update id: $id .`)
    } else {
        conPool.query('UPDATE bomorder.customer SET pri_id = ($1), acc_id = ($2), fname = ($3), lname = ($4), gender = ($5), birthdate = ($6), regisdate = ($7), updated = ($8) where id = ($9)', 
        [pri_id, acc_id, fname, lname, gender, birthdate, regisdate, sysDate, id], (error: any, results: any) => {
            if (error) {
                throw error
            } else {
                response.status(200).send("Customer are updated")
            }
        })
    }
    
}
module.exports = {
    updateCusPool
}