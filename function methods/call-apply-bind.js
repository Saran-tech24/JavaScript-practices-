// let emp = {
//     name : "balan",
//     salary : "20000",
//     inro: function(a,b){
//         console.log(a+b+" "+this.salary);

//     }
// }

// console.log(emp.name);
// emp.inro(10,35)


// var name = "saran"

// let emp1 = {
//     name: "balan",
//     salary: "20000",
//     inro: (a, b) => {
//         console.log(this.name);

//     }
// }

// emp1.inro(10, 20)


let person = {
    pfname: "balan",
    plname: "lashmanan"
}

let person1 = {
    pid: "uq123",
    pfname: "saran",
    plname: "balan",
    intro: function (a, b) {
        console.log(this.pfname + " " + this.plname, + ' ' + (a + b));
        return (a + b)

    }
}

person1.intro(10, 20)
person1.intro.call(person, 10, 20)
person1.intro.apply(person, [100, 200])

let newfun = person1.intro.bind(person, 1000, 2000)

console.log(newfun());

