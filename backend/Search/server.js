const express = require('express');
const app = express();
const PORT = 3000;
const courseRouter = require('./router');

app.use('/course', courseRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});