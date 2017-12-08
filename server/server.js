const mongoose = require('mongoose');

// Debido a que mongoose todavia funciona con callbacks hacemos
// este hack para poder utilizar promesas.
mongoose.Promise = global.Promise;

// Conectamos a la bd con mongoose
mongoose.connect('mongodb://localhost:27017/MyTodoApp', {
  useMongoClient: true
});

// Declaramos el modelo
var Todo = mongoose.model('Todo', {
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

// Seteamos un nuevo Todo
// var newTodo = new Todo({
//   title: 'Probando Moongose',
//   description: 'Una descripción cualquiera',
//   label: 'Work',
//   date: '2018-03-04',
//   completed: false
// })

// Guardamos el nuevo Todo
// newTodo.save().then((doc) => {
//   console.log('Save todo', doc);
// }, (e) => {
//   console.log('Unable to save todo', e);
// });

var otherNewTodo = new Todo({
  title: '    Probando los espacios y el completed default false   ',
  description: 'Se debe de guardar',
  label: 'Hobby',
  date: '2018-03-04',
  time: '08:30 pm'
})

otherNewTodo.save().then((doc) => {
  console.log('Save todo', doc);
}, (e) => {
  console.log('Unable to save todo', e);
});