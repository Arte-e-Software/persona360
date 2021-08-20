module.exports = data => {

let  template = [
        
    ['model', 'view', 'controller'], // layers

    ['create', 'read', 'update', 'delete', 'search'], // modules

    [[ // templates

        // MODEL
        require('../template/model/create')(data),
        require('../template/model/read')(data),
        require('../template/model/update')(data),
        require('../template/model/delete')(data),
        require('../template/model/search')(data)],[

        // VIEW
        require('../template/view/create')(data),
        require('../template/view/read')(data),
        require('../template/view/update')(data),
        require('../template/view/delete')(data),
        require('../template/view/search')(data)],[

        // CONTROLLER 
        require('../template/controller/create')(data),
        require('../template/controller/read')(data),
        require('../template/controller/update')(data),
        require('../template/controller/delete')(data),
        require('../template/controller/search')(data)]

    ]];

    return template[2][template[0].indexOf(data.layer)][template[1].indexOf(data.module)];

};