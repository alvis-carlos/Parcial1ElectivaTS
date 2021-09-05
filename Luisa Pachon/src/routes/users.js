// Endpoints for external data
const { Router } = require('express');
const router = new Router();

const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    res.json(data);
});

router.get('/one', (req, res) => {
    res.send('Hello World')
});

router.get('/two', (req, res) => {
    res.send('Hello Luisa')
});


// Carlos

router.get('/paises', (req, res) => {
    const JsonPaises = ['Colombia','Argentina','Mexico','España'];
    res.json(JsonPaises)
})

module.exports = router;