// array like object
function sum(a, b, c){
    const args = [...arguments]; // argument value convarted by array
    // console.log(args);
    const result = a + b + c;
    return result;
}
// console.log(arguments);
const total = sum(45, 89, 12, 45, 98, 56);
// console.log(sum.length);

function add(a,b) {
    let sum = 0
    const args = [...arguments];  // arguments value convarted by array 
    for (const number of args) {  // take this element using for of
        sum = sum + number;       // than sum the value and return sum value
    }
    return sum;
}

console.log(add(3,5,6,8))