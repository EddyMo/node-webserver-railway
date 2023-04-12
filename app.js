const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function(err) {});

// Servir contenido estático (tiene prioridad sobre las rutas indicadas más abajo )
// app.use(express.static('public2'));
app.use(express.static('public3'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Edwin Molina',
        titulo: 'Pruebas de node'
    });
    // res.send('Hola mundo');
});

// app.get('/generic', function(req, res) {
//     // res.sendFile(__dirname + '/public2/generic.html');
//     res.render('generic', {
//         nombre: 'Edwin Molina',
//         titulo: 'Pruebas de node'
//     });

// });
// app.get('/elements', function(req, res) {
//     // res.sendFile(__dirname + '/public2/elements.html');
//     res.render('elements', {
//         nombre: 'Edwin Molina',
//         titulo: 'Pruebas de node'
//     });

// });

app.get('*', function(req, res) {
    // res.send('404 | Page not found');
    // res.send('public/404.html');
    res.sendFile(__dirname + '/public/404.html');
});

// app.get('/', function(req, res) {
//     // res.send('Home page');
//     res.sendFile(__dirname + '/public2/index.html');
// });

app.listen(port, () => {
    console.log(`El ejemplo se está publicando en el puerto ${port}`);
});