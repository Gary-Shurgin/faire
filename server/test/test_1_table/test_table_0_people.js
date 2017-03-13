import PeopleTable from '../../src/people';

import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);

const db = require('./test_people.json');

describe('people table', () => {

    it('build people table', () => {
        const conn = new Build();
        return conn.create(db)
        .then(() => {
            return conn.conn.execute('delete * from people')
        })
    });

    const conn = new PeopleTable('test_faire');
    it('load test data into people', () => {
        const items = db.map()
    });

    // it('read all', () => {
    //     const people = new PeopleTable('test_kingdom');
    //     return people.getAll()
    //     .then(result => {
    //         expect(result.length).equals(944);
    //         expect(result[0].sca_name).string('Alegreza');
    //         expect(Object.keys(result[0])).deep.equal(['id', 'sca_name']);
    //     })
    // });

    // it('read by name', () => {
    //     const people = new PeopleTable('test_kingdom');
    //     return people.getByName('bar')
    //     .then(result => {
    //         expect(result.length).equal(10);
    //         expect(result[0].sca_name).equal("Barbara atte Dragon");
    //     });
    // });

    // it('read by id', () => {
    //     const people = new PeopleTable('test_kingdom');
    //     return people.getById(200)
    //     .then(result => {
    //         expect(result.id).equal(200);
    //         expect(result.sca_name).equal('John Paul Devereaux');
    //         // expect(result.password).undefined;
    //     });
    // });

});
