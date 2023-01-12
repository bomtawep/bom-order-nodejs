"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conPool = require("../../database");
const createUserPool = (request, response) => {
    const { username, password } = request.body;
    const sysDate = new Date();
    if ((username == null || username == "") && (password == null || password == "")) {
        response.status(503).send(`Please put Username and Password in your request.`);
    }
    else if (username == null || username == "") {
        response.status(503).send(`Please put Username in your request.`);
    }
    else if (password == null || password == "") {
        response.status(503).send(`Please put Password in your request.`);
    }
    else {
        conPool.query('INSERT INTO bomorder.accounts (username, password, created, updated) VALUES ($1, $2, $3, $3)', [username, password, sysDate], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(201).send(`User: ${username} are created`);
        });
    }
};
module.exports = {
    createUserPool
};
