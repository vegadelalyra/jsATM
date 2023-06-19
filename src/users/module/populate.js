import { User } from "./User.js"

let usersList = []

for (let i = 0; i < 10; i++) {
    usersList.push ( new Promise ( async r => {
        let user = new User()
        await user.fetchName()
        r(user)
    }))
}

console.time('TIME')
usersList = await Promise.all(usersList)
console.timeEnd('TIME')

export { usersList }

// test
// console.log(usersList)