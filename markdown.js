const fs = require('fs');
const fetch = require('node-fetch')
//const path = require('path');

//let dirpath = path.posix.basename('README.md');
        
fs.readFile('README.md', 'utf8', function(err, data) {  
    if (err) throw err;
    let content = '';
    for(let i = 0; i < data.length; i++) {
        let allData = data[i];
        content += allData        
    }
    let regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g;
    let found = content.match(regex);
    if (found) {
        for (let i = 0; i < found.length; i++) {
        fetch(found[i]).then((result) => {
            return result.text();
        }).then((result) => {
            let status = result.status;
            if (status >= 400) {
                return 'fail'
            } else {
                return 'ok'
            }
        }).catch((err) => {
            console.log(err.message);
        })
    }
    } else {
        console.log(':c')
    }
});
