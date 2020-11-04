// primero requerimnos express
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
// el modulo path ayuda a trabajar con directorios de node
// inicializando express
const app = express();
//setings del motor de plantilla.
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use(express.urlencoded({extended: false}));// esto permite conocer los datos que envia el usuario en un formulario a traves de un JSON
app.use(express.json());//PERMITE QUE EL SERVIDOR ENTIENDA EL FORMATO JSON
// Routes
app.use(require('./routes'));
// Static files
app.use(express.static(path.join(__dirname, 'public')));
//ahora ejecutando el servidor y poniendolo en un puerto.
app.listen('3000', () => {
	console.log('server on port', 3000);
});
//node src/index.js


