require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
// const Book = require('./models/bookModel');
const booksRoute = require('./routes/booksRoute.js');
const cors = require('cors');

const PORT = process.env.PORT || 5555;

//Middleware for handling CORS policy
//Option 1: Allow All Origins with Default of cors(*);
app.use(cors());
//Option 2: Allow Custom Origins Allows only the clients from this origin access 
// app.use(cors({
//     origin: 'http://localhost:3000', //Allows only requests from this frontend origin access the server resources
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], //Only allows this methods access 
//     allowedHeaders: ['Content-Type'] //Allows headers specified in the bracket here for example type of data being sent need to be JSON format
// }));

//Middleware for parsing request body
app.use(express.json());

app.get('/', (req, res) => {
    console.log(req); 
});

app.use('/books', booksRoute);

mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    })
})
.catch((error) => {
    console.log('Failed to connect', error);
});