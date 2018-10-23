const express = require('express'),
      app = express(),
      bodyParser = require('body-parser');


const PORT = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(express.static('./Front-End/build'));
// app.use('/static', express.static('./Front-End/build/static/'));
app.get('*', function (request, response){
  response.sendFile(path.resolve('./Front-End/build', 'index.html'))
});

let songData = [ 
    {
    name: 'One Wish',
    description: "Come Clean - Home of Steve Void’s Strange Fruits record label! A song by the Falling apples.",
    path: 'One.mp3',
    id: 1
  },
  {
    name: "Poison",
    description: "A Message from the artist -thank you all enough for all the tremendous support you've shown me. As a token of my appreciation, here is my latest track 'Poison' ",
    path: 'Poison.mp3',
    id: 2
  },
  {
    name: 'MÖWE-Birds Flyin',        
    description: "Mixed by Nikodem Milewski offers mixing, mastering and music production for a wide range of music genres. We are currently located in Studio 3 at Sunshine Mastering in Vienna, Austria.",
    path: 'Mowe.mp3',
    id : 3
  },
  {
    name: 'My Love',
    description: "Rework of Route 94's Hit.It is the debut single by British DJ and record producer Route 94. It features vocals by Jess Glynne. It was released in the United Kingdom on 28 February 2014, through Rinse Recordings. The song topped the UK Singles Chart, peaked at number 12 on the Irish Singles Chart and also charted in Belgium.",
    path: 'My-Love.mp3',
    id: 4
  },
  {
    name: 'Infinity ',
    description: "(Dubdogz & Bhaskar Remake of Original) Infinity is a 2012 song recorded by music production and DJ duo Infinity Ink. The duo found fame in 2012 through Games on the Hot Creations label followed quickly by Infinity on the Crosstown Rebels label, released on 14 May 2012.",
    path: 'Infinity.mp3',
    id: 5
  },
  {
    name: "Don't Let Me Down", 
    description: "The Chainsmokers - Don't Let Me Down ft. Daya (Hipst3r Edit). Don't Let Me Down is a song by American production duo The Chainsmokers. The song features the vocals of American singer Daya, and was released on February 5, 2016, through Disruptor Records and Columbia Records.",
    path: 'Dont.mp3',
    id : 6
  }
];

app.get('/songdata', (req,res)=>{
    res.json(songData);
});

app.listen(PORT, (req,res)=>{
    console.log('Server runnning on' + PORT);
}) 