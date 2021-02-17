import React from 'react';
import styled from 'styled-components';

const Todo = styled.div`
  display: flex;
  position: relative;
  font-size: 30px;
  cursor: pointer;
`

const TodoFormat = ({ todo, deleteTodo }) => {
  const { task, _id } = todo;
  return (
    <Todo onClick={deleteTodo} id={_id}>
      {task}
    </Todo>
  );
};

export default TodoFormat;