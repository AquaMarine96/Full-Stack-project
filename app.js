let express = require('express');
let hbs = require('hbs');


const app = express();
const port = 3000;

hbs.registerPartials(__dirname + '/views/partials');
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) =>{
    res.render('login.hbs');
});

app.get('/index.hbs', (req,res) =>{
    res.render('index.hbs');
});

app.listen(port, ()=> console.log(`app listening to http://localhost:${port}`));









