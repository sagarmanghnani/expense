import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const Userschema = new Schema({
    firstName:{type:String, required:true},
    userName: {type:String, required:true},
    email:{type:String, required:true},
    phone:{type:String, required:true},
    createdDate:{type:Date, default:Date.now()},
    modifiedDate:{type:Date, default:Date.now()},
    isDeleted:{type: Boolean, default: false}
});

export default mongoose.model('User', Userschema);