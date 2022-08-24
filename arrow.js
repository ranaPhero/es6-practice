//  arrow diclareation step no 01:

function doubleIt(num){
    return num * 2;

}

const result = doubleIt(4);
console.log(result);

// step no 02

const doubleIt = function myFun(num){
    return num * 2;
}

const result = doubleIt(5);
console.log(result);

// step no 03 ES6

const doubleIt = num => num * 2;

const result = doubleIt(50);
console.log(result);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
 const result3 = doMath(7, 5);
 console.log(result3);

