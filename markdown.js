#!/usr/bin/env node

const fs = require('fs');
const fetch = require('node-fetch')
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



fs.readFile('README.md', 'utf8', function(err, data) {  
    if (err) throw err;
    let content = '';
    for(let i = 0; i < data.length; i++) {
        let allData = data[i];
        content += allData
    }
    let regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g;
    let found = content.match(regex);
    console.log(found);
    rl.question('¿Quieres verificar cada link? S/N ', (answer) => {
        if(answer === 'S') {
            let broken = 0;
            let active = 0;
            let total = 0;
            for (let i = 0; i < found.length; i++) {
                let request = found[i]
            fetch(request).then((result) => {
                let status = result.status
                if (status === 200) {
                    console.log(found[i] + ' => ' +'OK ' + status)
                    active[i] += active++
                    total[i] += total++
                } else {
                    console.log(found[i] + ' => ' +'FAIL ' + status)
                    broken[i] += broken++
                    total[i] += total++
                }
                return status
            }).catch((err) => {
                console.log(err.message);
                })
                };
            setTimeout(() => {
                rl.question('¿Quieres ver las estadisticas? S/N ', (answer2) => {
                    if(answer2 === 'S') {
                        console.log(broken + active + total);
                        }
                    });             
                }, 3500)
        }
        rl.close();
    });
});
