module.exports = {

    'db': {
        'user': process.env.MSSQL_USER,
        'password': process.env.MSSQL_PASSWORD,
        'server': process.env.MSSQL_SERVER,
        'database': process.env.MSSQL_DATABASE,
        'port': process.env.MSSQL_PORT
    }

};