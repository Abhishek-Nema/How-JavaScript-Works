// Promise.all([]) : It is used to handle multiple api calls together, make parallel api calls

// case_1, when all get success
// it will wait for all of them to get finish and gives an array of result

// case_2, if any one will get rejected
// then output will be error, as soon as error comes then it will not wait for other promises but immediately returns error

// Promise.allSettled([])

// case_1, when all get success
// it will wait for all of them to get finish and gives an array of result

// case_2, if any one will get rejected
// it will wait for all the promises to get settled and returns an array with result

// Promise.race([]) , returns value of first settled promise
// It returns result of first settled promise, if success then result will be returned, if failure then error will be returned

// Promise.any([]) , returns value of first settled fulfilled promise
// It waits for first settled promise which will be success and return that

// case : what if everything fails
// it will retrun AggregateError i.e. array of errors inside object


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("P1 fulfilled")
        reject("P1 rejected")
    }, 3000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("P2 fulfilled")
        reject("P2 rejected")
    }, 10000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("P3 fulfilled")
        reject("P3 rejected")
    }, 2000)
})


// Promise.all([p1, p2, p3])
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

// Promise.allSettled([p1, p2, p3])
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

// Promise.race([p1, p2, p3])
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

Promise.any([p1, p2, p3])
    .then((result) => console.log(result))
    .catch((err) => console.log(err.errors))