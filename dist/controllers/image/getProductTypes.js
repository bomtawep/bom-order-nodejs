"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
const rawResp = (rawData) => {
    const { id, name, created, updated } = rawData;
    let rawDataResp = [];
    rawData.forEach(function (value) {
        rawDataResp.push({
            id: value.id,
            name: value.name,
            created: value.created.toISOString().replace(/T/, ' ').replace(/\..+/, ''),
            updated: value.updated.toISOString().replace(/T/, ' ').replace(/\..+/, '')
        });
    });
    return { data: rawDataResp };
};
const getProductTypesPool = (res) => {
    database_1.default.query('SELECT * FROM bomorder.product_type ORDER BY id ASC', (error, results) => {
        if (error)
            throw error;
        console.log(results.rows.length);
        res.status(200).json(rawResp(results.rows));
    });
};
module.exports = {
    getProductTypesPool
};
