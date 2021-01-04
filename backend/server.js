import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import router from './router';

const app = express();

app.use(cors());
app.use(bodyParser.json());

//MongoDB connection 
mongoose.connect('mongodb://localhost:27017/media', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Mongoose database connection established successfully!');
});

app.use('/', router);
app.use('/users', router);
app.use('/company', router);
app.use('/event', router);

app.use(function (req, res, next) {
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
res.setHeader('Access-Control-Allow-Credentials', true);
next();
});

app.listen(3000, () => console.log('Server is running on port 3000'));