import express from 'express'

const app = express()

app.get('/games',(req,res)=>{
    return res.json([])
})

app.post('/ads',(req,res)=>{
    return res.status(201).json([])
})

app.get('/games/:id/ads',(req,res)=>{
    return res.json([])
})

app.get('ads/:id/discord')

app.listen(3333)