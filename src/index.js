const express = require('express');
const morgan = require('morgan');
const path = require('path');

// -- Extrae la conexion de la carpeta database -- //
const { mongoose } = require('./database');
const app = express();

// Configuración
app.set('port', process.env.PORT || 3000);

// Funciones (Middlewares)
app.use(morgan('dev'));
app.use(express.json());

// Rutas
app.use('/api/tasks', require('./routes/task.routes'));

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Start server
app.listen(app.get('port'), () =>
{
    console.log(`Server on port ${app.get('port')}`);
});