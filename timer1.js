'use strict' 

let incomingVal = process.argv.slice(2)
console.log('incomingVal 1 : ',incomingVal);
incomingVal = incomingVal.map(x => parseInt(x))
incomingVal = incomingVal.filter(item => item > 0)
console.log('incomingVal 2 : ',incomingVal);

for (let item in incomingVal){
  setTimeout(()=>{
    console.log(`${incomingVal[item]} seconds`);
    console.log('beep');
    process.stdout.write('\x07');
  },incomingVal[item]*1000)
}



// let varb = 0
// for ( let i of incomingVal){
//   setTimeout(()=>{
//     console.log(i);
//   },varb)
//   varb = varb+2000
// }