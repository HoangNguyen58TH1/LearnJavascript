const fs = require('fs');
const co = require('co');

function readFilePromise(path){
    return new Promise(function(resolve, reject){
        fs.readFile(path, 'utf8', function(err, data){
            if(err){
                return reject(err);
            }
            else{
                return resolve(data);
            }
        });
    });
}

// readFilePromise('song1.txt')
//     .then(function(song){
//         console.log(song);
//     })
//     .catch(function(error){
//         console.log(error);
//     })

// co(function*(){
//     let arrSong = yield [
//         readFilePromise('song1.txt'),
//         readFilePromise('song2.txt'),
//     ]
//     return arrSong;
// }).then(function(arrSong){
//     console.log(arrSong);
// }).catch(function(error){
//     console.log(error);
// });

let readFiles = co.wrap(function*(files){
    //Array --> String = map.()
    //String --> Promise
    // _
    let arrSong = yield files.map(function(file){
        return readFilePromise(file);
    })
    return arrSong;
})

readFiles(['song1.txt', 'song2.txt', 'song3.txt'])
.then((arrSong) => {
    console.log(arrSong);
}).catch((err) => {
    console.log(err);
});
readFiles(['song1.txt', 'song2.txt'])
    .then((arrSong) => {
        console.log(arrSong);
    }).catch((err) => {
        console.log(err);
    });