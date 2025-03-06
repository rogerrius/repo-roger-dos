// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer( (req, res ) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text-plain')
//     res.end('Este es mi primer servidor en node!\n')
// })

// server.listen( port, hostname, () => {
//     console.log(`Server runnint at https://${hostname}:${port}/`)
// })

const shelljs = require('shelljs')

shelljs.echo("Creamos una carpeta de ejemplo y una copia de seguridad")
shelljs.mkdir("../CarpetaDeEjemplo")
shelljs.cp("-R", "../CarpetaDeEjemplo", "../CopiaDeSeguridad")
shelljs.echo("He terminado")