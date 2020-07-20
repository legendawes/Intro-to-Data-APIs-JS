// server code
const Datastore = require('nedb');
const express = require('express');
const { request } = require('express');
const app = express();
const port_number = 3000
app.listen(port_number, () => console.log('listening at', port_number));
// host static files (index.html)
// will later add database and authentication
app.use(express.static('public'));

const database = new Datastore('database.db');
database.loadDatabase();


app.use(express.json({limit: '1mb'}));
app.post('/api', (request, response) => {
    console.log('request received');
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data)
    response.json({status: 'success'});
});