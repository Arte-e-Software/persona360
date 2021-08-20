let fs = require('fs-extra');

module.exports = async (file, template) => {

    await fs.createFile(file, () => {

        fs.appendFile(file, template, err => {

            if (err) { return err };
            return `${file} criado e atualizado com sucesso em ${Date()}`;

        });

    }, (err => { if(err){ return err }}));

};