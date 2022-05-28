import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    name: String,
    age: String,
   pass: String,
   email:String,
  });
  module.exports =mongoose.model('all', Schema);