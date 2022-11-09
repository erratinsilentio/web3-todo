import styled from 'styled-components';

const Container = styled.div`
  width: 20vw;
  height: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: white;
`;

export default function ErrorMessage(error: string) {
  return <Container>{error}</Container>;
}
