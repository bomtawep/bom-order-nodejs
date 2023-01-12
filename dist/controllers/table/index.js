"use strict";
const getTablesModel = require('./getTables');
const createTableModel = require('./createTable');
const deleteTableModel = require('./deleteTable');
const getTableModel = require('./getTable');
const updateTableModel = require('./updateTable');
const getTables = (res) => {
    getTablesModel.getTablesPool(res);
};
const createTable = (req, res) => {
    createTableModel.createTablePool(req, res);
};
const deleteTable = (req, res) => {
    deleteTableModel.deleteTablePool(req, res);
};
const getTable = (req, res) => {
    getTableModel.getTablePool(req, res);
};
const updateTable = (req, res) => {
    updateTableModel.updateTablePool(req, res);
};
module.exports = {
    getTables,
    createTable,
    deleteTable,
    getTable,
    updateTable
};
