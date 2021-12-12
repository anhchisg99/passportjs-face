const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const findOrCreate = require('mongoose-findorcreate')
const userSchema = mongoose.Schema({
    
    username:String,
    password:{
        type:String,
        require:true
    },
    facebookId:String 
    
})
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);
module.exports = mongoose.model('User',userSchema)
