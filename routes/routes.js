const express=require('express');
const app=express();
const router=express.Router();
const Blog=require('../models/Blogs');

app.set('view engine','ejs');


//get all blogs
router.get('/',(req,res)=>{
    Blog.find().sort({ createdAt : -1 })
    .then(response=> {
    // res.send(response)
    res.render('index.ejs',{
        response
    })
    })
    .catch(err=> console.log(err))
})

//create new post
router.get('/new-post',async (req,res)=>{
    res.render('createPost.ejs')

})

router.post('/post',async(req,res)=>{
    if(req.body.title || req.body.body){
    const blog=new Blog({
        title : req.body.title,
        body : req.body.body
    });

   await blog.save()
   .then( response => res.redirect('/') )
}
})

//Getting single post
router.get('/post/:id', (req,res)=>{
    Blog.findById({_id : req.params.id})
    .then(response=> res.render('singlePost.ejs', { post : response}))
    .catch(err=> console.log(err))
})

//Update post
router.patch('/post/:id',(req,res)=>{

    Blog.findById({ _id: req.params.id })
    .then((post)=> {
    if(req.body.title) post.title=req.body.title
    if(req.body.body) post.title=req.body.body

    post.save()
    .then(()=> res.redirect('/'))
    })
    .catch(err=> console.log(err));

})

//Delete Post
router.delete('/post/:id',(req,res)=>{
    Blog.deleteOne({ _id: req.params.id })
    .then(()=> res.json({redirect: "/"}))
    .catch(err=> console.log(err));
})

//Default route
router.use((req,res)=>{
    res.send('Oops ! 404 Page not found');
})


module.exports = router;