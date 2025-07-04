// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const c = [...a, ...b, 11, 12, 13]; 

// console.log(c); // Output: [1, 2, 3, 4, 5, 6, 11, 12, 13]


function abc(x, ...z) {
    console.log(x,z); 

}

abc(10,20,30,40,50); // Output: 10 [20, 30, 40, 50] 