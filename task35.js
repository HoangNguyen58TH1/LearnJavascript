// < 18 tuoi --> discount 20%
// > 55 tuoi --> discount 10%
// otherwise --> initial
const reallineSync = require('readline-sync');

function getTicketFee(age) {
    var baseFee = 10000;

    if (age <= 18) {
        return baseFee * 0.8;
    } else if (age >= 55) {
        return baseFee * 0.9;
    } else {
        return baseFee;
    }

}

// var person = {
//     name: 'Hoang',
//     age: 22
// };

var age = reallineSync.question('Yout age: ');
var fee = getTicketFee(age);
console.log(fee);