const sql = require('mssql');

function Pool(banco, model, res){

     new sql.ConnectionPool(banco).connect().then(pool => {

          return pool.request().query(model)
        
          }).then(result => {
        
            let rows = result.recordset
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.status(200).json(rows);
            sql.close();
        
          }).catch(err => {
        
            res.status(500).send({ message: `${err}`})
            sql.close();
        
          });

}

module.exports = Pool;