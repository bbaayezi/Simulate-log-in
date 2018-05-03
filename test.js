const request = require('request').defaults({jar: true});

let formData = {
    anchor: '',
    username: 'rui.zhou16',
    password: 'Robin1998'
}

let headerOptions = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'max-age=0',
    'Connection': 'keep-alive',
    'Content-Length': 46,
    'Content-Type':'application/x-www-form-urlencoded',
    'Host': 'ice.xjtlu.edu.cn', 
    'Origin': 'https://ice.xjtlu.edu.cn',
    'Referer': 'https://ice.xjtlu.edu.cn/login/index.php',
    'Upgrade-Insecure-Requests': 1,
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36'
}

request.post({
    url: 'https://ice.xjtlu.edu.cn/login/index.php',
    formData: formData,
    header: headerOptions,
    followAllRedirects: true,
    forever: true
}, (err, res, body) =>{
    // if (!err) console.log(res.headers);
    // console.log(body);
    let cookie = '';
    let redirect = '';
    // cookie = res.headers['set-cookie'][0].split(';')[0];
    redirect = res.headers.location
    console.log(cookie);
    // console.log(res.request['Redirect'])
    console.log(res.headers);
    console.log('post status: '+res.statusCode);
    console.log('start redirecting...');
    console.log(body);
    
})