"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conPool = require("../../database");
const getUserPool = (request, response) => {
    const { id } = request.params;
    const rawResp = (rawData) => {
        const { id, username, password, created, updated } = rawData;
        const rawDataResp = {
            id: id,
            username: username,
            password: password,
            created: created.toISOString().replace(/T/, ' ').replace(/\..+/, ''),
            updated: updated.toISOString().replace(/T/, ' ').replace(/\..+/, '')
        };
        return { data: rawDataResp };
    };
    if (id == null || id == "") {
        response.status(503).send(`Please put id in your request to get result.`);
    }
    else {
        conPool.query('SELECT * FROM bomorder.accounts where id = ($1)', [id], (error, results) => {
            if (error) {
                throw error;
            }
            else {
                response.status(200).json(rawResp(results.rows[0]));
            }
        });
    }
};
module.exports = {
    getUserPool
};
