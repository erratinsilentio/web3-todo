<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://media.giphy.com/media/v0u7eU0nSmOJ0hGf6n/giphy.gif?cid=ecf05e47473qk08kk12osa92292ajksfnnjtja5ghfwf17nv&rid=giphy.gif&ct=g" alt="Project logo"></a>
</p>

<h3 align="center">WEB3 TODO APP</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
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

Clone repository on your computer:

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

- At the start of an application, you should see a connect button.

- If you are connected to Goerli Testnet, you will be able to connect your MetaMask wallet by clicking the button. There will be an error if you are on another network.

- After logging in with your wallet, you are able to add new notes. It will take about 15-20 second for the data to be updated.

- You also have the ability to switch notes important status, or simply delete them.

## ⛏️ Built Using <a name = "built_using"></a>

- [Next.js](https://nextjs.org) - Web Framework
- [Solidity](https://docs.soliditylang.org/en/v0.8.17/) - Smart Contracts
- [Hardhat](https://hardhat.org) - Ethereum Development Environment
- [Styled Components](https://styled-components.com) - Styling Framework

## ✍️ Authors <a name = "authors"></a>

- [@erratinsilentio](https://github.com/erratinsilentio) - Idea & Initial work

Project inspired by @Clever_Programmer <a href="https://youtu.be/awQTDVvYyjI>Youtube tutorial</a>

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Obviusly to Clever_Programmer, for making a great tutorial, and other people giving out fantastic Web3 content for free!
- For anyone checking out my project!
- And thanks to my girlfriend, for being patient with me sitting in front of the screen for probably too long sometimes:)
