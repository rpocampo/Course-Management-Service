require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const courseRoutes = require('./router'); 


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/courses', courseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
