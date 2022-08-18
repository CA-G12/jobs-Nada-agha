const express = require('express');
const { notfound, servererror } = require('./errors')
const  postsearch= require('./handelers.js')
const router = express.Router();
router.post('/search',postsearch );
router.use( notfound,);
router.use(servererror);
module.exports= router