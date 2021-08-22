module.exports = fields => {

    return fields.map((field) => {

        switch (field.type) {

            case 'String':
                return "'${params." + field.name + "}'\n";
                break;

            case 'Date':
                return "'${params." + field.name + "}'\n";
                break;

            case 'Boolean':
                return '${params.' + field.name + '}\n';
                break;

            case 'Number':
                return '${params.' + field.name + '}\n';
                break;

            default: 'DATATYPE ERROR'
                break;

        };

    }, fields);

}; 