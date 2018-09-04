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

const getURLs = (content, requestHTTP) => {
let regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g;
let found = content.match(regex);
console.log(found);
        let broken = 0;
        let active = 0;
        let total = 0;
        for (let i = 0; i < found.length; i++) {
            let request = found[i]
            const requestHTTP = (request) => {
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
            requestHTTP(request);

        } 
};

readfile(getURLs);
