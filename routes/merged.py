import json, os, requests
from luxand import luxand
import random
import sys

subscription_key = "1c392d8c74cb41aa871a716812ee6823"
assert subscription_key
face_api_url = "https://assignment4.cognitiveservices.azure.com" + '/face/v1.0/detect'
params = {
    'detectionModel': 'detection_02',
    'returnFaceId': 'true'
}
headers = {'Ocp-Apim-Subscription-Key': subscription_key}
client = luxand("dba6a5e73e7b48ac8d0050ddee003639")

# image_url = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gannett-cdn.com%2Fpresto%2F2018%2F08%2F30%2FPCIN%2F8030223b-f29d-4656-9406-a3e034269c0a-Ndume_looking_left.jpg%3Fcrop%3D3419%2C1922%2Cx0%2Cy296%26width%3D3200%26height%3D1680%26fit%3Dbounds&f=1&nofb=1'


# print(json.dumps(response.json()))


#!/usr/bin/env python3




# url = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp5924548.jpg&f=1&nofb=1";

# result = client.landmarks(photo = url)
# print(result)

def compliment():
    lst = list()
    lst.append("You look like a kind person. Stay strong!")
    lst.append("you look like a kind soul, you make people feel comfortable, you give them hope. keep being you friend :)")
    lst.append("You look super nice!")
    lst.append("You seem like an awesome person")
    lst.append("You look like you'd be really fun to talk shit with.")
    lst.append("Hey there dude, looking good for your age here.I think you're a pretty decent looking young fella.Don't let anyone tell you otherwise")
    lst.append("You got so many things going for you, just focus on yourself. You're good :)")
    lst.append("You look like you'd be a really nice friend!")
    lst.append("No matter what you think, you look great for your age!")
    lst.append("I think you are stunning, your nose just takes away from it. But honestly the rest of you is lovely, you are just gorgeous!")
    lst.append("I know there will always be people who disagree with you. The fact you were able to post here shows you got your shit together, and are doing so well for yourself.")
    lst.append("The thing is, you look like you could be from another planet. There are many, many galaxies out there. Explore them and live the adventures. No, seriously. It may take you to a whole other dimension.")
    lst.append("You're very beautiful.")
    lst.append(" You look like a more athletic Alessia cara. But that's okay. 7.5/10")
    lst.append(" I love that about your look. You're beautiful! ")
    lst.append("I'm sure you'll find someone that loves you no matter what. Remember you've got this, and try to enjoy yourself regardless. Good luck!")
    lst.append("I wouldn't wanna mess with you.")
    lst.append("I am getting serious vibes from you.")
    lst.append("You can do it!")
    lst.append(" I hope you get the help you need. And know that even if you don’t, you’ll still be a strong person.")
    lst.append("I’m getting a lot of positive vibes from this pic. You look great!!!")
    lst.append("You look like the cool dude in any nerd comedy. The one that everyone underestimates.")
    lst.append("This is a great picture! I love the lighting, the pose, and you look like someone who’s funny and cool to hang with.")
    lst.append("You are not alone. Keep your chin up. If it helps the eyes will help you remember that.")
    lst.append("You look like someone who is nice to be around. And you have a very cute smile.")
    lst.append("That’s awesome! Just keep pushing and take each day as it comes. Cheers to you!")
    lst.append("You look like you belong on a rock paper scissors commercial!")
    lst.append("I hope things go well. And I bet they will!")
    lst.append("Beautiful, I think you’re a hottie.You look very attractive")
    lst.append("You look like an awesome friend.")
    lst.append("You're a gift to those around you, a smart cookie.")
    lst.append("I like your style.")
    lst.append("You are the most perfect you there is.")
    lst.append("You should be proud of yourself. You're more helpful than you realize.")
    lst.append("You're all that and a super-size bag of chips.")
    lst.append("On a scale from 1 to 10, you're an 11.")
    lst.append("You're even more beautiful on the inside than you are on the outside.")
    lst.append("You have the courage of your convictions.")
    lst.append("I'm inspired by you.")
    lst.append("You're like a ray of sunshine on a really dreary day.")
    lst.append("You are making a difference.")
    lst.append("You bring out the best in other people.")
    lst.append("That thing you don't like about yourself is what makes you so interesting.")
    lst.append("You're better than a triple-scoop ice cream cone. With sprinkles.")
    lst.append("Jokes are funnier when you tell them.")
    lst.append("Your smile is contagious.")
    lst.append("I bet you make babies smile.")
    lst.append("You light up the room.")
    lst.append("You have a great sense of humor.")
    lst.append("If cartoon bluebirds were real, a couple of 'em would be sitting on your shoulders singing right now.")
    lst.append("You're like sunshine on a rainy day.")
    lst.append("You bring out the best in other people.")
    lst.append("I bet you sweat glitter.")
    lst.append("Colors seem brighter when you're around.")
    lst.append("You're more fun than a ball pit filled with candy.")
    lst.append("Jokes are funnier when you tell them.")
    lst.append("You always know how to find that silver lining.")
    lst.append("You're a candle in the darkness.")
    lst.append("Being around you is like a happy little vacation.")
    lst.append("You're more fun than bubble wrap.")
    lst.append("You're like a breath of fresh air.")
    lst.append("You're someone's reason to smile.")
    lst.append("How do you keep being so funny and making everyone laugh?")
    lst.append("You should be proud of yourself.")
    lst.append("You are making a difference.")
    lst.append("You deserve a hug right now.")
    lst.append("You're a great example to others.")
    lst.append("Actions speak louder than words, and yours tell an incredible story.")
    lst.append("Hanging out with you is always fun.")
    lst.append("Someone is getting through something hard right now because you've got their back. Nice work.")
    lst.append("The people you love are lucky to have you in their lives.")
    lst.append("Defenseless animals are drawn to you.")
    lst.append("You're a gift to those around you.")
    lst.append("Your eyes are breathtaking.")
    lst.append("I appreciate you.")
    lst.append("You are enough.")
    lst.append("In high school, I bet you were voted 'most likely to continue being awesome.'")
    lst.append("If you were a box of crayons, you'd be the big industrial name-brand one with a built-in sharpener.")
    lst.append("Who raised you? They deserve a medal for a job well done.")
    lst.append("Somehow you make time stop and fly all at the same time.")
    lst.append("There's ordinary, and then there's you.")
    lst.append("You're even better than a unicorn because you're real.")
    lst.append("You're really something special.")
    lst.append("You're gorgeous—and that's the least interesting thing about you, too.")
    lst.append("That color is perfect on you.")
    lst.append("You may dance like no one's watching, but everyone's watching because you're mesmerizing.")
    lst.append("Your hair looks stunning.")
    lst.append("Has anyone ever told you that you have great posture?")
    lst.append("I’ll always have your back.")
    lst.append("You’re my queen.")
    lst.append("I miss you even when you haven’t left yet.")
    lst.append("You look beautiful even when you don’t try.")
    lst.append("You make me want to be my best because you deserve the best.")
    lst.append("You’re even sexy when you’re bossy.")
    lst.append("The more I learn about you, the more I fall.")
    lst.append("I wouldn’t mind growing old and fat with you.")
    lst.append("Your lips always look kissable.")
    lst.append("You have my heart.")
    lst.append("You’re a gem.")
    lst.append("I love looking at you.")


    return random.choice(lst)


def detectFace(url):
    print(url)
    response_microsoft = requests.post(face_api_url, params=params,
                             headers=headers, json={"url": url})
    # print(json.dumps(response_microsoft.json()))
    # print(len(response_microsoft.json()))
    #print(response_microsoft.json())
    response_luxand = client.landmarks(photo = url)
    # print(response_luxand)
    # print(len(response_luxand))
    if len(response_microsoft.json()) > 0 and len(response_luxand) > 0:
        return compliment()
    else:
        return "We only work with human faces, for now."

print(detectFace(sys.argv[1]))
#print(detectFace("https://cs501assignment4.s3.us-east-2.amazonaws.com/ca1c154a7c01d2b34d03cb42c4c4c246.jpg"))
