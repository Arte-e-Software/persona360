const sql = require('mssql');

module.exports = (banco, consulta, success, error) => {

     new sql.ConnectionPool(banco).connect().then(pool => {

          return pool.request().query(consulta)
        
          }).then(result => {
        
            let rows = result.recordset
            /*
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.status(200).json(rows);
            */
            success(rows)
            sql.close()
        
          }).catch(err => {
        
            //res.status(500).send({ message: `${err}`})
            error(err)
            sql.close()
        
          })
  
};