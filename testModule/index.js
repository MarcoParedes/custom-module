
const express = require('express');
const app = express();
const operations = require('operations');

app.get('/addition', (req, res) => {
    const result = operations.addition(5, 10);
    res.send({ result });
})

app.get('/subtraction', (req, res) => {
    const result = operations.subtraction(15, 3);
    res.send({ result });
})


app.listen(4000, () => {
    console.log("port 4000")
})
