const { find, filter } = require('lodash')
let people = require('./personData')

const PersonResolver = {
    Query: {
        people: () => people,
        findPersonById: (_, { id }) => find(people, { id }),
        findPersonLikeName: (_, { scaName }) => filter(people, 
            person => person.normalizedName.indexOf(scaName.normalizedName) >= 0
        ),
        findPersonMatches: (_, { scaName, modernName, cellPhone }) => filter(people, 
            person => person.scaName === scaName || 
                      person.modernName === modernName || 
                      person.cellPhone === cellPhone
        ),
        authenticate: (_, { id, password} ) => find(people, { id, password }),
    },
    Mutation: {
        addPerson: (_, { person }) => {
            if ( find(people, { id: person.id })) {
                return null
            }
            people = [ ...people, person ]
            return person
        },
        updatePerson: (_, { person }) => {
            const index = people.findIndex(item => item.id === person.id)
            if ( index < 0 ) {
                return null
            }
            people = [ ...people.slice(0, index), person, ...people.slice(index+1) ]
            return person
        }
    }
}

module.exports = PersonResolver