const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require("body-parser")
const mongoose = require("mongoose")//connect to mongoDB

const MongoConnectionLink = 'mongodb+srv://admin:Tamulis1@cluster0.rrzen.mongodb.net/shoes?retryWrites=true&w=majority';
mongoose.connect(MongoConnectionLink, {useNewUrlParser: true});

//schema
const Schema = mongoose.Schema;
var shoeSchema = new Schema({
    shoeName:String,
    size:String,
    photo:String
});
var ShoeModel = mongoose.model("shoes", shoeSchema);

//cors
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
    

app.use(bodyParser.urlencoded({extended: false}))

//parse aplication/json
app.use(bodyParser.json())

app.get('/api/shoes', (req, res)=>{

    ShoeModel.find((err, data)=>{
    res.json(data);
})
})

//delete method
app.delete('/api/shoes/_id', (req, res)=>{
    console.log("Remove Shoe: " + req.params._id);
    ShoeModel.findByIdAndDelete(req.params._id, (err, data)=>{
        res.send(data);
    })
})

//listen for get requests 
app.get('/api/shoes/_id', (req, res)=>{
    console.log(req.params._id);
    BasicBook.findById(req.params._id, (err, data) =>{
        res.json(data);
    })
})

//receiving data from application
app.post('/api/shoes', (req, res)=>{
    console.log('Shoe received, thank you!');
    console.log(req.body.shoeName);
    console.log(req.body.size);
    console.log(req.body.photo);

    BasicShoe.create({
        shoeName:req.body.shoeName,
        shoeName:req.body.size,
        photo:req.body.photo
    })

    res.send('Shoe added to library');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})