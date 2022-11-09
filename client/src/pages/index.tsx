import { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoList from '@/components/TodoList';
import ToggleMode from '@/components/ToggleMode';
import { GlobalStyles } from '@/styles/GlobalStyles';
import TaskAbi from '../../../backend/artifacts/contracts/TaskContract.sol/TaskContract.json';
import { GOERLI_CHAINID, taskContractAdress } from '../utils/config';
import { ethers } from 'ethers';
import ConnectWallet from '@/components/ConnectWallet';
import WrongNetwork from '@/components/WrongNetwork';
import ErrorMessage from '@/utils/ErrorMessage';

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
  const [correctNetwork, setCorrectNetwork] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentAccount, setCurrentAccount] = useState('');
  const [myTasks, setMyTasks] = useState([]);
  const [myTasksImp, setMyTasksImp] = useState([]);
  const [myTasksUnImp, setMyTasksUnImp] = useState([]);
  const [input, setInput] = useState('');
  const [category, setCategory] = useState(0);

  const taskState = [myTasks, myTasksImp, myTasksUnImp];

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

      if (chainId !== GOERLI_CHAINID) {
        alert('ERROR! Seems you are not connected to Goerli Testnet :(');
        setCorrectNetwork(false);
        return;
      } else {
        setCorrectNetwork(true);
        console.log('◊ Welcome on Goerli Testnet!');
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      console.log(`◊ Your account: ${accounts[0]}`);
      setIsUserLoggedIn(true);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllTasks = async () => {
    try {
      console.log('◊ Updating tasks...');

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
        let imp = allTasks.filter((task) => task.isImportant);
        let unImp = allTasks.filter((task) => !task.isImportant);

        setMyTasks(allTasks);
        setMyTasksImp(imp);
        setMyTasksUnImp(unImp);

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

            /// RESET INPUT ///
            setInput('');

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

  const switchCategory = (category) => {
    setCategory(category);
  };

  return (
    <>
      <GlobalStyles dark={dark} />
      <MainStyles>
        <ToggleMode mode={dark} toggle={toggleMode} />

        {isUserLoggedIn ? (
          <TodoList
            taskState={taskState}
            inputChange={inputChange}
            addTask={addTask}
            toggleImportance={toggleImportance}
            makeDone={makeDone}
            category={category}
            switchCategory={switchCategory}
          />
        ) : (
          <ConnectWallet connect={connectWallet} />
        )}
      </MainStyles>
    </>
  );
};

export default Index;
