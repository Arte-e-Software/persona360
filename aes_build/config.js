const env = require('dotenv');

module.exports = entity => {


    let root = './back_end/entity'
        , db = {
            profile: process.env.DB_PROFILE,
            dir: `${root}/`
        }
        ;


    file = {
        js: ['create.js', 'read.js', 'update.js', 'delete.js', 'search.js'],
        ejs: ['create.ejs', 'read.ejs', 'update.ejs', 'delete.ejs', 'search.ejs']
    };

    return {

        name: entity.name,

        namespace: entity.namespace,

        db: db,

        fields: entity.fields,

        layer: {

            model: {
                entity: entity.name,
                name: 'model',
                dir: `${root}/${entity.name}/model/`,
                file: file.js,
                template: require('./lib/template/template'),
                db: db,
                fields: entity.fields
            },

            view: {
                entity: entity.name,
                name: 'view',
                dir: `${root}/${entity.name}/view/`,
                file: file.ejs,
                template: require('./lib/template/template'),
                db: db,
                fields: entity.fields
            },

            controller: {
                entity: entity.name,
                name: 'controller',
                dir: `${root}/${entity.name}/controller/`,
                file: file.js,
                template: require('./lib/template/template'),
                db: db,
                fields: entity.fields
            }

        }

    };

};