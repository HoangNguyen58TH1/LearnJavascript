const fs = require('fs');

function readFilePromise(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, 'utf8', function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

readFilePromise('song1.txt')
    .then(function(song){
        console.log(song);
    })
    .catch(function(error){
        console.log(error);
    });