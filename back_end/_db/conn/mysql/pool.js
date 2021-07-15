const mysql = require('mysql');

function Pool(db, consulta, res) {

    let pool = mysql.createPool(db);
    pool.getConnection((error, conn)=>{

        if(error){ res.status(500).send({ message: error }); }
        
        conn.query(consulta,(error, recordset) => {

            res.setHeader('Access-Control-Allow-Origin', '*')
            res.status(200).json(recordset);
            conn.release();
           
            if(error) { res.status(500).send({ message: error }); }

        });

    });
}

module.exports = Pool;