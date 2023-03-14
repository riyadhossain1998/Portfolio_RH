import json

#   File Destinations
artjson = './portfolio/src/Data/art.json'
featurenetjson = './portfolio/src/Data/featurenet.json'
introjson = './portfolio/src/Data/intro.json'
musicsurfjson = './portfolio/src/Data/musicsurf.json'
omsjson = './portfolio/src/Data/oms.json'
saladtimejson = './portfolio/src/Data/saladtime.json'
stonekeepjson = './portfolio/src/Data/stonekeep.json'


#   Paragraphs to edit
art = "Personal and School Projects. Will be adding more soon. "

featurenet = \
    "This is my personal project where I wanted to create a 2D network of popular artists that collaborated with each other in the mainstream music."\
    "\n\n"\
    "This project was initially built on ;Python; where the user can visualize their playlist. Initially, I started this project after learning"\
    "different libraries in Python, to list a few used in this project are ;json;, ;os;, ;pandas;, ;numpy; and the most important API for this project"\
    ";spotipy;. Together, I combined and organized all the data from the Spotify Web API and rendered a network graph with ;d3.js;, with Flask as my"\
    "backend. \n\n I have made amazing progress with this progress so far, it has been a fun website building experience so far, I have learned a lot."\
    "The complete app should include a lot more unique user interaction, a fun way to listen to music. Below is a backlog of my progress and what I intend"\
    "to do next. \n\n Below, I will link the GitHub Repo and once the website is up, the link. @GitHub@"


intro0 = \
    "Hello! I am Riyad and I just graduated from the ;University of Calgary; in ;Visual Studies, Art History; and ;Computer Science;. My ;Multidisciplinary degree; "\
    "has created this pathway for me to dive into both the Digital Arts and Programming worlds. Thanks to the Internet and Social Media and Pop Culture,"\
    " technological advancement over the past two decades has been immense to the point where art is abundant in marketing, businesses, education etc. From being a "\
    "niche market, catering to the extremely wealthy to free Internet memes, we have come a long way and my dreams are to be part of the history in the making."\
        "\n\n"\
    "I made this website with ;React; and ;BootStrap;. I made it similar to a ;social media feed;, specifically Quora as the color scheme was very simple to use."\
    "You can scroll down to see my other projects from university and projects I am currently working on for ;self-improvement; and improve ;adaptability;. "\
    "If you're interested to learn more about my work, please do shoot me a text or an email, my contacts are available in my resume on the top right corner. "\
        "\n\n"\
    "I am always trying to keep myself occupied with projects, whether they succeed or fail, it helps me ;learn from my mistakes; and grow from them. "    

intro = \
    "Welcome and thank you for taking your time to visit my portfolio! My name is Riyad and I am a ;developer; & ;designer.; who thrives for innovation and "\
    "usability. Everything I have been learning from university, I have been applying to my profession and the person I want to be, which is to give back to the"\
    "country where I grew to adulthood. Time never stops, change is inevitable."\
        "\n\n"\
    "Below this post are all my ;projects; you can ;scroll through; or ;use the shortcuts; to learn more about my work. My backlog for the portfolio is as follows: "\
    
musicsurf = \
    "This is a prototype of a ;music streaming service; like Spotify and Apple Music that I helped create in a ;team; of ;five people; for my ;Human Computer Interaction I;"\
    "course. We conducted ;user research; to learn about competitors, end-user and stakeholder needs. We used ;UX Design Principles; "\
    "to ;ideate;, ;brainstorm; and ;prototype; our ideas. We had ;initial sketches;, which turned into ;colored designs; to ;low-fidelity prototypes; "\
    "created with ;Adobe XD;. After a round of user testing, presentations and feedback, we created the ;high-fidelity prototype; with more features and animations"\
    "using Adobe XD. "\
        "\n\n"\
    "I was tasked in all stages of the process, from ;interviews;, ;research; and ;documentation; to prototyping the music player feature."\
    "What set us apart from apps like Spotify and MusicSurf was the concept of being able to find music based on the user's mood. The music was sorted by"\
    "different emotions, the songs were linked to each other based on those mood. Users could play around with the songs, linking and unlinking songs in queue."\
    "The music player has a circular design, with the pause button in the middle. Additional features included lyrics and queued songs in nodes."


oms = \
    ";Personal Figma Project; of an ;Order Management System; that I am currently working on to improve my Figma skills. This is based on the app I use at my"\
    "workplace to fulfill online orders and other floor and receiving activities but this project will first focus on ;online order fulfilment system;. My goal for this"\
    "project is to improve ;user experience; for ;retail workers; by making it more ;intuitive; and ;easy to use;. "\
        "\n\n"\
    "I am currently working on the ;wireframes;"\
    "The current wireframes are just a redesign of the old version, the reason why I did not make a drastic change in UI is because I did not want retail employees"\
    "to relearn the system, as a result, I kept the interaction flow similar, with added clarity and more information on screen.\n\n"\
    "I analyzed the problems we face at work everyday and decided to implement these quality of life improvements for better ;efficiency;, ;productivity; and "\
    ";mental health;."\
        "\n\n"\
    "After the completion of this prototype, a complete workflow of the system will be demonstrated to showcase the simple user flow of the design."\
    "With these factors improving, the overall ;customer experience; will surely improve as well, the project document can be shown upon request."\

saladtime = \
    "The project was completed during my ;HCI II; course. Our objective was to create ;a unique interaction with sound without the use of words.; "\
        "\n\n"\
    "Which is why I decided to build a humming salad bar, where the user has to hum a song or tune and based on the humming, a salad bowl recipe is created "\
    "based on user's preferred dietary choices, which is a necessary input option to account for different diets."\
    "For the assets, I have used Illustrator to design and build, I am still not a fan of the font, but it adds to the quirky idea so I went along with it."\
    "This is a mobile web app, built using ;HTML/CSS/JavaScript; and ;BootStrap;"\
        
stonekeep = \
    "The objective of this course was to create a game using any game engine so we used ;Unity & C#; to create an ;action/adventure game;."\
    "We were in a ;team of four;, two developers, one designer and one sound engineer. Key features of this game include multiple playable characters, "\
    "different character mechanics, varying enemy AIs (including one boss) and illusive obstacles. (e.g deceiving floor tiles). Game Design Document can be found "\
    "below and here are list of features we have implemented:\n\n"


def readNewParagraph(para):
    print("Step 0: Read new paragraph.")
    return para
   
def editJsonFileParagraph(filename, new_paragraph):
    # Open the JSON file
    with open(filename) as f:
        data = json.load(f)
    print("Step 1: Opened file.")

    # Update the "paragraph" key with the new paragraph string
    data['paragraph'] = new_paragraph
    print("Step 2: Updated paragraph.")
    # Write the updated JSON file back to the original file path
    with open(filename, 'w') as f:
        json.dump(data, f, indent=4)
    print("Step 3: Wrote to file.")


def editJson(filename, new_paragraph):
    editJsonFileParagraph(filename, new_paragraph)
    print("Step 4: Done. Thanks for coming to my Ted Talk!")

def main():

    editJson(featurenetjson, featurenet)
    print("Feature Net Info Updated.")
    editJson(introjson, intro)
    print("Intro Info Updated.")
    editJson(musicsurfjson, musicsurf)
    print("MusicSurf Info Updated.")
    editJson(omsjson, oms)
    print("OMS Info Updated.")
    editJson(saladtimejson, saladtime)
    print("Salad Time Info Updated.")
    editJson(stonekeepjson, stonekeep)
    print("Art Info Updated")
    editJson(artjson, art)
    
    
if __name__ == "__main__":
    main()
