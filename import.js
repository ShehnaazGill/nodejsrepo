// import {x} from './export'  // Gives an error

//////// CORRECT WAY TO EXPORT

const exportData  = require('./export');
console.log(exportData);
console.log(exportData.a);
console.log(exportData.b);
console.log(exportData.c());


