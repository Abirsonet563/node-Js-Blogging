const fs = require('fs');

//Delete
if (fs.existsSync('./deleteMe.txt')){
    fs.unlink('./deleteMe.txt', (err) => {
        if (err) {
            console.log(err)
        }
        
    })
    console.log("Deleted")
}