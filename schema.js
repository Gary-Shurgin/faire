const { ApolloServer } = require('apollo-server')
// const express = require('express')
const path = require('path')
const PersonSchema = require('./server/person/personSchema')
const PersonResolver = require('./server/person/personResolver')

const schema = new ApolloServer({
    typeDefs: PersonSchema,
    resolvers: PersonResolver,
    cors: true, //'http://localhost:3000',
})

// const app = express()
// app.use(express.static('public'))
// schema.applyMiddleware({app})

// app.get('*', (req, res)  => {
//     res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// })

const PORT = process.env.PORT || 4000

schema.listen( PORT )
    .then(({url}) => {
        console.log(`server is ready at ${url}`)
})