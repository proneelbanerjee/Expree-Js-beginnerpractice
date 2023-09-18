
const express = require('express')
const path = require('path')
const app = express()
const port = 3000


// app.use(express.static(path.join(__dirname, "public")))

app.get('/',(req,res) =>{
  res.send("Hello World")
})
app.get('/hello/:name', (req, res) => {
  res.send('Hello World!' +  req.params.name)
})

app.get('/about', (req, res) => {
res.send('about')
res.sendFile(path.join(__dirname, 'index.html'))
res.status(500)
    res.json({"Proneel": 13})
})

app.listen(port)


/**
 * "/abc" - handles /abc
 * "/ab?cd" - handles /acd or /abcd
 * "/ab+cd" - handles /abcd, /abbbcd, /abbbbbbbcd, etc
 * "/ab*cd" - "/ab" + anything + "cd"
 * /a/ - RegExp: anything that contains "a"
 * /.*man$/ - RegExp: anything that ends with "man"
 *
 */