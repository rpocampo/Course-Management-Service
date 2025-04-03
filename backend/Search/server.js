const express = require('express');
const app = express();
const PORT = 3000;
const courseRouter = require('./router');

app.use('/course', courseRouter);

mongoose.connect(process.env.DB)
    .then(() =>{
        app.listen(process.env.PORT, () =>{
            console.log(`Connected to database and listening to port ${process.env.PORT}`)
        })
    }).catch(error =>{
        console.log(error)
    })