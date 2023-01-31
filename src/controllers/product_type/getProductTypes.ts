import conPool from '../../database'
import dotenv from "dotenv";

dotenv.config();
const rawResp = (rawData: any) => {
  let rawDataResp: any = [];
  rawData.forEach(function (value: any) {
    rawDataResp.push({
      id: value.id,
      name: value.name,
      is_active: value.is_active,
      created: value.created.toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updated: value.updated.toISOString().replace(/T/, ' ').replace(/\..+/, '')
    })
  }); 
  return {data: rawDataResp}
}
const getProductTypesPool = (res: any) =>  {
  conPool.query('SELECT * FROM bomorder.product_type ORDER BY id ASC', (error: Error, results: any) => {
    if (error)
      throw error
    res
    .status(200)
    .json(rawResp(results.rows))
  })
}

module.exports = {
  getProductTypesPool
};