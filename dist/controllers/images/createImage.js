"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conPool = require("../../database");
const createImagePool = (request, response) => {
    const { filename, filepath, mimetype } = request.body;
    const sysDate = new Date();
    if (filepath == null || filepath == "") {
        response.status(503).send(`Please put name of type in your request.`);
    }
    else {
        conPool.query('INSERT INTO bomorder.image_files (filename, filepath, mimetype, created, updated) ;VALUES ($1, $2, $3, $4, $4)', [filename, filepath, mimetype, sysDate], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(201);
        });
    }
};
module.exports = {
    createImagePool
};
