import conPool from '../database'

const getUsersPool = (res: any) =>  {
    conPool.query('SELECT * FROM public.accounts ORDER BY id ASC', (error: Error, results: any) => {
      if (error)
        throw error
      console.log(results)
      res.status(200).json(results.rows)
    })
}

module.exports = {
  getUsersPool
};