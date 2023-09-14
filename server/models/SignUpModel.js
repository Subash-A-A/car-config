const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const signuptemplate = mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})


signuptemplate.pre('save',async function(next){
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password,salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        console.log(error);
        next(error);
    }    
})

module.exports = mongoose.model('carConfig',signuptemplate,'userDetails')