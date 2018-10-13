#!/usr/bin/env node
const fs = require('fs');
const fetch = require('node-fetch')
const program = require('commander');

program
  .version('0.1.0')
  .option('validate, --validate', 'Validate all URLs from .md')
  .option('stats, --stats', 'See Status of all URLs from .md')
  .parse(process.argv);

const findURL = fs.readFile('README.md', 'utf8', (err, data) => {
    if (err) throw err;
    const regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g;
    const found = data.match(regex);
    const urls = [];
    for(let i = 0; i < found.length; i++) {
       urls.push(found[i]);
    }
    console.log(urls);
    
    if (program.validate) {
        requestHTTP(urls);
    };
        return urls
    });


const requestHTTP = (found) => {
    let broken = 0;
    let active = 0;
    let total = 0;
    for(let i = 0; i < found.length; i++) {
        fetch(found[i]).then((response) => {
    const status = response.status;
    console.log(found[i] + ' ' + status);
    if(status >= 200 && status <= 400) {
        active++
        total ++
    } else {
        broken++
        total++
    }

    return status       
        }).catch((err) => {
            console.log(err.message);
        })
    }
    if (program.validate && program.stats) {
        setTimeout( () => {
        console.log('Broken' + ' ' + broken + '\n' +
                    'Active' + ' ' + active + '\n' +
                    'Total'  + ' ' + total);
        }, 5000)
    };
}
    
module.exports = {
    findURL,
    requestHTTP
}