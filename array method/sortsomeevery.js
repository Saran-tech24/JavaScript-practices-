let arr =[5, 3, 8, 1, 2];

let newarr = arr.sort((a, b) => {return b - a});

console.log(newarr); 

let newarr2 = [10, 20, 30, 40, 50, true, "100"]

let descsort = newarr2.sort((a, b) => { return b - a});

// b- a => positive => swapping do
// b- a => negative => no swapping

console.log(descsort);