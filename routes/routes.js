const express=require('express');
const router=express.Router();
const blogController=require('../controller/blogcontroller')

//get all blogs
router.get('/',blogController.blog_index);

//create new blog page get
router.get('/new-post', blogController.blog_create_get)

//create new post
router.post('/post',blogController.blog_create_post)

//Getting single post
router.get('/post/:id', blogController.blog_details)

//Update post
router.patch('/post/:id',blogController.blog_update)

//Delete Post
router.delete('/post/:id',blogController.blog_delete);



module.exports = router;