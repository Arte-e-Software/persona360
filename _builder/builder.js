const factory = {

    entity: require('./factory/entity'),
    layer: require('./factory/layer'),
    log: require('./factory/log'),
    table: require('./factory/table')

};

module.exports = async (entity, req, res) => {

    async function builder(entity, inicio) {

        let thisEntity = {}
            , logBuild = `####### START BUILD date: ${inicio.toUTCString()}`
            ;

        factory.log(`${logBuild}`);

        (() => {

            for (let i in entity) {

                thisEntity = factory.entity(entity[i]);
                factory.layer('model', thisEntity);
                factory.layer('view', thisEntity);
                factory.layer('controller', thisEntity);
                factory.table(thisEntity, entity);

            };

            return true;

        })();

    };

    let inicio = new Date();

    builder(entity, inicio)
        .then(() => {

            let fim = new Date()
                , timelapse = fim.getTime() - inicio.getTime()
                ;

            factory.log(`####### END BUILD timelapse: ${timelapse}ms`);
            res.send({ entity: entity, finish: true, error: false })

        })
        .catch(err => {

            res.send({ entity: entity, finish: true, error: err });

        });

};