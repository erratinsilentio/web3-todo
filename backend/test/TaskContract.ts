const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Task Contract", function () {
  it("Should have one task", async function () {
    const [owner] = await ethers.getSigners();

    const TaskContract = await ethers.getContractFactory("TaskContract");

    const Tasks = await TaskContract.deploy();

    const some = await Tasks.addTask("numero uno");

    const taskArray = await Tasks.getMyTasks();

    expect(await taskArray.length).to.equal(1);
  });
});

describe("Task Contract", function () {
  it("Should be empty", async function () {
    const [owner] = await ethers.getSigners();

    const TaskContract = await ethers.getContractFactory("TaskContract");

    const Tasks = await TaskContract.deploy();

    const some = await Tasks.addTask("numero uno");
    const some_two = await Tasks.addTask("numero dos");
    const some_three = await Tasks.addTask("numero tres");

    const clear = await Tasks.clearTasks();
    const taskArray = await Tasks.getMyTasks();

    expect(await taskArray.length).to.equal(0);
  });
});

describe("Task Contract", function () {
  it("TaskText should be equal", async function () {
    const [owner] = await ethers.getSigners();

    const TaskContract = await ethers.getContractFactory("TaskContract");

    const Tasks = await TaskContract.deploy();

    const some = await Tasks.addTask("numero uno");
    const some_two = await Tasks.addTask("numero dos");
    const some_three = await Tasks.addTask("numero tres");

    const taskArray = await Tasks.getMyTasks();

    expect(await taskArray[2].taskText).to.equal("numero tres");
  });
});
