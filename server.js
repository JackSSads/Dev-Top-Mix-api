const path = require('path');
const express = require('express');

const app = express();
const options = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
}

app.use(express.json())
app.use(cors( options ))
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
  });
  
  app.set('port', process.env.PORT || 8080);
  
  const server = app.listen(app.get('port'), function() {
    console.log('listening on port ', server.address().port);
});