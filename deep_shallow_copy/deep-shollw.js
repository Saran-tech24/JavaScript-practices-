// deep copy

// let a = 10;
// let b = a;

// a = 20;
// console.log( a,b );  

// let obj1 = { x: 10, y: 20 };
// let obj2 = { ...obj1 };

// obj2.x = 100;

// console.log( obj1, obj2);

// object shallow copy

// let person = {
//     name: 'John',
//     age: 30,
//     hobbies: {
//         cricket: 'playing',
//         football: 'watching'
//     }
// }

// let person2 = { ...person, hobbies: { ...person.hobbies } };

// // let person3 =  JSON.stringify( person ) ;

//deep copy
// let newobj = JSON.parse( JSON.stringify( person ) );
 
// person.age = 35;


// person.hobbies.cricket = 'coach';

// console.log(person, person2);



// console.log( newobj);

// array shallow copy
let arr1 = [ 10, 20, 30, [ 40, 50 ] ];

let arr2 = [ ...arr1 ];

// deep copy
let newarr = JSON.parse( JSON.stringify( arr1 ) );

arr1[0] = "one"
arr1[3][0] = "forty";

newarr[3][0] = "new forty";

console.log( arr1,arr2 );
console.log(newarr);

