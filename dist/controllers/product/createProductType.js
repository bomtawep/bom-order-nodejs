"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conPool = require("../../database");
const createProductPool = (request, response) => {
    const { type_id, name, price, detail, image } = request.body;
    const sysDate = new Date();
    if (name == null || name == "") {
        response.status(503).send(`Please put name of type in your request.`);
    }
    else {
        conPool.query('INSERT INTO bomorder.product (type_id, name, price, detail, image, created, updated) ;VALUES ($1, $2, $3, $4, $6, $6)', [type_id, name, price, detail, image, sysDate], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(201);
        });
    }
};
module.exports = {
    createProductPool
};
