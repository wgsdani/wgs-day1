// core modules
// file system

const fs = require('fs');

// menuliskan string ke file (Synchronous)

fs.writeFileSync('file.txt','Hello world secara synchronous ohhh gitu yaa');

fs.readFile('file.txt','utf-8', (err,data)=>{
	if (err) throw err;
	console.log(data);
});

