// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "hardhat/console.sol";


contract TaskContract {
  event AddTask(address recipient, uint taskId);
  event DeleteTask(uint taskId);
  event ToggleDone(uint taskId, bool isDone);
  event MakeImportant(uint taskId, bool isImportant);
  event MakeUnImportant(uint taskId, bool isImportant);


  struct Task {
    uint id;
    string taskText;
    bool isImportant;
    bool isDone;
    bool isDeleted;
  }

  Task[] private tasks;

  mapping(uint256 => address) taskToOwner;

  function addTask(string memory taskText) external {
    uint taskId = tasks.length;
    tasks.push(Task(taskId, taskText, false, false, false));
    taskToOwner[taskId] = msg.sender;
    emit AddTask(msg.sender, taskId);
  }

  function getMyTasks() external view returns(Task[] memory){
    Task[] memory temporary = new Task[] (tasks.length);
    uint counter = 0;

    for(uint i=0; i<tasks.length; i++) {
      if(taskToOwner[i] == msg.sender && tasks[i].isDone == false) {
        temporary[counter] = tasks[i];
        counter++;
      }
    }

    Task[] memory result = new Task[](counter);
    for (uint i=0; i<counter; i++){
      result[i] = temporary[i];
    }
    console.log("Array length is %s", result.length);
    return result;
  }

  function toggleDone(uint taskId, bool isDone) external {
    if(taskToOwner[taskId]==msg.sender){
      tasks[taskId].isDone = isDone;
      emit ToggleDone(taskId, isDone);
    }
  }

    function makeImportant(uint taskId, bool isImportant) external {
    if(taskToOwner[taskId]==msg.sender){
      tasks[taskId].isImportant = isImportant;
      emit MakeImportant(taskId, isImportant);
    }
  }

    function makeUnImportant(uint taskId, bool isImportant) external {
    if(taskToOwner[taskId]==msg.sender){
      tasks[taskId].isImportant = isImportant;
      emit MakeUnImportant(taskId, isImportant);
    }
  }

  function deleteTask(uint taskId) external {
    if(taskToOwner[taskId]==msg.sender){
          tasks[taskId].isDeleted = true;
          emit DeleteTask(taskId);
        }
  }

  function clearTasks() external {
    delete tasks;
  }
}
