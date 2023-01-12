"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conPool = require("../../database");
const createOrderPool = (request, response) => {
    const { p_id, emp_id, cus_id, table_id } = request.body;
    const sysDate = new Date();
    if (p_id == null || p_id == "" || emp_id == null || emp_id == "" || cus_id == null || cus_id == "" || table_id == null || table_id == "") {
        response.status(503).send(`Please put all data in your request.`);
    }
    else {
        conPool.query('INSERT INTO bomorder.order (p_id, emp_id, cus_id, table_id, created, updated) VALUES ($1, $2, $3, $4, $5, $5)', [p_id, emp_id, cus_id, table_id, sysDate], (error, results) => {
            if (error) {
                throw error;
            }
            console.log(results.rows);
            response.status(201).send(`Order are created`);
        });
    }
};
module.exports = {
    createOrderPool
};
