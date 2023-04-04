const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
}); 
app.get('/bmiCalculator',(req,res)=>{
    res.sendFile(__dirname + "/bmiCalculator.html")
})




app.post('/',(req,res)=>{

    let num1 = Number(req.body.num1);
let num2 = Number(req.body.num2);

let results = num1+num2;

    res.send('thanks for sending ' + results);
});

app.post('/bmicalculator',(req,res)=>{
    let num1 = Number(req.body.weight);
    let num2 = Number(req.body.height);
    let results = (num1 ) / (num2 * num2);
    res.send('your bmi is' + results);
})



app.listen(3000,function(){
    console.log('server started on port 3000');
});