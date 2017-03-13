import Connection from '../../src/db';

import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);

describe('database', () => {

    it('execute', () => {
        const conn = new Connection({database:'test_kingdom'});
        return conn.execute("SELECT * FROM people ORDER by sca_name")
        .then(result => {
            expect(result.length).equals(944);
            expect(result[0].sca_name).string('Alegreza');
        })
    });

    it('no database available', () => {
        const conn = new Connection();
        const result = conn.execute("USE test_bad");
        return expect(result).eventually.rejectedWith('Unknown database');
    });

});
