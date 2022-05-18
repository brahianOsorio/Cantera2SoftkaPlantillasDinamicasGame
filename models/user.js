const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//se crea el schema de mongoDb sobre el los jugadores el cual contiene el nombre y la apuesta del jugador.
const userSchema = new Schema({
    name:{
        type: String,
        trim: true,
        required: [true, 'El Nombre es requerido']
    },
    bet:{
        type: Number,
        trim: true,
    },
    betAcomulated:{
        type: Number,
        trim: true,
    }
});

module.exports = User = mongoose.model('User', userSchema);