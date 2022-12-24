"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conPool = require("../../database");
const updateTablePool = (request, response) => {
    const { id } = request.params;
    const { name } = request.body;
    const sysDate = new Date();
    if (id == null || id == "") {
        response.status(503).send(`Please put id in your request to update id: $id .`);
    }
    else {
        conPool.query('UPDATE bomorder.table SET name = ($2), updated = ($3) where id = ($1)', [id, name, sysDate], (error, results) => {
            if (error) {
                throw error;
            }
            else {
                response.status(200).send("Table are updated.");
            }
        });
    }
};
module.exports = {
    updateTablePool
};
