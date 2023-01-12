const getTablesModel = require('./getTables')
const createTableModel = require('./createTable')
const deleteTableModel = require('./deleteTable')
const getTableModel = require('./getTable')
const updateTableModel = require('./updateTable')

const getTables = (res: any) =>  {
  getTablesModel.getTablesPool(res)
}
const createTable = (req: any, res: any) =>  {
  createTableModel.createTablePool(req, res)
}
const deleteTable = (req: any, res: any) =>  {
  deleteTableModel.deleteTablePool(req, res)
}
const getTable = (req: any, res: any) =>  {
  getTableModel.getTablePool(req, res)
}
const updateTable = (req: any, res: any) =>  {
  updateTableModel.updateTablePool(req, res)
}
module.exports = {
  getTables,
  createTable,
  deleteTable,
  getTable,
  updateTable
};