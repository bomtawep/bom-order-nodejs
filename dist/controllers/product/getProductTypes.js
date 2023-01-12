"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
const getProducsPool = (res) => {
    database_1.default.query('SELECT * FROM accounts ORDER BY id ASC', (error, results) => {
        if (error)
            throw error;
        console.log(results);
        res.status(200).json(results.rows);
    });
};
module.exports = {
    getProducsPool
};
