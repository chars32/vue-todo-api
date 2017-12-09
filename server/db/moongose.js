const mongoose = require('mongoose');

// Debido a que mongoose todavia funciona con callbacks hacemos
// este hack para poder utilizar promesas.
mongoose.Promise = global.Promise;

// Conectamos a la bd con Heroku ó mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/MyTodoApp', {
  useMongoClient: true
});

module.exports = {mongoose}