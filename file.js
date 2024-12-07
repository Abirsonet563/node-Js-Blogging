const fs = require('fs');

//read file
fs.readFile('./docs/blog1.txt', (err, data) => {
    if(err){
        console.log(err);
    }else{
    console.log(data.toString());
    }
});