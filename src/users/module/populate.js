import  "./User.js"
import os from 'os'
import cluster from "cluster"

const numCPUs = os.cpus().length

if (cluster.isPrimary) {
    for (let i = 0; i < 1; i++) cluster.fork()
} else {
    console.log('Hello from', process.pid)
    
    // process.exit(0)
}

let usersList = []


// test
console.log(usersList)