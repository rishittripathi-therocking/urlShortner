const express = require('express');
const router = express.Router();

const URL = require('../../models/Urls');

//Route GET /api/test/shorten
router.get('/test',(req, res) => res.json({msg: 'API is Working'}));

//@route GET /api/redirect

router.get('/', (req, res) => {
    const hash = req.headers.hash;

    URL.findOne({_id: hash})
        .then((doc) =>{
            return res.json({ url: doc.url});
        })
        .catch((err) =>{
            return res.status(400).json({error: 'Sorry, This Link May have Expired'});
        })
})

module.exports = router;