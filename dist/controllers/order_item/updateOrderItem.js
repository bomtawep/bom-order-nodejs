"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conPool = require("../../database");
const updateOrderItemPool = (request, response) => {
    const { order_id, item_num } = request.body;
    const { id } = request.params;
    const sysDate = new Date();
    if (order_id == null || order_id == "" || item_num == null || item_num == "") {
        response.status(503).send(`Please put all data in your request.`);
    }
    else {
        conPool.query('UPDATE bomorder.order_item SET order_id = $1, item_num =  $2, updated = $3 where id = $4', [order_id, item_num, sysDate, id], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(201).send('Order item are updated');
        });
    }
};
module.exports = {
    updateOrderItemPool
};
