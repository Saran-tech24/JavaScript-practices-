let heading = document.getElementsByTagName("h1")

console.log(heading);

let para1 = document.getElementsByClassName("para1")

console.log(para1 );

let uniqpara = document.getElementById("uniq para")

console.log(uniqpara);

let nameattribute = document.getElementsByName("input-1")

console.log(nameattribute);


// let selectone = document.querySelector("h1")
// let selectone = document.querySelector(".para1") //class selector 
let selectone = document.querySelector("#uniq para") // id selector

console.log(selectone);

// let multiElements = document.querySelectorAll("h1")
// let multiElements = document.querySelectorAll(".para1")
let multiElements = document.querySelectorAll("#uniq-para")



console.log(multiElements);

let newElement = document.createElement("h2")

newElement.innerHTML = " welcome to the DOM "


console.log(newElement);

document.body.append( newElement ) // add the tag in the page