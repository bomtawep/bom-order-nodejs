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
            p_id: value.p_id,
            emp_img_id: value.emp_img_id,
            fname: value.fname,
            lname: value.lname,
            gender: value.gender,
            birthdate: value.birthdate,
            regisdate: value.regisdate,
            created: value.created.toISOString().replace(/T/, ' ').replace(/\..+/, ''),
            updated: value.updated.toISOString().replace(/T/, ' ').replace(/\..+/, '')
        });
    });
    return { data: rawDataResp };
};
const getEmpsPool = (res) => {
    database_1.default.query('SELECT * FROM bomorder.employee ORDER BY id ASC', (error, results) => {
        if (error)
            throw error;
        res.status(200).json(rawResp(results.rows));
    });
};
module.exports = {
    getEmpsPool
};
