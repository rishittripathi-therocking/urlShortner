const express = require('express');
const router = express.Router();
const uniqid = require('uniqid');

//Route GET /api/test/shorten
router.get('/test',(req, res) => res.json({msg: 'API is Working'}));

router.post('/', (req,res)=>{
    console.log(req.body);
});

module.exports = router;