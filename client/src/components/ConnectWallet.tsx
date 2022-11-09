import styled from 'styled-components';

const Container = styled.div`
  background-color: var(--bg);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  button {
    background-color: var(--bg);
    width: 200px;
    height: 50px;
    color: var(--font);
    border: 1px solid var(--peach);
    border-radius: 10px;
    cursor: pointer;
    transition-duration: 0.3s;
    &:hover {
      filter: brightness(120%);
      width: 220px;
      height: 60px;
      color: var(--peach);
      font-size: 1rem;
    }
  }
`;

export default function ConnectWallet({ connect }) {
  return (
    <Container>
      <button onClick={connect}>CONNECT</button>
    </Container>
  );
}
