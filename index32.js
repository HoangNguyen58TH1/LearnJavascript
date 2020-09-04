const fs = require('fs');
const reallineSync = require('readline-sync');

var readFile = fs.readFileSync('index32.json', 'utf-8');
// console.log(readFile);
var parseJSON = JSON.parse(readFile);
var arrayStudents = parseJSON.students;
// console.log(arrayStudents);

console.log('1. Show all students');
console.log('2. Add a student new');
console.log('3. Save and exits');

while (option != 3) {
    var option = reallineSync.question('Your option is: ');

    switch (Number(option)) {
        case 1:
            console.log(arrayStudents);
            break;
        case 2:
            // console.log('2');
            var student = {}
            var name = reallineSync.question('Name:');
            var age = reallineSync.question('Age:');
            var gender = reallineSync.question('Gender:');

            student.name = name;
            student.age = Number(age);
            student.gender = gender;
            console.log(student);
            arrayStudents.push(student);
            break;
        case 3:
            console.log('Save and Exits...!');
            break;
        default:
            console.log('Please enter option is 1 or 2 or 3 ...! ');
    }
}