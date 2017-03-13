import connection from './db'

export default class Build {
    constructor() {
        this.conn = new connection();
    }

    create(db, name) {
        if ( ! name ) name = db.name;
        return this.conn.execute("SHOW DATABASES")
        .then(result => {
            return result.map(item => Object.values(item)[0])
                    .includes(name) ?
                        true :
                        this.conn.execute("CREATE DATABASE " + name);
        })
        .then(() => this.conn.execute("USE " + name))
        .then(() => this.conn.execute("SHOW TABLES"))
        .then(result => {
            const tables = result ?
                    result.map(item => Object.values(item)[0]) : []
            const update = db.tables.map(table => {
                if ( tables.includes(table.name) ) {
                    this._createColumns(table);
                } else {
                    this._createTable(table);
                }
            });
            return Promise.all(update);
        })
        .then(() => true);
    }

    _createTable(table) {
        return this.conn.execute('create table ' + table.name + " (id varchar(63) primary key) character set 'utf8'")
        .then(this._createColumns(table))
    }

    _createColumns(table) {
        return this.conn.execute('show columns from ' + table.name)
        .then(result => {
            const columns = result.map(item => Object.values(item)[0]);
            const update = table.columns
                .filter(column => ! columns.includes(column.name))
                .map(column => column.name + ' ' + this._definition(column))
                .join(', ')
            return update ?
                this.conn.execute('alter table ' + table.name + ' add (' + update + ')')
                : true;
        });
    }

    _definition(column) {
        return this._def_type(column.type) +
               this._def_index(column);
    }

    _def_type(type) {
        switch ( type ) {
        case 'int':
            return 'INT';
        case 'link':
            return 'VARCHAR(63)';
        case 'string':
            return 'VARCHAR(255)';
        case 'date':
            return 'DATETIME';
        }
        return '';
    }

    _def_index(column) {
        switch (column.index) {
        case 'y':
            return ', index (' + column.name + ') ';
        case 'u':
            return ' unique';
        }
        return '';
    }

    // _def_default(def) {
    //     if ( def ) {
    //         return " set default '" + def + "'";
    //     }
    //     return '';
    // }

}
