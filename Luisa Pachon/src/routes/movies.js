const { Router } = require('express');
const router = new Router();
const _ = require('underscore');
const bodyParser = require('body-parser')

const urlencodedParser = bodyParser.urlencoded({ extended: false })

const movies = require('../sample.json');

router.get('/', (req, res) => {
    res.json(movies);
});

router.post('/', (req, res) => {
    const id = movies.length + 1;
    const { title, director, year, rating } = req.body;
    const newMovie = { ...req.body, id };
    if (id && title && director && year && rating) {
        movies.push(newMovie);
        res.json(movies);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});

// Carlos

function validarEmail(dato){
    for (let index = 0; index < dato.length; index++) {
        if(dato[index] == '@'){
            return true
        }
    }
  }
  
  router.post('/login', urlencodedParser, function (req, res) {
  console.log(req.body.username)
  
  if(validarEmail(req.body.email) == true){
    respuestaJson = { codigo:'201',user: req.body.username, email: req.body.email}
  }else{
    respuestaJson ={codigo:'500',error:'EMAIL no valido'}
  }
  res.json(respuestaJson)
  })
  
  /* ====================================================================*/
  
  function calcularedad(dato){
  
    if ((dato >0)&&(dato<18)){
      return 'Menor de edad'
    }else if( (dato > 17) ){
      return 'Mayor de edad'
    }else{
       return 'No se puede tener esa edad'
    }      
    
  }
  router.post('/edad', urlencodedParser, function (req, res) {
  const numeros = /^[0-9]+$/;
  if(req.body.edad.match(numeros)){
    respuestaJson = { codigo:'201',edad: req.body.edad, respuesta: calcularedad(req.body.edad)}
  }else{
    respuestaJson ={codigo:'500',error:'edad no valido'}
  } 
  
  res.json(respuestaJson)
  })
  
  /* ====================================================================*/
  
  router.post('/numeroAleatorio', urlencodedParser, function (req, res) {
      const numeros = /^[0-9]+$/;
  
      if( (req.body.max.match(numeros)) && (req.body.min.match(numeros)) ){
        const num = Math.floor((Math.random() * (req.body.max - req.body.min + 1)) + req.body.min)
        respuestaJson = { codigo:'201',respuesta:num}
      }else{
        respuestaJson ={codigo:'500',error:'datos no validos'}
      }
  
      res.json(respuestaJson)
  })
  /* ====================================================================*/
  
  router.post('/registro', urlencodedParser, function (req, res) {
    res.json({nombres:req.body.nombre, apellidos: req.body.apellido, email: req.body.email})
  })

module.exports = router;