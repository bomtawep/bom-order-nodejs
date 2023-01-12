import conPool from '../../database'

const rawResp = (rawData: any) => {
  let rawDataResp: any = [];
  rawData.forEach(function (value: any) {
    rawDataResp.push({
      id: value.id,
      order_id: value.order_id,
      item_num: value.item_num,
      created: value.created.toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updated: value.updated.toISOString().replace(/T/, ' ').replace(/\..+/, '')
    })
  }); 
  return {data: rawDataResp}
}
const getOrderItemsPool = (res: any) =>  {
  conPool.query('SELECT * FROM bomorder.order_item ORDER BY id ASC', (error: Error, results: any) => {
    if (error)
      throw error
    res.status(200).json(rawResp(results.rows))
  })
}

module.exports = {
  getOrderItemsPool
};