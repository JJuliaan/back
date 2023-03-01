const fs = require(`fs`)

// const data = new Date()


// const file = './archivoFechaHora.txt'

// fs.writeFile(file, data.toISOString(), error => {
//     if (error) console.log(error)
//     fs.readFile(file, 'utf-8', (error, response) => {
//         if (error) console.log(error)
//         console.log(response)
//         fs.unlink(file)
//     })

// })

// PROMESA PROMESA PROMESA PROMESA PROMESA PROMESA PROMESA PROMESA PROMESA PROMESA PROMESA PROMESA PROMESA

// const operacionesAsincronas = async () =>{
//     try {
//         await fs.promises.writeFile(file, 'archivo con promesas')

//         const data = await fs.promises.readFile(file, 'utf-8')
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     } finally {
//         fs.promises.unlink(file)
//     }
// }

// operacionesAsincronas()

// JSON JSON  JSON JSON JSON JSON JSON JSON JSON JSON JSON JSON JSON JSON JSON JSON JSON JSON JSON JSON JSON

// const {Blob} = require('buffer')

// const infoPackage = async () => {
//     const data = await fs.promises.readFile('../package.json', 'utf-8')

//     const info ={
//         contenidoStr: JSON.stringify(data),
//         contenidoObj: JSON.parse(data),
//         size: new Blob([data]).size
//     }
//     console.log(info)
// }

// infoPackage()

