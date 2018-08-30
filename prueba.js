const fs = require('fs');
/*
const readReadme = (callBack) => {
    fs.readFile('./README.md', 'utf8', (err, data) => {
        if (err) {
            console.log('error')
        } else {
            callBack(data);
        }
    });
};

readReadme(callBack = (data) => {
    console.log(data);
});
*/

/*
const data = fs.readFileSync('./README.md', 'utf8');
fs.watch('./', (eventType, fileName) => {
    console.log('tipo de evento' + eventType);
    if(fileName) {
        console.log('En el archivo: ' + fileName)
    } else {
        console.log('No tienes cambios en archivos')
    }
})

console.log('asdad');
*/
