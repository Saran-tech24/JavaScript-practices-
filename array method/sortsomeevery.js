// some & every

let arr1 = [1,2,3,4,5]

let value = arr1.some( (ele, ind, arr) => {
    return ele%2 == 0
})

let value1 = arr1.every( (ele, ind, arr) => {
    return ele%2 == 0
})

console.log( value1);
 

