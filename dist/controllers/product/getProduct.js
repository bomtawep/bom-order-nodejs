"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conPool = require("../../database");
const getProductPool = (request, response) => {
    const { id } = request.params;
    const rawResp = (rawData) => {
        const { id, type_id, img_id, name, price, detail, created, updated } = rawData;
        const rawDataResp = {
            id: id,
            type_id: type_id,
            img_id: img_id,
            name: name,
            price: price,
            detail: detail,
            created: created.toISOString().replace(/T/, ' ').replace(/\..+/, ''),
            updated: updated.toISOString().replace(/T/, ' ').replace(/\..+/, '')
        };
        return { data: rawDataResp };
    };
    if (id == null || id == "") {
        response.status(503).send(`Please put id in your request to get result.`);
    }
    else {
        conPool.query('SELECT * FROM bomorder.product where id = ($1)', [id], (error, results) => {
            if (error) {
                throw error;
            }
            else {
                console.log(results.rows[0]);
                response.status(200).json(rawResp(results.rows[0]));
            }
        });
    }
};
module.exports = {
    getProductPool
};
