import { spawn } from 'handbrake-js'
spawn({
    input: '[Erai-raws] Tensura Nikki - Tensei Shitara Slime Datta Ken - 10 [480p][Multiple Subtitle].mkv', 
    output: 'something.m4v',
    "subtitle-lang-list":"por",
    "first-subtitle":true,
    "subtitle-burned":1 
}).on('error', err => {
    console.log("Invalid Video Input/No Video Founded")
    // invalid user input, no video found etc
  }).on("start",()=>{
    console.log("Started Encoding Subtitle!")
}).on("end",()=>{
    console.log("Encoding Completed!")
})