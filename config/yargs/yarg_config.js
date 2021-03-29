const { demandOption } = require('yargs')

const yargs = require('yargs')
    .options({

        'b': {
            alias: 'base',
            demandOption: true,
            describe: 'la base del número',
            type: 'number'
        },
        'l': {
            alias: 'ejecucion',
            demandOption: false,
            describe: 'Para que el resultado se imprima en pantalla',
            type: 'boolean',
            default: false
        },
        'h': {
            alias: 'hasta',
            demandOption: true,
            describe: 'Número hasta el que llega la multiplicación',
            type: 'number',
        }

    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base no es un número'
        } else {
            return true
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.l)) {
            throw 'El valor no es un número'
        } else {
            return true
        }
    })
    .argv

module.exports = yargs