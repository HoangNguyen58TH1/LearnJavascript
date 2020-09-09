// setTimeout(fn, time)
// time = calculator miliseconds
// wait time done --> run function().
let done = function(){
    console.log('2');
}

console.log('1');
// setTimeout(function done(){
//     console.log('2')
// }, 1000);
let timeoutId = setTimeout(done, 1000);
console.log('3');
console.log('4');
console.log('5');
console.log('6');
// clearTimeout(timeoutId);