const mongoose = require('mongoose');

const bookSchema = mongoose.Schema(
{
   title: {
    type: String, 
    required: true,
   },
   author: {
    type: String, 
    required: true,
   },
   publishYear: {
    type: Number,
    required: true,
   },
   description: {
    type: String,
   },
   availability: {
    type: String, 
    required: true,
   }
},
{
    timestamps: true,
}
);

module.exports = mongoose.model('Book', bookSchema);