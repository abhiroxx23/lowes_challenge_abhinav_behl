const express = require('express')

const router = express.Router()

const Url = require('../models/Url')

// @route       GET /:code
// @description    Redirect to the original URL 

router.get('/:code', async(req, res)=>{
    try{
        const url = await Url.findOne({urlCode: req.params.code})
        if(url){
            await Url.findOneAndUpdate({urlCode: req.params.code}, {hits: url.hits + 1})
            return res.redirect(url.originalUrl)
        }
        else{
            return res.status(404).json('No URL Found')
        }

    }
    catch(err){
        console.error(err)
        res.status(500).json('Server Error')
    }
})


module.exports = router
