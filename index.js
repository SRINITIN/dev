// const colors = require('colors');
// console.log("Hello".red);
// console.log("Jai shree Ram".bgBlue);

// console.log("Hello Ritika");


// const http = require('http');
// const data = require('./data');

// http.createServer(
//     (req, res) => {
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.write(JSON.stringify(values));
//         res.end();
//     }
// ).listen(1803);


// console.log(process.argv);


// console.log(process.argv[4]);


// const fs = require('fs');

// const name = process.argv;
// fs.writeFileSync(name[2], name[3] );


// const fs = require('fs');

// const input = process.argv;

// if(input[2] == "add"){
//     fs.writeFileSync(input[3], input[4]);
// }else if(input[2] == "remove"){
//     fs.unlinkSync(input[3]);
// }else{
//     console.log("invalid input");
// }


// const fs = require('fs');
// fs.writeFileSync("dev.txt", "i have created a file");


// const fs = require('fs');
// const path = require('path');

// const dirPath = path.join(__dirname, 'files');

// console.log(dirPath);


const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'files');

for (i = 0; i < 5; i++) {
    fs.writeFileSync(`dirPath\hello${i}.txt`, "this file is created by loop");
}