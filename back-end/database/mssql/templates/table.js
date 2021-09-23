const fs = require('fs')
const package = require('../../../../socket.io/package')
const table = (socket, method, module, entity) => {

  let columns = require('./columns')(entity)
    , name = entity.name

  let template = false

  switch (module) {

    case 'create':
      template = require(`../templates/${module}-table`)(name, columns)
      break;

    default:
      template = false
      break;

  }

  if (template) {

    let file = `./back-end/entities/${name}/.mssql/${module}-table.js`

    try {

      fs.writeFile(file, template, err => {

        if (err) {

          socket.emit('call', package(method, err, true))

        }

        socket.emit('call', package(method, file, false))

      })

    } catch (err) {

      socket.emit('call', package(method, err, true))

    }

  } else {

    let err = `template vazio: ${module}-table(${name})`
    socket.emit('call', package(method, err, true))

  }

}

module.exports = table