// server code
const express = require('express');
const app = express();
const port_number = 3000
app.listen(port_number, () => console.log('listening at', port_number));
// host static files (index.html)
// will later add database and authentication
app.use(express.static('public'));