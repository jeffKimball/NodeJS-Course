const fs = require('fs')

fs.writeFileSync('hello.txt', 'Hello from Node JS')



let promise = new Promise((resolve, reject) => {
    let success = true
    if (success) {
        resolve("Success!")  // "Success!" is passed to result in .then()
    } else {
        reject("Failed!")  // "Failed!" is passed to error in .then() and .catch()
    }
})
.then(
    result => console.log(result)  // Outputs "Success!" if promise resolves
)
.catch(
    error => console.log(error)     // Outputs "Failed!" if promise rejects
)
