let employees= [
    {name: 'Alice', age: 30, department: 'HR'},
    {name: 'Bob', age: 25, department: 'Engineering'},
    {name: 'Charlie', age: 35, department: 'Engineering'},]

// let filtereddata = employees.filter(emp => emp.age<35);
// let filtereddata = employees.filter(emp => emp.age<35).fill({id:1, name:'Test'});

// employees.filter(val => console.log(val));
// console.log('Filtered Data:', filtereddata);

// find method


let finddata = employees.find((val)=>{
    return val.age == 35
});

console.log('Find Data:', finddata);
