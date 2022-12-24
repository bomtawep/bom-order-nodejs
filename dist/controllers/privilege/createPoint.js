"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conPool = require("../../database");
const createPrivilegePool = (request, response) => {
    const { name, point_num } = request.body;
    const sysDate = new Date();
    if ((name == null || name == "") && (point_num == null || point_num == "")) {
        response.status(503).send(`Please put Username and Password in your request.`);
    }
    else if (name == null || name == "") {
        response.status(503).send(`Please put name in your request.`);
    }
    else if (point_num == null || point_num == "") {
        response.status(503).send(`Please put point_num in your request.`);
    }
    else {
        conPool.query('INSERT INTO bomorder.privilege (name, point_num, created, updated) VALUES ($1, $2, $3, $3)', [name, point_num, sysDate], (error, results) => {
            if (error) {
                throw error;
            }
            console.log(results.rows);
            response.status(201).send(`Privilege: ${name} has created.`);
        });
    }
};
module.exports = {
    createPrivilegePool
};
