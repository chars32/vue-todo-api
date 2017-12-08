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
    type: String
  },
  description: {
    type: String
  },
  label: {
    type: String
  },
  date: {
    type: String
  },
  time: {
    type: String
  },
  completed: {
    type: Boolean
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
  title: 'Otra vez probando Moongose',
  description: 'Otra descripción cualquiera',
  label: 'Work',
  date: '2018-03-04',
  completed: false
})

otherNewTodo.save().then((doc) => {
  console.log('Save todo', doc);
}, (e) => {
  console.log('Unable to save todo', e);
});