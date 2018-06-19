import express from 'express'

var app = express()

app.use(express.static(__dirname + '/client/src/'))
app.listen(process.env.PORT || 3030)