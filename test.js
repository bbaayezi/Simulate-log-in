const config = require('./config.json');
const request = require('request').defaults({
    jar: true,
    header: config.headers
});
const cheerio = require('cheerio');
const fs = require('fs');

let downloadFromType = type => (url, filename, callback) => {
    let stream = fs.createWriteStream(`${filename}.${type}`);
    request(url).pipe(stream).on('close', callback);
};

let formData = config.formData;

request.post({
    url: 'https://ice.xjtlu.edu.cn/login/index.php',
    formData: formData,
    // header: headerOptions,
    followAllRedirects: true,
    // forever: true
}, (err, res, body) =>{
    let cookie = '';
    let redirect = '';
    redirect = res.headers.location
    console.log('post status: '+res.statusCode);
    console.log('start redirecting...');
    request.get('http://ice.xjtlu.edu.cn/mod/resource/view.php?id=60805', (err, res, body) => {
        const $ = cheerio.load(res.body);
        let URL = $('div .resourceworkaround').children('a').attr('href');
        let downloadPPT = downloadFromType('ppt');
        downloadPPT(URL, 'Week 12 Lecture 1', () => {
            console.log('download complete!');
        })
    })
    
})