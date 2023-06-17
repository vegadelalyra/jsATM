import axios from "axios"
import { load } from "cheerio"


const url = 'https://www.randomlists.com/data/names-first-spanish.json'
axios.get(url)
.then(x => console.log(x.data.data))