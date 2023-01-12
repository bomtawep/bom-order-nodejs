import conPool from '../../database'

const rawResp = (rawData: any) => {
  let rawDataResp: any = [];
  rawData.forEach(function (value: any) {
    rawDataResp.push({
      id: value.id,
      pri_id: value.pri_id,
      acc_id: value.acc_id,
      fname: value.fname,
      lname: value.lname,
      gender: value.gender,
      birthdate: value.birthdate,
      regisdate: value.regisdate,
      created: value.created.toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updated: value.updated.toISOString().replace(/T/, ' ').replace(/\..+/, '')
    })
  }); 
  return {data: rawDataResp}
}
const getCussPool = (res: any) =>  {
  conPool.query('SELECT * FROM bomorder.customer ORDER BY id ASC', (error: Error, results: any) => {
    if (error)
      throw error
    res.status(200).json(rawResp(results.rows))
  })
}

module.exports = {
  getCussPool
};