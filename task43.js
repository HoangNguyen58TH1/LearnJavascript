//  cả hai cái đều là bất đồng bộ hết, chỉ khác là Node co thì đảm bảo thứ tự làm việc như đồng bộ, còn promise all thì không đảm bảo.\

const fs = require('fs');
const co = require('co');

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

// readFilePromise('song1.txt')
//     .then(function(song){
//         console.log(song);
//     })
//     .catch(function(error){
//         console.log(error);
//         // console.log(error.stack);
//     })

co(function* () {
    // let song1 = yield readFilePromise('song1.txt');
    // let song2 = yield readFilePromise('song2.txt');
    // let song3 = yield readFilePromise('song33.txt');
    // return [song1, song2, song3];
    let value = yield [
        readFilePromise('song1.txt'),
        readFilePromise('song2.txt'),
        readFilePromise('song3.txt'),
    ];
    return value;
}).then(function (value) {
    console.log(value);
}).catch(function (error) {
    console.log(error);
})


let readFiles = co.wrap(function* (files) {
    //String --> [Promise]
    let values = yield files.map(function(file){
        return readFilePromise(file);
    });
    return values;
});

readFiles(['song1.txt', 'song2.txt', 'song3.txt'])
    .then(function(song){
        console.log(song);
    })
    .catch(function(error){
        console.log(error);
    });