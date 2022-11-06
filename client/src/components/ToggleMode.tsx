import { CiDark, CiLight } from 'react-icons/ci';
import styled from 'styled-components';

const ToggleButton = styled.div`
  width: 5vw;
  height: 5vw;
  color: white;
  position: fixed;
  top: 3%;
  right: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ToggleMode({ mode, toggle }) {
  return (
    <ToggleButton onClick={toggle}>
      {mode ? <CiLight /> : <CiDark />}
    </ToggleButton>
  );
}
