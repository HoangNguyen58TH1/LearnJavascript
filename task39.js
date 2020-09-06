const fs = require('fs');

// console.log('Start');
// let song1 = fs.readFileSync('song1.txt','utf-8');
// console.log(song1);
// let song2 = fs.readFileSync('song1.txt','utf-8');
// console.log(song2);
// console.log('End');
console.log('Start');
fs.readFile('song1.txt',  function(err, data){
  console.log(data);
})
fs.readFile('song2.txt',  function(err, data){
  console.log(data);
})
console.log('End');

// let readFile = fs.readFileSync('task38.json', 'utf-8');
// console.log(readFile);
// let parseJson = JSON.parse(readFile);
// console.log(parseJson.students[1].name);

