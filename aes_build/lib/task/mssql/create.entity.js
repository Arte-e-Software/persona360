const makeDir = require('../fs.make-dir')
    , createTable = require('./create.table')
    ;

module.exports = (entity, success, error) => {

    makeDir(entity.db.dir, success, error);
    createTable(entity, success, error);

};