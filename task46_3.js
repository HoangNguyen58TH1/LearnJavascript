//setInterval
// function countNumber(a, b) {
//     return new Promise(function (resolve, reject) {
//         if (isNaN(a)) {
//             return reject('Error, param 1 không phải là number');
//         } else if (isNaN(b)) {
//             return reject('Error, param 2 phải là number');
//         } else if (a >= b) {
//             return reject('Error, a phải < b');
//         } else {
//             let intervalId = setInterval(function () {
//                 console.log(a);
//                 a++;
//                 if (a === b + 1) {
//                     clearInterval(intervalId);
//                     return resolve('Done');
//                 }
//             }, 500);
//         }
//     });
// }

//setTimeout
// function countNumber(a, b) {
//     return new Promise(function (resolve, reject) {
//         if (isNaN(a)) {
//             return reject('Error, param 1 không phải là number');
//         } else if (isNaN(b)) {
//             return reject('Error, param 2 phải là number');
//         } else if (a >= b) {
//             return reject('Error, a phải < b');
// } else {
//     let timeoutId = setTimeout(function () {
//         for (let i = a; i <= b; i++) {
//             console.log(i);
//             if (a === b + 1) {
//                 clearTimeout(timeoutId);
//                 return resolve('Done à');
//             }
//         }
//     }, 1000);
// }
//     });
// }

//Async Await
function done(){
    return new Promise(function(resolve, reject){
        console.log(a);
        a++;
        if (a === b + 1) {
            return resolve('Done');
        }
    });
}

async function countNumber(a, b) {
    let data = await done();
    return data;
}

countNumber(1, 3)
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
    });

//dùng setInterval OK 
//setTimeout .
//async await .