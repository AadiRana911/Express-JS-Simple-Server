const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Getting Root</h1>');
})
app.get('/profile', (req, res) => {
    res.send('<h1>Getting Profile</h1>');
})
app.post('/profile', (req, res) => {
    const user = {
        name: 'Asad',
        hobby: 'Gaming'
    }
    res.send(`<h1>${user}</h1>`);
})
app.listen(3000);