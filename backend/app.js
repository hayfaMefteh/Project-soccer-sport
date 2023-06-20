// import express module
const express = require("express");
// import body parser module
const bodyParser = require("body-parser");
// import bcrypt module
const bcrypt = require("bcrypt");
// import multer module
const multer = require("multer");
// import path module
const path = require("path");
// import axios module
const axios = require("axios");
// import mongoose module
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/sportDB")
// create app express
const app = express();

// Models Importation
const Match = require("./models/match");
const Team = require("./models/team");
const User = require("./models/user");
const Player = require("./models/player");
const { match } = require("assert");
const player = require("./models/player");

// application config 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
// ShortCut path
app.use('/myFiles', express.static(path.join('backend/images')));
// media types
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}

const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});

// DB simulation matches
let matchesTab = [{
    id: 1, scoreOne: 1, scoreTwo: 3, teamOne: "CA", teamTwo: "EST"
},
{ id: 2, scoreOne: 3, scoreTwo: 0, teamOne: "JUV", teamTwo: "ROM" },
{ id: 3, scoreOne: 0, scoreTwo: 2, teamOne: "INT", teamTwo: "LIV" }];

function generateId(t) {
    let max;
    if (t.length == 0) {
        max = 0;
    } else {
        max = t[0].id;
        for (let i = 1; i < t.length; i++) {

            if (t[i].id > max) {
                max = t[i].id;
            }
        }
    }

    return max + 1;
}
console.log(generateId(matchesTab));
// business logic (traitement logique) :get all matches
// app.get("/api/matches", (req, res) => {
//     console.log("here into BL: get All matches");
//     res.status(200).json({ matches: matchesTab, message: "ok" })
// })
app.get("/api/matches", (req, res) => {
    console.log("here into BL: get All matches");
    // res.status(200).json({ matches:matchesTab, message: "Here All MAtches})
    Match.find().then((docs) => {
        res.status(200).json({ matches: docs, message: "Here All MAtches" })
    });
})

// business logic (traitement logique) :get matche by id
app.get("/api/matches/:id", (req, res) => {
    console.log("here into BL: get match by id");
    let id = req.params.id;
    Match.findOne({ _id: id }).then((doc) => {
        res.status(200).json({ match: doc, message: "ok" })
    })


})

// business logic (traitement logique) :delete match by id
app.delete("/api/matches/:id", (req, res) => {

    console.log("here into BL: delete match by id");
    let id = req.params.id;
    Match.deleteOne({ _id: id }).then((result) => {
        console.log(("here response after delete", result));
        result.deletedCount == 1
            ? res.json({ message: "deleted with succes" })
            : res.json({ message: " not deleted" });
    })
    // let isFounded = false;
    // for (let i = 0; i < matchesTab.length; i++) {
    //     if (matchesTab[i].id == id) {
    //         isFounded = true;
    //         matchesTab.splice(i, 1);
    //         break;
    //     }

    // }
    // (isFounded) ? res.json({ message: "succes" })
    //     : res.json({ message: "id not found" });



})
// business logic (traitement logique) :add match 
app.post("/api/matches", (req, res) => {
    console.log("here into BL: add match");
    let obj = new Match(req.body);
    // obj.id = (generateId(matchesTab));
    // matchesTab.push(obj);
    obj.save();
    res.status(200).json({ message: "added with succes" })
})
// business logic (traitement logique) :edit match 
app.put("/api/matches", (req, res) => {

    console.log("here into BL: edit match", req.body);
    let newMatch = req.body;
    Match.updateOne({ _id: newMatch._id }, newMatch).then((result) => {
        console.log("here result after updte", result);
        result.nModified == 1 ?
            res.json({ message: "edited with success" }) :
            res.json({ message: "echec" });


    })
    // for (let i = 0; i < matchesTab.length; i++) {
    //     if (matchesTab[i].id == req.body.id) {
    //         matchesTab[i] = req.body;
    //         res.json({ message: "edited with success" });
    //         break;
    //     }
    // }
});

// DB simulation 
let teamsTab = [{
    id: 1, name: "ROM", stadium: "ROM", owner: "ROM"
},
{ id: 2, name: "LIV", stadium: "LIV", owner: "LIV" },
{ id: 3, name: "JUV", stadium: "JUV", owner: "JUV" }];

// business logic (traitement logique) :get all teams
app.get("/api/teams", (req, res) => {
    console.log("here into BL: get All teams");
    res.status(200).json({ teams: teamsTab, message: "ok" })


})

// business logic (traitement logique) :get team by id
app.get("/api/teams/:id", (req, res) => {
    console.log("here into BL: get teams by id");
    let id = req.params.id;
    let findedTeam = teamsTab.find((elt) => { return elt.id == id });

    res.status(200).json({ teams: findedTeam, message: "ok" })
})

