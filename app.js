fs = require('fs');
fs.readFile('readme', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);
});
