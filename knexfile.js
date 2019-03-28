// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data"
    },
    useNullAsDefault: true, // needed for sqlite
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done) // enforce foreign keys
      },
    }
  }
};

// By default SQLite will not enforce foreign keys
