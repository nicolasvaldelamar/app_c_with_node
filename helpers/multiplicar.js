const fs = require('fs');
const colors = require('colors');
const { compileFunction } = require('vm');
const crearArchivo = (base = 5, listar = false, hasta=10) => {

    return new Promise((resolve, reject)=>{
        let salida = ''
        let consola = ''
        for (let i = 1; i <= hasta; i++) {
            salida += colors.america(`${base} x ${i} = ${base * i}\n`).underline;
            consola += colors.america(`${base} x ${i} = ${base * i}\n`).underline;

            
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);
        if (listar === true){
            console.log('____________________'.rainbow);
            console.log(`<<<<<<< T${base} >>>>>>>>`.rainbow);
            console.log('--------------------'.rainbow);
        
            console.log(salida)
        }
       
        if (salida) {
            return resolve(`tabla-${base}.txt creado`.rainbow)
        }else {
            return reject('HAY ERROR!')
        }
    })
       
    
}

module.exports = {
    crearArchivo,
}