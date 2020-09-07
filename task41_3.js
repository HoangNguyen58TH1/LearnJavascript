//Dung Promise = node module
const fs = require('promise-fs');

function onDone(song) {
    console.log(song);
}

function onError(error) {
    console.log(error);
}

function readFile(path) {
    return fs.readFile(path, 'utf8');
}
readFile('song1.txt')
    .then(onDone)
    .then(function () {
        return readFile('song2.txt');
    })
    .then(onDone)
    .then(function () {
        return readFile('song3.txt');
    })
    .then(onDone)
    .catch(onError);

    
//Dung Promise = fs of node 
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
    .then(function (song) {
        console.log(song);
    })
    .catch(function (error) {
        console.log(error);
    });