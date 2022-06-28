const Blog=require('../models/Blogs');

//get all blogs
const blog_index=(req,res)=>{
    Blog.find().sort({ createdAt : -1 })
    .then(response=> {
    res.render('index.ejs',{
        response
    })
    })
    .catch(err=> console.log(err))
}

//create blog page render
const blog_create_get=(req,res)=>{
    res.render('createPost.ejs');
}

//create new blog
const blog_create_post=(req,res)=>{
    const blog=new Blog({
        title : req.body.title,
        body : req.body.body
    });
   blog.save()
   .then(() => res.redirect('/blog/') )
}

//get single blog
const blog_details=(req,res)=>{
    Blog.findById({_id : req.params.id})
    .then(response=> res.render('singlePost.ejs', { post : response}))
    .catch(err=> console.log(err))
}

//blog delete
const blog_delete=(req,res)=>{
    Blog.deleteOne({ _id: req.params.id })
    .then(()=> res.json({redirect: "/blog/"}))
    .catch(err=> console.log(err));
}

//blog update | but functionality not added
const blog_update=(req,res)=>{
    Blog.findById({ _id: req.params.id })
    .then((post)=> {
    if(req.body.title) post.title=req.body.title
    if(req.body.body) post.title=req.body.body

    post.save()
    .then(()=> res.redirect('/blog/'))
    })
    .catch(err=> console.log(err));
}

//exports all controller method
module.exports={
    blog_index,
    blog_create_get,
    blog_create_post,
    blog_details,
    blog_delete,
    blog_update
}