import conPool = require('../../database')

const updateEmpImagePool = (request: any, response: any) => {
    const { filename, originalname, mimetype, size, path } = request.file
    const { id } = request.params
    const sysDate = new Date();
    if(path == null || path == ""){
        response.status(503).send(`Please put name of type in your request.`)
    } else {
        conPool.query('UPDATE bomorder.emp_image SET filename = $1, originalname =  $2, filepath = $3, mimetype = $4, size = $5, updated = $6 where id = $7',
            [filename, originalname, path, mimetype, size, sysDate, id], (error: any, results: any) => {
                if (error) { 
                    throw error
                }
                console.log(request)
                response.status(201).send(request.file)
        })
    }
    
}
module.exports = {
    updateEmpImagePool
}