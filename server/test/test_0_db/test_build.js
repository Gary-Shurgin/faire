import Build from '../../src/build';

import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);

const db = require('./test_db.json');
const db2 = require('./test_db0.json');

describe('build', () => {

    const conn = new Build();
    it ('drop table', () => {
        return conn.conn.execute('DROP DATABASE ' + db.name)
        .then(true);
    });

    it('create', () => {
        return conn.create(db)
        .then(() => {
            return conn.conn.execute('show tables')
            .then(result => {
                const tables = result.map(item => Object.values(item)[0]);
                expect(tables).deep.equals(['first', 'second', 'third'])
            })
        })
        .then(() => {
            return conn.conn.execute('show columns from first')
            .then(result => {
                const cols = result.map(item => Object.values(item));
                expect(cols).deep.equal([
                    ["id","varchar(63)","NO","PRI",null,""],
                    ["name","varchar(255)","YES","UNI",null,""],
                    ["age","int(11)","YES","",null,""]
                ]);
            });
        })
        .then(() => {
            return conn.conn.execute('show columns from second')
            .then(result => {
                const cols = result.map(item => Object.values(item));
                expect(cols).deep.equal([
                    ["id","varchar(63)","NO","PRI",null,""],
                    ["first_id","varchar(63)","YES","",null,""],
                    ["saved","datetime","YES","",null,""]
                ]);
            });
        })
        .then(() => {
            return conn.conn.execute('show columns from third')
            .then(result => {
                const cols = result.map(item => Object.values(item));
                expect(cols).deep.equal([
                    ["id","varchar(63)","NO","PRI",null,""],
                    ["second_id","varchar(63)","YES","MUL",null,""],
                    ["other","varchar(255)","YES","",null,""]
                ]);
            });
        });
    });

    it('create', () => {
        return conn.create(db2)
        .then(() => {
            return conn.conn.execute('show tables')
            .then(result => {
                const tables = result.map(item => Object.values(item)[0]);
                expect(tables).deep.equals(['first', 'last', 'second', 'third'])
            })
        })
        .then(() => {
            return conn.conn.execute('show columns from first')
            .then(result => {
                const cols = result.map(item => Object.values(item));
                expect(cols).deep.equal([
                    ["id","varchar(63)","NO","PRI",null,""],
                    ["name","varchar(255)","YES","UNI",null,""],
                    ["age","int(11)","YES","",null,""]
                ]);
            });
        })
        .then(() => {
            return conn.conn.execute('show columns from second')
            .then(result => {
                const cols = result.map(item => Object.values(item));
                expect(cols).deep.equal([
                    ["id","varchar(63)","NO","PRI",null,""],
                    ["first_id","varchar(63)","YES","",null,""],
                    ["saved","datetime","YES","",null,""],
                    ["new","int(11)","YES","",null,""]
                ]);
            });
        })
        .then(() => {
            return conn.conn.execute('show columns from third')
            .then(result => {
                const cols = result.map(item => Object.values(item));
                expect(cols).deep.equal([
                    ["id","varchar(63)","NO","PRI",null,""],
                    ["second_id","varchar(63)","YES","MUL",null,""],
                    ["other","varchar(255)","YES","",null,""]
                ]);
            });
        })
        .then(() => {
            return conn.conn.execute('show columns from last')
            .then(result => {
                const cols = result.map(item => Object.values(item));
                expect(cols).deep.equal([
                    ["id","varchar(63)","NO","PRI",null,""],
                    ["first_id","varchar(63)","YES","MUL",null,""],
                    ["second_id","varchar(63)","YES","MUL",null,""]
                ]);
            });
        });
    });

});
