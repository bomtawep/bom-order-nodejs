import conPool = require('../../database')

const createOrderPool = (request: any, response: any) => {
    const { name, count } = request.body
    if((name == null || name == "") && (count == null || count == "")){
        response.status(503).send(`Please put Username and Password in your request.`)
    } else if(name == null || name == ""){
        response.status(503).send(`Please put Username in your request.`)
    } else if(count == null || count == ""){
        response.status(503).send(`Please put Password in your request.`)
    } else {
        conPool.query('INSERT INTO privilege (username, count) VALUES ($1, $2)', [name, count], (error: any, results: any) => {
            if (error) {
                throw error
            }
            console.log(results.rows)
            response.status(201).send(`User added with ID: ${results.insertId}`)
        })
    }
    
}
module.exports = {
    createOrderPool
}