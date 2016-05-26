const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
var port = 3000;
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('views','./app/views');
app.set('view engine', 'pug');

app.use(express.static('./public'));

require('./app/routes')(app);

app.listen(port,function(){
    console.log('Server runner at port ' + port);
});
