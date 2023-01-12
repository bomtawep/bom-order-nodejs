"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
const rawResp = (rawData) => {
    let rawDataResp = [];
    rawData.forEach(function (value) {
        rawDataResp.push({
            id: value.id,
            type_id: value.type_id,
            img_id: value.img_id,
            name: value.name,
            price: value.price,
            detail: value.detail,
            created: value.created.toISOString().replace(/T/, ' ').replace(/\..+/, ''),
            updated: value.updated.toISOString().replace(/T/, ' ').replace(/\..+/, '')
        });
    });
    return { data: rawDataResp };
};
const getProductsPool = (res) => {
    database_1.default.query('SELECT * FROM bomorder.product ORDER BY id ASC', (error, results) => {
        if (error)
            throw error;
        res.status(200).json(rawResp(results.rows));
    });
};
module.exports = {
    getProductsPool
};
