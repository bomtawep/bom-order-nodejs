"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conPool = require("../../database");
const getUserPool = (request, response) => {
    const { id } = request.params;
    if (id == null || id == "") {
        response.status(503).send(`Please put id in your request to get result.`);
    }
    else {
        conPool.query('SELECT * FROM accounts where id = ($1)', [id], (error, results) => {
            if (error) {
                throw error;
            }
            else {
                console.log(request);
                response.status(200).json(results.rows);
            }
        });
    }
};
module.exports = {
    getUserPool
};
