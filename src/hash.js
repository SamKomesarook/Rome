const bcrypt = require('bcryptjs');
var fs = require("fs");

var pass = process.argv[2];
hash = bcrypt.hashSync(pass, 9)


fs.writeFileSync('./test.js', hash)



console.log('"'+hash+'"');
