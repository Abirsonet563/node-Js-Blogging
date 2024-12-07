const fs = require('fs');

//directories
if (! fs.existsSync('./assets')){
fs.mkdir('./assets', (err) => {
    if(err){
        console.log(err);
    }
    console.log("folder Created");
})} else{
    fs.rmdir('./assets', (err) => {
        if(err) {
            console.log(err)
        }
        console.log('Folder Deleted')
    })
}