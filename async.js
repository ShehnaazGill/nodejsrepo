// console.log('start exe......');
// console.log('logic exe......');
// console.log('complete exe.......');



// Using settimeout function

// console.log('start exe......');

// setTimeout(() => {
//     console.log('logic exe......');
// }, 2000);

// console.log('complete exe.......');

// Its Drawback

// let a = 10;
// let b = 0;
// setTimeout(() => {
//      b = 20
// }, 2000);

// console.log(a + b);

///// HANDLE ASYNC DATA

// let a = 20
// let waitingData = new Promise((resolve , reject) => {
//      setTimeout(() => {
//           resolve(30)
//      }, 2000);
// })

// waitingData.then((data) => {
//      b= data
//      console.log(a + b);
     
// })


//////// CALL STACK / NODE APIS / CALLBACK QUEUE /////// (How Node JS Works?)

console.log("Started");

setTimeout(() => {
     console.log("2 Seconds");
}, 2000);

setTimeout(() => {
    console.log("0 Seconds");
}, 0);

console.log("Finished");

