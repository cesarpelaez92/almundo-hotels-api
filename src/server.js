const express = require ('express');
var cors = require('cors')
const bodyparser = require('body-parser');

const router = require('./network/routes');

var app = express();
app.set('port', (process.env.PORT || 3000));
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

router(app);

//app.use('/app', express.static('public')) --> aqui va el frontend

app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'))
});
