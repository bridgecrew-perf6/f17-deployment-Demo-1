const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(cors(express.json))
app.use(cors())

const port = process.envPORT || 4000

app.listen(4000, () => console.log(`server running on 4000`))