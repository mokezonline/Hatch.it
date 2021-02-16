import React from 'react';
import Register from './Register.jsx';
import Pet from './Pet.jsx';
import Todos from './Todos.jsx';
import axios from 'axios';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPet: null,
    }
  }

  componentDidMount() {
    axios.get('/pets/1')
      .then((pet) => {
        this.setState({
          currentPet: pet.data
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Pet />
        <Todos />
      </div>
    );
  }
}

export default App;