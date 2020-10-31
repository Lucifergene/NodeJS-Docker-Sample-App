const express = require('express')
const app = express()

const PORT =3000
const HOST = '0.0.0.0';

var cors = require('cors')
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, HOST);
console.log(`Example app listening at http://${HOST}:${PORT}`);
