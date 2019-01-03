const express = require(`express`)
const bodyParser = require(`body-parser`)
const app = express()
const path = require(`path`)

app.use(express.static(path.join(__dirname,`dist`)))
app.use(express.static(path.join(__dirname,`node_modules`)))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.listen(4000,function(){
    console.log(`Running on 4000`)
})