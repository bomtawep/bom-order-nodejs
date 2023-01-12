import conPool from '../../database'

const rawResp = (rawData: any) => {
  let rawDataResp: any = [];
  rawData.forEach(function (value: any) {
    rawDataResp.push({
      id: value.id,
      p_id: value.p_id,
      created: value.created.toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updated: value.updated.toISOString().replace(/T/, ' ').replace(/\..+/, '')
    })
  });
  return {data: rawDataResp}
}
const getOrderListsPool = (res: any) =>  {
  conPool.query('SELECT * FROM bomorder.order_list ORDER BY id ASC', (error: Error, results: any) => {
    if (error)
      throw error
    res.status(200).json(rawResp(results.rows))
  })
}

module.exports = {
  getOrderListsPool
};