"use strict";
const dbConn = require('./conn');
const createUser = (request, response) => {
    const { name, email } = request.body;
    dbConn.connPool.query('INSERT INTO users (userName, passWord) VALUES ($1, $2)', [name, email], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).send(`User added with ID: ${results.insertId}`);
    });
};
module.exports = {
    createUser,
};
