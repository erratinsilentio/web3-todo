import styled from 'styled-components';
import {
  MdOutlineNotificationImportant,
  MdNotificationImportant,
  MdNotInterested,
} from 'react-icons/md';
import { useState } from 'react';

const Container = styled.div`
  width: 100%;
  height: 5vh;
  color: var(--font);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1rem;

  .task {
    width: 80%;
    height: 5vh;
    line-height: 5vh;
    border-bottom: 0.5px solid var(--peach);
    padding-left: 1rem;
    padding-right: 1rem;
    overflow: hidden;
  }

  .btn {
    height: 5vh;
    width: 5vh;
    color: var(--peach);
    &:hover {
      filter: brightness(80%);
    }
  }

  .done {
    text-decoration: line-through;
  }
`;

export default function Task({ task, children, toggleImportance, makeDone }) {
  const [done, setDone] = useState(false);
  return (
    <Container>
      <div
        className={done ? 'task done' : 'task'}
        onClick={() => setDone(!done)}
      >
        {children}
      </div>
      {task.isImportant ? (
        <MdNotificationImportant
          onClick={() => toggleImportance(task)}
          className="btn"
        />
      ) : (
        <MdOutlineNotificationImportant
          onClick={() => toggleImportance(task)}
          className="btn"
        />
      )}
      <MdNotInterested
        onClick={() => {
          makeDone(task);
        }}
        className="btn"
      />
    </Container>
  );
}
