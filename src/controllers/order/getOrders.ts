import conPool from '../../database'

const getOrdersPool = (res: any) =>  {
  conPool.query('SELECT * FROM accounts ORDER BY id ASC', (error: Error, results: any) => {
    if (error)
      throw error
    console.log(results)
    res.status(200).json(results.rows)
  })
}

module.exports = {
  getOrdersPool
};