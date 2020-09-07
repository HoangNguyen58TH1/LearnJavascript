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
    // .then(readFile('song2.txt'))
    .then(onDone)
    .catch(onError);

// 1.
// DAY GOI LA THAM CHIEU TEN FUNCTION
// onDone vs onDone(param)
// Truyền hàm với tên hàm bản chất là như nhau (tên hàm đại diện cho cả cái hàm đó)

// 2.
//.then() thì trong "then" phải là 1 function, vì vậy nên k thể truyền vào cả readFile("song2.txt") được mà phải return ra cái readFile, onDone là 1 function, còn onDone() nó lại là thực thi function
// method .then trả về 1 promise bạn nhé

//tai sao khong
//  .then(readFile('song2.txt')) luon ma phai
// --
//  .then(function(){
//     return readFile('song2.txt')
// })

// 3.
// research Promise