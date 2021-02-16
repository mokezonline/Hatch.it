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
    })
};

const getPet = (_id, callback) => {
  models.Pet.findById(_id)
  .then((response) => {
    callback(response);
  })
  .catch((err) => callback(err));
}

const createPet = (pet, callback) => {
  models.Pet.create(pet)
    .then((response) => {
      callback(response);
    })
    .catch((err) => {
      callback(err);
    });
};

module.exports = {
  getTodos, postTodo, getPet, createPet,
}