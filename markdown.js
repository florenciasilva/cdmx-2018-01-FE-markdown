#!/usr/bin/env node

const fs = require('fs');
const fetch = require('node-fetch')

const readfile = (getURLs) => {
fs.readFile('README.md', 'utf8', (err, data) => {  
    if (err) {
        console.log(err.message)
        } else {
        let content = '';
        for(let i = 0; i < data.length; i++) {
            let allData = data[i];
            content += allData
            }
        getURLs(content);
        }
    });
}
const counter = () => {
let broken = 1;
let active = 0;
let total = 0;

console.log('Broken' + ' ' + broken)
}

const getURLs = (content, requestHTTP) => {
    let regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g;
    let found = content.match(regex);
    console.log(found);
        for (let i = 0; i < found.length; i++) {
            let request = found[i]
            const requestHTTP = (request) => {
                fetch(request).then((result) => {
                    let status = result.status
                    if (status === 200) {
                        console.log(found[i] + ' => ' +'OK ' + status)
                        active++
                        total++
                    } else {
                        console.log(found[i] + ' => ' +'FAIL ' + status)
                        broken++
                        total++
                    }
                    return status
                }).catch((err) => {
                    console.log(err.message);
                    })
                    };
                    requestHTTP(request)
                } 
};


const program = require('commander');

program
  .version('0.1.0')
  .option('validate, --validate', 'Validate all URLs from .md')
  .option('status, --status', 'See Status of all URLs from .md')
  .parse(process.argv);

if (program.validate) {
    readfile(getURLs);
};
if (program.status) {
    counter();
}
/*if (program.pineapple) console.log('  - pineapple');
if (program.bbqSauce) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);*/