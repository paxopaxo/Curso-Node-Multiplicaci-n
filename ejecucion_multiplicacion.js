const { crearArchivo } = require('./multiplicacion.js')
const argv = require('./config/yargs/yarg_config.js')

const { l, base, h } = argv

crearArchivo(base, l, h)
    .then((solve) => console.log(solve))
    .catch((err => console.log(err)))