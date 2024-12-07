const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog1.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog12.txt');

// readStream.on('data', (chunk) => {
//     console.log('-------------------New Chunk ---------------')
//     // console.log(chunk.toString());
//     console.log(chunk)
//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunk);
// });

//Piping
readStream.pipe(writeStream);