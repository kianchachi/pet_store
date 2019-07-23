const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");


const PetSchema = new mongoose.Schema({
 
  name:  { type: String, required: [true, "name must be provided."], minlength: [3, "Name must be at least 3 characters long."], unique:true}, 
  type:  { type: String, required: [true, "type must be provided."], minlength: [3, "Name must be at least 3 characters long."]}, 
  description:  { type: String, required: [true, "description  must be provided."], minlength: [3, "Name must be at least 3 characters long."]}, 
  skill_one:  { type: String}, 
  skill_two:  { type: String}, 
  skill_three:  { type: String},
  like: { type: Number}

  }, 
  {timestamps: true});

  PetSchema.plugin(uniqueValidator, {message: 'error, Name is already taken'});


mongoose.model('Pet', PetSchema); 