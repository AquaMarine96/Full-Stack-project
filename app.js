let express = require('express');
let hbs = require('hbs');
let path =require('path');

const app = express();
const port = 3000;


app.set('views', __dirname + '/views');

hbs.registerPartials(path.join(__dirname,'/views/partials'));
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) =>{
    res.render('login.hbs',{title: 'Welcome to Student Compass', active: true});
});



app.get('/homepage.hbs', (req,res) =>{
    res.render('homepage.hbs', {title: 'Home', HomeActive:true});
});
app.get('/schedule.hbs', (req,res) =>{
    res.render('schedule.hbs',{title: 'Schedule', scheduleActive:true});
});
app.get('/secretary.hbs', (req,res) =>{
    res.render('secretary.hbs',{title: 'Secretary', secretaryActive:true});
});
app.get('/contact.hbs', (req,res) =>{
    res.render('contact.hbs',{title: 'Contact', contactActive:true});
});

app.listen(port, ()=> console.log(`app listening to http://localhost:${port}`));









