var express = require('express');
var router = express.Router();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');
var upload = multer({ dest: '/tmp/'});
var aws = require("aws-sdk");
var uuid = require("uuid");
const FileType = require('file-type');
var randomstring = require("randomstring");
require('dotenv').config();
/*{ "accessKeyId": <YOUR_ACCESS_KEY_ID>, "secretAccessKey": <YOUR_SECRET_ACCESS_KEY>, "region": "us-east-1" }*/


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/snap', upload.single('file'), function(req, res){
  console.log(req.body);
  var base64Data = req.body.file.replace(/^data:image\/jpeg;base64,/, "");
  let randompath = randomstring.generate({length: 32, charset: "alphabetic"});
  fs.writeFile("./images/" + randompath, base64Data, "base64", function(er){
    console.log(er);
  })
  let file = __dirname+"/../images/"+randompath;
  console.log(randompath);
  (async () => {
    try{
      format = await FileType.fromFile(file);
      console.log(format.ext);
      if(format.ext == "jpg" || format.ext == "png" || format.ext == "jpeg"){
        let s3 = new aws.S3({ accessKeyId: process.env.AWS_ACCESS_KEY, secretAccessKey: process.env.AWS_SECRET_KEY });
        const fileContent = fs.readFileSync(file);
        console.log(fileContent);
        const params = {
            Bucket: 'cs501assignment4',
            Key: randompath+"."+format.ext, // File name you want to save as in S3
            Body: fileContent
        };

        s3.upload(params, function(err, data) {
            if (err) {
                throw err;
            }
            console.log(`File uploaded successfully. ${data.Location}`);
            try{
              let spawn = require("child_process").spawn;
              let process = spawn('python',["./merged.py", data.Location] );
              let url = data.Location
              process.stdout.on('data', function(data) {
                console.log(data.toString());
                res.send(data.toString());
              } )
            }catch(e){throw e;}
        });
        // res.send("File uploaded successfully!");
      }
      else
        throw("err");
    } catch(e){
      res.send(500);
    }
      //=> {ext: 'png', mime: 'image/png'}
  })();
});

router.post('/', upload.single('file'), function(req, res) {
  var file = __dirname + '/' + req.file.filename;
  //console.log(req.file.path);
  fs.rename(req.file.path, file, function(err) {
    if (err) {
      console.log(err);
      res.send(500);
    }

    console.log(file, req.file.filename);
    (async () => {
      try{
        format = await FileType.fromFile(file);
        if(format.ext == "jpg" || format.ext == "png" || format.ext == "jpeg"){
          let s3 = new aws.S3({ accessKeyId: process.env.AWS_ACCESS_KEY, secretAccessKey: process.env.AWS_SECRET_KEY });
          const fileContent = fs.readFileSync(file);
          const params = {
              Bucket: 'cs501assignment4',
              Key: req.file.filename+"."+format.ext, // File name you want to save as in S3
              Body: fileContent
          };

          s3.upload(params, function(err, data) {
              if (err) {
                  throw err;
              }
              console.log(`File uploaded successfully. ${data.Location}`);
              try{
                let spawn = require("child_process").spawn;
                let process = spawn('python',["./merged.py", data.Location] );
                let url = data.Location
                process.stdout.on('data', function(data) {
                  console.log(data.toString());
                  res.render('upload', {message : data.toString(), url : url});
                } )
              }catch(e){throw e;}
          });
          // res.send("File uploaded successfully!");
        }
        else
          throw("err");
      } catch(e){
        res.send(500);
      }
        //=> {ext: 'png', mime: 'image/png'}
    })();
  });
});

module.exports = router;
