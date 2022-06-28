const Mongoose=require('mongoose');

const blogSchema=Mongoose.Schema({
    title :{
        type:String,
        require:true
    },
    body:{
        type:String,
        require:true
    }
},{ Timestamp: true})

module.exports=Mongoose.model('Blog',blogSchema) ;