module.exports = {
  "aes": {
    "user": process.env.MSSQL_USER,
    "password": process.env.MSSQL_PASSWORD,
    "server": process.env.MSSQL_SERVER,
    "database": process.env.MSSQL_DATABASE,
    "port": 1433,
    "pool": {
      "max": 10,
      "min": 0,
      "idleTimeoutMillis": 30000
    },
    "options": {
      "encrypt": true, // for azure
      "trustServerCertificate": true // change to true for local dev / self-signed certs
    }
  }
}