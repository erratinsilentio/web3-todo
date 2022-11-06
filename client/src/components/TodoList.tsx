import styled from 'styled-components';

const Container = styled.div`
  width: 50vw;
  height: 50vh;
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
`;

export default function TodoList() {
  return (
    <Container>
      <p>hello</p>
    </Container>
  );
}
