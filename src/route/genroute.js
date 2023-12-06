const express = require('express')
const router = express.Router()
const destination = require('../model/destinationModel')
const booking = require('../model/bookModel')

router.get('/', (req, res) =>{
    res.send('Welcome to isekai API')
})
router.get('/destination', async (req, res) => {
    try{
        const result= await destination.findAll()
        return res.send(result)
    }catch (e){
        return res.status(500).send('Data gagal ditampilkan')
    }
})
router.post('/booking', async (req, res) => {
    try{
        await booking.create({
            name:req.body.name,
            mobile_number:req.body.mobile_number,
            where_to:req.body.where_to,
            how_many:req.body.how_many,
            arrivals:req.body.arrivals,
            leaving:req.body.leaving,
        })
        return res.send({
            message:'Data berhasil disimpan'
        })
    }catch (e){
        console.log(e)
        return res.status(500).send('Data gagal disimpan')
    }
})

module.exports = router