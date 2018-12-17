const { gql } = require('apollo-server')

const fields = `
    id: ID!
    scaName: String!
    modernName: String!
    cellPhone: Int!
    eMail: String!
    password: String!
    notes: String
    region: Region!
    titles: [ Titles ]
    lastUpdated: Date!
`

const PersonSchema = gql`
    input PersonInput {
        ${fields}
        normalizedName: String
    }

    type Person {
        ${fields}
        normalizedName: String!
    }

    scalar Date

    enum Titles {
        chivilary
        laurel
        pelican
        defender
        captain
        warder
        forrester
    }

    enum Region {
        constelation
        midlands
        pentamere
        nOaken
        sOaken
    }

    type Mutation {
        addPerson( person: PersonInput! ): Person
        updatePerson( person: PersonInput! ): Person
    }

    type Query {
        people : [Person]
        findPersonLikeName( scaName: String! ) : [Person]
        findPersonById( id: ID! ) : Person
        findPersonMatches( scaName: String!, modernName:String!, cellPhone:Int! ) : [Person]
        authenticate( id: ID!, password: String!) : Person
    }
`

module.exports = PersonSchema