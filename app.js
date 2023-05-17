let express = require('express');
let hbs = require('handlebars');
let path = require('path');

const app = express();
const port = 3000;


app.get('/', (req, res) => {
    //res.send('Hello !');
    res.render('index', { title: 'Express' })
    }
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);


