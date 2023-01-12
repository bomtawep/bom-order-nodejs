import conPool = require('../../database')

const createEmpPool = (request: any, response: any) => {
    const { p_id, emp_img_id, fname, lname, gender, birthdate, regisdate } = request.body
    const sysDate = new Date();
    if(p_id == null || p_id == "" || emp_img_id == null || emp_img_id == "" || fname == null || fname == "" || lname == null || lname == "") {
        response.status(503).send(`Please put all data in your request.`)
    } else {
        conPool.query('INSERT INTO bomorder.employee (p_id, emp_img_id, fname, lname, gender, birthdate, regisdate, created, updated) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $8)', [p_id, emp_img_id, fname, lname, gender, birthdate, regisdate, sysDate], 
            (error: any, results: any) => {
            if (error) {
                throw error
            }
            response.status(201).send(`Order are created`)
        })
    }
    
}
module.exports = {
    createEmpPool
}