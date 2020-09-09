// let i = 0;
// let intervalId = setInterval(function () {
//     i++;
//     console.log(i);
//     console.log(intervalId);
//     console.log(typeof intervalId);
//     if (i === 5) {
//         clearInterval(intervalId);
//     }
// }, 1000)
// console.log(intervalId);
// console.log(typeof intervalId);

//write a function from 1 to 10
//return a promise 

//try - setInterval || setTimeout
//try async await
function countFrom(a, b){
    return new Promise(function(resolve, reject){
        let intervalId = setInterval(function(){
            console.log(a);
            if(a === b){
                clearInterval(intervalId);
                return resolve();
            }
            a++;
        }, 500)
    })
}
countFrom(1,10)
    .then(() => {
        console.log('Done');    
    })
    .catch(() => {
        console.log('Stop');
    });