import mysql from "mysql";

class Database {
  _conn;

  constructor({ host, port, user, password, database }) {
    this._conn = mysql.createConnection({
      host, port, user, password, database,
      multipleStatements: true,
    });

    this._conn.connect(err => {
      if (err) throw err;
    });
  }

  disconnect() {
    this._conn.end();
  }
}

export default Database;