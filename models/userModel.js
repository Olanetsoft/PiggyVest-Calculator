const fs = require('fs');

const jsonString = fs.readFileSync('models/userData.json');
const Users = JSON.parse(jsonString);
// console.log(Users)

module.exports = Users;
