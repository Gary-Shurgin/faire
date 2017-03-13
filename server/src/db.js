import mysql from 'mysql2';

const base = {
    // debug: true,
    host:       'localhost',
    port:       '3306',
    user:       'root',
    password:   '',
};

class Connection {
    constructor(current = {}) {
        this.db = mysql.createConnection(Object.assign({}, base, current));
    }

    execute(query, subs) {
        if (!subs) subs = [];
        return new Promise((resolve, reject) => {
            this.db.query(query, subs, (err, result) => {
                if ( err ) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
}

export default Connection;
