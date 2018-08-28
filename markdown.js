const fs = require('fs');

fs.readFile('README.md', 'utf8', function(err, data) {  
    if (err) throw err;
    let content = '';
    for(let i = 0; i < data.length; i++) {
        let allData = data[i];
        content += allData
    }
    if (content === 'Hola') {
        console.log('!!!!!!!!!!!!!!!!')
    } else {
        console.log(':c')
    }
});
