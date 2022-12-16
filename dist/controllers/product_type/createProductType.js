"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conPool = require("../../database");
const createProductTypePool = (request, response) => {
    const { name } = request.body;
    if (name == null || name == "") {
        response.status(503).send(`Please put name of type in your request.`);
    }
    else {
        conPool.query('INSERT INTO bomorder.product_type (name, created, updated) VALUES ($1, SYSDATE, SYSDATE)', [name], (error, results) => {
            if (error) {
                throw error;
            }
            console.log(results.rows);
            response.status(201).send(`User added with ID: ${results.insertId}`);
        });
    }
};
module.exports = {
    createProductTypePool
};
