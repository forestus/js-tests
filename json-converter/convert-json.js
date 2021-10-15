// import translate from '@vitalets/google-translate-api';
let translate = require('@vitalets/google-translate-api')
let json = require('./server-response.json')
let fs = require('fs')
var result = [];
let jsonTransformed = {};
for(var i in json){
    result.push([i, json [i]]);
}
async function translated(field) {
    return (await translate(field,{ to: 'en' })).text.replace('.','')
}
async function name(jsonArray) {
    await Promise.all(jsonArray.map(async(e)=>{
        Object.assign(jsonTransformed,{[`${e[0]}`]:await translated(e[1])})
    }))
}
name(result).then(()=>{
    console.log(jsonTransformed)
    let data = JSON.stringify(jsonTransformed);
    fs.writeFileSync('server-response2.json', data);
})