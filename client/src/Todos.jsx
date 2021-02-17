import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import TodoFormat from './TodoFormat';

const TodoWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-left: 200px;
`

const TodoForm = styled.form`
  display: flex;
  margin-top: 20px;
`;

const Addtodo = styled.button`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  margin-left: 20px;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  font-size: 30px;
  background-color: #a0c6d4;
  color: #fff;
`

const Label = styled.div`
  display: flex;
  position: relative;
  font-size: 50px;
`
const TextBox = styled.input`
  height: 30px;
  width: 300px;
  font-size: 20px;
`

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    }
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentDidMount() {
    axios.get('/todos')
      .then((response) => {
        this.setState({
          todos: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  addTodo(event) {
    const { target } = event;
    const { todo } = target;
    const { value } = todo;
    axios.post('/todos', { task: value })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    axios.patch('/pet/602b60713fab9f58669af649')
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  deleteTodo(e) {
    const todoid = e.target.id;
    axios.delete(`/todos/${todoid}`)
      .then((response) => {
        console.log(response);
        console.log(this.props.levelUp)
        this.props.levelUp();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { todos } = this.state;
    return (
      <TodoWrapper>
        <Label>To-dos</Label>
          {todos.map((todo) => <TodoFormat todo={todo} deleteTodo={this.deleteTodo} />)}
        <TodoForm onSubmit={this.addTodo}>
          <TextBox type="text" name="todo" />
          <Addtodo type="submit">+</Addtodo>
        </TodoForm>
      </TodoWrapper>
    )
  }
}
export default Todos;