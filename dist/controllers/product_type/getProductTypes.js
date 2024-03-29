"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const rawResp = (rawData) => {
    let rawDataResp = [];
    rawData.forEach(function (value) {
        rawDataResp.push({
            id: value.id,
            name: value.name,
            is_active: value.is_active,
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
        res
            .status(200)
            .json(rawResp(results.rows));
    });
};
module.exports = {
    getProductTypesPool
};
