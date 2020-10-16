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
const axios = require('axios').default;
require('dotenv').config();
var request=require("request-promise-native");
/*{ "accessKeyId": <YOUR_ACCESS_KEY_ID>, "secretAccessKey": <YOUR_SECRET_ACCESS_KEY>, "region": "us-east-1" }*/


function generateCompliment(){
  lst = []
  lst.push("You look like a kind person. Stay strong!")
  lst.push("you look like a kind soul, you make people feel comfortable, you give them hope. keep being you friend :)")
  lst.push("You look super nice!")
  lst.push("You seem like an awesome person")
  lst.push("You look like you'd be really fun to talk shit with.")
  lst.push("Hey there dude, looking good for your age here.I think you're a pretty decent looking young fella.Don't let anyone tell you otherwise")
  lst.push("You got so many things going for you, just focus on yourself. You're good :)")
  lst.push("You look like you'd be a really nice friend!")
  lst.push("No matter what you think, you look great for your age!")
  lst.push("I think you are stunning, your nose just takes away from it. But honestly the rest of you is lovely, you are just gorgeous!")
  lst.push("I know there will always be people who disagree with you. The fact you were able to post here shows you got your shit together, and are doing so well for yourself.")
  lst.push("The thing is, you look like you could be from another planet. There are many, many galaxies out there. Explore them and live the adventures. No, seriously. It may take you to a whole other dimension.")
  lst.push("You're very beautiful.")
  lst.push(" You look like a more athletic Alessia cara. But that's okay. 7.5/10")
  lst.push(" I love that about your look. You're beautiful! ")
  lst.push("I'm sure you'll find someone that loves you no matter what. Remember you've got this, and try to enjoy yourself regardless. Good luck!")
  lst.push("I wouldn't wanna mess with you.")
  lst.push("I am getting serious vibes from you.")
  lst.push("You can do it!")
  lst.push(" I hope you get the help you need. And know that even if you don’t, you’ll still be a strong person.")
  lst.push("I’m getting a lot of positive vibes from this pic. You look great!!!")
  lst.push("You look like the cool dude in any nerd comedy. The one that everyone underestimates.")
  lst.push("This is a great picture! I love the lighting, the pose, and you look like someone who’s funny and cool to hang with.")
  lst.push("You are not alone. Keep your chin up. If it helps the eyes will help you remember that.")
  lst.push("You look like someone who is nice to be around. And you have a very cute smile.")
  lst.push("That’s awesome! Just keep pushing and take each day as it comes. Cheers to you!")
  lst.push("You look like you belong on a rock paper scissors commercial!")
  lst.push("I hope things go well. And I bet they will!")
  lst.push("Beautiful, I think you’re a hottie.You look very attractive")
  lst.push("You look like an awesome friend.")
  lst.push("You're a gift to those around you, a smart cookie.")
  lst.push("I like your style.")
  lst.push("You are the most perfect you there is.")
  lst.push("You should be proud of yourself. You're more helpful than you realize.")
  lst.push("You're all that and a super-size bag of chips.")
  lst.push("On a scale from 1 to 10, you're an 11.")
  lst.push("You're even more beautiful on the inside than you are on the outside.")
  lst.push("You have the courage of your convictions.")
  lst.push("I'm inspired by you.")
  lst.push("You're like a ray of sunshine on a really dreary day.")
  lst.push("You are making a difference.")
  lst.push("You bring out the best in other people.")
  lst.push("That thing you don't like about yourself is what makes you so interesting.")
  lst.push("You're better than a triple-scoop ice cream cone. With sprinkles.")
  lst.push("Jokes are funnier when you tell them.")
  lst.push("Your smile is contagious.")
  lst.push("I bet you make babies smile.")
  lst.push("You light up the room.")
  lst.push("You have a great sense of humor.")
  lst.push("If cartoon bluebirds were real, a couple of 'em would be sitting on your shoulders singing right now.")
  lst.push("You're like sunshine on a rainy day.")
  lst.push("You bring out the best in other people.")
  lst.push("I bet you sweat glitter.")
  lst.push("Colors seem brighter when you're around.")
  lst.push("You're more fun than a ball pit filled with candy.")
  lst.push("Jokes are funnier when you tell them.")
  lst.push("You always know how to find that silver lining.")
  lst.push("You're a candle in the darkness.")
  lst.push("Being around you is like a happy little vacation.")
  lst.push("You're more fun than bubble wrap.")
  lst.push("You're like a breath of fresh air.")
  lst.push("You're someone's reason to smile.")
  lst.push("How do you keep being so funny and making everyone laugh?")
  lst.push("You should be proud of yourself.")
  lst.push("You are making a difference.")
  lst.push("You deserve a hug right now.")
  lst.push("You're a great example to others.")
  lst.push("Actions speak louder than words, and yours tell an incredible story.")
  lst.push("Hanging out with you is always fun.")
  lst.push("Someone is getting through something hard right now because you've got their back. Nice work.")
  lst.push("The people you love are lucky to have you in their lives.")
  lst.push("Defenseless animals are drawn to you.")
  lst.push("You're a gift to those around you.")
  lst.push("Your eyes are breathtaking.")
  lst.push("I appreciate you.")
  lst.push("You are enough.")
  lst.push("In high school, I bet you were voted 'most likely to continue being awesome.'")
  lst.push("If you were a box of crayons, you'd be the big industrial name-brand one with a built-in sharpener.")
  lst.push("Who raised you? They deserve a medal for a job well done.")
  lst.push("Somehow you make time stop and fly all at the same time.")
  lst.push("There's ordinary, and then there's you.")
  lst.push("You're even better than a unicorn because you're real.")
  lst.push("You're really something special.")
  lst.push("You're gorgeous—and that's the least interesting thing about you, too.")
  lst.push("That color is perfect on you.")
  lst.push("You may dance like no one's watching, but everyone's watching because you're mesmerizing.")
  lst.push("Your hair looks stunning.")
  lst.push("Has anyone ever told you that you have great posture?")
  lst.push("I’ll always have your back.")
  lst.push("You’re my queen.")
  lst.push("I miss you even when you haven’t left yet.")
  lst.push("You look beautiful even when you don’t try.")
  lst.push("You make me want to be my best because you deserve the best.")
  lst.push("You’re even sexy when you’re bossy.")
  lst.push("The more I learn about you, the more I fall.")
  lst.push("I wouldn’t mind growing old and fat with you.")
  lst.push("Your lips always look kissable.")
  lst.push("You have my heart.")
  lst.push("You’re a gem.")
  lst.push("I love looking at you.")
  return lst[Math.floor(Math.random() * lst.length)];
}

