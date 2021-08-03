const SHA256 = require('crypto-js/sha256');

let str = 'Pedro Donisete da Silva'
, cipherStr = SHA256(str)
;

console.log(`str: ${ str }`);
console.log(`cipherStr: ${ cipherStr }`);
