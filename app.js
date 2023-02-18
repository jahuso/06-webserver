const express = require('express')
//require('dotenv').config({path:'./env'})
require('dotenv').config()
const app = express()
const port = process.env.PORT

// app.get('/', (req, res) => {
//   res.send('Home Page')
// })

const hbs = require('hbs');

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.render('home',{
        nombre: ' by Mieles',
        titulo: 'Node Trip'
    });
})

app.get('/generic', (req, res) =>{
    res.render('generic',{
        nombre: ' by Mieles',
        titulo: 'Node Trip'
    });
})

app.get('/elements', (req, res) =>{
    res.render('elements',{
        nombre: ' by Mieles',
        titulo: 'Node Trip'
    });
})


app.get('/generic', (req, res) =>{
    res.sendFile(__dirname + '/public/generic.html');
})

app.get('/elements', (req, res) =>{
    res.sendFile(__dirname + '/public/elements.html');
})

app.get('*', (req, res) =>{
    res.sendFile(__dirname + '/public/404.html');
});


app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})