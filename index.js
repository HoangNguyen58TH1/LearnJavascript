var reallineSync = require('readline-sync');

// var userName = reallineSync.question('May I your name?');
// console.log('Hi ' + userName + ' !');

// var language = [];
// var languageMother = reallineSync.question('Which your mother language ? ');
// console.log(languageMother);

// language.push(languageMother);
// console.log(language);

var pet = {};

var name = reallineSync.question('What is your pet name: ');
pet.name = name;

var weight = reallineSync.question('Weight: ', {
    hideEchoBack: true,
});
pet.weight = Number(weight);

var color = reallineSync.question('Color: ', {
    hideEchoBack: !false,
    
});
pet.color = color;

console.log(pet);