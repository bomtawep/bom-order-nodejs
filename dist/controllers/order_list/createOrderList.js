"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conPool = require("../../database");
const createOrderListPool = (request, response) => {
    const { p_id } = request.body;
    const sysDate = new Date();
    if (p_id == null || p_id == "") {
        response.status(503).send(`Please put product id in your request.`);
    }
    else {
        conPool.query('INSERT INTO bomorder.order_list (p_id, created, updated) VALUES ($1, $2, $2)', [p_id, sysDate], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(201).send('Created');
        });
    }
};
module.exports = {
    createOrderListPool
};
