import React from 'react';
import styled from 'styled-components';

const MonsterWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Monster = styled.img`
  background-color: transparent;
  width: ${
    (props) => {
      const { evo } = props;
      return 200 + (evo * 10);
    }
  }px;
  height: ${
    (props) => {
      const { evo } = props;
      return 200 + (evo * 10);
    }
  }px;
`

class Pet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      evo: 1,
    }
  }

  render() {
    const { evo } = this.state;
    return (
      <MonsterWrapper>
        <Monster src="../../images/cm.png" evo={evo} />
      </MonsterWrapper>
    );
  }
}

export default Pet;