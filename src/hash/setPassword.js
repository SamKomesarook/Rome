const bcrypt = require('bcryptjs');
const fs = require('fs');

const pass = process.argv[2];

const hash = bcrypt.hashSync(pass, 9);

const strHash = `"value":"${hash}"`;
const id = '"id":1,';

const file = `[{${id}${strHash}}]`;

fs.writeFileSync('hash.json', file);
console.log('new password has been set');
