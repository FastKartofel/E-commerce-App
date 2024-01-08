const express = require('express');
const sql = require('mssql');
const dbConfig = require('./dbconfig');

const app = express();

sql.connect(dbConfig).then(pool => {
    // Connection is successful
    console.log('Connected to SQL Server successfully.');

    // Define routes here
    // ...

}).catch(err => {
    console.error('Database connection failed: ', err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));