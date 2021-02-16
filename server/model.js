const { response } = require('express');
const models = require('../database/model')
const { Todo } = models;

const getTodos = (callback) => {
  models.Todos.find({})
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err);
    });
};

const postTodo = (task, callback) => {
 const todo = {
   task,
 }
  models.Todos.create(todo)
    .then((response) => {
      callback(null, response);
    })
    .then((err) => {
      callback(err);
    })
    .catch((err) => {
      console.log(err);
    });
};

const removeTodo = (id, callback) => {
  models.Todos.remove({_id: id.id})
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err);
    });
}

const getPet = (id, callback) => {
  models.Pets.findById({_id: id.id})
  .then((response) => {
    callback(null, response);
  })
  .catch((err) => callback(err));
}

const createPet = (pet, callback) => {
  models.Pets.create(pet)
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err);
    });
};

const levelUp = (id, callback) => {
  models.Pets.findByIdAndUpdate({_id: id.id }, { $inc: { evolution: 1 }})
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err);
    });
}

module.exports = {
  getTodos, postTodo, getPet, createPet, levelUp, removeTodo,
}