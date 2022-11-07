import styled from 'styled-components';
import Task from './Task';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  outline: 1px solid white;
`;

export default function Tasks({ tasks }) {
  return (
    <Container>
      <Task>hello</Task>
    </Container>
  );
}
