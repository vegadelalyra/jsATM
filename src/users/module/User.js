// module to generate users
import { 
    setType, genRanPass, 
    getRandomID, fetchName
} from "../submodules.js"

export class User {
    constructor() {
        this.type = setType()
        this.ID = getRandomID()
        this.genRanPass() // rare bug xd
    }

    async genRanPass() { this.pass = await genRanPass() }
    async fetchName() { this.name = await fetchName() }
}

// test
const octavio = new User()
await octavio.fetchName() // rare bug xd
console.log(octavio)