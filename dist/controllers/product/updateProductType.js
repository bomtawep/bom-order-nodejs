"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conPool = require("../../database");
const updateProductPool = (request, response) => {
    const { id } = request.params;
    const { username, password } = request.body;
    if (id == null || id == "") {
        response.status(503).send(`Please put id in your request to update id: $id .`);
    }
    else {
        conPool.query('UPDATE accounts SET username = ($1), password = ($2) where id = ($3)', [username, password, id], (error, results) => {
            if (error) {
                throw error;
            }
            else {
                response.status(200).send("Updated account");
            }
        });
    }
};
module.exports = {
    updateProductPool
};
