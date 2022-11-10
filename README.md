<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">WEB3 TODO APP</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Next.js | TypeScript | Styled Components | Solidity | Hardhat
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Testing](#tests)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

This is a small fun project to get myself immersed in Smart Contracts and Web3 programming. The blockchain side is developed in Solidity, whereas for the frontend I chose Next.js. I definitely plan on polishing it, and expanding with new functionality I learn on the way!

## 🏁 Getting Started <a name = "getting_started"></a>

Instructions below will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need a working computer, IDE like VSCode, and internet connection:)

### Installing

A step by step series of examples that tell you how to get a development env running.

Say what the step will be

```
git clone https://github.com/erratinsilentio/web3-todo.git
```

After it is cloned, go to your projects repository.
You will see two folders, backend and client. In each of these you will need to install dependencies:

```
npm install
```

To run the application localy, open your client repository and type:

```
npm run dev
```

Backend is deployed on Goerli Testnet, and should be already connected to the frontend.

## 🔧 Running the tests <a name = "tests"></a>

Testing is pretty basic, but I definitely plan on expanding it with Waffle testing framework. You can see few tests written in ./backend/tests.ts
To run the tests, type this in your terminal:

```
npx hardhat test
```

If tests do not run properly, make sure you have all the dependencies installed on the backend.

## 🎈 Usage <a name="usage"></a>

At the start of an application, you should see a connect button. If you are connected to Goerli Testnet, you can connect your MetaMask wallet by clicking the button. The will be an error if you are on another network. After logging in with your wallet, you are able to add new notes. It will take about 15-20 second for the data to be updated. You also have the ability to switch notes important status, or simply delete them.

## ⛏️ Built Using <a name = "built_using"></a>

- [Next.js](https://nextjs.org) - Web Framework
- [Solidity](https://docs.soliditylang.org/en/v0.8.17/) - Smart Contracts
- [Hardhat](https://hardhat.org) - Ethereum Development Environment
- [Styled Components](https://styled-components.com) - Styling Framework

## ✍️ Authors <a name = "authors"></a>

- [@erratinsilentio](https://github.com/erratinsilentio) - Idea & Initial work

Project inspired by @Clever Programmer Youtube tutorial:
https://youtu.be/awQTDVvYyjI

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References
