
//schema is structuring all the data following a certain structure

const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    ISBN :{
        type : String,
        required:true,

    },
    Author : {
        type : String,
        required:true        //we are specifying that the value must be within two options -Active and Inactive
    },
    Title : {
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Review:{
        type: Number,
        require:true
    },
    status : {
        type : String,
        enum : ['active','inactive']          //we are specifying that the value must be within two options -Active and Inactive
    },
    date:{
        type : Date,
        default : Date.now,
    }
});

// module.exports = bookSchema;
const BookSchema= mongoose.model('Book',bookSchema);
module.exports = BookSchema;