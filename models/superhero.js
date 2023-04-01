const mongoose = require('mongoose')


const Hero = new mongoose.Schema(
    {
        Superhero:{
            type:String,
            required:[true,'Please name the hero'],
            unique:true,
            trim:true
        },
        Realname:{
            type:String,
            Required:true,
            maxlength:[200,'Please keep real name short']
        }
    }
)
module.exports =  mongoose.model('superhero', Hero)