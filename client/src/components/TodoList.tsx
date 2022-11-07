import styled from 'styled-components';
import Task from './Task';

const Container = styled.div`
  min-width: 50vw;
  width: auto;
  max-width: 70vw;
  min-height: 70vh;
  max-height: 80vh;
  background: var(--bg);
  background: linear-gradient(
    270deg,
    var(--col2) 0%,
    var(--col1) 35%,
    var(--col2) 100%
  );
  border-radius: 10px;
  border: 1px solid var(--peach);
  color: var(--font);
  padding: 1rem;
  padding-top: 2rem;
  overflow: hidden;

  span {
    font-size: 2rem;
    padding-left: 1rem;
  }

  p {
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    padding-left: 1rem;

    filter: brightness(80%);
  }

  .input-bar {
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }
  input {
    width: 88%;
    height: 5vh;
    border: 0.5px solid var(--peach);
    border-radius: 10px;
    background-color: transparent;
    color: var(--font);
    padding-left: 1rem;
    padding-right: 1rem;
    font-family: 'Courier New', Courier, monospace;
    &:focus {
      background-color: var(--bg);
      outline: 0px;
    }
  }
  .add-note {
    width: 10%;
    height: 5vh;
    border: 0.5px solid var(--peach);
    border-radius: 10px;
    background-color: transparent;
    color: var(--font);
    cursor: pointer;
    &:hover {
      background-color: var(--bg);
    }
  }

  .notepad {
    margin-top: 10px;
    width: 100%;
    border: 0.5px solid var(--peach);
    border-radius: 10px;
    overflow: scroll;
    padding: 1rem;
    /* height: 50vh; */
    max-height: 50vh;
  }
`;

export default function TodoList({ inputChange, addTask, tasks }) {
  return (
    <Container>
      <span>Welcome, Kacper!</span>
      <p>◊ Add your notes below!</p>
      <section className="input-bar">
        <input
          placeholder="Your note..."
          onChange={() => inputChange(event)}
        ></input>
        <button className="add-note" onClick={addTask}>
          +
        </button>
      </section>
      <section className="notepad">
        {tasks.map((task) =>
          task.taskText ? <Task key={task.id}>{task.taskText}</Task> : null,
        )}
      </section>
    </Container>
  );
}
