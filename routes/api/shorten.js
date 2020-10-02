const express = require('express');
const router = express.Router();
const uniqid = require('uniqid');

const URL = require('../../models/Urls');

router.use((req, res, next) => {
    res.header('Access-Control-Allow-origin', "*");
    res.header('Access-Control-Allow-Headers', 'Origin , X-Requested-With, Content-Type, Accept');
    next();
});

//Route GET /api/test/shorten
router.get('/test',(req, res) => res.json({msg: 'API is Working'}));

router.post('/', (req,res)=>{
    console.log(req.body);
    if(req.body.url) {
        urlData = req.body.url
    }
    console.log('URL is: ', urlData);
    URL.findOne({url: urlData}, (err, doc) => {
        if(doc) {
            console.log('Entry Found in Database.');
        }
        else {
            console.log('This is a Unique URL');
            const webaddress = new URL({
                _id: uniqid(),
                url: urlData,

            });
            webaddress.save((err) => {
                if(err) {
                    console.log(err);
                }
                res.send({
                    url: urlData,
                    hash: webaddress._id,
                    status: 200,
                    statusTxt: 'OK'
                })
            })
        }
    });
});

module.exports = router;