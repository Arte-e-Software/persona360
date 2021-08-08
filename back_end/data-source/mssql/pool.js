const sql = require('mssql');

module.exports = (db, query, success, error) => {

     new sql.ConnectionPool(db).connect().then(pool => {

          return pool.request().query(query)
        
          }).then(result => {
        
            success(result.recordset);
            sql.close();
        
          }).catch(err => {
        
            error(err);
            sql.close();
        
          });
};