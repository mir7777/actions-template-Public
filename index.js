//my-express-api..
var express = require('express');
var app = express();

app.get('/', (req, res)=>{
    res.send('<h1>Hello Github Actions!!!</h1>')
});

app.listen(3000,'0.0.0.0',()=>{
    console.log('Server Start : port 3000');
});
