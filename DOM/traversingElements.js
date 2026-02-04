// // parent

// function traversingParent(){

//     let getparent = document.querySelector(".child1")
    
//     console.log(getparent.parentElement);
    
//     console.log(getparent.parentNode);
    
//     let getparent1 = document.querySelector("html")
    
//     console.log(getparent1.parentElement);
    
//     console.log(getparent1.parentNode);
// }




//child

// function selectchild(){

    // let getElementbyclass = document.querySelector(".parent")

    // console.log(getElementbyclass.childElementCount);
    // console.log(getElementbyclass.childNodes);
    // console.log(getElementbyclass.children );
    // console.log(getElementbyclass.firstChild );
    // console.log(getElementbyclass.firstElementChild );
    // console.log(getElementbyclass.lastChild );
    // console.log(getElementbyclass.lastElementChild );

// }

// selectchild()


// sibings

function selectsiblings(){

    let child1 = document.querySelector(".child1")

    console.log(child1.nextSibling);
    console.log(child1.nextElementSibling);
    console.log(child1.previousSibling);
    console.log(child1.previousElementSibling);
    
}

selectsiblings()