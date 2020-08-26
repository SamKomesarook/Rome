var bcrypt = require('bcryptjs');
var fs = require('fs');

pass = process.argv[2];

var hash = bcrypt.hashSync(pass, 9);

var strHash = '"value":"' + hash + '"';
var id = '"id":1,';

var file = "[{" + id + strHash + "}]";

fs.writeFileSync('hash.json', file);
console.log("new password has been set");