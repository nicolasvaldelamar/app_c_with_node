const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')


console.clear();

 crearArchivo(argv.b, argv.l, argv.h)
      .then(salida => console.log(salida))
      .catch(err => console.log(err))
    





// console.log(argv)
// console.log('base: yargs', argv.base, 'listar: yargs', argv.listar);
// const [,,arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
//console.log(base);
//const base = 20;
