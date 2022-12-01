"use strict";
const dbConnGet = require('../database');
const getUsers = (response) => {
    dbConnGet.connect();
    dbConnGet.connPoolModule.query('SELECT * FROM public.accounts ORDER BY id ASC', (error, results) => {
        console.log('After get');
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
        console.log('After get');
    });
};
module.exports = {
    getUsers
};
