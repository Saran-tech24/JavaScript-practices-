let person = {
    pnmae : "saran",
    age : 29
}
//  console.log(person );
 

// //  object.create

// let newObj = Object.create( person )
// newObj.location = "tamilnadu"

// console.log(Object.getPrototypeOf(newObj));


// console.log(newObj.__proto__);

// // console.log(newObj.age);

// // console.log(newObj);


// // object assign


// let person1 = {
//     id : "e356",
//     nmae1: "balan"
// }

// Object.assign(person1 , { role : 'fullstack developer', salalry : 25000})

// console.log(person1);


// object.entries

let multiarr = Object.entries(person)

multiarr.push(["role", "developer"])

console.log(multiarr);

// // object.fromentries


// let normalobj = Object.fromEntries(multiarr )
  
// console.log(normalobj);

// // object.keys

// let key = Object.keys(normalobj)

// console.log(key);


// let values = Object.values(normalobj)

// console.log(values);


// // object.freeze

// let emp = {
//     id: "3223"
// }
//  Object.freeze(emp)

//  emp.name = "saran"
//  emp.id = "bsbv"

//  console.log(emp);
 
// //  object.isfrozen

// console.log(Object.isFrozen(emp));
// console.log(Object.isFrozen(person));




