const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const config = require('config');
dotenv.config();
const app  = express();

// auth user
const authRoutes = require('./routes/auth');

// item routes
const itemRoutes = require('./routes/items');

// user routes
const userRoutes = require('./routes/users');

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// routes
app.use('', itemRoutes);
app.use('', userRoutes);
app.use('', authRoutes);

// serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}


// connect to mongodb
// connect mongoose to database
//const db = 'mongodb+srv://ELBEQQAL:fuck0675058801@cluster0-m7kbe.mongodb.net/shoppin-list?retryWrites=true&w=majority'
const db = config.get('MONGOURI')
mongoose.connect(
    db, 
    {useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true},  
    () => {
    console.log('Mongodb is connected..')
});

// hundle database error
mongoose.connection.on('error', err => console.log('DB connection error:', err.message));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`server running at ${port}`));