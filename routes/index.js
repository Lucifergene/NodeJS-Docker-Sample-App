//IMPORTING THE PACKAGES WE HAVE INSTALLED INTO OUR PROJECT
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const router = express.Router();
const bodyParser = require('body-parser');

/*
  Connecting the Mongoose Schema. This is the file which contains the collection information for the database.
*/
const Post = require('../models/Post');

// Express body parser - MIDDLEWARE
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended: true
}));

//For using Layouts=>Common parts of a website
router.use(expressLayouts);

//GET REQUEST ON HOMEPAGE -> CALLING LIST.EJS
router.get('/',async (req, res) => {   
  const posts = await Post.find().sort({ "_id" : -1})
  res.render('list',{ posts: posts});
  //POSTS DATA ARE PASSED INTO THE LIST.EJS ON RUNTIME ASYNCHRONOUSLY
});

//GET REQUEST ON POST PAGE -> CALLING add_item.EJS
router.get('/post', (req, res) => {   
  res.render('add_item');
});

//POST REQUEST 
/* 
    The form which is filled up, dumps its data into the url below. The post request is made on this url, which posts the dumped data into the database.
*/
router.post('/posts/store', (req, res) => {
  console.log(req.body)
  Post.create(req.body, (error, post) => {
      res.redirect('/')
  })
});

/*
  GET REQUEST ON UPDATE PAGE -> CALLING update_item.EJS
  WHEN THE LIST ITEM IS SELECTED, IT IS REDIRECTED TO THE URL BELOW, ALONG WITH ITS ID ATTACHED.
*/
router.get('/update/:id', async (req, res) =>{
  const post = await Post.findById(req.params.id)
    res.render('update_item', { post: post })
});

/* 
  UPDATE request -> 

  1.The UPDATE form which is filled up, dumps its data into the url below ALONG WITH THEIR    CORRESPONDING ID.

  2.THE ID OF THE POST TO BE UPDATED IS ATTACHED TO THE URL BELOW. THEN UPDATE FUNCTION       EXTRACTS THE ID FROM THE URL AND UPDATES THE ELEMENT IN THE COLLECTION.
*/
  router.post('/update/:id/store',function(req, res, next){
    console.log(req.body)
      Post.findById(req.params.id, function (err, post) {
        if (!post) {
          req.flash('error', 'No post found');
          return res.redirect('/');
      }

      var subject = req.body.subject;
      var message = req.body.message;

      post.subject = subject;
      post.message = message;

      post.save((err) => {

          res.redirect('/');
      });
  });
});

/* 
  Delete request -> THE ID OF THE POST TO BE DELETED IS ATTACHED TO THE URL BELOW. THEN DELETE FUNCTION EXTRACTS THE ID FROM THE URL AND DELETES THE ELEMENT FROM THE COLLECTION.
*/
router.get('/delete/:id',(req, res) => {
  Post.findOneAndDelete({_id: req.params.id}, (err, docs) => {
    if(err) res.json(err);
    else {
      res.redirect('/');
    }
  });
});


//For exporting these settings. VERY IMPORTANT LINE. PEOPLE TEND TO MISS IT. Program wont run without this line.
module.exports = router;