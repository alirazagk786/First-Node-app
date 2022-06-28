const express=require('express');
const Mongoose=require('mongoose');
const routes=require('./routes/routes.js')


const dbUrl='mongodb+srv://user:12345@node.2fj7f.mongodb.net/node?retryWrites=true&w=majority'


Mongoose.connect(dbUrl)
.then(()=>{
    const app=express();

    //middleware to get param value
    app.use(express.json());

    //middleware for static files like stylesheet & images
    app.use(express.static('public'));

    // middleware to get request body
    app.use(express.urlencoded({extended: true}));

    //middleware to routes
    app.use('/',routes);

    

    //listen request on port 3000
    app.listen('3000',()=> console.log('Server is up : 3000'));

    console.log('Database Connected');
})
.catch(err=> console.log(err))
