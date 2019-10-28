// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  let digit1 = Number(req.body.num1);
  let digit2 = Number(req.body.num2);

  let result = digit1 + digit2;
  res.send(`The result of the calculation is ${result}`);
});

app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + '/bmicalculator.html');
});

app.post('/bmicalculator', (req, res) => {
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);

  let bmi = weight / Math.pow(height, 2);
  let result = Math.floor(bmi);

  res.send(`Your bmi is ${result}`);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
