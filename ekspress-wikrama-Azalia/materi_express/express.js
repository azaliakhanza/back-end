const express = require('express')
const app = express()

const port = 5000

//routing atau rute yaitu untuk menyambungkan

app.get('/', (req,res) => {
    res.write('coba express')
    res.end()
})

app.get('/wikrama', (req,res) => {
    res.write('hello wikrama')
    res.end()
})

app.get('/about', (req,res) => {
    res.write('about')
    res.end()
})

app.listen(port, ()=>{
    console.log(
        `server berjalan di http://localhost:${port}`)
})
