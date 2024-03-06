var express = require('express');
var router = express.Router();
var Personaje = require('../personaje');

router.get('/', async (req, res) => {
    try {
      const personajes = await Personaje.find({});
      res.render('mosaico', { personajes }); 
    } catch (error) {
      console.log(error);
      res.status(500).send('Error interno del servidor');
    }
  });
  module.exports = router;