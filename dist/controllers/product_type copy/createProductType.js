"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conPool = require("../../database");
const createProductTypePool = (request, response) => {
    const { username, password } = request.body;
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
        conPool.query('INSERT INTO bomorder.privilege (username, password) VALUES ($1, $2)', [username, password], (error, results) => {
            if (error) {
                throw error;
            }
            console.log(results.rows);
            response.status(201).send(`User added with ID: ${results.insertId}`);
        });
    }
};
module.exports = {
    createProductTypePool
};
