// const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element *element;
//     output.push(result);
// }
// console.log(output);

// let name = 'john';

// function greeting(){
//     let message = 'Hi';
//     console.log(message);
  
// }

// greeting();

// function greeting() {
//     let message = 'Hi';

//     function sayHi() {
//         console.log(message);
//     }

//     sayHi();
// }


// greeting();

const nums = [1,2,3,4,5,6,7,8];
// const part = nums.slice(2, 5);

const removed = nums.splice(2,5);
 
console.log(removed);
console.log(nums);