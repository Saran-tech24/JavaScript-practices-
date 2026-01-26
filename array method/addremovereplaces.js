let arr =[10,20,30,40,50];

// // add element at the end
// arr.push(60,70, 80);
// console.log(arr); // [10,20,30,40,50,60]

// remove element from the end
// let lastElement = arr.pop();
// console.log(lastElement, arr); // [10,20,30,40,50]

// // add element at the beginning
// arr.unshift(0);
// console.log(arr); // [0,10,20,30,40,50]

// remove element from the beginning
// arr.shift(10);
// console.log(arr); // [10,20,30,40,50]

// // add/remove/replace element at a specific position
// // splice(starting index, number of elements to be removed, elements to be added)
arr.splice(2, 2, 25, 27);
console.log(arr); // [10,20,25,27,50]