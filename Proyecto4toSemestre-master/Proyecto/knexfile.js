;
let datosDb = require('./database/datosDb')

module.exports = {
    development: {
        migrations: { tableName: 'knex_migrations'},
        seeds: { tableName: './seeds' },
        client: datosDb.client,
        connection: datosDb.connection   
    },
    production: {
        migrations: { tableName: 'knex_migrations'},
        seeds: { tableName: './seeds' },
        client: datosDb.client,
        connection: datosDb.connection   
    }

    
}
