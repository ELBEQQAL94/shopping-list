const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();
const app  = express();

// item routes
const itemRoutes = require('./routes/items');

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

// routes
app.use('', itemRoutes);

// serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}


// connect to mongodb
// connect mongoose to database
const db = 'mongodb+srv://ELBEQQAL:fuck0675058801@cluster0-m7kbe.mongodb.net/shoppin-list?retryWrites=true&w=majority'
mongoose.connect(db, {useNewUrlParser: true}, () => {
    console.log('Mongodb is connected..')
});

// hundle database error
mongoose.connection.on('error', err => console.log('DB connection error:', err.message));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`server running at ${port}`));