var pgp = require('pg-promise')();
const dbconfig = require('../../config/database');
var db = pgp(dbconfig);


exports.insertadmin = function(req,res){
    db.one('insert into admin(username,password)values("${data.username}",)')

} 





exports.getAll = function(req, res){

    db.any('select * from student;')
    .then(function(data){

        // console.log(data);
        // res.send('OK');
        res.render('student',{
             students: data
        });

    })
    .catch(function(error){
        console.log(error);
    });

}

exports.insert = function(req, res){

    db.one('insert into admin(username, password) values($1, $2) returning sid', [req.body.username, req.body.password])

    .then(function(data){
        console.log('Register Admin ${data.sid}');
        res.redirect('/student');
    })
    .catch(function(error){
        console.log(error);
    });

}