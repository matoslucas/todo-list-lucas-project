const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./src/DB/connection');
const path = require('path');
const app = express();

connectDB();

app.use(express.static(path.join(__dirname, 'build')));

app.use(express.json({extended: false}));
app.use('/api/taskModel', require('./src/API/Task'));

app.get('/ping', function (req, res) {
 return res.send('pong');
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8080, ()=> console.log('Server OK'));