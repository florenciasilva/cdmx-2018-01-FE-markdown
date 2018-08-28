const fs = require('fs');

fs.readFile('README.md', 'utf8', function(err, data) {  
    if (err) throw err;
    console.log(data);
    let content = '';
    for(let i = 0; i < data.length; i++) {
        let allData = data[i];
        content += allData
        
    }
    let regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g;
    let found = content.match(regex);

    if (found) {
        console.log(found)
    } else {
        console.log(':c')
    }
});
