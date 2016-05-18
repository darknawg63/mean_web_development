exports.render = function(req, res) {
    //res.send('Hello World\n');
    res.render('index', {
        title: 'Hello World'
    })
};
