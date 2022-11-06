import { useState } from 'react';
import styled from 'styled-components';

import TodoList from '@/components/TodoList';
import ToggleMode from '@/components/ToggleMode';
import { GlobalStyles } from '@/styles/GlobalStyles';

const MainStyles = styled.div`
  background-color: var(--bg);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Index = () => {
  const [dark, setDark] = useState(true);

  const toggleMode = () => setDark(!dark);

  return (
    <>
      <GlobalStyles dark={dark} />
      <MainStyles>
        <ToggleMode mode={dark} toggle={toggleMode} />
        <TodoList />
      </MainStyles>
    </>
  );
};

export default Index;
