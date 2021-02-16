import React from 'react';
import styled from 'styled-components';

const Todo = styled.div`
  display: flex;
  position: relative;
`

const TodoFormat = ({ todo }) => {
  const { task } = todo;
  return (
    <Todo>
      {task}
    </Todo>
  );
};

export default TodoFormat;