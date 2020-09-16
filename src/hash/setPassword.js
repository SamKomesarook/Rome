const bcrypt = require('bcryptjs');
const fs = require('fs');

const pass = process.argv[2];

if ((pass === undefined)) {
  console.log('new password can not be empty');
} else {
  const hash = bcrypt.hashSync(pass, 9);

  const strHash = `"value":"${hash}"`;
  const id = '"id":1,';
  const file = `[{${id}${strHash}}]`;

  fs.writeFileSync('./src/hash/hash.json', file);
  console.log('new password has been set');
}
