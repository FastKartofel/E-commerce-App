const sql = require('mssql');

const config = {
    server: 'localhost\\SQLEXPRESS01',
    user: 'DESKTOP-J5DHI38\\paddy',
    database: 'E-commerceData',
    options: {
        encrypt: true,
        trustServerCertificate: true,
        integratedSecurity: true
    }
};


module.exports = config;