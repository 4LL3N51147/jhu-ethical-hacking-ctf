const express = require('express')

const app = new express()

app.get('/', (req, res)=>{
    res.end('1')
})

app.listen(4000, ()=>{
})