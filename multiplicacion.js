const fs = require('fs')
const colors = require('colors')

const crearArchivo = async(numtabla, bool, h) => {
    try {
        let salida_consola = `===================\n   Tabla del ${ numtabla }\n===================\n`.green
        let salida_txt = `===================\n   Tabla del ${ numtabla }\n===================\n`

        for (let i = 1; i <= h; i++) {
            salida_consola += `${numtabla} * ${i} = ${numtabla*i}\n`.yellow
            salida_txt += `${numtabla} * ${i} = ${numtabla*i}\n`
        }

        fs.writeFileSync(`./salida/Tabla del ${numtabla}.txt`, salida_txt)

        if (bool) {
            return salida_consola
        }

    } catch (err) {
        throw err
    }

}

module.exports = {
    crearArchivo
}