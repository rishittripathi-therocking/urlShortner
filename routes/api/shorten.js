const express = require('express');
const router = express.Router();
const uniid = require('uniqid');

router.get('/test',(req, res) => res.json({msg: 'API is Working'}));

module.exports = router;