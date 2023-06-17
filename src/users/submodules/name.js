// sub module to fetch users spanish names 
import { genRamNum } from "./randomize.js"

export async function fetchName() {
    // MAIN LOGIC [BEGINNING]

    // Dynamyze website URL were spanish names lists resides 
    const baseURL = 'http://randomlists.com/data/'
    const reqURL = name => baseURL + `names-${name}-spanish.json` 
    
    // Concurrently get a random name 
    return await Promise.all([
        getName(reqURL('first')), // first name
        getName(reqURL('last'))  // last name
    ]).then(([first, last]) => `${first} ${last}`)

    // MAIN LOGIC [ENDING]


    // WORKLOAD. REQUIRED FUNCTIONS FOR THE SCRIPT TO HAPPEN.

    // Fetch names from the given URL
    async function getName(URL) {
        const req = await fetch(URL)
        const list = await req.json()
        .then(list => list.data)

        // pick a random first or last name
        const thisList = list.length - 1        
        return list[pickAnyFrom(thisList)]
    }

    // Callback to pick a random item from an array
    function pickAnyFrom(many) { return genRamNum(many, 0) }
}

// test
// console.log(await fetchName())