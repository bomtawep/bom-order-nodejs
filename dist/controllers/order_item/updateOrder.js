"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conPool = require("../../database");
const updateOrderPool = (request, response) => {
    const { p_id, emp_id, cus_id, table_id } = request.body;
    const { id } = request.params;
    const sysDate = new Date();
    if (p_id == null || p_id == "" || emp_id == null || emp_id == "" || cus_id == null || cus_id == "" || table_id == null || table_id == "") {
        response.status(503).send(`Please put all data in your request.`);
    }
    else {
        conPool.query('UPDATE bomorder.order SET p_id = $1, emp_id =  $2, cus_id = $3, table_id = $4, updated = $5 where id = $6', [p_id, emp_id, cus_id, table_id, sysDate, id], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(201).send('Order are updated');
        });
    }
};
module.exports = {
    updateOrderPool
};
