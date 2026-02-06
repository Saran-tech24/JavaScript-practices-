let button1 = document.getElementById("listener") 
let button2 = document.getElementById("handler")


// button1.addEventListener( "click", function(){
//     console.log( " first listener");

//     // alert("first listener")
// })
// button1.addEventListener( "click", function(){
//     console.log( " seco listener");

//     // alert("first listener")
// }) 

// button2.onclick = function(){
//     console.log("first handler")
    
// }

// button2.onclick = function(){
//     console.log("second handler")
    
// }

// function firsthandler(){
//     console.log( "first handler");
    
// }

// function secondhandler(){
//     console.log( "second handler");
    
// }

let image = document.querySelector("img")
let para = document.querySelector("p")


 

image.addEventListener("mouseover", function(){
    image.src = "2023-Audi-R8-GT(32).jpg"
    para.innerText = "audi R8 gt"
})

image.addEventListener("mouseout", function(){
    image.src = "2023-Audi-R8-GT(29).jpg"
    para.innerText = "audi R8"
})