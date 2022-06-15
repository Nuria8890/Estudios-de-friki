const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(function (req, res, next) {
  res.set('Cache-control', 'no-cache, no-store, must-revalidate, max-age=0')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
