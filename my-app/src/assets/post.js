"use strict";
exports.__esModule = true;
exports.myarr = void 0;
var Client = require('pg').Client;
var client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'userdatabase',
    password: 'golu123@',
    port: 5433
});
/*
const myQuery = `CREATE TABLE users (
    
    firstName varchar,
    middleName varchar,
    lastName varchar,
    email varchar,
    phoneNo int,
    role varchar,
    address varchar
);
`;
client.query(myQuery, (err:any, res:any) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Table is successfully created');
    client.end();
});
const query2 = `INSERT INTO users (firstName, middleName, lastName, email, phoneNo, role, address)
VALUES ('Harshit', 'xyz', 'Mittal', 'pqr', 1234567890, 'pqr', 'shd')`;
client.query(query2, (err: any, res: any) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data insert successful');
    client.end();
});
const query3 = `
INSERT INTO users (firstName, middleName, lastName, email, phoneNo, role, address)
VALUES ('Smaksh', 'xyz', 'Goyal', 'pqr', 1234567890, 'pqr', 'shd')
`;
client.query(query3, (err:any, res:any) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data insert successful');
    client.end();
});
const query4 = `
INSERT INTO users (firstName, middleName, lastName, email, phoneNo, role, address)
VALUES ('Vansh', 'xyz', 'Goyal', 'pqr', 1234567890, 'pqr', 'shd')
`;
client.query(query4, (err:any, res:any) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data insert successful');
    client.end();
});
*/
exports.myarr = [{ firstname: "", middlename: "", lastname: "", email: "", phoneno: 0, role: "", address: "" }];
var query = "\nSELECT *\nFROM users\n";
client.query(query, function (err, res) {
    if (err) {
        console.error(err);
        return;
    }
    for (var _i = 0, _a = res.rows; _i < _a.length; _i++) {
        var row = _a[_i];
        exports.myarr.push(row);
        //help.push(row);
        // console.log(arr[1]);
    }
    console.log(exports.myarr);
    client.end();
});
client.connect();
