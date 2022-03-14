const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userSchema = new Schema({
    name:{
        type: String,
        trim: true,
        required: [true, 'El Nombre es requerido']
    },
    bet:{
        type: Number,
        trim: true,
    }
});

module.exports = User = mongoose.model('User', userSchema);