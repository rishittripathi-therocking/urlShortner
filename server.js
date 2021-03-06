const express =require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const URL = require('./models/Urls');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//DATABASE KEy

const db = require('./config/keys').mongoURI;

//connect Mongo Db
mongoose.connect(db)
    .then(() => console.log('MongoDb connencted.'))
    .catch(err=> console.log(err));

//Routes

const shorten = require('./routes/api/shorten');
app.use('/api/shorten', shorten);

const redirect = require('./routes/api/redirect');
app.use('/api/redirect', redirect);

app.get('/:hash', (req, res) => {
    const id = req.params.hash;
    //console.log(id);
    URL.findOne({_id: id}, (err, doc) => {
        if(doc) {
            console.log(doc.url);
            res.redirect('https://'+doc.url);
        }
        else {
            res.redirect('/');
        }

    })
})

app.get('/', (req, res) => {
    res.send('Hello World');
});

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server is running at port ${port} `));