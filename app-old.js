const http = require('http');

http.createServer((req, res) => {

        res.write('Hola Mundo');
        res.end();



    })
    .listen(8080);
console.log('Escuchando el puerto 8080');


// console.log(req);

// res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
// res.writeHead(200, { 'Content-Type': 'application/csv' });
// res.write('id;nombre\n');
// res.write('1;Edwin\n');
// res.write('2;Molina\n');
// res.write('3;Rojas\n');

//const persona = { id: 1, nombre: 'Edwin' };
// res.write(JSON.stringify(persona));