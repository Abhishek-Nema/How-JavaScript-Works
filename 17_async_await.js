// async function: async function always and always returns a promise
// if we don't return a promise but something else then that "something else" will auto. get wrapped inside promise

// aysc and await are used to handle promises

// await can only be used inside an async function

// fetch() returns a ResponseObject, after which we use .json() to get the api data

//  async/await is just a syntactical sugar for promises, js behind the scene uses promise only


// using promise
const pr = new Promise((resolve, reject) => {
    reject(new Error("promise rejected"))
})

function promiseTraditional() {
    pr.then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err.message);
    })
    console.log("this is normal promise way");
}

// using async and await
async function promiseAsyncAwaitWay() {
    const val = await pr
    console.log(val);
    console.log("this is async/await way");
}

promiseTraditional()
promiseAsyncAwaitWay().catch((err) => console.log(err.message));

// using fetch()
const API_URL = "https://api.github.com/users/abhisheknema22"

async function showAPIDetail() {
    const apiData = await fetch(API_URL)

    const finalData = await apiData.json()
    console.log(finalData);
}

showAPIDetail().catch(err => console.error(err.message));