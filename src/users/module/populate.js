import { User } from "./User.js"

let usersList = []

for (let i = 0; i < 10; i++) {
    usersList.push ( new Promise ( async r => {
        let user = new User()
        await user.fetchName()
        r(user)
    }))
}

usersList = await Promise.all(usersList)
export { usersList }

// test
// console.log(usersList)