import conPool = require('../../database')

const createImagePool = (request: any, response: any) => {
    const { filename, originalname, mimetype, size, path } = request.file
    const sysDate = new Date();
    if(path == null || path == ""){
        response.status(503).send(`Please put name of type in your request.`)
    } else {
        conPool.query('INSERT INTO bomorder.image (filename, originalname, filepath, mimetype, size, created, updated) VALUES ($1, $2, $3, $4, $5, $6, $6)',
            [filename, originalname, path, mimetype, size, sysDate], (error: any, results: any) => {
                if (error) { 
                    throw error
                }
                response.status(201).send(request.file)
        })
    }
    
}
module.exports = {
    createImagePool
}