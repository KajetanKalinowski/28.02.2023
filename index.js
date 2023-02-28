const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3000

app.get("/:imie/:nazwisko",function(req,res){
    const imie = req.params.imie
    const nazwisko = req.params.nazwisko
    res.send(imie+" "+nazwisko)
    console.log(imie)
    console.log(nazwisko)
})
app.listen(port)