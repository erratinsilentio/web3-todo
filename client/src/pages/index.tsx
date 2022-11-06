import { useState } from 'react';
import styled from 'styled-components';
import TodoList from '@/components/TodoList';
import ToggleMode from '@/components/ToggleMode';
import { GlobalStyles } from '@/styles/GlobalStyles';
import TaskAbi from '../../../backend/build/contracts/TaskContract.json';
import { taskContractAdress } from '../utils/config';
import { ethers } from 'ethers';
import ConnectWallet from '@/components/ConnectWallet';

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
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentAccount, setCurrentAccount] = useState('');

  const toggleMode = () => setDark(!dark);

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log('◊ Metamask not detected');
        return;
      }

      let chainId = await ethereum.request({ method: 'eth_chainId' });
      console.log(`◊ connected to chain: ${chainId}`);

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      console.log(`◊ found account: ${accounts[0]}`);
      setIsUserLoggedIn(true);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllTasks = async () => {

  };

  const addTask = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <GlobalStyles dark={dark} />
      <MainStyles>
        <ToggleMode mode={dark} toggle={toggleMode} />
        {isUserLoggedIn ? (
          <TodoList />
        ) : (
          <ConnectWallet connect={connectWallet} />
        )}
      </MainStyles>
    </>
  );
};

export default Index;
