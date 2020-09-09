let arrayInitial = [{
        id: 1,
        name: "A",
        rep: 3
    },
    {
        id: 2,
        name: "B",
        rep: 5
    },
    {
        id: 3,
        name: "C",
        rep: 3
    },
    {
        id: 4,
        name: "D",
        rep: 4
    },
    {
        id: 5,
        name: "E",
        rep: 5
    },
]

console.log(arrayInitial);

//get element first
let getArray = arrayInitial.shift();
console.log(getArray);
console.log(arrayInitial);

//connect element first with element difference
function connectArray(arrayFirst) {
    let arrayDouble = [];
    arrayDouble.push(arrayFirst)
    for (let i = 0; i < arrayInitial.length; i++) {
        arrayDouble.push(arrayInitial[i]);
        console.log(arrayDouble);
    }
    // console.log(arrayDouble);
}
connectArray(getArray);
