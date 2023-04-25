
// throw new Error("cusom error")

let num1 = 1;
let num2 = 2

function doSomething() {
    console.log("do-somethings");
}

// setTimeout(doSomething, 3000)
// setTimeout(() => { console.log("inside set-timeout-2"); }, 3000)

function sum(a, b) {
    return a + b;
}

try {

    let first_name = "ram"
    let last_name = "last-name"
    console.log(first_name + last_name);

} catch (err) {
    console.log("error", err.message)
}


console.log(num1)
console.log(num2)
console.log(sum(1, 10))

/* promise
     - pending
     - resolve
     - reject
*/




function fetchUsersData() {

    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("server error")
            // reject([{ name: "css" }, { name: "js" }])
        }, 5000)

    })

    console.log("before-promise");

    promise1
        .then((res) => { console.log(res) })
        .catch((err) => { console.log(err) })


    console.log("after-promise");

}

async function fetchUsersDataAndWait() {

    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject("server error")
            resolve([{ name: "css" }, { name: "js" }])
        }, 5000)

    })

    console.log("before-promise");

    let promise_data = await promise1
    console.log("promise-data",promise_data);


    console.log("after-promise");

}

fetchUsersDataAndWait();

// fetchUsersData()





