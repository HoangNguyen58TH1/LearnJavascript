'use strict';
const fs = require('fs');
const reallineSync = require('readline-sync');

var readFiles = fs.readFileSync('task38.json', {
    encoding: 'utf-8'
});
var parseJson = JSON.parse(readFiles);
var getStudents = parseJson.students;

function showtStudent(arrayStudent) {
    let araayStudents = arrayStudent.map(function (student) {
        return 'Name: ' + student.name + ',' + ' ClassRoom: ' + student.classRoom + ',' + ' Gender: ' + student.gender;
    })
    return araayStudents;
}

function showMenu() {
    console.log("1. Show list students");
    console.log("2. Add a student");
    console.log("3. Save files and exits");
    while (option != 3) {
        var option = reallineSync.question('Your option: ');
        switch (Number(option)) {
            case 1:
                var listStudents = showtStudent(getStudents)
                console.log(listStudents);
                break;
            case 2:
                var student = {};
                var name = reallineSync.question('Name: ');
                var classRoom = reallineSync.question('ClassRoom: ');
                var gender = reallineSync.question('Gender: ');

                student.name = name;
                student.classRoom = classRoom;
                student.gender = gender;

                getStudents.push(student);
                var listStudentsNew = showtStudent(getStudents);
                console.log(listStudentsNew);


            case 3:

                console.log('Save and Exits');
                break;
            default:
                console.log('Enter again...');
        }

    }
}

function main() {
    showMenu();
}

main();