async function requestMicrosoft(url){
  let subscriptionKey = process.env.FACE_SUBSCRIPTION_KEY
  let endpoint = process.env.FACE_ENDPOINT + '/face/v1.0/detect'

  // Optionally, replace with your own image URL (for example a .jpg or .png URL).
  // Send a POST request
  return axios({
      method: 'post',
      url: endpoint,
      params : {
          detectionModel: 'detection_02',
          returnFaceId: true
      },
      data: {
          url: url,
      },
      headers: { 'Ocp-Apim-Subscription-Key': subscriptionKey }
  })
}

async function requestLuxand(url){
  var options = {
  	method: 'POST',
  	url: "https://api.luxand.cloud/photo/landmarks",
  	qs: {},
  	headers: {
  		'token': "dba6a5e73e7b48ac8d0050ddee003639"
  	},
  	formData: {
  		photo: url
  		// or use URL
  		// photo: 'https://dashboard.luxand.cloud/img/brad.jpg'
  	}
  };

  return request(options);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/snap', upload.single('file'), function(req, res){
  var base64Data = req.body.file.replace(/^data:image\/jpeg;base64,/, "");
  let randompath = randomstring.generate({length: 32, charset: "alphabetic"});
  // fs.writeFile("./images/" + randompath, base64Data, "base64", function(er){
  //   console.log(er);
  // })
  // let file = __dirname+"/../images/"+randompath;
  console.log(randompath);
  (async () => {
    try{
      //format = await FileType.fromFile(file);
      let format = {ext: "jpg"}
      console.log(format.ext);
      if(format.ext == "jpg" || format.ext == "png" || format.ext == "jpeg"){
        let s3 = new aws.S3({ accessKeyId: process.env.AWS_ACCESS_KEY, secretAccessKey: process.env.AWS_SECRET_KEY });
        const fileContent = Buffer.from(base64Data, 'base64')//fs.readFileSync(file);
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
            requestMicrosoft(data.Location).then(function (response) {
                response_microsoft = response.data.length

                requestLuxand(data.Location).then(function (response) {
                    responseJson = JSON.parse(response);
                    response_luxand = responseJson["landmarks"].length;

                    if( response_microsoft > 0 && response_luxand > 0){
                      console.log(generateCompliment());
                      res.send(generateCompliment());
                    } else{
                      console.log("We only work with human faces, for now.");
                      res.send("We only work with human faces, for now.");
                    }
                }).catch(function (error) {
                    console.log(error)
                    res.send(500);
                });
            }).catch(function (error) {
                console.log(error)
                res.send(500);
            });
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
//  fs.rename(req.file.path, file, function(err) {
    // if (err) {
    //   console.log(err);
    //   res.send(500);
    // }

    console.log(file, req.file.path);
    (async () => {
      try{
        format = await FileType.fromFile(req.file.path);
        if(format.ext == "jpg" || format.ext == "png" || format.ext == "jpeg"){
          let s3 = new aws.S3({ accessKeyId: process.env.AWS_ACCESS_KEY, secretAccessKey: process.env.AWS_SECRET_KEY });
          const fileContent = fs.readFileSync(req.file.path);
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
              requestMicrosoft(data.Location).then(function (response) {
                  response_microsoft = response.data.length

                  requestLuxand(data.Location).then(function (response) {
                      responseJson = JSON.parse(response);
                      response_luxand = responseJson["landmarks"].length;

                      if( response_microsoft > 0 && response_luxand > 0){
                        console.log(generateCompliment());
                        res.render('upload', {message : generateCompliment(), url : data.Location});
                      } else{
                        console.log("We only work with human faces, for now.");
                        res.render('upload', {message : "We only work with human faces, for now.", url : data.Location});
                      }
                  }).catch(function (error) {
                      console.log(error)
                      res.send(500);
                  });
              }).catch(function (error) {
                  console.log(error)
                  res.send(500);
              });

              // try{
              //   let spawn = require("child_process").spawn;
              //   console.log(data.Location);
              //
              //   let processes = spawn('python',["./merged.py", data.Location] );
              //   console.log(data.Location);
              //   let url = data.Location
              //   processes.stdout.on('data', function(data) {
              //     console.log(data.toString());
              //     res.render('upload', {message : data.toString(), url : url});
              //   } )
              //   console.log(url);
              // }catch(e){throw e;}
          });
          // res.send("File uploaded successfully!");
        }
        else
          throw("err");
      } catch(e){
        console.log(e);
        res.send(500);
      }
        //=> {ext: 'png', mime: 'image/png'}
    })();
  //});
});

module.exports = router;
