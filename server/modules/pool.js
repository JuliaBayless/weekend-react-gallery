// Node Module that will connect to postgresQL
const pg = require('pg');

// Setup PG to connect to the database
const Pool = pg.Pool;

const pool = new Pool({
    database: 'react_gallery', // database name 
    host: 'localhost', 
    port: 5432,        
    max: 10,           
    idleTimeoutMillis: 30000 
});

//Listener setup to let us know if pool is working
pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', (error) => {
    console.log('Error with database pool', error);
});

module.exports = pool;