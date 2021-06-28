import {spawn} from "handbrake-js"
async function encode(videoPath, videoName) {
    const videoNameDb = videoName.replace(".mkv", "").replace("[Multiple Subtitle]", "").replace("[Erai-raws] ", "")
    const video = `${videoNameDb}.mp4`
    const output = `./${video}`
    console.log(output);
    const encode = spawn({
      input: videoPath,
      output: output,
      encoder:"x264",
      width:1280,
      height:720,
      "pixel-aspect":"1:1",
      "subtitle-lang-list": "por",
      "first-subtitle": true,
      "subtitle-burned": 1
    })
    encode.on('error', err => {
      console.log("Invalid Video Input/No Video Founded")
    })
    encode.on("start", () => {
      console.log("Started Encoding Subtitle!")
    })
    encode.on('progress', progress => {
        console.log(
          'Percent complete: %s, ETA: %s',
          progress.percentComplete,
          progress.eta
        )
    })
    encode.on("end", async () => {
      console.log("Encoding Completed!")
    })
  }
const videoPath = "[Erai-raws] Kono Subarashii Sekai ni Shukufuku wo! - OVA [1080p][Multiple Subtitle].mkv"
const videoName = "[Erai-raws] Kono Subarashii Sekai ni Shukufuku wo! - OVA [1080p][Multiple Subtitle].mkv"

encode(videoPath, videoName)