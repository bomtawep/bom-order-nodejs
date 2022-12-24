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
            filename: value.filename,
            originalname: value.originalname,
            filepath: value.filepath,
            mimetype: value.mimetype,
            size: value.size,
            created: value.created.toISOString().replace(/T/, ' ').replace(/\..+/, ''),
            updated: value.updated.toISOString().replace(/T/, ' ').replace(/\..+/, '')
        });
    });
    return { data: rawDataResp };
};
const getEmpImagesPool = (res) => {
    database_1.default.query('SELECT * FROM bomorder.emp_image ORDER BY id ASC', (error, results) => {
        if (error)
            throw error;
        res.status(200).json(rawResp(results.rows));
    });
};
module.exports = {
    getEmpImagesPool
};
