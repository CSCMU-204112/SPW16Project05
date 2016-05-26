var studentCtrl = require('./controllers/student.controllers');


module.exports = function(app){
    app.get('/', function(req, res){
        res.send('');
    });

    app.route('/student')
    .get(studentCtrl.getAll)
    .post(studentCtrl.insert);
}