import connection from './db'

class PeopleTable {
    constructor(database) {
        this.db = new connection({database: database});
    }

    getAll() {
        return this.db.execute(
            "SELECT * from people ORDER BY sca_name"
        )
        .then(result => { return this._createList(result); })
        .catch(err => { return err; });
    }

    getByName(name) {
        return this.db.execute(
            "SELECT * FROM people WHERE sca_name LIKE ? ORDER BY sca_name",
            [ '%' + name + '%' ]
        )
        .then(result => { return this._createList(result); })
        .catch(err => { return err; });
    }

    getById(id) {
        return this.db.execute(
            "SELECT * FROM people WHERE id = ?",
            [ id ]
        )
        .then(result => { return this._cleanItem(result); })
        .catch(err => { return err; });
    }

    add(item) {
        return this.db.execute(
            "INSERT INTO people (" +
                item.keys().join() +
            ") VALUES (" + item.map(item => '?').join() + ")",
            item.values()
        )
    }

    _createList(result) {
        return result.map((item) => {
            return {
                id: item.id,
                sca_name: item.sca_name
            }
        });
    }

    _cleanItem(result) {
        // delete result[0].password;
        return result[0];
    }

}

export default PeopleTable;
