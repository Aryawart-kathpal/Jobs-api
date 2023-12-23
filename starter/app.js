require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const notFoundMiddleware= require('./middleware/not-found');
const errorHandlerMiddleware=require('./middleware/error-handler');

app.use(express.json());
// extra packages

//routes
app.get('/',(req,res)=>{
    res.status(200).send("Jobs-api");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start =async(req,res)=>{
    try {
        app.listen(port,()=>console.log(`Server is listening at port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start();