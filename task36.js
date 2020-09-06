// bronze 2%
// silver 5%
// gold 8%
// diamond 10%

const reallineSync = require('readline-sync');

var member = {
    name: 'Hoang',
};

var question = reallineSync.question('Your tier: ');
member.tier = question;

function calcuatorPrice(price, member) {
    // if (member.tier === 'bronze') {
    //     return price * 0.98;
    // } else if (member.tier === 'silver') {
    //     return price * 0.95;
    // } else if (member.tier === 'gold') {
    //     return price * 0.92;
    // } else if (member.tier === 'diamond') {
    //     return price * 0.9;
    // } else {
    //     return price;
    // }
    switch(member.tier){
        case 'bronze':
            return price * 0.98;
            break;
        case 'silver':
            return price * 0.95;
            break;
        case 'gold':
            return price * 0.92;
            break;
        case 'diamond':
            return price * 0.9;
            break;
        default:
            return price;
            break;
    }
}

var priceTotal = calcuatorPrice(500000, member);
console.log(priceTotal);