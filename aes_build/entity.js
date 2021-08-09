const env = require('dotenv');

module.exports = config => {

    let   root = './back_end/entities'
    
        , db = {
            profile: process.env.DB_PROFILE,
            dir: `${root}/.${process.env.DB_PROFILE}`
        }
        ;


    file = {
        js: ['create.js', 'read.js', 'update.js', 'delete.js', 'search.js'],
        ejs: ['create.ejs', 'read.ejs', 'update.ejs', 'delete.ejs', 'search.ejs']
    };

    return {

        name: config.name,

        dir: `${root}/${config.name}`,

        db: db,

        namespace: config.namespace,

        fields: config.fields,
        
        values: config.values,
        
        template: require('./lib/template/template'),

        layer: {

            model: {
                name: 'model',
                file: file.js
            },

            view: {
                name: 'view',
                file: file.ejs
            },

            controller: {
                name: 'controller',
                file: file.js
            }

        }

    };

};