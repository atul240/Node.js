
// const os = require('os');

import * as os from 'os'; // package.json file me type : module

console.log(os.platform());  // win32
console.log(os.arch());   // x64

console.log(os.cpus());

console.log(os.hostname());   // DESKTOP-Atul

console.log(os.homedir);   // [Function: __node_internal_checkError] {
                                // [Symbol(Symbol.toPrimitive)]: [Function (anonymous)]
                            // }


console.log(os.freemem());   //  1194389504 bytes
console.log(os.totalmem());  //  8355045376 bytes

console.log(os.networkInterfaces());