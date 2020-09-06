'use strict';
const reallineSync = require('readline-sync');
const fs = require('fs');

var arrayStudent = [];

function showMenu() {
    console.log("1. Show list students");
    console.log("2. Add a student");
    console.log("3. Save files and exits");
}

function loadData() {
    let readFiles = fs.readFileSync('task38.json', 'utf-8');
    let parseJson = JSON.parse(readFiles);
    arrayStudent = parseJson.students;
}

function showStudents() {
    console.log('Name' + '\t\t' + 'Class' + '\t\t' + 'Gender');
    for (let student of arrayStudent) {
        console.log(student.name + '\t\t' + student.classRoom + '\t\t' + student.gender);
    }
}

function addStudent() {
    let student = {}
    let name = reallineSync.question('Name: ');
    let classRoom = reallineSync.question('ClassRoom: ');
    let gender = reallineSync.question('Gender: ');
    student.name = name;
    student.classRoom = classRoom;
    student.gender = gender;
    arrayStudent.push(student);
}

function saveAndExist() {
    let objectJson = {
        students: arrayStudent
    };
    let stringObjectJson = JSON.stringify(objectJson);
    fs.writeFileSync('task38.json', stringObjectJson);
}

function main() {
    showMenu();
    loadData();
    while (option != 3) {
        var option = reallineSync.question('Your option: ');
        switch (parseInt(option)) {
            case 1:
                showStudents();
                break;
            case 2:
                addStudent();
                break;
            case 3:
                saveAndExist();
                break;
        }
    }
}
main();