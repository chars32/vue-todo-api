const mongoose = require('mongoose');

// Declaramos el modelo
const Todo = mongoose.model('Todo', {
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  description: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  label: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  date: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  time: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = {Todo}