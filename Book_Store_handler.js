const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();
const BookSchema = require('./schemas/bookSchema.js')
const Books = new mongoose.model("Books",BookSchema) //class  //creating a Model based on todoSchema for mapping (ODM)
//get all the todos
router.get('/',(req,res)=>{
     Books.find({},(err,data)=>{
            if(err){
            res.status(500).json({
                error: "POSTThere was a server side error!",
            });
              
            }
            else{
                res.status(200).json({
                    result: data,
                    message : "Books are viewed Successfully",
                }); 
        }
    })
})

//get a TODO
router.get('/:id',(req,res)=>{
    Books.find({_id:req.params.id},(err,data)=>{
        if(err){
        res.status(500).json({
            error: "There was a server side error!",
        });
          
        }
        else{
            res.status(200).json({
                result: data,
                message : "All the requested Books are viewed Successfully",
            }); 
    }
})
})

//Post a TODO

router.post("/",(req,res)=>{
    const newBooks = new Books(req.body);
     newBooks.save((err)=>{
        if(err){
            res.status(500).json({
                error: "There was a server side error!",
            });
              
            }
            else{
                res.status(200).json({
                    message : "Book was inserted successfully!",
                }); 
        }
            
            
        });
    
    
});

// POST Multiple TODOS
router.post('/all',(req,res)=>{
    Books.insertMany(req.body,(err)=>{
        if(err){
            res.status(500).json({
                error: "There was a server side error!",
            });
        }
        else{
            res.status(200).json({
                message : "All the Books  was inserted successfully!",
            }); 
        }
    })
})

//PUT a TODO
router.put('/:id',(req,res)=>{
    const result =    Books.findByIdAndUpdate({_id:req.params.id},{$set:{status:'inactive',ISBN:"11"}},{new :true, useFindAndModify:false}, (err)=>{
            if(err){
                res.status(500).json({
                    error: "There was a server side error!",
                })
            }
            else{
                res.status(200).json({
                    message : "Todo was Edited successfully!",
                }) 
            }
        })
    console.log(result)
});

//DELETE Multiple TODOS
router.delete('/:id',(req,res)=>{
     Books.deleteOne({_id:req.params.id},(err,data)=>{
        if(err){
        res.status(500).json({
            error: "There was a server side error!",
        });
          
        }
        else{
            res.status(200).json({
                result: data,
                message : "Todo was deleted successfully!",
            }); 
    }
})
})

module.exports = router;