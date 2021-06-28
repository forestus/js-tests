import {OAuth2Client } from 'google-auth-library';
import keyFile from "../data/oauth_key.json"
import tokensFile from "./.google-oauth2-credentials.json"
import Youtube from 'youtube-video-api'
// parte deste controller foi usado na api do Blogger a outra parte(inicial) foi adaptada para youtube para verifcar save de videos. no meu caso decidi usar o google drive para armazenar.
class AuthController{

    async authenticate(req,res){
        const oAuth2Client = new OAuth2Client(
            keyFile.installed.client_id,
            keyFile.installed.client_secret,
            keyFile.installed.redirect_uris[0]
          );
          const authorizeUrl = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: ['https://www.googleapis.com/auth/youtube.upload','https://www.googleapis.com/auth/youtube','https://www.googleapis.com/auth/youtubepartner'],
          });
        return res.json({
            url:authorizeUrl
        })
    }
    async show(req,res){
        const {code,access_token,refresh_token,scope,token_type,expiry_date, videoName} = req.body;
        const oAuth2Client = new OAuth2Client(
            keyFile.installed.client_id,
            keyFile.installed.client_secret,
            keyFile.installed.redirect_uris[0]
          );
          if(code){
              const response = await oAuth2Client.getToken(code);
              console.log(response.tokens)
              oAuth2Client.setCredentials(response.tokens)
            }else{
                oAuth2Client.setCredentials({access_token,refresh_token,scope,token_type,expiry_date})
            }
var youtube = Youtube({ 
  video: {
    part: 'status,snippet' 
  }
})
 
var params = {
  resource: {
    snippet: {
      title: 'test video',
      description: 'This is a test video uploaded via the YouTube API'
    },
    status: {
      privacyStatus: 'private'
    }
  }
}
 
youtube.authenticate(keyFile.installed.client_id, keyFile.installed.client_secret,tokensFile, function (err, tokens) {
  if (err) return console.error('Cannot authenticate:', err)
  uploadVideo()
})
 
function uploadVideo() {
  youtube.upload(`../blogger/src/data/${videoName}`, params, function (err, video) {
    // 'path/to/video.mp4' can be replaced with readable stream. 
    // When passing stream adding mediaType to params is advised.
    if (err) {
      return console.error('Cannot upload video:', err)
    }
 
    console.log('Video was uploaded with ID:', video.id)
    return res.json({
      video
  })
    // this is just a test! delete it
    // youtube.delete(video.id, function (err) {
    //   if (!err) console.log('Video was deleted')
    // })
  })
}
        
        
    }
    async create(req,res){
        const {code,access_token,refresh_token,scope,token_type,expiry_date} = req.body;
        const oAuth2Client = new OAuth2Client(
            keyFile.installed.client_id,
            keyFile.installed.client_secret,
            keyFile.installed.redirect_uris[0]
          );
          if(code){
              const response = await oAuth2Client.getToken(code);
              console.log(response.tokens)
              oAuth2Client.setCredentials(response.tokens)
            }else{
                oAuth2Client.setCredentials({access_token,refresh_token,scope,token_type,expiry_date})
            }
            const post = {
                "kind": "blogger#post",
                "blog": {
                  "id": "3194441274266004269"
                },
                "title": "Dekita!",
                "content": "Hello World!!!"
              }
        const url = `https://blogger.googleapis.com/v3/blogs/3194441274266004269/posts`
        const posts = await oAuth2Client.request({method:"POST",url:url,responseType:"json",headers:{'content-type': 'application/x-www-form-urlencoded'},data:post})
        return res.json({
            posts
        })
    }
    async uploadVideo(req,res){
        var uploader = new MediaUploader({
            baseUrl: 'https://www.googleapis.com/upload/youtube/v3/videos',
            file: file,
            token: this.accessToken,
            metadata: metadata,
            params: {
              part: Object.keys(metadata).join(',')
            },
            onError: function(data) {
              var message = data;
              // Assuming the error is raised by the YouTube API, data will be
              // a JSON string with error.message set. That may not be the
              // only time onError will be raised, though.
              try {
                var errorResponse = JSON.parse(data);
                message = errorResponse.error.message;
              } finally {
                alert(message);
              }
            }.bind(this),
            onProgress: function(data) {
              var currentTime = Date.now();
              var bytesUploaded = data.loaded;
              var totalBytes = data.total;
              // The times are in millis, so we need to divide by 1000 to get seconds.
              var bytesPerSecond = bytesUploaded / ((currentTime - this.uploadStartTime) / 1000);
              var estimatedSecondsRemaining = (totalBytes - bytesUploaded) / bytesPerSecond;
              var percentageComplete = (bytesUploaded * 100) / totalBytes;
        
              $('#upload-progress').attr({
                value: bytesUploaded,
                max: totalBytes
              });
        
              $('#percent-transferred').text(percentageComplete);
              $('#bytes-transferred').text(bytesUploaded);
              $('#total-bytes').text(totalBytes);
        
              $('.during-upload').show();
            }.bind(this),
            onComplete: function(data) {
              var uploadResponse = JSON.parse(data);
              this.videoId = uploadResponse.id;
              $('#video-id').text(this.videoId);
              $('.post-upload').show();
              this.pollForVideoStatus();
            }.bind(this)
          });
    }
}
export {AuthController}