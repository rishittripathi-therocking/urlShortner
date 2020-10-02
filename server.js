const express =require('express');
const { process } = require('uniqid');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

const port = process.env.port || 5000;
app.listen(port, ()=> console.log(`Server is running at port ${port} `));