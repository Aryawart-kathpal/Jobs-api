require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

//connectDB
const connectDB = require('./db/connect');

const authenticateUser = require('./middleware/authentication');

// routers
const authRouter = require('./routes/auth');
const jobsRouter = require('./routes/jobs');

const notFoundMiddleware= require('./middleware/not-found');
const errorHandlerMiddleware=require('./middleware/error-handler');

app.use(express.json());
// extra packages

//routes
app.get('/',(req,res)=>{
    res.status(200).send("Jobs-api");
});

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/jobs',authenticateUser,jobsRouter); // as authenctication has to be firstly made for every job route

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start =async(req,res)=>{
    try {
        await connectDB(process.env.MONGO_URI);
        console.log("Successfully connected to database");
        app.listen(port,()=>console.log(`Server is listening at port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start();