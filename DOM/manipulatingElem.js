function manipulateElem(){
    // let newlistElement = document.createElement("li")

    // console.log( newlistElement);

    // newlistElement.innerText = "<a>link</a>item-5"
    // newlistElement.innerHTML = "<a>link</a>item-5"
    // newlistElement.textContent = "<a>link</a>item-5"


    let newlistElement = document.createElement("li")



    let input = document.querySelector("input")

    // console.log(input.value);

    newlistElement.innerText = input.value

    // console.log( newlistElement );

    let orderlist = document.querySelector("ol")


    // orderlist.append(newlistElement)

    // orderlist.append("text node", newlistElement)

    // orderlist.appendChild( newlistElement )
    
    // orderlist.insertBefore( newlistElement, orderlist.children[2])

    // orderlist.replaceChild( newlistElement, orderlist.children[2])
    

    // orderlist.removeChild(orderlist.children[0])

    // orderlist.remove()


    //  dynamic cascading
     newlistElement.style.color= "white"

    //  newlistElement.style.boxShadow = " 3px 3px 5px white"

     newlistElement.style.textShadow = " 10px 10px 5px white"


    // orderlist.prepend( newlistElement )

    orderlist.appendChild( newlistElement )



     
}  