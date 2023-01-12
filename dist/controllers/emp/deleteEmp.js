"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conPool = require("../../database");
const deleteEmpPool = (request, response) => {
    const { id } = request.body;
    if (id == null || id == "") {
        response.status(503).send(`Please put id in your request to delete.`);
    }
    else {
        conPool.query('DELETE FROM bomorder.employee where id = ($1)', [id], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(201).send(`Employee are deleted`);
        });
    }
};
module.exports = {
    deleteEmpPool
};
