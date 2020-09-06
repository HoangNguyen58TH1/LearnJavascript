const fs = require('fs');

// sync
// console.log('Start');
// let song1 = fs.readFileSync('song1.txt', 'utf8');
// console.log(song1);
// let song2 = fs.readFileSync('song2.txt', 'utf8');
// console.log(song2);
// let song3 = fs.readFileSync('song3.txt', 'utf8');
// console.log(song3);
// console.log('End');

// async
//Callback Hell
console.log('Start');
fs.readFile('song1.txt', 'utf8', function (err1, song1) {
    console.log(song1);
    fs.readFile('song2.txt', 'utf8', function (err1, song2) {
        console.log(song2);
        fs.readFile('song3.txt', 'utf8', function (err1, song3) {
            console.log(song3);
        });
    });
});

console.log('End');