import conPool = require('../../database')

const getCusPool = (request: any, response: any) => {
    const { id } = request.params
    const rawResp = (rawData: any) => {
        const {id, pri_id, acc_id, fname, lname, gender, birthdate, regisdate, created, updated} = rawData
        const rawDataResp = {
            id: id,
            pri_id: pri_id,
            acc_id: acc_id,
            fname: fname,
            lname: lname,
            gender: gender,
            birthdate: birthdate,
            regisdate: regisdate,
            created: created.toISOString().replace(/T/, ' ').replace(/\..+/, ''),
            updated: updated.toISOString().replace(/T/, ' ').replace(/\..+/, '')
        }
        return {data: rawDataResp}
    }
    if(id == null || id == "") {
        response.status(503).send(`Please put id in your request to get result.`)
    } else {
        conPool.query('SELECT * FROM bomorder.customer where id = ($1)', [id], (error: any, results: any) => {
            if (error) {
                throw error
            } else {
                response.status(200).json(rawResp(results.rows[0]))
            }
        })
    }
    
}
module.exports = {
    getCusPool
}