require('../Backend/db/conn')
const express = require('express');
const app = express()
const port = 5000 || process.env.port
const path = require('path')
const hbs = require('hbs')
const Clinet = require('../Backend/models/userMessage');
const Client = require('../Backend/models/userMessage');



//Set the Public folder
const PublicPath = path.join(__dirname,"../public");
// console.log(PublicPath);




//set the view engine as hbs
app.set('view engine','hbs')

//set the temp view Path
const tempPath = path.join(__dirname, '../templates/views')
app.set("views", tempPath)

//set the patial Path
const PartialPath = path.join(__dirname, "../templates/partials")
hbs.registerPartials(PartialPath)



//setting bootstrap and Jquery
app.use('/css',express.static(path.join(__dirname,'../node_modules/bootstrap/dist/css')))
app.use('/js',express.static(path.join(__dirname,'../node_modules/bootstrap/dist/js')))
app.use('/jq',express.static(path.join(__dirname,'../node_modules/jquery/dist')))

app.use(express.static(PublicPath))


//Imp fecthing data 
app.use(express.json())
app.use(express.urlencoded({extended:false}))




app.get("/", (req, res) => {
    res.render("index")
})
app.get("/contact", (req, res) => {
    res.render("contact")
})

app.post("/contact", async (req, res) => {
    try {
        // console.log(req.body.name)
    
        const UserData = new Client({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            message:req.body.message
        })
       await UserData.save()
        // console.log(result);
        res.status(201).render("index")
        
    } catch (error) {
        res.status(500).send(error)
        
    }
})

app.listen(port,() => {
    console.log(`server Is Running at port on ${port}`);
})