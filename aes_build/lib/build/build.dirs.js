const task = require('../task/fs.make-dir');

module.exports = (entity, success, error) => {

    task(`${entity.dir}/model/`, success, error);
    task(`${entity.dir}/view/`, success, error);
    task(`${entity.dir}/controller/`, success, error);

};