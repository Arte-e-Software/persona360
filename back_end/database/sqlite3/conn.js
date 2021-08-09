const Database = require('better-sqlite3')
;

module.exports = (tenant, stmt) => {

  let db = new Database(`./server/db/tenant/Persona360_${ tenant.url }`);

}; 