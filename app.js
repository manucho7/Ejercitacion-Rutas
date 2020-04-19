//constantes para trabajar
const express = require('express');
const fs = require('fs');
const rutasHeroes = require('./routes/heroes.js');
const rutasMain = require('./routes/main.js');
const app = express();
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

//servirdor
app.listen(3030, () => console.log('Server running in 3030 port'));

//Un use para cada ruta
app.use('/heroes', rutasHeroes);
app.use('/', rutasMain);
app.use('/creditos', rutasMain);
app.use('*', rutasMain);
