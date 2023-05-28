const{ 
    createPool
} = require('mysql');

 con = createPool({
	host : 'localhost',
	database : 'db 1',
	user : 'root',
	password : ''
});



con.query('select * from user', function(err, results, fields){
	if(err) throw err;
	console.log(results);

});


module.exports = con;