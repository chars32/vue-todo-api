const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/moongose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    label: req.body.label,
    date: req.body.date,
    time: req.body.time
  });
  
  todo.save().then(doc => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e)
  })
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos/:id', (req, res) => {
  let id = req.params.id

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if(!todo) {
      return res.status(404).send();
    }
    res.send({todo})
  }).catch((e) => {res.status(400).send()});
});

app.put('/todos/:id', (req, res) => {
  let id = req.params.id

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  let body = _.pick(req.body, ['title', 'description', 'label', 'date', 'time', 'date', 'completed']);

  Todo.findById(id).then((todo) => {
    if(!todo) {
      return res.status(404).send();
    }

    todo.title = body.title;
    todo.description = body.description;
    todo.label = body.label;
    todo.date = body.date;
    todo.time = body.time;
    todo.completed = body.completed;

    todo.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e)
    })
  })

});

app.delete('/todos/:id', (req, res) => {
  let id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((doc) => {
    if(!doc) {
      return res.status(404).send(); 
    }

    res.send(doc)
  }).catch((e) => {res.status(400).send()});
})


app.listen(port, () => {
  console.log(`Started on port ${port}`);
})