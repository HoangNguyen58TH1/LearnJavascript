const fs = require('fs');

function readFilePromise(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, 'utf8', function (err, data) {
            if (err) {
                return reject(err);
            } else {
                return resolve(data);
            }
        });
    });
}

// Promise --> node co --> async await

// - async await --> return 1 Promise
// - node co nó có syntax na ná với async await. co là 1 function, yield là keyword, async await là keyword.

// let readFiles = co.wrap(function* (files) {
//     let arrSong = yield files.map(function (file) {
//         return readFilePromise(file);
//     })
//     return arrSong;
// })

// readFiles(['song1.txt', 'song2.txt', 'song3.txt'])
//     .then((arrSong) => {
//         console.log(arrSong);
//     }).catch((err) => {
//         console.log(err);
//     });

// var run = async function(){
var run = async function(files){
    // let values =  [
    //     await readFilePromise('song1.txt'),
    //     await readFilePromise('song2.txt')
    // ];
    var values = await files.map(function(file){
        return readFilePromise(file);
    })
    return values;

    // let song1 = await readFilePromise('song1.txt');
    // let song2 = await readFilePromise('song2.txt');
    // return [song1, song2];
}

// run()
run(['song1.txt', 'song2.txt'])
    .then(function(values){
        console.log(values);
    })
    .catch(function(err){
        console.log(err);
    });