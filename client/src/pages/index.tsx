import { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoList from '@/components/TodoList';
import ToggleMode from '@/components/ToggleMode';
import { GlobalStyles } from '@/styles/GlobalStyles';
import TaskAbi from '../../../backend/artifacts/contracts/TaskContract.sol/TaskContract.json';
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
  const [myTasks, setMyTasks] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    connectWallet();
    getAllTasks();
  }, []);

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
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const TaskContract = new ethers.Contract(
          taskContractAdress,
          TaskAbi.abi,
          signer,
        );

        let allTasks = await TaskContract.getMyTasks();
        setMyTasks(allTasks);
        console.log('tasks:', allTasks);
      } else {
        console.log('◊ ERROR! Ethereum object does not exist!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();

    let task = input;

    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const TaskContract = new ethers.Contract(
          taskContractAdress,
          TaskAbi.abi,
          signer,
        );

        TaskContract.addTask(task)
          .then((res) => {
            /// UPDATE OUR STATE ///
            setMyTasks(myTasks.concat(task));
            console.log('◊ New task added!');

            /// REFETCH ALL TASKS AND TRIGGER DATA REFRESH ///
            TaskContract.on('AddTask', getAllTasks);
          })
          .catch((err) => console.log(err));
      } else {
        console.log('◊ ERROR! Ethereum object does not exist.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const toggleImportance = async (task) => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const TaskContract = new ethers.Contract(
          taskContractAdress,
          TaskAbi.abi,
          signer,
        );

        console.log('task received');

        if (task.isImportant) {
          await TaskContract.makeUnImportant(task.id, false);
          console.log('◊ Task status switched to unimportant');
        } else {
          await TaskContract.makeImportant(task.id, true);
          console.log('◊ Task status switched to important');
        }

        TaskContract.on('MakeImportant', getAllTasks);
        TaskContract.on('MakeUnImportant', getAllTasks);
      }

      await getAllTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const makeDone = async (task) => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const TaskContract = new ethers.Contract(
          taskContractAdress,
          TaskAbi.abi,
          signer,
        );

        TaskContract.toggleDone(task.id, true);
        TaskContract.on('ToggleDone', getAllTasks);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <GlobalStyles dark={dark} />
      <MainStyles>
        <ToggleMode mode={dark} toggle={toggleMode} />
        {isUserLoggedIn ? (
          <TodoList
            tasks={myTasks}
            inputChange={inputChange}
            addTask={addTask}
            toggleImportance={toggleImportance}
            makeDone={makeDone}
          />
        ) : (
          <ConnectWallet connect={connectWallet} />
        )}
      </MainStyles>
    </>
  );
};

export default Index;
