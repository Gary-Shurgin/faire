const latinize = require('latinize')
const { find, filter } = require('lodash')

let people = require('./personData')

const PersonResolver = {
    Query: {
        people: () => people,
        findPersonById: (_, { id }) => find(people, { id }),
        findPersonLikeName: (_, { scaName }) => filter(people, 
            person => person.normalizedName.indexOf(normalize(scaName)) >= 0
        ),
        findPersonMatches: (_, { scaName, modernName, cellPhone }) => filter(person, 
            person => person.normalizedName === normalize(scaName) || 
                      person.modernName === modernName || 
                      person.cellPhone === cellPhone
        ),
        authenticate: (_, { id, password} ) => find(people, { id, password }),
    },
    Mutation: {
        addPerson: (_, { person }) => {
            if ( find(people, { normalizedName: person.normalizedName }) ) {
                throw new Error(JSON.stringify({error: 'Duplicate', value: person.scaName}))
            }
            people = [ ...people, person ]
            return person
        },
        updatePerson: (_, { person }) => {
            const index = people.findIndex(item => item.id === person.id)
            if ( index < 0 ) {
                throw new Error(JSON.stringify({error: 'Missing', value: person.scaName}))
            }
            if ( people[index].normalizedName != person.normalizedName ) {
                if ( find(people, {normalizedName: person.normalizedName}) ) {
                    throw new Error(JSON.stringify({error: 'Duplicate', value: person.scaName}))
                }
            }
            people = [ ...people.slice(0, index), person, ...people.slice(index+1) ]
            return person
        }
    }
}

const normalize = text => latinize(text).toLowerCase()

module.exports = PersonResolver