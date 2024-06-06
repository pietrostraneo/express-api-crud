const express = require('express');
const app = express();

const postRouter = require('./routers/post.js');

const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.json());

app.use('/posts', postRouter);

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
})