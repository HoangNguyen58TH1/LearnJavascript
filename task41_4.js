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

readFilePromise('song11.txt')
    .then((song) => {
        console.log(song);
    })
    // .catch((error) => {
    //     console.log(error);
    // })
    .then(function(){
        return readFilePromise('song2.txt')
    })
    .then((song) => {
        console.log(song);
    })
    .catch((error) => {
        console.log(error);
    });
