import { text } from "express";
import mongoose from "mongoose";

const domesticSchema = mongoose.Schema (
    {
       weight:{
        type:Number,
        required:true,
       },
       price:{
        type:Number,
        required:true
       },
       sendername:{
        type:String,
        required:true
       },
       sendernumber:{
        type:String,
        required:true
       },
       senderaddress:{
        type:String,
        required:true
       },
       receivername:{
        type:String,
        required:true
       },
       receivernumber:{
        type:String,
        required:true
       },
       receiveraddress:{
        type:String,
        required:true
       },  createdAt: {
        type: Date,
        default: Date.now,
      },

})

export const Domestic = mongoose.model('Domestic', domesticSchema);

const Internationalschema = mongoose.Schema({
    weight:{
        type:Number,
        required:true,
       },
       price:{
        type:Number,
        required:true
       },
       sendername:{
        type:String,
        required:true
       },
       sendernumber:{
        type:String,
        required:true
       },
       senderaddress:{
        type:String,
        required:true
       },
       receivername:{
        type:String,
        required:true
       },
       receivernumber:{
        type:String,
        required:true
       },
       receiveraddress:{
        type:String,
        required:true
       },
})

export const International = mongoose.model('International', Internationalschema ); 

const Adminschema = mongoose.Schema({
    password:{
        type:String,
        required:true,
       },
       email:{
        type:String,
        required:true
       },
    
})

export const Admin = mongoose.model('Admin', Adminschema ); 

const Contactschema = mongoose.Schema({
    name:{
        type:String,
        required:true,
       },
       email:{
        type:String,
        required:true
       },
       message:{
        type:String,
        required:true
       },
    
})

export const Contacts = mongoose.model('message', Contactschema ); 