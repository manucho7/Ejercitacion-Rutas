const heroes = require('../data/heroes.json');
const controllerHeroe = {
    listado: (req, res) => {
        res.send(heroes);
    },
    detalleId: (req, res) => {
        let heroe = req.params.id;
        let heroeBuscado = heroes.find((ol) => {
            return (heroe == ol.id);
        });
        if (heroeBuscado){
            res.send(`Hola, mi nombre es ${heroeBuscado.nombre} y soy
            ${heroeBuscado.profesion}`);
        } else {
            res.send('Heroe no encontrado');
        };
    },
    detalleBio: (req, res) => {
        let heroe = req.params.id;
        let heroefrase = req.params.ok;
        let heroeBuscado = heroes.find((ol) => {
            return (heroe == ol.id);
        });
        if (heroeBuscado){
            if (heroefrase == 'ok'){
                res.send(`el nombre del heroe buscado es ${heroeBuscado.nombre} y su reseña es ${heroeBuscado.resenia}`);
            } else {
                res.send(heroeBuscado.nombre + ' Lamento que no desees saber más de mi :(');
            }
        } else {
            res.send(`No encontramos
            un héroe para mostrarte su biografía`);
        }
    }
};

module.exports = controllerHeroe;