//Promise are used to handle asynchronous operation in javascript
//To solution the callback hell is promises.

//Promise is a javascript object that represent evantual completion or failure asynchronous operation  and resulting its final value.


//Basic example
// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('success')
//     },2000);
//     setTimeout(()=>{
//         reject('rejected')
//     },3000)
// });

// const myPromise = new Promise((resolve, reject) => {
//     let randomNumber = Math.floor(Math.random() * 10);
//     if (randomNumber > 5) {
//         resolve(randomNumber);
//     } else {
//         reject(new Error("Error: Number is less than or equal to 5"));
//     }
// });

// myPromise.then((data)=>{
//     console.log("success",data);
    
// }).catch((error)=>{
//     console.log("error",error);
    
// }).finally(()=>{
//     console.log('finally');
    
// })


// Handle multiple promises
// promise.race, promise.all, promise.any, promise.allSettled

//Promise.any
//This method takes an array of promises as input and and return single promise
//It will resolve if any of promise in an array is resolved with resolved value
//If alll the promises are rejected , promises will rejected with the error "Aggrogate error" All promises were rejected

// const promise1 = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//      resolve('promise 1 resoved')
//    },1000) 
// })
// const promise2 = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//      resolve('promise 2 resoved')
//    },2000) 
// })
// const promise3 = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//      resolve('promise 3 resoved')
//    },3000) 
// })
// Promise.any([promise1,promise2,promise3]).then((data)=>{
//     console.log(data);

// }).catch((error)=>{
//     console.log(error);
    
// })

//Promis.all
//This method takes array of promises as input and return all promises.
//Resolve when all promises in the array have resolved or rejected when all promises in the array have rejected

// const promise1 = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//      resolve('promise 1 resoved')
//    },1000) 
// })
// const promise2 = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//      resolve('promise 2 resoved')
//    },2000) 
// })
// const promise3 = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//      resolve('promise 3 resoved')
//    },3000) 
// })
// Promise.all([promise1,promise2,promise3]).then((data)=>{
//     console.log(data);

// }).catch((error)=>{
//     console.log(error);
    
// })

//Promise.reace
//This method takes array of promises as input and return a single promise
//It will return a promise as soon as any of the promise is either resove or rejected 
// const promise1 = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//      resolve('promise 1 resoved')
//    },1000) 
// })
// const promise2 = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//      resolve('promise 2 resoved')
//    },2000) 
// })
// const promise3 = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//      resolve('promise 3 resoved')
//    },3000) 
// })
// Promise.race([promise1,promise2,promise3]).then((data)=>{
//     console.log(data);

// }).catch((error)=>{
//     console.log(error);
    
// })

//Promise.allSettled
//This promise method is similer to promise.all method but it waits for all promise settle (either resolve or reject)
//It will return array of objects with the status of each promise
const promise1 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
     resolve('promise 1 resoved')
   },1000) 
})
const promise2 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
     resolve('promise 2 resoved')
   },2000) 
})
const promise3 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
     resolve('promise 3 resoved')
   },3000) 
})
Promise.allSettled([promise1,promise2,promise3]).then((data)=>{
    console.log(data);

}).catch((error)=>{
    console.log(error);
    
})
