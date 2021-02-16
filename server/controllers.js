const { models } = require('mongoose');
const model = require('./model');

const getTodos = (req, res) => {
  model.getTodos((err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};

const postTodo = (req, res) => {
  const { body } = req;
  const { task } = body;
  console.log(task);
  model.postTodo(task, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(result);
    }
  });
};

const getPet = (req, res) => {
  const { params } = req;
  const _id = params;
  model.getPet(_id, (err, response) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(response);
    }
  })
};

const createPet = (req, res) => {
  const { body } = req;
  const { name, species } = body;
  console.log(name);
  const pet = { name, species, evolution: 0, happiness: 100 };
  console.log(pet);
  model.createPet(pet, (err, response) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(response);
    }
  });
}

module.exports = {
  getTodos, postTodo, getPet, createPet,
};