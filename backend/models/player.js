const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
    age: Number,
    nbr: Number,
    name: String,
    position: String
})

const player = mongoose.model("Player", playerSchema);

module.exports = player;