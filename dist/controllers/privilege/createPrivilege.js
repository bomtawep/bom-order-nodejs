"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conPool = require("../../database");
const createPrivilegePool = (request, response) => {
    const { name, pri_num } = request.body;
    const sysDate = new Date();
    if ((name == null || name == "") && (pri_num == null || pri_num == "")) {
        response.status(503).send(`Please put name and pri_num in your request.`);
    }
    else if (name == null || name == "") {
        response.status(503).send(`Please put name in your request.`);
    }
    else if (pri_num == null || pri_num == "") {
        response.status(503).send(`Please put point_num in your request.`);
    }
    else {
        conPool.query('INSERT INTO bomorder.privilege (name, pri_num, created, updated) VALUES ($1, $2, $3, $3)', [name, pri_num, sysDate], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(201).send(`Privilege: ${name} has created.`);
        });
    }
};
module.exports = {
    createPrivilegePool
};
