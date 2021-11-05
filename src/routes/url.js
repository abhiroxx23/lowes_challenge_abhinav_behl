const express = require('express')

const router = express.Router()

const validUrl = require('valid-url')
const shortid = require('shortid')

const Url = require('../models/Url')

//@route    POST /api/shorten
//@desc     Create shortened URL

const baseUrl = 'http:localhost:5000'
router.post('/shorten', async(req,res)=>{
    const {originalUrl} = req.body
    //check base url
    if(!validUrl.isUri(baseUrl)){
        console.log('here')
        return res.status(401).json('Invalid base URL')
    }
    // create url code
    const urlCode = shortid.generate()
    //check long url
    if(validUrl.isUri(originalUrl)){
        try{
            let url = await Url.findOne({originalUrl})
            if(url){
                res.json(url)
            }
            else{
                const shortUrl = baseUrl + '/'+ urlCode
                url = new Url({
                    originalUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                })
                await url.save()
                res.json(url)
            }
        }
        catch(err){
            console.log(err)
            res.status(500).json('Server Error')
        }
    }
    else{
        res.status(401).json('Invalid originalUrl')
    }
})

router.get('/shortenedUrls', async(req, res)=>{
    try{
        const urls = await Url.find({}, {hits: 1, shortUrl: 1})
        if(urls){
            return res.json(urls)
        }
        else{
            return res.status(404).json('No URLs Found')
        }
    }
    catch(err){
        console.error(err)
        res.status(500).json('Server Error')
    }
})

module.exports = router
