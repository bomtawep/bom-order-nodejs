"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conPool = require("../../database");
const createOrderItemPool = (request, response) => {
    const { order_id, item_num } = request.body;
    const sysDate = new Date();
    if (order_id == null || order_id == "" || item_num == null || item_num == "") {
        response.status(503).send(`Please put all data in your request.`);
    }
    else {
        conPool.query('INSERT INTO bomorder.order_item (order_id, item_num, created, updated) VALUES ($1, $2, $3, $3)', [order_id, item_num, sysDate], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(201).send(`Order item are created`);
        });
    }
};
module.exports = {
    createOrderItemPool
};
