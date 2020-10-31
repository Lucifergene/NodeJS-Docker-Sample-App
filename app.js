//IMPORTING THE PACKAGES WE HAVE INSTALLED INTO OUR PROJECT
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

//CREATING AN INSTANCE OF THE EXPRESS PACKAGE
const app = new express();


//SETTING THE PORT AND HOST.
const PORT = 8080;
const HOST = '0.0.0.0';

//THE MONGODB CREDENTIALS ARE STORED IN THE HEROKU CONFIG VARIABLES AVAILABLE ON THE HEROKU DASHBOARD. THEY CAN BE RETRIEVED USING THE FOLLOWING COMMANDS.
const USERNAME = process.env.MONGODB_USERNAME
const PASSWORD = process.env.MONGODB_PASSWORD

//Setting up the public directory => CONTAINS THE FILES THAT WILL BE ACCESSIBLE TO ALL.
//CONTAINS ALL MEDIA AND FILES REQUIRED IN THE WEB APP.
app.use(express.static('public'));

//Setting up the VIEWS directory => IN WHICH THE MAIN FRONTEND FILES ARE STORED.
app.set('views', path.join(__dirname, 'views'));


//SETTING VIEW TEMPLATE ENGINE
/*
      WE ARE USING EJS ENGINE FOR OUR FRONTEND. SO OUR EXTENSION FOR ALL HTML FILES WOULD BE .EJS. EJS HELPS US TO MAKE OUR PAGES MORE DYNAMIC.

      THERE ARE OTHER ENGINES LIKE (HBS), (EDGE), ETC. YOU CAN ALSO USE THEM.
*/
app.set('view engine', 'ejs');

// Express body parser - MIDDLEWARE
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

// Connect to MongoDB
mongoose.connect(`mongodb+srv://avik6028:avik240299@cluster0-qiqen.mongodb.net/test?retryWrites=true&w=majority`, {useUnifiedTopology: true, useNewUrlParser: true })

  .then(() => 
        console.log('You Are MongoDB Connected !'))
  .catch(err => 
        console.log(err));



//MAIN Routing FILE -> CONTAINS ALL THE CRUD OPERATIONS
app.use('/', require('./routes/index.js'));


/*    
      MAKE THE SYSTEM LISTEN TO THE PARTICULAR PORT DEFINED ABOVE.
      WE HAVE USED TEMPLATE LITERAL SYNTAX TO DYNAMICALLY CHANGE THE PORT NUMBER.
 */
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
