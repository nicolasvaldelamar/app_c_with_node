
const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
           
        })
        .option('l', {
            alias: 'listar',
            type: 'boolean',
            demandOption: false,
            default: false,
            describe: 'Es para saber si quieres la lista de la tabla de multiplicar en consola o no'
        })
        .option('h',{
            alias: 'hasta',
            type: 'number',
            demandOption: false,
            default: 10,
            describe: 'Es para indicar hasta donde llegan las multiplicaciones de tu app'
        })
        .check((argv, options) =>{
            if (isNaN(argv.b)){
                throw 'La base tiene que ser un numero'
            }else
                return true;
        })
        .argv;


module.exports = argv;