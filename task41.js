const fs = require('promise-fs');

function onDone(song) {
    console.log(song);
    return song;
}

function onError(error) {
    console.log(error);
    return error;
}

function readFile(path) {
    return fs.readFile(path, 'utf8')
}
readFile('song1.txt')
    .then(onDone)
    // .then(function () {
    //     return readFile('song2.txt')
    // })
    .then(readFile('song2.txt'))
    .then(onDone)
    .catch(onError)

// onDone vs onDone(param)
// research Promise

//tai sao khong
    //  .then(readFile('song2.txt')) luon ma phai
    // --
    //  .then(function(){
    //     return readFile('song2.txt')
    // })

