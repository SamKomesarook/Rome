/* eslint-disable no-var */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
// const bcrypt = require('bcryptjs');
// const fs = require('fs');

// const pass = process.argv[2];
// const hash = bcrypt.hashSync(pass, 9);

// fs.writeFileSync('./sss.js', hash);

// console.log(`"${hash}"`);

var bcrypt = require('bcryptjs');
var fs = require('fs');

pass = process.argv[2].toString();
console.log(pass);

var hash = bcrypt.hashSync(pass, 9);
var jsonFile = 

fs.writeFileSync('./sss.json', hash);
console.log("your hash:" + hash);

var a = '';
a="["