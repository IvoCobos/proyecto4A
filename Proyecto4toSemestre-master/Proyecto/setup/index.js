;
let entorno = require('./config/entorno'),
  app = require('./app')

entorno.initVar() 

app.listen(3002, () => {
  console.log(`El servicios está funcionando en el puerto ${ 3002 }`)
})


