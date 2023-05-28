let express = require('express');
let hbs = require('hbs');
let path =require('path');
let bodyParser = require('body-parser');
let con = require('./models/database');
const session = require('express-session');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');


const app = express();
const port = 3000;


app.use(session({
  secret: 'your_secret_key',
  resave: true,
  saveUninitialized: true
}));

app.use(cookieParser())


const password = 'Ο κωδικός που θέλετε να κατακερματίσετε';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Κατακερματισμένος κωδικός:', hash);
    }
  });
});


app.set('views', __dirname + '/views');

hbs.registerPartials(path.join(__dirname,'/views/partials'));
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', (req,res) =>{
    res.render('login.hbs');
});


    

app.post('/homepage.hbs',(req,results)=>{
    let user_name = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let sql = `INSERT INTO user (user_name, password,email ) VALUES ("${user_name}", "${password}", "${email}");`
   
    con.query(sql,function(err,res){
        if(err) throw err;
		  results.redirect('/');
        
	});
});




app.get("/homepage.hbs", function(req,res){
  var username = req.body.username;
  var password = req.body.password;

  con.query("select * from user where user_name = ? and password = ?",[username,password],function(error,results,fields){
      if (results < 0) {
          res.redirect("/homepage.hbs");
      } else {
          res.redirect("/");
      }
      res.end();
  })
})





app.get('/homepage.hbs', (req,res) =>{
    res.render('homepage.hbs', {title: 'Home', HomeActive:true});
});
app.get('/schedule.hbs', (req,res) =>{
    res.render('schedule.hbs',{title: 'schedule', scheduleActive:true});
});
app.get('/secretary.hbs', (req,res) =>{
    res.render('secretary.hbs',{title: 'secretary', secretaryActive:true});
});
app.get('/contact.hbs', (req,res) =>{
    res.render('contact.hbs',{title: 'contact', contactActive:true});
});

app.listen(port, ()=> console.log(`app listening to http://localhost:${port}`));









