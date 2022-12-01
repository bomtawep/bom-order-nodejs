"use strict";
const dbConn = require('../database');
const createUser = (request, response) => {
    const { username, password } = request.body;
    dbConn.connPoolModule.query('INSERT INTO accounts (username, password) VALUES ($1, $2)', [username, password], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).send(`User added with ID: ${results.insertId}`);
    });
};
module.exports = {
    createUser,
};
