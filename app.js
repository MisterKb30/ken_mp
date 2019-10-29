const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
app.set('view engine', 'ejs');

const errorController = require('./controller/error');
const selectRoutes = require('./routes/select');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bulma/css')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/@mdi/font/css')));
app.use('/fonts', express.static(path.join(__dirname, 'node_modules/@mdi/font/fonts')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

app.use(selectRoutes);

app.use(errorController.get404);

app.listen(3000);