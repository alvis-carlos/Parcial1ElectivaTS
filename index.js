const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.get('/name', (req, res) => {
//     res.send('Hello Alvis')
//   })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
