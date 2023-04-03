const express = require('express');

const app = express();

app.get("/",function(req,res){
    res.send('hello');
})

app.get('/about',function(req,res){
    res.send('<h1>About Me</h1><p>Test</p>');
})

app.listen(3000,function(){
    console.log('server started on porit 3000');
});