// business logic (traitement logique) :delete team by id
app.delete("/api/teams/:id", (req, res) => {

    console.log("here into BL: delete team by id");
    let id = req.params.id;
    let isFounded = false;
    for (let i = 0; i < teamsTab.length; i++) {
        if (teamsTab[i].id == id) {
            isFounded = true;
            teamsTab.splice(i, 1);
            break;
        }

    }
    (isFounded) ? res.json({ message: "succes" })
        : res.json({ message: "id not found" });



})
// business logic (traitement logique) :add team 
app.post("/api/teams", (req, res) => {

    console.log("here into BL: add team", req.body);
    let teamObj = new Team({
        teamName: req.body.name,
        teamStadium: req.body.stadium,
        teamOwner: req.body.owner,
    });
    teamObj.save((err, doc) => {
        console.log("here error", err);
        console.log("here error", doc);
        err ? res.json({ message: "error" }) : res.json({ message: "added with succes" });
    });

})

// business logic (traitement logique) :edit team 
app.put("/api/teams", (req, res) => {

    console.log("here into BL: edit team");
})
// DB simulation 
// let playersTab = [{
//     id: 1, name: "messi", age: 35, position: "ATK", nbr: 10
// },
// { id: 2, name: "CR7", age: 35, position: "ATK", nbr: 7 },];

// business logic (traitement logique) :delete player by id
// app.delete("/api/players/:id", (req, res) => {

//     console.log("here into BL: delete player by id");
//     let id = req.params.id;
//     let isFounded = false;
//     for (let i = 0; i < playersTab.length; i++) {
//         if (playersTab[i].id == id) {
//             isFounded = true;
//             playersTab.splice(i, 1);
//             break;
//         }

//     }
//     (isFounded) ? res.json({ message: "succes" })
//         : res.json({ message: "id not found" });



// })



// business logic (traitement logique) :add player 
app.post("/api/players", (req, res) => {

    console.log("here into BL: add player", req.body);
    let p= new Player (req.body);
   p.save(); 
    res.json({ msg: "added with succes" })
})
// business logic (traitement logique) : get all player
app.post("/api/players", (req, res) => {

    console.log("here into BL: get all player");
    Player.find().then((docs)=>{
        res.json({playersTab:docs})
    }) 
    
})

// business logic (traitement logique) : get player by id
app.post("/api/players", (req, res) => {

    console.log("here into BL: get player by id" , req.params.id);
    Player.findOne({_id:req.params.id}).then((doc)=>{
        res.json({player:doc})
    }) 
    
})

// business logic (traitement logique) :edit player 
app.put("/api/players", (req, res) => {

    console.log("here into BL: edit player", req.body);
   Player.updateOne({_id:req.body._id}, req.body).then((response)=>{
    if (response.nModified==1) {
        res.json({msg:"ok"})
        
    } else {
        res.json({msg:"nok"})
        
    }
   });
})
// make app importable to other files /exportable


// business logique signup
app.post("/api/users/signup", multer({ storage: storageConfig }).single('img'), (req, res) => {

    console.log("here into BL: add user", req.body);
    bcrypt.hash(req.body.pwd, 8).then((cryptePwd) => {
        console.log("here crypted Pwd", cryptePwd);
        req.body.pwd = cryptePwd;
        req.body.avatar = `${req.protocol}://${req.get("host")}/myFiles/${req.file.filename}`;
        let user = new User(req.body);
        user.save((err, doc) => {
            console.log("here error", err);
            console.log("here document", doc);
            err ? res.json({ message: "error" }) : res.json({ message: "added with succes" });
        });
    })
})

// business logique login
app.post("/api/users/login", (req, res) => {

    console.log("here into BL: add user", req.body);
    let user;
    User.findOne({ email: req.body.email }).then((doc) => {
        console.log("here doc", doc);
        user = doc;
        if (!doc) {
            res.json({ msg: "please check u email" });

        } else {
            return bcrypt.compare(req.body.pwd, doc.pwd)
        }
    })
        .then((isEqual) => {
            console.log("here isEqual", isEqual);
            if (!isEqual) {
                res.json({ msg: "please chech pwd" });
            } else {
                let userToSend = {
                    userId: user._id,
                    email: user.email,
                    fName: user.firstName,
                    lName: user.lastName,
                }
                res.json({ user: userToSend, msg: "welcome" })
            }
        })

})
// business logic (traitement logique) :search match
app.post("/api/matches/searchMatches", (req, res) => {
    console.log("here into BL : search all matches", req.body);

    // Match.find({ scoreOne: req.body.scoreOne, scoreTwo: req.body.scoreTwo }).then((docs) => {
        Match.find({$or : [{scoreOne: req.body.scoreOne}, {scoreTwo: req.body.scoreTwo}] }).then((docs) => {

        res.json({ findedMatch: docs , msg :"done" });


    })

})


// BL : search weather
app.get("/api/weather/:city", (req,res)=>{
    console.log("Here into BL: search weather by city", req.params.city);
    let apiKey = "62ee756a34835483299877a61961cafb";
    let  apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + req.params.city +"&appid=" +
    apiKey + "&units=metric";
    axios.get(apiUrl).then((weatherResponse)=>{
      console.log("here response from API ",weatherResponse);
  
    });
  })




module.exports = app;