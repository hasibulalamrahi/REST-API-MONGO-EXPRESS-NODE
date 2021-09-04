const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();
// const BookSchema = require('./Model/bookSchema.js')
 const Books = require('./Model/bookSchema.js')

// const Books = new mongoose.model("Books",BookSchema) //class  //creating a Model based on todoSchema for mapping (ODM)
//get all the todos
router.get('/',async(req,res)=>{
    try{
        const data =   await  Books.find({})
        res.status(200).json({
            result: data,
            message : "Books are viewed Successfully",
        }); 

    }
    catch(err){
        res.status(500).json({
            error: "There was a server side error!",
        });

    }

           
    })


//get a TODO
router.get('/:id',async(req,res)=>{
    try{
        const data =  await   Books.find({_id:req.params.id});
        res.status(200).json({
            result: data,
            message : "All the requested Books are viewed Successfully",
        }); 

    }
    catch(err){
        res.status(500).json({
        error: "There was a server side error!",
        });

    }
       
})


//Post a TODO

router.post("/",(async(req,res)=>{

    try{
        const newBooks = new Books(req.body);
        newBooks.save();
        res.status(200).json({
            message : "Book was inserted successfully!",
        }); 
    }
    catch(err){
        res.status(500).json({
            error: "There was a server side error!",
        });

    }
     
            
            
        }));
    
    


// POST Multiple TODOS
router.post('/all',async(req,res)=>{
    try{
        const data =  await   Books.insertMany(req.body)
        res.status(200).json({
            message : "All the Books  was inserted successfully!",
        }); 
    }
    catch(err){
        res.status(500).json({
            error: "There was a server side error!",
        });

    }
       
    })


//PUT a TODO
router.put('/:id',async(req,res)=>{
    try{
        const result =   await Books.findByIdAndUpdate({_id:req.params.id},{$set:{status:'inactive',ISBN:"11"}},{new :true, useFindAndModify:false});
        res.status(200).json({
            message : "Todo was Edited successfully!",
        }) 

    }
    catch(err){
        res.status(500).json({
            error: "There was a server side error!",
        })

    }
    // console.log(result)
      
 })

//  router.put('/:id',(req,res)=>{
//     const result =    Books.findByIdAndUpdate({_id:req.params.id},{$set:{status:'inactive',ISBN:"11"}},{new :true, useFindAndModify:false}, (err)=>{
//             if(err){
//                 res.status(500).json({
//                     error: "There was a server side error!",
//                 })
//             }
//             else{
//                 res.status(200).json({
//                     message : "Todo was Edited successfully!",
//                 }) 
//             }
//         })
//     console.log(result)
// });


//DELETE Multiple TODOS
router.delete('/:id',async(req,res)=>{
    try{
        const data =   await   Books.deleteOne({_id:req.params.id});
        res.status(200).json({
            result: data,
            message : "Todo was deleted successfully!",
        });
    }
    catch{
        res.status(500).json({
            error: "There was a server side error!",
        });
    }
        
})


module.exports = router;