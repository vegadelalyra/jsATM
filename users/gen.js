// module to generate users
import { getRandomID } from "./cc"

export class genUser {
    constructor() {
        this.name = getLatinName()
        this.ID   = getRandomID()
        this.pass = genRanPass()
        this.type = setType()
    }
}