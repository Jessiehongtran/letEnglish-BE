// Update with your config settings.

const pg = require('pg')
pg.defaults.ssl = true

module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL
}

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/database.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./migrations"
    }
  },
  ssl: true

};


