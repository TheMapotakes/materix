const { convertToAudio, convertStreamToAudio } = require("@bbc/convert-to-audio");
const fs = require("fs");
const url = "https://download.ted.com/talks/KateDarling_2018S-950k.mp4";
const audioFileOutput = "./ted-talk.wav";
let http = require('http');

convertToAudio(url, audioFileOutput)
  .then(newFile => {
    console.log(newFile);
  })
  .catch(err => {
    console.error(err);
  });

const writeStream = fs.createWriteStream(audioFileOutput);
convertStreamToAudio(url, writeStream)
  .then(() => {
    console.log(audioFileOutput);
  })
  .catch(err => {
    console.error(err);
  });
let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
};

http.createServer(handleRequest).listen(8000); 
 
 
 
 
 
 
 
 
 
 
