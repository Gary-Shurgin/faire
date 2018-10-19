const { ApolloServer } = require('apollo-server')
const PersonSchema = require('./person/personSchema')
const PersonResolver = require('./person/personResolver')

const schema = new ApolloServer({
    typeDefs: PersonSchema,
    resolvers: PersonResolver,
})

schema.listen(4000).then(({url}) => {
    console.log(`server is ready at ${url}`)
})