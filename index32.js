const fs = require('fs');
var reallineSync = require('readline-sync');

var readFileJson = fs.readFileSync('index32.json', {
    encoding: 'utf-8'
})
var parseStudent = JSON.parse(readFileJson);
var arrayStudent = parseStudent.student;
// console.log(arrayStudent);

// 3 cau hoi
console.log('1. List Students');
console.log('2. Add Student');
console.log('3. Save and Exits');

while (option != 3) {
    var option = reallineSync.question('Your option is: ');

    switch (Number(option)) {
        case 1:
            console.log(arrayStudent);
            break;
        case 2:
            var student = {};
            var name = reallineSync.question('name: ');
            var age = reallineSync.question('age: ');
            var gender = reallineSync.question('gender: ');
            student.name = name;
            student.age = Number(age);
            student.gender = gender;

            arrayStudent.push(student);
            console.log(arrayStudent);
            break;
        case 3:
            break;
    }
}
