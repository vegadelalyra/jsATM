import browserSync from 'browser-sync'
import express from 'express'
import { usersList } from './src/entryPoint.js'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

browserSync.create()

const moduleURL = new URL(import.meta.url)
const filePath = fileURLToPath(moduleURL)
const directoryPath = dirname(filePath)

// const html = join(directoryPath, 'index.html')

const app = express()
const port = 3000

app.use(express.static(join(directoryPath, 'public')))

app.get('/', async (req, res) => {
    //const options = {  headers: { 'Content-Type': 'text/html; charset=utf-8' }, }
    // res.sendFile(html, options)
    const miau = usersList.map(user => user.name)
    const ended = miau.join('\n')
    console.log(ended)
    res.send(ended)

})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)

    browserSync.init({
        proxy: `http://localhost:${port}`,
        files: ['public/**/*'],
        browser: 'chrome',
        port: 7_000
    })
})