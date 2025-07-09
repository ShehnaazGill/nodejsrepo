console.log("Hello World");

/////////// ADDITION

// var x = 20
// var y = 30
// console.log(x + y);

////////// CONST  (it gives an error)

// var x = 20
// var y = 30
// const z = 30
// z = 20
// console.log(x + y + z);

///////// CONDITIONS

// var x = 20
// if(x == 20){
//     console.log('Matched');
// }

//////////////////

// var x = 20
// if(x === '20'){
//     console.log('Matched');
// }
// else{
//     console.log('Not Matched');
// }

/////////// FOR LOOP

// for(i = 0 ; i <= 10 ; i++){
//     console.log(i);
// }

////////// ARRAY

// const array = [1 , 2 , 3 , 4 , 5];
// console.log(array[3]);

////////// FILTER

// const a = [1,2,3];
// a.filter((i) => {
//     console.log(i);
// })

///////////////

// const a = [1 , 3 , 3 , 2 , 3 , 4 , 5 , 6 , 7];
// const result = a.filter((i) => {
//     return i === 3 
// })
// console.log(result);

///////////////

const a = [1 , 3 , 3 , 2 , 3 , 4 , 5 , 6 , 7];
const result = a.filter((i) => {
    return i >= 5 
})
console.log(result);