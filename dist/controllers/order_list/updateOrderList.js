"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conPool = require("../../database");
const updateOrderListPool = (request, response) => {
    const { id } = request.params;
    const { p_id } = request.body;
    const sysDate = new Date();
    if (id == null || id == "") {
        response.status(503).send(`Please put product id in your request to update id: $id .`);
    }
    else {
        conPool.query('UPDATE bomorder.order_list SET p_id = ($2), updated = ($3) where id = ($1)', [id, p_id, sysDate], (error, results) => {
            if (error) {
                throw error;
            }
            else {
                response.status(200).send("Order list are updated");
            }
        });
    }
};
module.exports = {
    updateOrderListPool
};
