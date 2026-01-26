let arr = [1,2,3,4,5]

let totalval =0;

for (let i = 0; i<arr.length; i++){
    totalval = totalval +arr[i]
}

console.log( totalval);


let totalval1 = arr.reduce(( acc, celem, ind, arr)=>{ return acc+celem}, 0)

console.log(totalval);


let employees =[
    {name : "scc", salary : 11000},
    {name : "sfasvcc", salary : 15000},
    {name : "sarab", salary : 12000},
    {name : "raam", salary : 10000}
]

let calcusalary = employees.reduce((acc, crrelme )=>{ return acc + crrelme.salary}, 0)

console.log(calcusalary);

