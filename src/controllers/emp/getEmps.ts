import conPool from '../../database'

const rawResp = (rawData: any) => {
  let rawDataResp: any = [];
  rawData.forEach(function (value: any) {
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
    })
  }); 
  return {data: rawDataResp}
}
const getEmpsPool = (res: any) =>  {
  conPool.query('SELECT * FROM bomorder.employee ORDER BY id ASC', (error: Error, results: any) => {
    if (error)
      throw error
    res.status(200).json(rawResp(results.rows))
  })
}

module.exports = {
  getEmpsPool
};