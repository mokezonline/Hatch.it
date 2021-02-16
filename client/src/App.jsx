import React from 'react';
import Register from './Register.jsx';
import Pet from './Pet.jsx';
import Todos from './Todos.jsx';
import axios from 'axios';
import styled from 'styled-components';
import { getPet } from '../../server/model.js';

const AppWrapper = styled.div`
  background-color: #e2cca8;
  height: 100%;
  width: 100%;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPet: null,
      evo: 0,
    }
    this.levelUp = this.levelUp.bind(this);
    this.getPet = this.getPet.bind(this);
  }

  componentDidMount() {
    this.getPet();
  }

  getPet() {
    axios.get('/pet/602b60713fab9f58669af649')
      .then((pet) => {
        const currentPet = pet.data;
        this.setState({
          currentPet,
          evo: currentPet.evolution,
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  levelUp() {
    axios.patch('/pet/602b60713fab9f58669af649')
    .then((response) => {
      this.getPet();
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    const { currentPet, evo } = this.state;
    return (
      <AppWrapper>
        <Pet currentPet={currentPet} evo={evo} />
        <Todos />
      </AppWrapper>
    );
  }
}

export default App;