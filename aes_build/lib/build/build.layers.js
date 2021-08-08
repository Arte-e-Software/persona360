const task = require('../task/build.create-file');

module.exports = (entity, success, error) => {

    task(entity.layer.model, entity, success, error);
    task(entity.layer.view, entity, success, error);
    task(entity.layer.controller, entity, success, error);
    
};