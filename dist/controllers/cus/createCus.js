"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conPool = require("../../database");
const createCusPool = (request, response) => {
    const { pri_id, acc_id, fname, lname, gender, birthdate, regisdate } = request.body;
    const sysDate = new Date();
    if (pri_id == null || pri_id == "" || acc_id == null || acc_id == "" || fname == null || fname == "" || lname == null || lname == "") {
        response.status(503).send(`Please put all data in your request.`);
    }
    else {
        conPool.query('INSERT INTO bomorder.customer (pri_id, acc_id, fname, lname, gender, birthdate, regisdate, created, updated) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $8)', [pri_id, acc_id, fname, lname, gender, birthdate, regisdate, sysDate], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(201).send(`Order are created`);
        });
    }
};
module.exports = {
    createCusPool
};
