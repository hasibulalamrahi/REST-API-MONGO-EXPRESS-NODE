const express = require('express');
const mongoose = require('mongoose')
const bookStoreHandler = require('./Book_Store_handler.js');

const app = express();
app.use(express.json())

mongoose.connect('mongodb://localhost/bookStore',{
    useNewUrlParser : true ,
    useUnifiedTopology : true
})
.then(()=>{
    console.log('Connection with DB is successful')
})
.catch((err)=>{
    console.log(err)
})

app.use('/booklist',bookStoreHandler)

function errorHandler(err,req,res,next){
    if(res.headersSent){
        return next(err);
    }
    res.status(500).json({error:err});
}

app.listen(3000,()=>{
    console.log("app is listening at port 3000")
})