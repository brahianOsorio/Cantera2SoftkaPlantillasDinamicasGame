const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const GameSchema = new Schema({

    gamers: {
        type: [],
        required: [true, 'los Jugadores son requeridos']
    },
    inProgres:{
        type:String,
        trim: true
    },
    winner:{
        type:String
    }
});

module.exports = Game = mongoose.model('Game', GameSchema);