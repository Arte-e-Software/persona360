module.exports = entity => {

    let   root = './back_end/entities'
        , file = {
            js: ['create.js', 'read.js', 'update.js', 'delete.js', 'search.js'],
            ejs: ['create.ejs', 'read.ejs', 'update.ejs', 'delete.ejs', 'search.ejs']
        };

    return {

        name: entity.name,

        dir: `${root}/${entity.name}`,

        db: {
            profile: process.env.DB_PROFILE,
            dir: `${root}/.${process.env.DB_PROFILE}`
        },

        namespace: entity.namespace,

        fields: entity.fields,
        
        values: entity.values,
        
        template: require('./template'),

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